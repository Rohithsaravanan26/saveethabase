
import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    let fileUrl = searchParams.get('url');
    let filename = searchParams.get('filename') || 'download.pdf';

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
    }

    try {
        fileUrl = fileUrl.trim();
        filename = filename.trim().replace(/[/\\?%*:|"<>]/g, '-');

        let publicId = '';
        let resourceType = 'image';

        if (fileUrl.includes('cloudinary.com')) {
            const urlParts = new URL(fileUrl).pathname.split('/');
            const uploadIndex = urlParts.indexOf('upload');
            if (uploadIndex !== -1) {
                resourceType = urlParts[uploadIndex - 1] || 'image';
                let startIndex = uploadIndex + 1;
                if (urlParts[startIndex] && urlParts[startIndex].startsWith('v')) {
                    startIndex++;
                }
                const pathParts = urlParts.slice(startIndex);
                const fullPath = pathParts.join('/');

                if (resourceType === 'raw') {
                    publicId = fullPath;
                } else {
                    publicId = fullPath.substring(0, fullPath.lastIndexOf('.')) || fullPath;
                }
            }
        }

        if (publicId) {
            console.log(`[Proxy] Rescue Operation: ${publicId} (${resourceType})`);

            // STEP 1: Attempt Programmatic Unblock (Admin API)
            // This forces Cloudinary to re-evaluate the asset and hopefully unblock its delivery.
            let unblocked = false;
            try {
                // Setting access_control to 'public' removes 'Blocked' restrictions
                await cloudinary.api.update_resources_access_control('public', [publicId], {
                    resource_type: resourceType
                });
                unblocked = true;
                console.log(`[Proxy] Unblock triggered for: ${publicId}`);
            } catch (unblockErr) {
                console.warn(`[Proxy] Unblock failed:`, unblockErr.message);
            }

            // STEP 2: Generate Signed Deliverable Link
            // Regardless of unblock status, we sign it. If unblocked, this is high-speed CDN.
            const signedUrl = cloudinary.url(publicId, {
                resource_type: resourceType,
                sign_url: true,
                secure: true,
                flags: 'attachment',
                attachment: filename,
            });

            // STEP 3: SMART DELIVERY (Stream vs Redirect)
            // If the file is small (< 4MB) or unblocking failed, streaming is safer.
            // But streaming hits Vercel's 4.5MB limit.
            // For reliable large-scale delivery, a REDIRECT to a signed CDN URL is the gold standard.

            console.log(`[Proxy] Redirecting to Authenticated CDN: ${signedUrl}`);
            return NextResponse.redirect(signedUrl);
        }

        return NextResponse.redirect(fileUrl);

    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.redirect(fileUrl);
    }
}

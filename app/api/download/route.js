
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

        // Extract Public ID and Resource Type correctly
        // URL format: https://res.cloudinary.com/[cloud_name]/[resource_type]/upload/v[version]/[public_id].[ext]
        let publicId = '';
        let resourceType = 'image'; // default

        if (fileUrl.includes('cloudinary.com')) {
            const urlParts = new URL(fileUrl).pathname.split('/');
            // urlParts like ["", "dyi9xti0t", "image", "upload", "v1234", "folder", "id.pdf"]

            const uploadIndex = urlParts.indexOf('upload');
            if (uploadIndex !== -1) {
                // Resource type is usually just before 'upload'
                resourceType = urlParts[uploadIndex - 1] || 'image';

                let startIndex = uploadIndex + 1;
                // Skip version
                if (urlParts[startIndex] && urlParts[startIndex].startsWith('v')) {
                    startIndex++;
                }

                const pathParts = urlParts.slice(startIndex);
                // Join parts back for publicId
                const fullPath = pathParts.join('/');

                // For images/videos, Cloudinary signs without the extension
                // For 'raw', it signs with the extension
                if (resourceType === 'raw') {
                    publicId = fullPath;
                } else {
                    publicId = fullPath.substring(0, fullPath.lastIndexOf('.')) || fullPath;
                }
            }
        }

        if (publicId) {
            console.log(`[Proxy] Signing ${resourceType} redirect for: ${publicId}`);

            // Generate signed URL with attachment flag
            const signedUrl = cloudinary.url(publicId, {
                resource_type: resourceType,
                sign_url: true,
                secure: true,
                flags: 'attachment',
                attachment: filename,
            });

            return NextResponse.redirect(signedUrl);
        }

        // Fallback: If parsing fails, use the original URL but this might hit 401/4.5MB limit
        return NextResponse.redirect(fileUrl);

    } catch (error) {
        console.error('Download Proxy Error:', error);
        // Fallback to original URL even on error
        return NextResponse.redirect(fileUrl);
    }
}

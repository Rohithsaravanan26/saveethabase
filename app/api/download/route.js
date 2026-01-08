
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

        // THE ULTIMATE FIX FOR 404:
        // Detection logic must match how Cloudinary stores the file.
        let publicId = '';
        let resourceType = 'image'; // Default for PDFs in Cloudinary

        if (fileUrl.includes('cloudinary.com')) {
            const parts = fileUrl.split('/');

            // 1. Detect Resource Type
            if (parts.includes('raw')) resourceType = 'raw';
            else if (parts.includes('video')) resourceType = 'video';
            else resourceType = 'image';

            // 2. Extract Public ID
            const uploadIndex = parts.indexOf('upload');
            if (uploadIndex !== -1) {
                let startIndex = uploadIndex + 1;
                // Skip versioning v123456789
                if (parts[startIndex] && parts[startIndex].startsWith('v') && !isNaN(parts[startIndex].substring(1))) {
                    startIndex++;
                }
                const pathParts = parts.slice(startIndex);
                // For 'raw' files, we keep the extension in publicId. 
                // For 'image' (PDFs/Images), we strip it.
                if (resourceType === 'raw') {
                    publicId = pathParts.join('/');
                } else {
                    publicId = pathParts.join('/').replace(/\.[^/.]+$/, "");
                }
            }
        }

        if (publicId) {
            console.log(`[Proxy] Redirecting to Signed ${resourceType}: ${publicId}`);

            // Simplified signing to avoid 404/Signature Mismatch
            const signedUrl = cloudinary.url(publicId, {
                resource_type: resourceType,
                sign_url: true,
                secure: true,
                flags: 'attachment',
                attachment: filename
            });

            return NextResponse.redirect(signedUrl);
        }

        // Final Fallback
        const response = await fetch(fileUrl);
        const headers = new Headers();
        headers.set('Content-Disposition', `attachment; filename="${filename}"`);
        headers.set('Content-Type', 'application/octet-stream');
        return new NextResponse(response.body, { headers });

    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.json({ error: 'Download failed', details: error.message }, { status: 500 });
    }
}

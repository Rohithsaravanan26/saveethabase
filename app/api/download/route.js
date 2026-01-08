
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
        // Clean inputs
        fileUrl = fileUrl.trim();
        filename = filename.trim().replace(/[/\\?%*:|"<>]/g, '-');

        // Extract public ID from the Cloudinary URL
        // Example: https://res.cloudinary.com/cloudname/image/upload/v1234/folder/publicid.pdf
        let publicId = '';
        if (fileUrl.includes('cloudinary.com')) {
            const parts = fileUrl.split('/');
            const uploadIndex = parts.indexOf('upload');
            if (uploadIndex !== -1) {
                let startIndex = uploadIndex + 1;
                // Skip version string if present
                if (parts[startIndex] && parts[startIndex].startsWith('v') && !isNaN(parts[startIndex].substring(1))) {
                    startIndex++;
                }
                const pathParts = parts.slice(startIndex);
                // Remove file extension from the last part to get the public ID
                publicId = pathParts.join('/').replace(/\.[^/.]+$/, "");
            }
        }

        if (publicId) {
            console.log(`[Proxy] Generating Signed Redirect for: ${publicId}`);

            // THE ULTIMATE SOLUTION: Generate a signed URL that bypasses all proxy limits and 401s
            const signedUrl = cloudinary.url(publicId, {
                resource_type: 'raw', // Use 'raw' for PDFs and Docs to be safe
                sign_url: true,
                flags: 'attachment',
                attachment: filename,
                secure: true
            });

            return NextResponse.redirect(signedUrl);
        }

        // Fallback: Standard fetch if for some reason we couldn't parse the public ID
        const response = await fetch(fileUrl, {
            redirect: 'follow',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Cloudinary responded with ${response.status}`);
        }

        const newHeaders = new Headers();
        const encodedFilename = encodeURIComponent(filename).replace(/['()'*]/g, escape);
        newHeaders.set('Content-Disposition', `attachment; filename="${filename.replace(/"/g, '')}"; filename*=UTF-8''${encodedFilename}`);
        newHeaders.set('Content-Type', 'application/octet-stream');
        newHeaders.set('Cache-Control', 'no-cache');

        return new NextResponse(response.body, {
            status: 200,
            headers: newHeaders,
        });

    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.json({ error: 'Download failed', details: error.message }, { status: 500 });
    }
}

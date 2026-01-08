
import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

/**
 * FORCED STREAMING DOWNLOAD MODEL
 * This API bypasses Cloudinary's CDN delivery restrictions by:
 * 1. Generating a signed URL for the asset.
 * 2. Fetching the asset contents on the server-side.
 * 3. Piping the binary stream directly to the client.
 */
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

        // Extract Cloudinary public ID and resource type
        let publicId = '';
        let resourceType = 'raw'; // Default to raw for PDFs/Docs

        if (fileUrl.includes('cloudinary.com')) {
            try {
                const urlObj = new URL(fileUrl);
                const pathParts = urlObj.pathname.split('/').filter(p => p);
                const uploadIndex = pathParts.indexOf('upload');

                if (uploadIndex !== -1 && uploadIndex > 0) {
                    resourceType = pathParts[uploadIndex - 1] || 'raw';
                    // Skip transformations and versions
                    let startIndex = uploadIndex + 1;
                    while (startIndex < pathParts.length) {
                        const part = pathParts[startIndex];
                        if ((part.startsWith('s--') && part.endsWith('--')) ||
                            part.startsWith('fl_') ||
                            (part.startsWith('v') && /^v\d+$/.test(part))) {
                            startIndex++;
                            continue;
                        }
                        break;
                    }

                    const fullPath = pathParts.slice(startIndex).join('/');
                    if (resourceType === 'raw') {
                        publicId = fullPath;
                    } else {
                        const lastDotIndex = fullPath.lastIndexOf('.');
                        publicId = lastDotIndex !== -1 ? fullPath.substring(0, lastDotIndex) : fullPath;
                    }
                }
            } catch (e) {
                console.warn('[Download] URL parsing failed, using direct URL:', e.message);
            }
        }

        // Generate the most authoritative signed URL possible for the server to fetch
        let fetchUrl = fileUrl;
        if (publicId) {
            fetchUrl = cloudinary.url(publicId, {
                resource_type: resourceType,
                sign_url: true,
                secure: true
            });
        }

        console.log(`[Download] Forcing server-side stream for: ${publicId || fileUrl}`);

        // --- THE WORKING MODEL: Server-side Fetch & Stream ---
        const response = await fetch(fetchUrl);

        if (!response.ok) {
            console.error(`[Download] Fetch failed with status ${response.status}: ${response.statusText}`);
            // If the signed one fails, try one last time with the raw URL provided
            if (fetchUrl !== fileUrl) {
                const retryResponse = await fetch(fileUrl);
                if (retryResponse.ok) return pipeResponse(retryResponse, filename);
            }
            throw new Error(`Cloudinary returned ${response.status}: ${response.statusText}`);
        }

        return await pipeResponse(response, filename);

    } catch (error) {
        console.error('Download API Error:', error);
        return NextResponse.json({
            error: 'Download failed',
            message: error.message || 'An unexpected error occurred'
        }, { status: 500 });
    }
}

/**
 * Utility to pipe fetch response to NextResponse
 */
async function pipeResponse(response, filename) {
    const blob = await response.blob();
    const contentType = response.headers.get('Content-Type') || 'application/octet-stream';

    console.log(`[Download] Streaming ${blob.size} bytes as ${contentType}`);

    return new NextResponse(blob, {
        headers: {
            'Content-Type': contentType,
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Cache-Control': 'no-cache',
        }
    });
}

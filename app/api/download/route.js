
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get('url');
    let filename = searchParams.get('filename') || 'download.pdf';

    // Clean filename of any problematic characters
    filename = filename.replace(/[/\\?%*:|"<>]/g, '-');

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
    }

    try {
        const response = await fetch(fileUrl, {
            redirect: 'follow',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Cloudinary responded with ${response.status}: ${response.statusText}`);
        }

        const newHeaders = new Headers();

        // Use double-quotes and escape them for the filename to be safe
        const safeFilename = encodeURIComponent(filename).replace(/['()'*]/g, escape);
        newHeaders.set('Content-Disposition', `attachment; filename="${filename.replace(/"/g, '\\"')}"; filename*=UTF-8''${safeFilename}`);

        // Force octet-stream to tell Edge/Chrome "DO NOT OPEN, JUST DOWNLOAD"
        newHeaders.set('Content-Type', 'application/octet-stream');

        // Avoid setting Content-Length to prevent mismatches if Vercel or Cloudinary compress the stream
        newHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');

        return new NextResponse(response.body, {
            status: 200,
            headers: newHeaders,
        });
    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.json({
            error: 'Failed to download file',
            details: error.message
        }, { status: 500 });
    }
}

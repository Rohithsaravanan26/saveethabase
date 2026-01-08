import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    let fileUrl = searchParams.get('url');
    let filename = searchParams.get('filename') || 'download.pdf';

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
    }

    // Clean inputs
    fileUrl = fileUrl.trim();
    filename = filename.trim().replace(/[/\\?%*:|"<>]/g, '-');

    try {
        console.log(`[Proxy] Request: ${filename}`);

        // Use standard fetch but with a more common User-Agent
        const fetchOptions = {
            redirect: 'follow',
            headers: {
                'Accept': '*/*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                'Referer': 'https://saveethabase.vercel.app/'
            }
        };

        const response = await fetch(fileUrl, fetchOptions);

        if (!response.ok) {
            console.error(`[Proxy] Source Error: ${response.status} ${response.statusText}`);
            throw new Error(`Cloudinary responded with ${response.status}`);
        }

        const newHeaders = new Headers();

        // Proper encoding for Content-Disposition (RFC 6266)
        const encodedFilename = encodeURIComponent(filename).replace(/['()'*]/g, escape);
        newHeaders.set('Content-Disposition', `attachment; filename="${filename.replace(/"/g, '')}"; filename*=UTF-8''${encodedFilename}`);

        // Force octet-stream to ensure browser download manager triggers
        newHeaders.set('Content-Type', 'application/octet-stream');
        newHeaders.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        newHeaders.set('Pragma', 'no-cache');
        newHeaders.set('Expires', '0');

        return new NextResponse(response.body, {
            status: 200,
            headers: newHeaders,
        });
    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.json({
            error: 'Download failed',
            details: error.message
        }, { status: 500 });
    }
}

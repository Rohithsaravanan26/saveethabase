
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get('url');
    let filename = searchParams.get('filename') || 'download.file';

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
    }

    try {
        filename = filename.trim().replace(/[/\\?%*:|"<>]/g, '-');

        console.log(`[Proxy] Forced Download for: ${filename}`);

        const response = await fetch(fileUrl, {
            redirect: 'follow',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            console.error(`[Proxy] Fetch Error: ${response.status}`);
            return NextResponse.redirect(fileUrl); // Fallback to direct link if proxy fails
        }

        const newHeaders = new Headers();

        // THE EDGE FIX: Force application/octet-stream to stop browser preview
        newHeaders.set('Content-Type', 'application/octet-stream');

        // Proper encoding for Content-Disposition
        const encodedFilename = encodeURIComponent(filename).replace(/['()'*]/g, escape);
        newHeaders.set('Content-Disposition', `attachment; filename="${filename.replace(/"/g, '')}"; filename*=UTF-8''${encodedFilename}`);

        // Force no-cache to ensure fresh headers
        newHeaders.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        newHeaders.set('Pragma', 'no-cache');
        newHeaders.set('Expires', '0');

        return new NextResponse(response.body, {
            status: 200,
            headers: newHeaders,
        });

    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.redirect(fileUrl); // Last resort fallback
    }
}

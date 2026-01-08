
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get('url');
    const filename = searchParams.get('filename') || 'download.pdf';

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
    }

    try {
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error(`Failed to fetch file: ${response.statusText}`);

        // Create a new response with the file stream and correct headers
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Content-Disposition', `attachment; filename="${filename}"`);
        newHeaders.set('Content-Type', response.headers.get('Content-Type') || 'application/octet-stream');

        return new NextResponse(response.body, {
            status: 200,
            headers: newHeaders,
        });
    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.json({ error: 'Failed to download file' }, { status: 500 });
    }
}

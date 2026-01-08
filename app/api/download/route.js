
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get('url');
    const filename = searchParams.get('filename') || 'download.pdf';

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
    }

    try {
        const response = await fetch(fileUrl, {
            redirect: 'follow', // Ensure we follow Cloudinary redirects
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
        }

        // Create a new response with the file stream and correct headers
        const newHeaders = new Headers();
        newHeaders.set('Content-Disposition', `attachment; filename="${filename}"`);
        newHeaders.set('Content-Type', response.headers.get('Content-Type') || 'application/octet-stream');

        // Use the original response's range or other relevant headers if needed
        const contentLength = response.headers.get('Content-Length');
        if (contentLength) {
            newHeaders.set('Content-Length', contentLength);
        }

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

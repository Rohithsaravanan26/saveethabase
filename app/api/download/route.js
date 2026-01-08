
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get('url');
    // We'll keep the filename param for documentation, but for the most robust redirect, 
    // we go straight to the source.

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
    }

    try {
        console.log(`[Proxy] Redirecting to Source: ${fileUrl}`);

        // THE DEFINITIVE FIX: 
        // We stop trying to "force" anything from the server.
        // A clean redirect to the source URL is the most compatible way 
        // to bypass Vercel limits and header conflicts.
        return NextResponse.redirect(fileUrl);

    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.json({ error: 'Redirect failed', details: error.message }, { status: 500 });
    }
}

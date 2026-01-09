// Quick fix script - Run this in browser console on Cloudinary dashboard
// Or create a simple API endpoint to unblock files

import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

/**
 * API endpoint to manually unblock a specific file
 * Call: GET /api/unblock-file?publicId=bzlangltqkmkvhiwjjhc
 */
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get('publicId');

    if (!publicId) {
        return NextResponse.json({ error: 'Missing publicId parameter' }, { status: 400 });
    }

    try {
        // Try as 'raw' first (correct for PDFs)
        let result;
        try {
            result = await cloudinary.api.update(publicId, {
                resource_type: 'raw',
                type: 'upload',
                access_mode: 'public',
                access_control: []
            });
            console.log(`✅ Unblocked ${publicId} as 'raw' type`);
        } catch (rawError) {
            // If it's stored as 'image', update that way
            result = await cloudinary.api.update(publicId, {
                resource_type: 'image',
                type: 'upload',
                access_mode: 'public',
                access_control: []
            });
            console.log(`✅ Unblocked ${publicId} as 'image' type`);
        }

        return NextResponse.json({
            success: true,
            publicId,
            message: 'File unblocked successfully',
            result
        });

    } catch (error) {
        console.error('Unblock error:', error);
        return NextResponse.json({
            error: error.message,
            publicId
        }, { status: 500 });
    }
}

import { NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'

/**
 * Unblock a file after upload by explicitly setting it to public
 * This is a workaround for Cloudinary account restrictions
 */
export async function POST(request) {
    try {
        const { publicId, resourceType = 'raw' } = await request.json()

        if (!publicId) {
            return NextResponse.json({ error: 'Missing publicId' }, { status: 400 })
        }

        console.log(`[Unblock] Forcing public access for: ${publicId}`)

        // Use Admin API to explicitly set access mode
        const result = await cloudinary.api.update(publicId, {
            resource_type: resourceType,
            type: 'upload',
            access_mode: 'public',
            access_control: [] // Clear any access control lists
        })

        console.log(`[Unblock] Success! Access mode: ${result.access_mode}`)

        return NextResponse.json({
            success: true,
            publicId,
            accessMode: result.access_mode,
            url: result.secure_url
        })

    } catch (error) {
        console.error('[Unblock] Error:', error)
        return NextResponse.json(
            { error: error.message || 'Failed to unblock file' },
            { status: 500 }
        )
    }
}

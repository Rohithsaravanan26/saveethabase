import { NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'

/**
 * Generate a signed upload URL for direct browser upload
 * This gives us full control over upload parameters
 */
export async function POST(request) {
    try {
        const { filename } = await request.json()

        // Get current timestamp
        const timestamp = Math.round(new Date().getTime() / 1000)

        // Upload parameters - FULL CONTROL!
        // Note: resource_type is in the URL, not in signature params
        const uploadParams = {
            timestamp,
            folder: 'saveethabase',
            type: 'upload', // Delivery type
            access_mode: 'public', // Force public!
            tags: 'saveethabase,user-upload',
            use_filename: true,
            unique_filename: true
        }

        // Generate signature (server-side only, API secret never exposed)
        const signature = cloudinary.utils.api_sign_request(
            uploadParams,
            process.env.CLOUDINARY_API_SECRET
        )

        // Return signed params to client
        return NextResponse.json({
            timestamp,
            signature,
            apiKey: process.env.CLOUDINARY_API_KEY,
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            uploadParams
        })

    } catch (error) {
        console.error('[Signed Upload] Error:', error)
        return NextResponse.json(
            { error: 'Failed to generate upload signature' },
            { status: 500 }
        )
    }
}

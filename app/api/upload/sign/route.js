import { NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'

export async function POST(request) {
    try {
        const timestamp = Math.round(new Date().getTime() / 1000)
        const paramsToSign = {
            timestamp,
            folder: 'saveethabase',
        }

        const signature = cloudinary.utils.api_sign_request(
            paramsToSign,
            process.env.CLOUDINARY_API_SECRET
        )

        return NextResponse.json({
            signature,
            timestamp,
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.CLOUDINARY_API_KEY,
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

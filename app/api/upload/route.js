import { NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'

export async function POST(request) {
    try {
        const formData = await request.formData()
        const file = formData.get('file')

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    resource_type: 'auto',
                    folder: 'saveethabase',
                    use_filename: true,
                    access_mode: 'public',
                },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }
            ).end(buffer)
        })

        // Unblock as public immediately
        try {
            await cloudinary.api.update(result.public_id, {
                resource_type: result.resource_type,
                access_mode: 'public',
                access_control: []
            });
            console.log(`[Upload] Asset ${result.public_id} marked as public via server API`);
        } catch (unblockErr) {
            console.warn(`[Upload] Server unblock warning:`, unblockErr.message);
        }

        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

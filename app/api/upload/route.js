import { NextResponse } from 'next/server'
import cloudinary, { verifyAssetExists, ensurePublicAccess, generateDownloadUrl } from '@/lib/cloudinary'

// Configure route segment to handle larger file uploads
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb'
        }
    }
}

// Alternative: Use Next.js 13+ route segment config
export const runtime = 'nodejs'
export const maxDuration = 60 // 60 seconds timeout
export const dynamic = 'force-dynamic'

export async function POST(request) {
    try {
        const formData = await request.formData()
        const file = formData.get('file')

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 })
        }

        // Validate file size (10MB limit for Cloudinary free tier)
        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json({
                error: 'File size exceeds 10MB limit. Please compress your file or upgrade your plan.'
            }, { status: 400 })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        console.log(`[Upload] Starting upload for file: ${file.name} (${file.size} bytes)`)

        // Upload to Cloudinary with proper configuration
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    // CRITICAL: Use 'raw' for PDFs/DOCX to prevent "image" classification
                    resource_type: 'raw',
                    folder: 'saveethabase',
                    use_filename: true,
                    unique_filename: true,
                    // CRITICAL: These settings ensure the file is publicly accessible
                    type: 'upload',
                    access_mode: 'public',
                    // Prevent automatic transformations that might break downloads
                    transformation: [],
                    // Add tags for easier management
                    tags: ['saveethabase', 'user-upload']
                },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }
            ).end(buffer)
        })

        console.log(`[Upload] File uploaded successfully: ${result.public_id}`)

        // STEP 1: Ensure public access (double-check)
        const isPublic = await ensurePublicAccess(result.public_id, result.resource_type)
        if (!isPublic) {
            console.warn(`[Upload] Warning: Could not verify public access for ${result.public_id}`)
        }

        // STEP 2: Verify the asset is accessible
        const exists = await verifyAssetExists(result.public_id, result.resource_type)
        if (!exists) {
            // Rollback: Delete the uploaded file
            try {
                await cloudinary.uploader.destroy(result.public_id, {
                    resource_type: result.resource_type
                })
            } catch (deleteErr) {
                console.error('[Upload] Failed to delete inaccessible file:', deleteErr)
            }

            return NextResponse.json({
                error: 'Upload failed verification. The file could not be made publicly accessible.'
            }, { status: 500 })
        }

        // STEP 3: Generate authenticated download URL
        let downloadUrl
        try {
            const filename = file.name || 'download.pdf'
            downloadUrl = generateDownloadUrl(result.public_id, filename, result.resource_type)
            console.log(`[Upload] Generated download URL for ${result.public_id}`)
        } catch (urlError) {
            console.error('[Upload] Failed to generate download URL:', urlError)
            // Don't fail the upload, just use the secure_url as fallback
            downloadUrl = result.secure_url
        }

        // Return both display URL and download URL
        const response = {
            ...result,
            download_url: downloadUrl,
            verified: true
        }

        console.log(`[Upload] Upload complete and verified: ${result.public_id}`)

        return NextResponse.json(response)
    } catch (error) {
        console.error('[Upload] Upload error:', error)
        return NextResponse.json({
            error: error.message || 'Upload failed',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }, { status: 500 })
    }
}

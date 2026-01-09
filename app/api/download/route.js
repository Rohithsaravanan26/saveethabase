
import { NextResponse } from 'next/server'
import { extractPublicIdFromUrl, generateDownloadUrl } from '@/lib/cloudinary'

/**
 * ENHANCED DOWNLOAD API
 * Uses server-side signed URLs with proper authentication to bypass Cloudinary delivery restrictions.
 * Supports both Cloudinary URLs and direct URLs.
 */
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    let fileUrl = searchParams.get('url')
    let filename = searchParams.get('filename') || 'download.pdf'

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 })
    }

    try {
        fileUrl = fileUrl.trim()
        // Sanitize filename to prevent path traversal
        filename = filename.trim().replace(/[/\\?%*:|"<>]/g, '-')

        console.log(`[Download] Processing download request for: ${filename}`)

        let downloadUrl = fileUrl

        // If it's a Cloudinary URL, generate a signed download URL
        if (fileUrl.includes('cloudinary.com')) {
            const { publicId, resourceType } = extractPublicIdFromUrl(fileUrl)

            if (publicId) {
                console.log(`[Download] Extracted public ID: ${publicId} (type: ${resourceType})`)

                try {
                    // Generate signed download URL with attachment flag
                    downloadUrl = generateDownloadUrl(publicId, filename, resourceType)
                    console.log(`[Download] Generated signed download URL`)
                } catch (urlError) {
                    console.warn(`[Download] Failed to generate signed URL, using original:`, urlError.message)
                    // Fall back to original URL
                }
            } else {
                console.warn(`[Download] Could not extract public ID from URL, using direct fetch`)
            }
        }

        // Fetch the file from Cloudinary (or direct URL)
        console.log(`[Download] Fetching file from URL`)

        const fetchOptions = {
            method: 'GET',
            headers: {
                'User-Agent': 'SaveethaBase-Download-Proxy/1.0'
            }
        }

        let response
        let lastError

        // Try up to 3 times with exponential backoff
        for (let attempt = 1; attempt <= 3; attempt++) {
            try {
                response = await fetch(downloadUrl, fetchOptions)

                if (response.ok) {
                    break // Success!
                }

                lastError = `HTTP ${response.status}: ${response.statusText}`
                console.warn(`[Download] Attempt ${attempt} failed: ${lastError}`)

                // Wait before retry (exponential backoff)
                if (attempt < 3) {
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 500))
                }
            } catch (fetchError) {
                lastError = fetchError.message
                console.warn(`[Download] Attempt ${attempt} error:`, lastError)

                if (attempt < 3) {
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 500))
                }
            }
        }

        if (!response || !response.ok) {
            throw new Error(`Failed to fetch file after 3 attempts. Last error: ${lastError}`)
        }

        // Stream the response to the client
        const contentType = response.headers.get('Content-Type') || 'application/octet-stream'
        const contentLength = response.headers.get('Content-Length')

        console.log(`[Download] Streaming ${contentLength || 'unknown'} bytes as ${contentType}`)

        const headers = new Headers()
        headers.set('Content-Type', contentType)
        headers.set('Content-Disposition', `attachment; filename="${filename}"`)
        if (contentLength) {
            headers.set('Content-Length', contentLength)
        }
        headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
        headers.set('Pragma', 'no-cache')
        headers.set('Expires', '0')
        // Security headers
        headers.set('X-Content-Type-Options', 'nosniff')
        headers.set('Content-Security-Policy', "default-src 'none'")

        // Return the file stream directly
        return new NextResponse(response.body, { headers })

    } catch (error) {
        console.error('[Download] Download error:', error)

        return NextResponse.json({
            error: 'Download failed',
            message: error.message || 'An unexpected error occurred',
            url: fileUrl,
            filename: filename,
            suggestion: 'The file may be blocked, deleted, or temporarily unavailable. Please try again or contact support.'
        }, { status: 500 })
    }
}

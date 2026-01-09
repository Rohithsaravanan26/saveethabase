/**
 * Direct upload to Cloudinary from browser
 * Bypasses Vercel body size limits
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

/**
 * Upload a file directly to Cloudinary
 * @param {File} file - The file to upload
 * @param {Object} options - Upload options
 * @param {Function} options.onProgress - Progress callback (0-100)
 * @returns {Promise<Object>} Cloudinary upload response
 */
export async function uploadToCloudinary(file, options = {}) {
    const { onProgress } = options

    // Validate file
    if (!file) {
        throw new Error('No file provided')
    }

    // Validate size (10MB limit)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
        throw new Error('File size exceeds 10MB limit')
    }

    // Validate type
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!validTypes.includes(file.type)) {
        throw new Error('Only PDF and DOCX files are allowed')
    }

    // Validate environment variables
    if (!CLOUD_NAME) {
        throw new Error('Cloudinary cloud name not configured')
    }
    if (!UPLOAD_PRESET) {
        throw new Error('Cloudinary upload preset not configured')
    }

    // Create form data
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('folder', 'saveethabase')
    formData.append('resource_type', 'raw') // Force raw type for PDFs
    formData.append('tags', 'saveethabase,user-upload')

    // Upload URL
    const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`

    try {
        // Create XMLHttpRequest for progress tracking
        const xhr = new XMLHttpRequest()

        // Return promise that resolves with upload result
        return new Promise((resolve, reject) => {
            // Progress tracking
            if (onProgress && xhr.upload) {
                xhr.upload.addEventListener('progress', (e) => {
                    if (e.lengthComputable) {
                        const percentComplete = Math.round((e.loaded / e.total) * 100)
                        onProgress(percentComplete)
                    }
                })
            }

            // Success handler
            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText)
                        console.log('[Cloudinary] Upload successful:', response.public_id)
                        resolve(response)
                    } catch (parseError) {
                        reject(new Error('Failed to parse upload response'))
                    }
                } else {
                    const errorMsg = xhr.responseText || `Upload failed with status ${xhr.status}`
                    console.error('[Cloudinary] Upload error:', errorMsg)
                    reject(new Error(errorMsg))
                }
            })

            // Error handler
            xhr.addEventListener('error', () => {
                console.error('[Cloudinary] Network error during upload')
                reject(new Error('Network error during upload. Please check your connection.'))
            })

            // Abort handler
            xhr.addEventListener('abort', () => {
                reject(new Error('Upload cancelled'))
            })

            // Send request
            xhr.open('POST', uploadUrl)
            xhr.send(formData)
        })
    } catch (error) {
        console.error('[Cloudinary] Upload error:', error)
        throw error
    }
}

/**
 * Verify that upload configuration is ready
 * @returns {boolean} True if configured correctly
 */
export function isUploadConfigured() {
    return Boolean(CLOUD_NAME && UPLOAD_PRESET)
}

/**
 * Get configuration status for debugging
 * @returns {Object} Configuration status
 */
export function getUploadConfig() {
    return {
        cloudName: CLOUD_NAME || 'NOT_SET',
        uploadPreset: UPLOAD_PRESET || 'NOT_SET',
        configured: isUploadConfigured()
    }
}

/**
 * Supabase Storage upload utility
 * Simple, reliable file upload with direct download URLs
 */

import { createClient } from '@/lib/supabase'

/**
 * Upload a file to Supabase Storage
 * @param {File} file - The file to upload
 * @param {Object} options - Upload options
 * @param {Function} options.onProgress - Progress callback (0-100)
 * @param {Object} options.user - Current user object
 * @returns {Promise<Object>} Upload result with public URL
 */
export async function uploadToSupabase(file, options = {}) {
    const { onProgress, user } = options

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

    if (!user) {
        throw new Error('User must be logged in to upload')
    }

    const supabase = createClient()

    try {
        // Generate unique filename
        const fileExt = file.name.split('.').pop()
        const timestamp = Date.now()
        const randomStr = Math.random().toString(36).substring(7)
        const fileName = `${user.id}/${timestamp}_${randomStr}.${fileExt}`

        console.log('[Supabase] Uploading file:', fileName)

        // Simulate progress (Supabase doesn't provide upload progress)
        if (onProgress) {
            onProgress(10)
        }

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
            .from('files') // Bucket name
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false,
                contentType: file.type
            })

        if (error) {
            console.error('[Supabase] Upload error:', error)
            throw new Error(error.message || 'Upload failed')
        }

        if (onProgress) {
            onProgress(90)
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from('files')
            .getPublicUrl(data.path)

        if (onProgress) {
            onProgress(100)
        }

        console.log('[Supabase] Upload successful!')
        console.log('[Supabase] Public URL:', publicUrl)

        return {
            path: data.path,
            publicUrl,
            fullPath: data.fullPath,
            id: data.id
        }

    } catch (error) {
        console.error('[Supabase] Upload error:', error)
        throw error
    }
}

/**
 * Delete a file from Supabase Storage
 * @param {string} filePath - Path to the file in storage
 * @returns {Promise<void>}
 */
export async function deleteFromSupabase(filePath) {
    const supabase = createClient()

    const { error } = await supabase.storage
        .from('files')
        .remove([filePath])

    if (error) {
        console.error('[Supabase] Delete error:', error)
        throw new Error(error.message)
    }

    console.log('[Supabase] File deleted:', filePath)
}

/**
 * Get download URL for a file
 * @param {string} filePath - Path to the file in storage
 * @param {number} expiresIn - Expiry time in seconds (default: 1 hour)
 * @returns {Promise<string>} Signed download URL
 */
export async function getDownloadUrl(filePath, expiresIn = 3600) {
    const supabase = createClient()

    const { data, error } = await supabase.storage
        .from('files')
        .createSignedUrl(filePath, expiresIn)

    if (error) {
        console.error('[Supabase] Get URL error:', error)
        throw new Error(error.message)
    }

    return data.signedUrl
}

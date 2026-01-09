import { v2 as cloudinary } from 'cloudinary'

const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'
const api_key = process.env.CLOUDINARY_API_KEY || '123456789'
const api_secret = process.env.CLOUDINARY_API_SECRET || 'secret'

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
})

/**
 * Generate an authenticated download URL with proper flags for forcing download
 * @param {string} publicId - The Cloudinary public ID of the asset
 * @param {string} filename - The desired filename for download
 * @param {string} resourceType - The resource type ('raw', 'image', 'video', 'auto')
 * @returns {string} Public download URL
 */
export function generateDownloadUrl(publicId, filename, resourceType = 'raw') {
  try {
    // Generate simple public URL with attachment flag
    // This works for public assets without needing signatures
    const url = cloudinary.url(publicId, {
      resource_type: resourceType,
      type: 'upload',
      secure: true,
      flags: 'attachment'
    })

    return url
  } catch (error) {
    console.error('[Cloudinary] Error generating download URL:', error)
    throw error
  }
}

/**
 * Verify that an asset exists and is accessible in Cloudinary
 * @param {string} publicId - The Cloudinary public ID of the asset
 * @param {string} resourceType - The resource type ('raw', 'image', 'video', 'auto')
 * @returns {Promise<boolean>} True if asset exists and is accessible
 */
export async function verifyAssetExists(publicId, resourceType = 'raw') {
  try {
    const result = await cloudinary.api.resource(publicId, {
      resource_type: resourceType,
      type: 'upload'
    })

    console.log(`[Cloudinary] Asset verified: ${publicId} (${result.bytes} bytes)`)
    return true
  } catch (error) {
    console.error(`[Cloudinary] Asset verification failed for ${publicId}:`, error.message)
    return false
  }
}

/**
 * Ensure an asset is publicly accessible by updating its access mode
 * @param {string} publicId - The Cloudinary public ID of the asset
 * @param {string} resourceType - The resource type ('raw', 'image', 'video', 'auto')
 * @returns {Promise<boolean>} True if successfully made public
 */
export async function ensurePublicAccess(publicId, resourceType = 'raw') {
  try {
    await cloudinary.api.update(publicId, {
      resource_type: resourceType,
      type: 'upload',
      access_mode: 'public',
      access_control: []
    })

    console.log(`[Cloudinary] Asset set to public: ${publicId}`)
    return true
  } catch (error) {
    console.error(`[Cloudinary] Failed to set public access for ${publicId}:`, error.message)
    return false
  }
}

/**
 * Extract public ID from a Cloudinary URL
 * @param {string} url - The Cloudinary URL
 * @returns {Object} Object containing publicId and resourceType
 */
export function extractPublicIdFromUrl(url) {
  try {
    const urlObj = new URL(url)
    const pathParts = urlObj.pathname.split('/').filter(p => p)
    const uploadIndex = pathParts.indexOf('upload')

    if (uploadIndex === -1 || uploadIndex === 0) {
      return { publicId: null, resourceType: 'raw' }
    }

    const resourceType = pathParts[uploadIndex - 1] || 'raw'

    // Skip transformations and versions
    let startIndex = uploadIndex + 1
    while (startIndex < pathParts.length) {
      const part = pathParts[startIndex]
      // Skip signature, flags, and version parts
      if ((part.startsWith('s--') && part.endsWith('--')) ||
        part.startsWith('fl_') ||
        part.startsWith('e_') ||
        part.startsWith('q_') ||
        (part.startsWith('v') && /^v\d+$/.test(part))) {
        startIndex++
        continue
      }
      break
    }

    const fullPath = pathParts.slice(startIndex).join('/')

    // For raw resources, keep the extension; for others, remove it
    let publicId
    if (resourceType === 'raw') {
      publicId = fullPath
    } else {
      const lastDotIndex = fullPath.lastIndexOf('.')
      publicId = lastDotIndex !== -1 ? fullPath.substring(0, lastDotIndex) : fullPath
    }

    return { publicId, resourceType }
  } catch (error) {
    console.error('[Cloudinary] URL parsing error:', error)
    return { publicId: null, resourceType: 'raw' }
  }
}

export default cloudinary
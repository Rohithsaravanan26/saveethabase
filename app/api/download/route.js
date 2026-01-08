
import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    let fileUrl = searchParams.get('url');
    let filename = searchParams.get('filename') || 'download.pdf';

    if (!fileUrl) {
        return NextResponse.json({ error: 'Missing file URL' }, { status: 400 });
    }

    try {
        fileUrl = fileUrl.trim();
        filename = filename.trim().replace(/[/\\?%*:|"<>]/g, '-');

        // Validate URL format
        let isValidUrl = false;
        try {
            new URL(fileUrl);
            isValidUrl = true;
        } catch (urlError) {
            console.error('Invalid URL format:', fileUrl);
            return NextResponse.json({ 
                error: 'Invalid file URL format',
                details: urlError.message 
            }, { status: 400 });
        }

        if (!isValidUrl) {
            return NextResponse.json({ error: 'Invalid file URL' }, { status: 400 });
        }

        let publicId = '';
        let resourceType = 'image';

        // Extract Cloudinary public ID if it's a Cloudinary URL
        if (fileUrl.includes('cloudinary.com')) {
            try {
                const urlObj = new URL(fileUrl);
                const urlParts = urlObj.pathname.split('/').filter(p => p); // Remove empty parts
                const uploadIndex = urlParts.indexOf('upload');
                
                if (uploadIndex !== -1 && uploadIndex > 0) {
                    resourceType = urlParts[uploadIndex - 1] || 'raw'; // Default to 'raw' for uploaded files
                    let startIndex = uploadIndex + 1;
                    
                    // Skip signature (s--...--), transformations (fl_attachment, etc.), and version (v1, v1234567890)
                    while (startIndex < urlParts.length) {
                        const part = urlParts[startIndex];
                        // Skip signatures (s--...--)
                        if (part.startsWith('s--') && part.endsWith('--')) {
                            startIndex++;
                            continue;
                        }
                        // Skip transformation flags (fl_attachment, etc.)
                        if (part.startsWith('fl_')) {
                            startIndex++;
                            continue;
                        }
                        // Skip version numbers (v1, v1234567890)
                        if (part.startsWith('v') && /^v\d+$/.test(part)) {
                            startIndex++;
                            continue;
                        }
                        // If we get here, we've reached the public ID part
                        break;
                    }
                    
                    // Everything after transformations/signatures/version is the public ID
                    const pathParts = urlParts.slice(startIndex);
                    const fullPath = pathParts.join('/');

                    if (resourceType === 'raw') {
                        // For raw files, keep the full path including extension
                        publicId = fullPath;
                    } else {
                        // For images/videos, remove file extension
                        const lastDotIndex = fullPath.lastIndexOf('.');
                        publicId = lastDotIndex !== -1 ? fullPath.substring(0, lastDotIndex) : fullPath;
                    }
                    
                    console.log(`[Proxy] Extracted publicId: ${publicId}, resourceType: ${resourceType}`);
                }
            } catch (parseError) {
                console.warn('Failed to parse Cloudinary URL:', parseError.message);
                // Continue with direct redirect if parsing fails
            }
        }

        // If we have a Cloudinary public ID, generate signed URL
        if (publicId) {
            console.log(`[Proxy] Processing Cloudinary resource: ${publicId} (${resourceType})`);

            try {
                // STEP 1: Unblock the asset for delivery
                // Assets may be blocked by default, which prevents downloads even with signed URLs
                const unblockAsset = async (rt) => {
                    try {
                        // Method 1: Remove access control restrictions
                        await cloudinary.api.update(publicId, {
                            resource_type: rt,
                            access_control: []
                        });
                        console.log(`[Proxy] Asset unblocked (method 1, ${rt}): ${publicId}`);
                        return true;
                    } catch (err1) {
                        // Method 2: Set access mode to public
                        try {
                            await cloudinary.api.update(publicId, {
                                resource_type: rt,
                                access_mode: 'public'
                            });
                            console.log(`[Proxy] Asset unblocked (method 2, ${rt}): ${publicId}`);
                            return true;
                        } catch (err2) {
                            // Method 3: Try explicit anonymous access
                            try {
                                await cloudinary.api.update(publicId, {
                                    resource_type: rt,
                                    access_control: [{ access_type: 'anonymous' }]
                                });
                                console.log(`[Proxy] Asset unblocked (method 3, ${rt}): ${publicId}`);
                                return true;
                            } catch (err3) {
                                return false;
                            }
                        }
                    }
                };

                // Try unblocking with detected resource type
                let unblocked = await unblockAsset(resourceType);
                
                // If failed and resource type is 'image', also try 'raw' (files are uploaded as raw)
                if (!unblocked && resourceType === 'image') {
                    console.log(`[Proxy] Trying 'raw' resource type as fallback...`);
                    unblocked = await unblockAsset('raw');
                    if (unblocked) {
                        resourceType = 'raw'; // Update resource type for URL generation
                    }
                }
                
                if (!unblocked) {
                    console.warn(`[Proxy] Could not unblock asset, but continuing with signed URL generation...`);
                }

                // STEP 2: Generate Signed Deliverable Link
                // Using signed URLs ensures secure delivery
                const signedUrl = cloudinary.url(publicId, {
                    resource_type: resourceType,
                    sign_url: true,
                    secure: true,
                    flags: 'attachment',
                    attachment: filename,
                });

                console.log(`[Proxy] Redirecting to signed CDN URL: ${signedUrl.substring(0, 100)}...`);
                return NextResponse.redirect(signedUrl);
            } catch (cloudinaryError) {
                console.error('Cloudinary processing error:', cloudinaryError);
                // Fallback to direct URL if Cloudinary processing fails
                console.log(`[Proxy] Falling back to direct URL`);
                return NextResponse.redirect(fileUrl);
            }
        }

        // For non-Cloudinary URLs, redirect directly
        return NextResponse.redirect(fileUrl);

    } catch (error) {
        console.error('Download Proxy Error:', error);
        return NextResponse.json({ 
            error: 'Download failed',
            message: error.message || 'An unexpected error occurred',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }, { status: 500 });
    }
}

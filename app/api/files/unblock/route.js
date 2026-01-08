import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { createClient } from '@/lib/supabase-server';

export async function POST(request) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { publicId, resourceType = 'raw' } = await request.json();

        if (!publicId) {
            return NextResponse.json({ error: 'Missing publicId' }, { status: 400 });
        }

        // Unblock the asset using multiple methods
        let unblocked = false;
        const methods = [
            // Method 1: Remove access control
            async () => {
                await cloudinary.api.update(publicId, {
                    resource_type: resourceType,
                    access_control: []
                });
            },
            // Method 2: Set to public
            async () => {
                await cloudinary.api.update(publicId, {
                    resource_type: resourceType,
                    access_mode: 'public'
                });
            },
            // Method 3: Anonymous access
            async () => {
                await cloudinary.api.update(publicId, {
                    resource_type: resourceType,
                    access_control: [{ access_type: 'anonymous' }]
                });
            }
        ];

        for (let i = 0; i < methods.length; i++) {
            try {
                await methods[i]();
                unblocked = true;
                console.log(`[Unblock] Successfully unblocked ${publicId} using method ${i + 1}`);
                break;
            } catch (error) {
                console.warn(`[Unblock] Method ${i + 1} failed for ${publicId}:`, error.message);
            }
        }

        if (!unblocked) {
            return NextResponse.json({ 
                error: 'Failed to unblock asset',
                warning: 'Asset may still be blocked. Please check Cloudinary console.'
            }, { status: 500 });
        }

        return NextResponse.json({ 
            success: true,
            message: 'Asset unblocked successfully'
        });

    } catch (error) {
        console.error('Unblock error:', error);
        return NextResponse.json({ 
            error: 'Failed to unblock asset',
            message: error.message 
        }, { status: 500 });
    }
}

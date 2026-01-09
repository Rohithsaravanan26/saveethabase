// Script to unblock existing files in Cloudinary
// Run this with: node scripts/unblock-files.js

import cloudinary from '../lib/cloudinary.js';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function unblockAllFiles() {
    console.log('🔍 Fetching all files from database...');

    const { data: files, error } = await supabase
        .from('files')
        .select('id, cloudinary_public_id, file_url, title');

    if (error) {
        console.error('❌ Error fetching files:', error);
        return;
    }

    console.log(`📁 Found ${files.length} files to process\n`);

    for (const file of files) {
        try {
            console.log(`Processing: ${file.title}`);
            console.log(`  Public ID: ${file.cloudinary_public_id}`);

            // Try to update the resource as 'raw' type
            try {
                await cloudinary.api.update(file.cloudinary_public_id, {
                    resource_type: 'raw',
                    type: 'upload',
                    access_mode: 'public',
                    access_control: []
                });
                console.log(`  ✅ Successfully unblocked as 'raw' type\n`);
            } catch (rawError) {
                // If raw fails, try as image
                console.log(`  ⚠️  Not a 'raw' resource, trying 'image'...`);
                await cloudinary.api.update(file.cloudinary_public_id, {
                    resource_type: 'image',
                    type: 'upload',
                    access_mode: 'public',
                    access_control: []
                });
                console.log(`  ✅ Successfully unblocked as 'image' type\n`);
            }

            // Wait a bit between API calls to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 500));

        } catch (error) {
            console.error(`  ❌ Failed to unblock: ${error.message}\n`);
        }
    }

    console.log('✅ Done processing all files!');
}

unblockAllFiles().catch(console.error);

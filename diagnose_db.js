
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing env variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkFiles() {
    console.log('Checking last 5 files in Supabase...');
    const { data, error } = await supabase
        .from('files')
        .select('id, title, file_url')
        .order('upload_date', { ascending: false })
        .limit(5);

    if (error) {
        console.error('Error:', error);
        return;
    }

    data.forEach(file => {
        console.log(`[${file.id}] ${file.title}`);
        console.log(`URL: ${file.file_url}`);
        if (file.file_url.includes('fl_attachment')) {
            console.log('⚠️ ALERT: URL contains fl_attachment in Database!');
        } else {
            console.log('✅ URL is clean.');
        }
        console.log('---');
    });
}

checkFiles();

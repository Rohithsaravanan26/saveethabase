// Quick test script to debug Supabase Storage
// Run: node test-storage.js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Testing Supabase Storage...')
console.log('URL:', supabaseUrl)
console.log('Key:', supabaseKey ? '✓ Set' : '✗ Missing')

const supabase = createClient(supabaseUrl, supabaseKey)

// Test 1: List buckets
console.log('\n1. Listing buckets...')
const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets()
if (bucketsError) {
    console.error('❌ Error listing buckets:', bucketsError)
} else {
    console.log('✓ Buckets:', buckets.map(b => `${b.name} (public: ${b.public})`))
}

// Test 2: Check if 'files' bucket exists
const filesBucket = buckets?.find(b => b.name === 'files')
if (!filesBucket) {
    console.error('❌ Bucket "files" not found!')
} else if (!filesBucket.public) {
    console.error('❌ Bucket "files" is NOT public!')
} else {
    console.log('✓ Bucket "files" exists and is public')
}

// Test 3: Try to list files in bucket
console.log('\n2. Testing bucket access...')
const { data: files, error: filesError } = await supabase.storage
    .from('files')
    .list()

if (filesError) {
    console.error('❌ Error accessing bucket:', filesError)
} else {
    console.log('✓ Can access bucket. Files:', files.length)
}

console.log('\nDone!')

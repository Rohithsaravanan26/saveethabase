-- CLEANUP SCRIPT: Delete all files from database and reset
-- WARNING: This will delete ALL uploaded files!
-- Run this in Supabase SQL Editor

-- 1. Delete all file records from database
DELETE FROM files;

-- 2. Reset the ID sequence (optional - starts IDs from 1 again)
ALTER SEQUENCE files_id_seq RESTART WITH 1;

-- 3. Verify deletion
SELECT COUNT(*) as remaining_files FROM files;
-- Should return 0

-- Note: This only deletes database records.
-- To delete files from Supabase Storage, see instructions below.

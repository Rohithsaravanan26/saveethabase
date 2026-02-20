-- Add storage_path column to files table
-- This replaces cloudinary_public_id for Supabase Storage

-- Add the column (nullable for backward compatibility with existing Cloudinary files)
ALTER TABLE files 
ADD COLUMN IF NOT EXISTS storage_path TEXT;

-- Add comment to document the column
COMMENT ON COLUMN files.storage_path IS 'Supabase Storage path for file (replaces cloudinary_public_id)';

-- Optional: If you want to remove cloudinary_public_id later, uncomment this:
-- ALTER TABLE files DROP COLUMN IF EXISTS cloudinary_public_id;

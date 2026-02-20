-- Make cloudinary_public_id nullable for Supabase Storage migration
-- Run this in Supabase SQL Editor

ALTER TABLE files 
ALTER COLUMN cloudinary_public_id DROP NOT NULL;

-- Now both cloudinary_public_id and storage_path can be null
-- This allows backward compatibility with existing Cloudinary files
-- and forward compatibility with new Supabase Storage files

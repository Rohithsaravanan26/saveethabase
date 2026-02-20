-- Migration: Add download_url field to files table
-- This field stores an authenticated download URL with attachment flag for reliable downloads

ALTER TABLE public.files 
ADD COLUMN IF NOT EXISTS download_url TEXT;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_files_download_url ON public.files(download_url);

-- Note: Existing files will have NULL download_url.
-- They will still work as the download API will generate URLs on-the-fly from file_url.
-- New uploads will populate both file_url and download_url.

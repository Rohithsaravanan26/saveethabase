-- Expand Requests Table
-- Run this to add Category, Department, and Year to requests

ALTER TABLE public.requests
ADD COLUMN IF NOT EXISTS category VARCHAR(100),
ADD COLUMN IF NOT EXISTS department VARCHAR(50),
ADD COLUMN IF NOT EXISTS year INTEGER;

-- Create indexes for these new columns (good practice for filtering later)
CREATE INDEX IF NOT EXISTS idx_requests_category ON public.requests(category);
CREATE INDEX IF NOT EXISTS idx_requests_department ON public.requests(department);
CREATE INDEX IF NOT EXISTS idx_requests_year ON public.requests(year);

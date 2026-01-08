-- Fix Request RLS Policy
-- Run this in Supabase SQL Editor to allow users to fulfill requests (update status)

-- 1. Enable UPDATE for Authenticated Users on requests table
CREATE POLICY "Authenticated users can update requests" 
ON public.requests 
FOR UPDATE 
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

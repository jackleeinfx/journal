-- Add images to todos (array of Supabase Storage paths / data URLs)
-- Run in SQL Editor of project journal-secure

ALTER TABLE todos
  ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT '{}';
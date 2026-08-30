-- Add priority to todos (0=normal, 1, 2)
ALTER TABLE todos
ADD COLUMN IF NOT EXISTS priority INTEGER NOT NULL DEFAULT 0;

ALTER TABLE todos
DROP CONSTRAINT IF EXISTS todos_priority_check;

ALTER TABLE todos
ADD CONSTRAINT todos_priority_check
CHECK (priority IN (0, 1, 2));

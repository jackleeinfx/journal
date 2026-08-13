-- FSI 英語操練題庫（每個使用者一列 JSON）
-- 在 Supabase SQL Editor 執行一次即可。沒跑這支也不影響本機練習。

CREATE TABLE IF NOT EXISTS fsi_drill_library (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  sets JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE fsi_drill_library ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON fsi_drill_library TO authenticated;

DROP POLICY IF EXISTS "fsi_drill_library_select_own" ON fsi_drill_library;
DROP POLICY IF EXISTS "fsi_drill_library_insert_own" ON fsi_drill_library;
DROP POLICY IF EXISTS "fsi_drill_library_update_own" ON fsi_drill_library;
DROP POLICY IF EXISTS "fsi_drill_library_delete_own" ON fsi_drill_library;

CREATE POLICY "fsi_drill_library_select_own" ON fsi_drill_library
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "fsi_drill_library_insert_own" ON fsi_drill_library
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "fsi_drill_library_update_own" ON fsi_drill_library
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "fsi_drill_library_delete_own" ON fsi_drill_library
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

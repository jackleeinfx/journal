-- 生活紀錄：每個分類一份可更新筆記（HTML）
-- 在 journal-secure → SQL Editor 執行本檔

CREATE TABLE IF NOT EXISTS life_notes (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  category_id BIGINT NOT NULL REFERENCES life_categories(id) ON DELETE CASCADE,
  content TEXT DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, category_id)
);

CREATE INDEX IF NOT EXISTS idx_life_notes_user_category
  ON life_notes (user_id, category_id);

DROP TRIGGER IF EXISTS update_life_notes_updated_at ON life_notes;
CREATE TRIGGER update_life_notes_updated_at
  BEFORE UPDATE ON life_notes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE life_notes ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON life_notes TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;

DROP POLICY IF EXISTS "life_notes_select_own" ON life_notes;
DROP POLICY IF EXISTS "life_notes_insert_own" ON life_notes;
DROP POLICY IF EXISTS "life_notes_update_own" ON life_notes;
DROP POLICY IF EXISTS "life_notes_delete_own" ON life_notes;

CREATE POLICY "life_notes_select_own" ON life_notes FOR SELECT TO authenticated
  USING (user_id = auth.uid());
CREATE POLICY "life_notes_insert_own" ON life_notes FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "life_notes_update_own" ON life_notes FOR UPDATE TO authenticated
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "life_notes_delete_own" ON life_notes FOR DELETE TO authenticated
  USING (user_id = auth.uid());

-- 若後台有開「自動暴露表」，請確認 Data API 可讀 life_notes；
-- 或在 API settings 手動 expose life_notes。

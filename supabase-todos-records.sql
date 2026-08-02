-- journal-secure: todos + life records (Phase A2)
-- Run in SQL Editor of project journal-secure

-- ========== todos ==========
CREATE TABLE IF NOT EXISTS todos (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  notes TEXT DEFAULT '',
  due_date DATE NOT NULL,
  due_time TIME,
  is_done BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_todos_user_date
  ON todos (user_id, due_date ASC, due_time ASC NULLS LAST);

-- ========== life categories ==========
CREATE TABLE IF NOT EXISTS life_categories (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, name)
);

CREATE INDEX IF NOT EXISTS idx_life_categories_user
  ON life_categories (user_id, sort_order);

-- ========== life records (events under a category) ==========
CREATE TABLE IF NOT EXISTS life_records (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  category_id BIGINT NOT NULL REFERENCES life_categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  event_date DATE,
  expiry_date DATE,
  amount NUMERIC(12, 2),
  provider TEXT DEFAULT '',
  details TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_life_records_user_category
  ON life_records (user_id, category_id, event_date DESC NULLS LAST);

CREATE INDEX IF NOT EXISTS idx_life_records_user_expiry
  ON life_records (user_id, expiry_date ASC NULLS LAST);

-- updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_todos_updated_at ON todos;
CREATE TRIGGER update_todos_updated_at
  BEFORE UPDATE ON todos
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_life_records_updated_at ON life_records;
CREATE TRIGGER update_life_records_updated_at
  BEFORE UPDATE ON life_records
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;
ALTER TABLE life_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE life_records ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON todos TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON life_categories TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON life_records TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;

DROP POLICY IF EXISTS "todos_select_own" ON todos;
DROP POLICY IF EXISTS "todos_insert_own" ON todos;
DROP POLICY IF EXISTS "todos_update_own" ON todos;
DROP POLICY IF EXISTS "todos_delete_own" ON todos;

CREATE POLICY "todos_select_own" ON todos FOR SELECT TO authenticated
  USING (user_id = auth.uid());
CREATE POLICY "todos_insert_own" ON todos FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "todos_update_own" ON todos FOR UPDATE TO authenticated
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "todos_delete_own" ON todos FOR DELETE TO authenticated
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS "life_categories_select_own" ON life_categories;
DROP POLICY IF EXISTS "life_categories_insert_own" ON life_categories;
DROP POLICY IF EXISTS "life_categories_update_own" ON life_categories;
DROP POLICY IF EXISTS "life_categories_delete_own" ON life_categories;

CREATE POLICY "life_categories_select_own" ON life_categories FOR SELECT TO authenticated
  USING (user_id = auth.uid());
CREATE POLICY "life_categories_insert_own" ON life_categories FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "life_categories_update_own" ON life_categories FOR UPDATE TO authenticated
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "life_categories_delete_own" ON life_categories FOR DELETE TO authenticated
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS "life_records_select_own" ON life_records;
DROP POLICY IF EXISTS "life_records_insert_own" ON life_records;
DROP POLICY IF EXISTS "life_records_update_own" ON life_records;
DROP POLICY IF EXISTS "life_records_delete_own" ON life_records;

CREATE POLICY "life_records_select_own" ON life_records FOR SELECT TO authenticated
  USING (user_id = auth.uid());
CREATE POLICY "life_records_insert_own" ON life_records FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "life_records_update_own" ON life_records FOR UPDATE TO authenticated
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "life_records_delete_own" ON life_records FOR DELETE TO authenticated
  USING (user_id = auth.uid());

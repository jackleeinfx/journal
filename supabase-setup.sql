-- Supabase 數據庫設置腳本
-- 在 Supabase SQL Editor 中執行此腳本

-- 創建日記表
CREATE TABLE IF NOT EXISTS diaries (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  date TEXT NOT NULL,
  content TEXT NOT NULL,
  translation TEXT,
  tags TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 創建標籤使用次數表
CREATE TABLE IF NOT EXISTS tag_usage (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  tag_name TEXT NOT NULL,
  usage_count INTEGER DEFAULT 1,
  UNIQUE(user_id, tag_name)
);

-- 創建索引以提高查詢性能
CREATE INDEX IF NOT EXISTS idx_diaries_user_date ON diaries(user_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_diaries_user_created ON diaries(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tag_usage_user ON tag_usage(user_id);

-- 啟用 Row Level Security (RLS)
ALTER TABLE diaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE tag_usage ENABLE ROW LEVEL SECURITY;

-- 創建策略（允許所有操作，因為我們使用用戶ID來區分）
-- 注意：這是一個簡化的策略，在生產環境中應該更嚴格

DROP POLICY IF EXISTS "Users can manage their own diaries" ON diaries;
CREATE POLICY "Users can manage their own diaries"
  ON diaries FOR ALL
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Users can manage their own tags" ON tag_usage;
CREATE POLICY "Users can manage their own tags"
  ON tag_usage FOR ALL
  USING (true)
  WITH CHECK (true);

-- 創建更新時間的自動更新函數
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 創建觸發器自動更新 updated_at
DROP TRIGGER IF EXISTS update_diaries_updated_at ON diaries;
CREATE TRIGGER update_diaries_updated_at
    BEFORE UPDATE ON diaries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();


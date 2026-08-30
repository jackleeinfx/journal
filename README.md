# 我的日記

一個功能完整的日記應用，支持密碼保護、標籤管理、英文翻譯等功能。

## 功能特色

- 🔐 密碼保護（默認密碼：0000）
- 📅 自動填入多倫多時區日期
- 🏷️ 標籤系統（#標籤名）
- 🌐 一鍵翻譯成英文
- 🔍 全文搜索
- 🌙 深色模式
- 📱 響應式設計，支持手機和桌面

## GitHub Pages 部署

1. 將此倉庫推送到 GitHub
2. 在 GitHub 倉庫設置中啟用 GitHub Pages
3. 選擇 main 分支作為源
4. 訪問 `https://[你的用戶名].github.io/[倉庫名]/`

## Supabase 設置

### 1. 創建 Supabase 項目

1. 前往 [Supabase](https://supabase.com) 註冊/登入
2. 創建新項目
3. 獲取項目 URL 和 anon key

### 2. 創建數據庫表

在 Supabase SQL Editor 中執行以下 SQL：

```sql
-- 創建日記表
CREATE TABLE diaries (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  date TEXT NOT NULL,
  content TEXT NOT NULL,
  translation TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 創建標籤使用次數表
CREATE TABLE tag_usage (
  id BIGSERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  tag_name TEXT NOT NULL,
  usage_count INTEGER DEFAULT 1,
  UNIQUE(user_id, tag_name)
);

-- 創建索引以提高查詢性能
CREATE INDEX idx_diaries_user_date ON diaries(user_id, date DESC);
CREATE INDEX idx_diaries_user_created ON diaries(user_id, created_at DESC);
CREATE INDEX idx_tag_usage_user ON tag_usage(user_id);
```

### 3. 設置 Row Level Security (RLS)

```sql
-- 啟用 RLS
ALTER TABLE diaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE tag_usage ENABLE ROW LEVEL SECURITY;

-- 創建策略（允許所有操作，因為我們使用用戶ID來區分）
CREATE POLICY "Users can manage their own diaries"
  ON diaries FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can manage their own tags"
  ON tag_usage FOR ALL
  USING (true)
  WITH CHECK (true);
```

### 4. 配置環境變量

在 `index.html` 中替換 Supabase 配置：

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

## 本地開發

直接打開 `index.html` 文件即可使用（使用 localStorage 存儲）。

## 注意事項

- 翻譯功能使用 MyMemory Translation API（免費但有使用限制）
- 數據存儲在瀏覽器 localStorage 或 Supabase（根據配置）
- 密碼存儲在 localStorage（未使用 Supabase 時）


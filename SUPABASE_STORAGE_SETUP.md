# Supabase Storage 設置指南

## 步驟 1: 創建 Storage Bucket

1. 登入 Supabase 控制台
2. 點擊左側 "Storage"
3. 點擊 "New bucket"
4. 填寫以下信息：
   - **Name**: `diary-images`
   - **Public bucket**: ✅ 勾選（這樣才能公開訪問圖片）
5. 點擊 "Create bucket"

## 步驟 2: 設置 Storage 策略

1. 在 Storage 頁面，點擊 `diary-images` bucket
2. 點擊 "Policies" 標籤
3. 點擊 "New Policy"
4. 選擇 "Create a policy from scratch"
5. 設置以下策略：

### 策略 1: 允許上傳圖片
- **Policy name**: `Allow upload images`
- **Allowed operation**: `INSERT`
- **Policy definition**:
```sql
bucket_id = 'diary-images'
```

### 策略 2: 允許讀取圖片
- **Policy name**: `Allow read images`
- **Allowed operation**: `SELECT`
- **Policy definition**:
```sql
bucket_id = 'diary-images'
```

### 策略 3: 允許更新圖片（可選）
- **Policy name**: `Allow update images`
- **Allowed operation**: `UPDATE`
- **Policy definition**:
```sql
bucket_id = 'diary-images'
```

### 策略 4: 允許刪除圖片（可選）
- **Policy name**: `Allow delete images`
- **Allowed operation**: `DELETE`
- **Policy definition**:
```sql
bucket_id = 'diary-images'
```

或者，為了簡化，您可以創建一個允許所有操作的策略：

```sql
bucket_id = 'diary-images'
```

## 步驟 3: 更新數據庫表（如果尚未執行）

如果您的 `diaries` 表還沒有 `images` 字段，請在 SQL Editor 中執行：

```sql
ALTER TABLE diaries ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT '{}';
```

## 步驟 4: 測試

1. 刷新日記應用頁面
2. 嘗試上傳一張圖片
3. 檢查 Supabase Storage 中是否出現上傳的文件
4. 檢查日記是否正確保存了圖片URL

## 注意事項

- 圖片會自動壓縮到 100KB 以下
- 圖片存儲路徑格式：`{user_id}/{timestamp}_{filename}`
- 如果上傳失敗，系統會自動使用 base64 作為備份
- 公開 bucket 允許任何人訪問圖片URL，但只有知道URL的人才能訪問


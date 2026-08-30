# Supabase 設置指南

## 步驟 1: 創建 Supabase 項目

1. 前往 [https://supabase.com](https://supabase.com)
2. 註冊/登入帳號
3. 點擊 "New Project"
4. 填寫項目信息：
   - Project Name: 您的項目名稱
   - Database Password: 設置一個強密碼（請記住）
   - Region: 選擇離您最近的區域
5. 點擊 "Create new project"

## 步驟 2: 獲取 API 憑證

1. 在項目設置中，點擊左側 "Settings" → "API"
2. 複製以下信息：
   - **Project URL**: 例如 `https://xxxxx.supabase.co`
   - **anon public key**: 長字符串，用於客戶端訪問

## 步驟 3: 設置數據庫

1. 在 Supabase 控制台中，點擊左側 "SQL Editor"
2. 點擊 "New query"
3. 複製 `supabase-setup.sql` 文件的全部內容
4. 粘貼到 SQL Editor 中
5. 點擊 "Run" 執行

這將創建：
- `diaries` 表：存儲日記
- `tag_usage` 表：存儲標籤使用次數
- 必要的索引和策略

## 步驟 4: 配置應用

1. 打開 `index.html` 文件
2. 找到以下代碼（約第 825 行）：

```javascript
const USE_SUPABASE = false; // 設為 true 以啟用 Supabase
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

3. 修改為：

```javascript
const USE_SUPABASE = true;
const SUPABASE_URL = 'https://xxxxx.supabase.co'; // 您的 Supabase URL
const SUPABASE_ANON_KEY = '您的 anon key'; // 您的 anon key
```

## 步驟 5: 測試

1. 刷新頁面
2. 輸入密碼登入
3. 創建一篇日記
4. 在 Supabase 控制台的 "Table Editor" 中檢查數據是否已保存

## 注意事項

- **安全性**: anon key 是公開的，但通過 RLS (Row Level Security) 策略保護數據
- **備份**: 即使使用 Supabase，數據也會同時保存到 localStorage 作為備份
- **用戶ID**: 系統會自動為每個用戶生成唯一 ID 並存儲在 localStorage

## 故障排除

### 無法連接到 Supabase
- 檢查 URL 和 key 是否正確
- 檢查網絡連接
- 查看瀏覽器控制台的錯誤信息

### 數據未保存
- 檢查 RLS 策略是否正確設置
- 確認 SQL 腳本已成功執行
- 檢查 Supabase 項目是否處於活動狀態

### CORS 錯誤
- Supabase 默認允許所有來源，如果遇到 CORS 問題，檢查 Supabase 設置


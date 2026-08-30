# Supabase 調試指南

## 檢查步驟

### 1. 檢查數據庫表是否已創建

1. 登入 Supabase 控制台
2. 點擊左側 "Table Editor"
3. 確認以下表是否存在：
   - `diaries`
   - `tag_usage`

如果表不存在，請執行 `supabase-setup.sql` 腳本。

### 2. 檢查 RLS 策略

1. 在 Supabase 控制台，點擊 "Authentication" → "Policies"
2. 確認 `diaries` 和 `tag_usage` 表都有策略
3. 策略應該允許所有操作（USING (true), WITH CHECK (true)）

### 3. 檢查瀏覽器控制台

打開瀏覽器開發者工具（F12），查看 Console 標籤：

**正常情況應該看到：**
```
[Supabase] Loading diaries for user: user_xxxxx
[Supabase] GET diaries ?user_id=eq.user_xxxxx&order=created_at.desc
[Supabase] Response: []
```

**如果看到錯誤：**
- `401 Unauthorized`: 檢查 SUPABASE_ANON_KEY 是否正確
- `404 Not Found`: 檢查 SUPABASE_URL 是否正確，或表是否存在
- `403 Forbidden`: 檢查 RLS 策略是否正確設置
- `CORS error`: 檢查 Supabase 項目設置

### 4. 測試 API 連接

在瀏覽器控制台執行：

```javascript
// 測試連接
fetch('https://iithhxqjoqwdeuxemlaa.supabase.co/rest/v1/diaries?select=count', {
  headers: {
    'apikey': 'YOUR_ANON_KEY',
    'Authorization': 'Bearer YOUR_ANON_KEY'
  }
}).then(r => r.json()).then(console.log);
```

### 5. 檢查用戶ID

在瀏覽器控制台執行：

```javascript
localStorage.getItem('diaryUserId')
```

應該返回一個類似 `user_xxxxx` 的字符串。

### 6. 手動測試保存

在瀏覽器控制台執行：

```javascript
const userId = localStorage.getItem('diaryUserId');
fetch('https://iithhxqjoqwdeuxemlaa.supabase.co/rest/v1/diaries', {
  method: 'POST',
  headers: {
    'apikey': 'YOUR_ANON_KEY',
    'Authorization': 'Bearer YOUR_ANON_KEY',
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  },
  body: JSON.stringify({
    user_id: userId,
    date: '2025-12-22',
    content: '測試日記',
    translation: 'Test diary',
    tags: ['test']
  })
}).then(r => {
  console.log('Status:', r.status);
  return r.json();
}).then(console.log).catch(console.error);
```

## 常見問題

### 問題 1: 數據未保存
**可能原因：**
- RLS 策略未正確設置
- API key 錯誤
- 表結構不匹配

**解決方法：**
1. 檢查控制台錯誤信息
2. 確認執行了 `supabase-setup.sql`
3. 檢查 RLS 策略

### 問題 2: 401 錯誤
**可能原因：**
- anon key 錯誤或過期

**解決方法：**
1. 在 Supabase 控制台重新獲取 anon key
2. 更新 `index.html` 中的 `SUPABASE_ANON_KEY`

### 問題 3: 空數組返回
**正常情況：**
- 如果沒有數據，Supabase 會返回空數組 `[]`
- 這是正常的，表示查詢成功但沒有數據

### 問題 4: CORS 錯誤
**可能原因：**
- Supabase 項目設置問題

**解決方法：**
1. 檢查 Supabase 項目是否處於活動狀態
2. 確認 URL 和 key 正確

## 調試模式

代碼已添加詳細的日誌記錄，所有 Supabase 操作都會在控制台輸出：
- `[Supabase]` 前綴的日誌表示 Supabase 操作
- 查看這些日誌可以了解數據流


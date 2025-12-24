# GitHub Pages 部署檢查清單

## ✅ 代碼檢查

### 1. 文件結構
- [x] `index.html` 是單文件應用，可以直接部署
- [x] 沒有外部依賴文件（所有 CSS 和 JS 都在 HTML 中）
- [x] 沒有需要編譯的資源

### 2. 外部 API 兼容性
- [x] **MyMemory Translation API**: 支持 CORS，可在 GitHub Pages 使用
- [x] **Supabase**: 支持 CORS，可在 GitHub Pages 使用
- [x] 所有 API 調用都使用 HTTPS

### 3. 瀏覽器兼容性
- [x] 使用標準 JavaScript API（無需 polyfill）
- [x] 使用標準 CSS（無需預處理器）
- [x] 支持現代瀏覽器（Chrome, Firefox, Safari, Edge）

### 4. 路徑問題
- [x] 所有資源都是相對路徑或絕對 URL
- [x] 沒有硬編碼的本地路徑

## 🚀 部署步驟

### 方法 1: 使用 GitHub Pages 設置（推薦）

1. **創建 GitHub 倉庫**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用戶名/倉庫名.git
   git push -u origin main
   ```

2. **啟用 GitHub Pages**
   - 進入倉庫 Settings → Pages
   - Source: 選擇 "Deploy from a branch"
   - Branch: 選擇 "main" 和 "/ (root)"
   - 點擊 Save

3. **訪問網站**
   - URL: `https://你的用戶名.github.io/倉庫名/`
   - 首次部署可能需要幾分鐘

### 方法 2: 使用 GitHub Actions（已配置）

如果使用 `.github/workflows/deploy.yml`：
- 推送代碼到 main 分支會自動部署
- 無需手動設置

## ⚠️ 注意事項

### 1. HTTPS 要求
- GitHub Pages 使用 HTTPS
- 所有外部 API 必須支持 HTTPS（已確認）

### 2. CORS 問題
- MyMemory Translation API: ✅ 支持 CORS
- Supabase: ✅ 支持 CORS
- 如果遇到 CORS 錯誤，檢查 API 提供商的設置

### 3. 本地存儲
- localStorage 在 GitHub Pages 上正常工作
- 每個域名（包括 GitHub Pages）有獨立的 localStorage

### 4. 性能
- 單文件應用，加載速度快
- 無需構建步驟
- 適合 GitHub Pages 的靜態托管

## 🔧 故障排除

### 問題：頁面顯示空白
- 檢查瀏覽器控制台是否有錯誤
- 確認 `index.html` 在倉庫根目錄
- 確認 GitHub Pages 已正確啟用

### 問題：API 調用失敗
- 檢查網絡連接
- 查看瀏覽器控制台的錯誤信息
- 確認 API 端點是否可訪問

### 問題：數據未保存
- 檢查 localStorage 是否被禁用
- 如果使用 Supabase，檢查配置是否正確
- 查看瀏覽器控制台的錯誤信息

## 📝 測試清單

部署後請測試：
- [ ] 密碼登入功能
- [ ] 創建日記
- [ ] 編輯日記
- [ ] 刪除日記
- [ ] 搜索功能
- [ ] 翻譯功能
- [ ] 標籤功能
- [ ] 深色模式切換
- [ ] 響應式設計（手機和桌面）


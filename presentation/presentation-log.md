# 新手潛水安全簡報升級與驗證

日期：2026-11-21（UTC）

## 修改紀錄

- 保留九頁順序與三題原測驗。Wiki 連結統一使用指定 GitHub 儲存庫的 main 分支。六個目的檔名與本機 Wiki 一致。
- 採用深海藍、湖水綠和白色，加入真實攝影、深色疊層及水下光影。攝影採用美屬薩摩亞與關島兩張 NOAA 照片，來源、作者及公有領域標示可在第 9 頁展開查看。照片由 Wikimedia Commons 公開提供；背景另有獨立底色，文字與控制項不依賴照片。
- 前後切頁依方向淡入滑動，尊重系統減少動態效果偏好。滑桿以 0–30 公尺示範環境壓力，保留水面約 1 大氣壓及每 10 公尺增加約 1 大氣壓的估算條件。裝備用途及安全提醒可展開。BWRAF 可逐項勾選、取消及重設。
- 減壓症頁以規劃、上升及出水順序展開，保留免減壓限制及休閒安全停留與必要減壓停留的區別。搭機頁分列 DAN World 與 CDC 的措辭，保留自最後一潛出水起算及疑似症狀先就醫的條件。
- 同步更新原有三個 TXT 副本。

## 逐頁教學來源

1. 封面及學習目標：Wiki 索引
2. 水肺與浮潛：scuba-vs-snorkeling.md
3. 水下壓力及平壓：pressure-equalization.md
4. 裝備用途與檢查：gear-buddy-check.md
5. 開放式 BWRAF：gear-buddy-check.md
6. 減壓症與安全上升：decompression-ascent.md
7. 搭機前等待：flying-after-diving.md
8. 測驗：pressure-equalization.md、gear-buddy-check.md、flying-after-diving.md
9. 回顧：Wiki 索引與五個主題頁

## 測試結果

- 通過：重新開啟 6 個 GitHub 檔案頁面，核對儲存庫、main 分支與檔名。簡報 16 處 Wiki 連結皆對應這些頁面。終端機無法連向代理，改用網頁查核工具完成。
- 通過：兩張原始 JPEG 與 Wikimedia Commons 的作者及公有領域標示已查核。
- 通過：JavaScript 語法、模擬 DOM 切頁與首尾邊界、輸入欄的方向鍵隔離、動畫方向狀態、滑桿四個深度及讀值、五項勾選與取消、重設，以及三題共六種答題結果。
- 通過：靜態核對 9 個原生展開元件、減少動態效果設定、橫向與窄版 CSS、照片失敗時的底色及三個 TXT 副本。
- 待實機驗證：Sites 預覽初次拒絕根目錄設定，改用暫存子目錄後仍因執行環境拒絕監聽連接埠而無法啟動。共享瀏覽器亦拒絕 file://。已清除暫存設定。原生展開、照片實際渲染、動畫和電腦／平板／手機橫直向排版尚無瀏覽器實測結果。

- GitHub Pages 實際操作驗證

驗證日期： 2026-11-21
驗證環境： Windows 電腦、Chrome 瀏覽器
公開網站： https://sunnychen950202-svg.github.io/scuba_safety_wiki/

驗證項目與結果

測試項目 實際結果
九頁簡報切換 PASS：九頁均可正常切換
深度與壓力互動滑桿 PASS：調整滑桿後數值正常變化
BWRAF 裝備檢查 PASS：五項檢查均可勾選與重設
三題互動測驗 PASS：測驗可正常作答並顯示結果
Wiki 資料來源連結 PASS：連結可正常開啟
GitHub Pages 首頁 PASS：新增根目錄 index.html 後，可自動進入簡報

實際發現的問題與修正

1. Wiki 連結錯誤： 初期部分連結出現 404，後來統一改為 GitHub Repository 的 Wiki Markdown 檔案網址。
2. 網站首頁導向錯誤： 原本必須手動在網址加入 /presentation/ 才能開啟簡報，因此在 Repository 根目錄新增 index.html，自動導向簡報。
3. 驗證方式改善： 原本 Codex 的執行環境無法完成瀏覽器預覽，後來改由 GitHub Pages 公開部署，並進行人工操作測試。

驗證結論

本專案已完成 Wiki 建置、HTML 教學簡報產生、公開部署與實際操作驗證。透過「發現問題 → 修改 → 重新測試」的流程，確認主要功能均能正常使用。

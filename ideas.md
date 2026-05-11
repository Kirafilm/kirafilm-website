# KiraFilm 網站設計構思

## 設計方向選擇

<response>
<text>
**Design Movement**: Editorial Minimalism — 受高端時尚雜誌（如 032c、System Magazine）啟發
**Core Principles**:
1. 文字即設計 — 大膽的字體排印本身就是視覺元素
2. 影片優先 — 所有設計決策都服務於讓影片作品最大化呈現
3. 克制的動態 — 只在最關鍵的互動節點加入動畫，避免視覺噪音
4. 非對稱的平衡 — 用不對稱排版創造視覺張力，而非傳統居中佈局

**Color Philosophy**:
- 主色：純白 #FFFFFF（大面積留白）
- 文字：深炭灰 oklch(0.18 0.005 65)（比純黑更溫潤）
- 輔助色：極淺暖灰 oklch(0.97 0.003 65)（區塊背景）
- 強調色：深褐金 oklch(0.42 0.08 65)（僅用於 hover 狀態與細節線條）
- 情感意圖：沉靜、專業、有質感，讓作品成為唯一的色彩來源

**Layout Paradigm**:
- 導航欄：極細的頂部橫欄，左側品牌名稱，右側稀疏的導航連結
- 首頁：全螢幕 YouTube 嵌入 Showreel（靜音自動播放），覆蓋極簡文字
- 作品集：不對稱雙欄大圖網格，奇數行左大右小，偶數行左小右大
- 每個作品卡片：懸停時以細線框顯示，播放圖示優雅浮現

**Signature Elements**:
1. 超細的水平分隔線（1px，使用暖灰色）
2. 大型字體的類別標籤（如「EVENT」「INTERVIEW」以淺灰色顯示在影片上方）
3. 游標懸停時影片縮圖從黑白轉為彩色的過渡效果

**Interaction Philosophy**:
- 頁面載入：文字從下方以 0.6s ease-out 浮現
- 影片卡片懸停：縮圖輕微放大（scale 1.03），同時顯示播放按鈕
- 導航連結：底部細線從左向右展開的 underline 動畫

**Animation**:
- 使用 Framer Motion 的 `initial/animate/whileInView` 控制進場動畫
- 所有動畫持續時間不超過 0.7s，使用 ease-out 曲線
- 避免複雜的 3D 變換，保持克制

**Typography System**:
- 標題字體：Playfair Display（優雅的高對比度襯線字體，用於大標題）
- 內文字體：DM Sans（現代無襯線，用於導航、說明文字）
- 字體大小比例：Hero 標題 5-7rem → 區塊標題 2-3rem → 內文 1rem
- 字重：標題 700，副標 400，內文 300-400
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Design Movement**: Swiss International Typographic Style — 受瑞士平面設計傳統啟發
**Core Principles**:
1. 網格的嚴謹 — 所有元素對齊於隱形的模組化網格
2. 功能即美學 — 每個設計元素都有明確的功能目的
3. 留白的力量 — 大量空白作為設計語言的核心
4. 類型層級清晰 — 嚴格的字體大小與重量層級系統

**Color Philosophy**:
- 主色：純白 #FFFFFF
- 文字：近黑色 oklch(0.15 0 0)
- 強調：磚紅色 oklch(0.52 0.18 25)（極少量使用，僅用於 CTA 按鈕）
- 情感意圖：精準、可信、國際化

**Layout Paradigm**:
- 嚴格的 12 欄網格系統
- 導航：左對齊品牌，右對齊選單
- 作品集：均勻的 3 欄網格，統一的縱橫比

**Signature Elements**:
1. 細黑線框作為視覺分隔
2. 全大寫的類別標籤
3. 數字編號的作品列表

**Interaction Philosophy**: 功能性互動，無裝飾性動畫

**Animation**: 僅有必要的狀態轉換，持續時間 0.2-0.3s

**Typography System**:
- 全站使用 Helvetica Neue 或 Neue Haas Grotesk
- 嚴格的字體大小比例：8px 基準單位
</text>
<probability>0.06</probability>
</response>

<response>
<text>
**Design Movement**: Japanese Wabi-Sabi Minimalism — 受日本美學「侘寂」啟發
**Core Principles**:
1. 不完美的美 — 非對稱、有機的排版
2. 空間的詩意 — 極大量的留白，讓每個元素都能「呼吸」
3. 細節的工藝 — 細微的紋理、精緻的間距
4. 時間的痕跡 — 微妙的動畫模擬自然流動

**Color Philosophy**:
- 主色：溫暖的米白 oklch(0.98 0.008 85)
- 文字：深墨色 oklch(0.2 0.01 65)
- 輔助：淡灰褐 oklch(0.88 0.015 80)
- 強調：深苔綠 oklch(0.35 0.08 150)（極少量）
- 情感意圖：靜謐、詩意、有溫度

**Layout Paradigm**:
- 非對稱的自由排版，避免規則網格
- 大量留白，元素稀疏分佈
- 影片以不規則的尺寸和位置展示

**Signature Elements**:
1. 細毛筆線條裝飾
2. 日文字符作為裝飾元素
3. 影片縮圖的輕微去飽和處理

**Interaction Philosophy**: 緩慢、柔和的過渡，模擬自然節奏

**Animation**: 緩慢的 fade（1-1.5s），模擬水墨暈染效果

**Typography System**:
- 標題：Noto Serif TC（中文）/ Cormorant Garamond（英文）
- 內文：Noto Sans TC
</text>
<probability>0.07</probability>
</response>

## 選定方向

選擇**方向一：Editorial Minimalism（編輯極簡主義）**。

這個方向最能體現 KiraFilm 作為專業影像製作公司的品牌個性：
- Playfair Display 的高對比度襯線字體為網站注入了電影雜誌的質感
- 非對稱的作品集排版讓每個影片都有獨特的視覺重量
- 深褐金的強調色呼應了電影底片的溫暖色調
- 影片懸停時從黑白轉彩色的效果，完美詮釋了「每一刻的記錄」這個品牌理念

/* =============================================================================
   VIDEO DATA — KiraFilm YouTube Channel Content
   Source: https://www.youtube.com/@kirafilmart
   ============================================================================= */

export interface Video {
  title: string;
  titleEn?: string;
  videoId: string;
  category: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  label: string;
  labelEn: string;
  count: number;
}

export const categories: Category[] = [
  { id: "event", label: "活動花絮", labelEn: "Event", count: 42 },
  { id: "interview", label: "人物專訪", labelEn: "Interview", count: 21 },
  { id: "corporate", label: "企業影片", labelEn: "Corporate", count: 12 },
  { id: "social", label: "社交媒體", labelEn: "Social Media", count: 18 },
  { id: "reels", label: "Reels", labelEn: "Reels", count: 7 },
  { id: "promo", label: "宣傳影片", labelEn: "Promo", count: 9 },
  { id: "shortfilm", label: "短片", labelEn: "Short Film", count: 8 },
];

export const reelsVideos: Video[] = [
  { title: "Still Life Instagram Reels", videoId: "3gs8H5OZS7Y", category: "reels" },
  { title: "Sports Expo IG Reels", videoId: "8NbMYbZQYnk", category: "reels" },
  { title: "Tokyo Bag new arrivals 產品IG宣傳片", videoId: "gLtV2Q8S0Qw", category: "reels" },
  { title: "UMAMI推廣活動", videoId: "LGycwzWK1WI", category: "reels" },
  { title: "UMAMI推廣活動", videoId: "ZTRqdSj96g8", category: "reels" },
  { title: "Laderach Opening", videoId: "VsfOf-tebOo", category: "reels" },
  { title: "Champion Reit ESG Week活動", videoId: "QB80gJTT8QU", category: "reels" },
];

export const showreel: Video = {
  title: "Kirafilm Production Showreel",
  videoId: "1TgytW9-7IA",
  category: "showreel",
  featured: true,
};

export const featuredVideos: Video[] = [
  {
    title: "東海堂戶外推廣活動",
    videoId: "-JBq7UAyEy8",
    category: "corporate",
    featured: true,
  },
  {
    title: "Dettol 銅鑼灣街頭活動",
    videoId: "BNXjUr5BkP8",
    category: "social",
    featured: true,
  },
  {
    title: "荃灣廣場豐澤店介紹",
    videoId: "ufcwr4D9y9g",
    category: "corporate",
    featured: true,
  },
  {
    title: "Enhypen Fans聚會",
    videoId: "P8-NRHHmkqQ",
    category: "social",
    featured: true,
  },
  {
    title: "Ginger x XTransfer訪問",
    videoId: "DlhtlKTcmj4",
    category: "interview",
    featured: true,
  },
  {
    title: "A1W超級充電站實地介紹",
    videoId: "W56qZnZHr3E",
    category: "corporate",
    featured: true,
  },
];

export const allVideos: Video[] = [
  // Event Videos 活動花絮
  { title: "XTransfer - Hong Kong FinTech Week x StartmeupHK Festival 2025", videoId: "h9B6M1trH38", category: "event" },
  { title: "Taste新店開張活動花絮", videoId: "9Y-SruKo618", category: "event" },
  { title: "惜食堂 - 豐膳罐愛心活動花絮", videoId: "mhqDsi9FD38", category: "event" },
  { title: "維達Vinda新都城中心活動花絮", videoId: "Rcd0TmCY7wU", category: "event" },
  { title: "豐澤頒獎晚宴活動花絮", videoId: "ZqXu8dgt_Xs", category: "event" },
  { title: "百佳頒獎晚宴活動花絮", videoId: "Il5WcnlMKUk", category: "event" },
  { title: "Sunwa蛋糕製作", videoId: "3ZWwMJplat8", category: "event" },
  { title: "House of Guinness 黑啤主題沉浸式體驗活動花絮", videoId: "QqTbi-ebavg", category: "event" },
  { title: "HAECO 75th Anniversary Celebration", videoId: "CQ3bkiE4XWA", category: "event" },
  { title: "易賞錢聖誕工作坊", videoId: "kSHHWnk0AQ4", category: "event" },
  { title: "理工大學Team building活動", videoId: "2vAPU64XeyY", category: "event" },
  { title: "香港開心購物節啟動禮 2024 活動花絮", videoId: "YqjyjoUGLlo", category: "event" },
  { title: "FASE - Face it your way 活動花絮", videoId: "nG8V8U80xz4", category: "event" },
  { title: "Chubby Hearts Hong Kong X Yahoo活動花絮", videoId: "3v7oA1Xbc6o", category: "event" },
  { title: "第五屆國際移民及置業博覽活動花絮", videoId: "Ge2xV-Ly_Us", category: "event" },
  { title: "UDC X 國際移民及置業博覽活動花絮", videoId: "Nd_Fr9DEQrA", category: "event" },
  { title: "富途投資展活動花絮", videoId: "5zTcZqeC-Z8", category: "event" },
  { title: "屈臣氏聖誕workshop", videoId: "eC3VA2G4tdM", category: "event" },
  { title: "銘琪癌症關顧中聖誕活動花絮", videoId: "IxaVewW_E4M", category: "event" },
  { title: "先寧集團頒獎晚宴活動花絮", videoId: "W1AyalbP34s", category: "event" },
  { title: "Australian Universities Reception 2026", videoId: "dlsE0R1DwW4", category: "event" },
  { title: "Ontario eSchool畢業典禮 2024花絮影片", videoId: "JUscnQ9C52k", category: "event" },
  { title: "第六屆北京南京航天科技考察團啟動禮花絮影片", videoId: "30moYL4GeVI", category: "event" },
  { title: "小紅花送媽媽社區活動日活動花絮", videoId: "b1HVqj-pd5Q", category: "event" },
  { title: "Fusion Bank 兩周年慶活動花絮", videoId: "cD_GLLaEKyY", category: "event" },
  { title: "維達新都城活動", videoId: "uPovl24JAP8", category: "event" },
  { title: "West Lake IMXHK 活動花絮", videoId: "Z5sW264u09U", category: "event" },
  { title: "Point S IMXHK 活動花絮", videoId: "5B_1hDSOS8E", category: "event" },
  { title: "Continental IMXHK 活動花絮", videoId: "vJ95zzz8ejA", category: "event" },
  { title: "業昌食品開張活動花絮", videoId: "p-Kd_7gnkCw", category: "event" },
  { title: "樂怡居海外僱傭中心分店開幕花絮", videoId: "-1Hd-A_ZtPs", category: "event" },
  { title: "SAY NO MORE 開幕活動花絮", videoId: "kPLft8GHRfw", category: "event" },
  { title: "DELF 活動花絮 (1 mins ver.)", videoId: "tTPNful1B5I", category: "event" },
  { title: "Career Fair 活動花絮", videoId: "2q9qho1wKDc", category: "event" },
  { title: "CVCF 活動花絮 (1 mins ver.)", videoId: "g2Z0brzkbhQ", category: "event" },
  { title: "DELF 活動花絮", videoId: "gJSxzvYPNIU", category: "event" },
  { title: "AFF 活動花絮", videoId: "ECr4e4GjLpM", category: "event" },
  { title: "Fintech Awards 活動花絮", videoId: "3_5DtcCnJVM", category: "event" },
  { title: "Praisage記者會", videoId: "91HmDpI6VIk", category: "event" },
  { title: "Praisage 活動花絮", videoId: "T1Eo94NaZJQ", category: "event" },
  { title: "GBA Bootcamp 活動花絮", videoId: "mRZ84KWuydo", category: "event" },
  { title: "CVCF 活動花絮", videoId: "VoFf0zawDng", category: "event" },

  // Interview Videos 人物專訪
  { title: "an ordinary project (易賞錢訪問)", videoId: "qO5514Z1bvA", category: "interview" },
  { title: "聰鳴茶座 (易賞錢訪問)", videoId: "nLKNcGyloEE", category: "interview" },
  { title: "Versandi品牌推廣 - Mia interview", videoId: "0fcOC2pMFpc", category: "interview" },
  { title: "Versandi品牌推廣 - Olga interview", videoId: "N0CkqQ-Z53A", category: "interview" },
  { title: "Ginger x XTransfer業務推廣訪問影片", videoId: "DlhtlKTcmj4", category: "interview" },
  { title: "Avenda x XTransfer業務推廣訪問影片", videoId: "cbcjoWTUJPI", category: "interview" },
  { title: "Crystocraft x XTransfer業務推廣訪問影片", videoId: "WNiTHWAMNhE", category: "interview" },
  { title: "IS Limited interview", videoId: "PqL8q5K7qb0", category: "interview" },
  { title: "Interview：陳駿霖專訪", videoId: "HI1l4OvbjdY", category: "interview" },
  { title: "Interview：ORII專訪", videoId: "q1iP0pj681k", category: "interview" },
  { title: "AQUMON interview", videoId: "y64Eu1G3MAY", category: "interview" },
  { title: "Osome interview", videoId: "FZ5dN7RI7P0", category: "interview" },
  { title: "Interactive X Spread it interview", videoId: "3kib7lOHnNc", category: "interview" },
  { title: "Prive x MindLayer interview", videoId: "c2yS_ej5X1M", category: "interview" },
  { title: "Big Dipper x GRWTH interview", videoId: "w-tUCZxgImc", category: "interview" },
  { title: "GRWTH interview", videoId: "P1j9MTijm48", category: "interview" },
  { title: "Zoomob interview", videoId: "qB2tlr4_AZ0", category: "interview" },
  { title: "Pakpobox Interview", videoId: "HA2Wl2_g41M", category: "interview" },
  { title: "oneCHARGE interview", videoId: "eW74wlWqUTM", category: "interview" },
  { title: "Roborn interview", videoId: "0r95r-0XNtA", category: "interview" },
  { title: "Snapask Interview", videoId: "EZuMHV_uAR4", category: "interview" },

  // Corporate Videos 企業影片
  { title: "荃灣廣場豐澤店介紹", videoId: "ufcwr4D9y9g", category: "corporate" },
  { title: "理財EasyGo (10000蚊可以點樣用？) 業務推廣街頭訪問拍攝", videoId: "1rqhHKNNg-E", category: "corporate" },
  { title: "在豐澤做MT的一天實錄", videoId: "KKirtYpnC14", category: "corporate" },
  { title: "畢業MT在豐澤的一天實錄", videoId: "HxRxhgyDTYE", category: "corporate" },
  { title: "數碼港介紹影片（一）", videoId: "zWOQyMdrn5g", category: "corporate" },
  { title: "數碼港介紹影片（二）", videoId: "PGdlH2IrcWo", category: "corporate" },
  { title: "RoboMedia 產品介紹", videoId: "xqEjftO9P-4", category: "corporate" },
  { title: "Sky-tech Corporate Video", videoId: "WqLgM7oPAjA", category: "corporate" },
  { title: "HYUNDAI Corporate Video", videoId: "0nSvznDsIUY", category: "corporate" },
  { title: "OnePresses Apps介紹", videoId: "YoUIpWeu7MU", category: "corporate" },
  { title: "Phonejoy工作介紹", videoId: "iFp3TqYD78A", category: "corporate" },
  { title: "Fedex Training Video", videoId: "ARHlupKrOkQ", category: "corporate" },

  // Social Media Videos 社交媒體
  { title: "Enhypen Fans聚會", videoId: "P8-NRHHmkqQ", category: "social" },
  { title: "Dettol 銅鑼灣街頭活動", videoId: "BNXjUr5BkP8", category: "social" },
  { title: "東海堂戶外推廣活動", videoId: "-JBq7UAyEy8", category: "social" },
  { title: "TechLife x Amazfit跑步耐力訓練工作坊", videoId: "WXthJRxH4Ts", category: "social" },
  { title: "維他手指檸檬茶街頭派發活動", videoId: "4Pw1fIbBRlE", category: "social" },
  { title: "一分鐘瘋狂掃貨", videoId: "JJZ6BD9wpeI", category: "social" },
  { title: "Fase NGO 宣傳影片", videoId: "l-sjiiauTZI", category: "social" },
  { title: "屯市豐澤電視展銷會", videoId: "YoTzV9mEKnw", category: "social" },
  { title: "將軍澳獸醫中心介紹", videoId: "7pzRvSm3n_8", category: "social" },
  { title: "獸醫助護的一天", videoId: "nwophtbX-aE", category: "social" },
  { title: "獸醫百問：貓瘟", videoId: "xD9nXvjhWVo", category: "social" },
  { title: "潮州兩日遊 | 手打牛丸 珍稀牛肉 | 潮州茶道 鴨屎香茶葉 |", videoId: "ua2ZkPi4rxE", category: "social" },
  { title: "SciNat 花膠原銅鑼灣街站推廣活動", videoId: "FzPvDXdxsMY", category: "social" },
  { title: "維他奶CheerYouUp送你滋味有營早餐街頭推廣活動", videoId: "JVxjCkbtlGw", category: "social" },
  { title: "維他新鮮茶免費派發活動", videoId: "e04EaRK2fvg", category: "social" },
  { title: "維他奶植物奶免費派發活動", videoId: "eavf20Z_r4I", category: "social" },
  { title: "Delonghi自動咖啡機直播介紹", videoId: "HC-hEutAXo4", category: "social" },
  { title: "Me2You x CSAA x GOGOVAN 抗疫資源共享", videoId: "zuXnQL5mxU4", category: "social" },

  // Promo Videos 宣傳影片
  { title: "MoreTickets 15\" TVC", videoId: "j30vGuILHwI", category: "promo" },
  { title: "Justformochi推廣影片", videoId: "V92FXeOOWTo", category: "promo" },
  { title: "A1W超級充電樁使用流程", videoId: "zHJt6Bc3TGM", category: "promo" },
  { title: "Fase NGO 宣傳影片", videoId: "LfPKwgdgV6Y", category: "promo" },
  { title: "深圳配眼鏡必去 | 蔡司漸進鏡", videoId: "IPyejc9PjJQ", category: "promo" },
  { title: "深圳配眼鏡 | 超專業國家級眼光技術", videoId: "9QUCNJs4KYo", category: "promo" },
  { title: "XTransfer - Hong Kong FinTech Week x StartmeupHK Festival 2025", videoId: "iZdVRSd15Kk", category: "promo" },

  // Short Film Videos 短片
  { title: "一生的足印 MV", videoId: "D5dj3XcxJ-I", category: "shortfilm" },
  { title: "前行 MV", videoId: "P54iCrsN51Q", category: "shortfilm" },
  { title: "Still Life MV (Cover)", videoId: "i__yYn6NGOM", category: "shortfilm" },
  { title: "微電影：走進CyberLab電競世界", videoId: "futB_ITO8Pg", category: "shortfilm" },
  { title: "微電影：數碼港講數碼 Smart Element篇", videoId: "lz8eWygk7To", category: "shortfilm" },
  { title: "數碼港講數碼 STEAM篇", videoId: "NcjAcNxY6SY", category: "shortfilm" },
  { title: "微電影：5G新世代", videoId: "VYJERjccM8A", category: "shortfilm" },
  { title: "微電影：Smart Toilet有幾Smart？", videoId: "uqkDxX27zTo", category: "shortfilm" },
];

export function getYoutubeThumbnail(videoId: string, quality: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault" = "hqdefault"): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

export function getVideosByCategory(categoryId: string): Video[] {
  if (categoryId === "reels") return reelsVideos;
  if (categoryId === "all") return allVideos;
  return allVideos.filter((v) => v.category === categoryId);
}

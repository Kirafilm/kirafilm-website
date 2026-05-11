export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: string;
  color: string;
  
  // Overview section
  overview: string;
  
  // Process section
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  
  // Tech stack section
  techStack?: {
    category: string;
    tools: string[];
  }[];
  
  // Case studies section
  caseStudies: {
    title: string;
    client: string;
    description: string;
    results: string[];
    image: string;
    videoUrl?: string;
  }[];
  
  // Testimonials section
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
  }[];
  
  // Pricing/Packages section
  packages: {
    name: string;
    description: string;
    features: string[];
    price?: string;
  }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "video-production": {
    id: "video-production",
    slug: "video-production",
    title: "影片製作",
    titleEn: "Video Production",
    subtitle: "從概念到成品，專業的影片製作服務",
    description: "我們提供全方位的影片製作服務，從前期企劃、拍攝到後期製作，為您的品牌故事注入生命力。",
    heroImage: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&h=600&fit=crop",
    icon: "🎬",
    color: "oklch(0.52 0.09 65)",
    
    overview: "KiraFilm 擁有超過 10 年的影片製作經驗，服務過 150+ 企業客戶。我們的團隊由資深導演、攝影師和剪輯師組成，致力於為每個項目創造獨特的視覺語言。",
    
    process: [
      {
        step: 1,
        title: "前期企劃",
        description: "與客戶深入溝通，理解品牌目標和目標受眾，制定創意方案和拍攝計劃。"
      },
      {
        step: 2,
        title: "拍攝製作",
        description: "使用專業設備和技術團隊，進行高質量的現場拍攝和音頻錄製。"
      },
      {
        step: 3,
        title: "後期製作",
        description: "進行素材剪輯、調色、音效設計和字幕製作，確保最終成品的專業質量。"
      },
      {
        step: 4,
        title: "交付與優化",
        description: "提供多格式輸出（4K、1080p、社交媒體等），並根據客戶反饋進行修改。"
      }
    ],
    
    caseStudies: [
      {
        title: "豐澤集團企業宣傳片",
        client: "豐澤集團",
        description: "為豐澤集團製作企業宣傳片，展現其作為香港領先電器零售商的創新服務與專業形象。",
        results: ["精準呈現品牌理念", "有效提升品牌形象", "獲客戶高度評價"],
        image: "https://img.youtube.com/vi/ufcwr4D9y9g/maxresdefault.jpg",
        videoUrl: "https://youtu.be/ufcwr4D9y9g"
      },
      {
        title: "XTransfer - Hong Kong FinTech Week",
        client: "XTransfer",
        description: "拍攝香港金融科技周及StartmeupHK創業節活動花絮，記錄XTransfer參展精彩時刻。",
        results: ["完整記錄活動盛況", "展現企業國際視野", "社交媒體廣泛傳播"],
        image: "https://img.youtube.com/vi/h9B6M1trH38/maxresdefault.jpg",
        videoUrl: "https://youtu.be/h9B6M1trH38"
      },
      {
        title: "MoreTickets 15秒電視廣告",
        client: "MoreTickets",
        description: "製作15秒電視廣告(TVC)，簡潔有力傳達門票平台的便捷與可靠。",
        results: ["精煉創意概念", "高效訊息傳達", "多平台投放適用"],
        image: "https://img.youtube.com/vi/j30vGuILHwI/maxresdefault.jpg",
        videoUrl: "https://youtu.be/j30vGuILHwI"
      },
      {
        title: "an ordinary project (易賞錢訪問)",
        client: "易賞錢",
        description: "製作品牌人物專訪影片，透過真實故事展現易賞錢平台的價值與願景。",
        results: ["人物故事動人", "品牌連結自然", "情感共鳴強烈"],
        image: "https://img.youtube.com/vi/qO5514Z1bvA/maxresdefault.jpg",
        videoUrl: "https://youtu.be/qO5514Z1bvA"
      }
    ],
    
    testimonials: [
      {
        quote: "KiraFilm 團隊對我們品牌理念的的理解非常透徹，製作出的企業宣傳片完美展現了豐澤的專業形象。",
        author: "市場部主管",
        role: "市場總監",
        company: "豐澤集團"
      },
      {
        quote: "活動花絮拍攝得非常專業，完整記錄了我們在FinTech Week的精彩時刻，影片質素超出預期！",
        author: "活動負責人",
        role: "品牌推廣經理",
        company: "XTransfer"
      },
      {
        quote: "15秒TVC簡潔有力，完美傳達了我們平台的核心理念，投放後反應熱烈，非常滿意！",
        author: "創辦人",
        role: "CEO",
        company: "MoreTickets"
      },
      {
        quote: "訪問影片拍得很細膩，真實呈現了品牌故事，觀眾反應很好，大推KiraFilm的專業服務！",
        author: "市場部主管",
        role: "市場總監",
        company: "易賞錢"
      }
    ],
    
    packages: [
      {
        name: "純現場攝錄",
        description: "通常以小時或半天/全日計費，包含1名攝錄師及基本器材，不含剪接。",
        features: ["以小時或半天/全日計費", "1名攝錄師及基本器材", "不含剪接"],
        price: "$1,800 – $9,000"
      },
      {
        name: "活動精華短片 (Full Production)",
        description: "包含現場拍攝及後期剪輯（通常 2-5 分鐘），適合一般公司活動、記者會或小型展覽。",
        features: ["現場拍攝", "後期剪輯（2-5 分鐘）", "適合公司活動、記者會或小型展覽"],
        price: "$2,000 – $20,000"
      },
      {
        name: "社交媒體短片 (Reels/Shorts)",
        description: "針對 IG/FB 製作的短節奏影片，長度多在 1 分鐘內。",
        features: ["針對 IG/FB 平台", "短節奏影片", "長度多在 1 分鐘內"],
        price: "$1,500 – $8,000"
      },
      {
        name: "大型/高端活動紀錄",
        description: "涉及多機位捕捉、現場收音、航拍，甚至需要「早拍晚播」等即日剪片服務。",
        features: ["多機位捕捉", "現場收音、航拍", "「早拍晚播」即日剪片"],
        price: "$30,000 – $100,000+"
      }
    ]
  },
  
  "photography": {
    id: "photography",
    slug: "photography",
    title: "拍攝相片",
    titleEn: "Photography",
    subtitle: "捕捉每一個精彩瞬間",
    description: "專業攝影服務，從企業活動到產品拍攝，我們用鏡頭記錄您最重要的時刻。",
    heroImage: "/photography-hero.jpg",
    icon: "📷",
    color: "oklch(0.52 0.09 65)",
    
    overview: "我們的攝影團隊擁有豐富的商業攝影經驗，精通各種攝影風格和技術。無論是企業活動、產品拍攝還是人物肖像，我們都能提供高質量的視覺內容。",
    
    process: [
      {
        step: 1,
        title: "需求溝通",
        description: "了解您的攝影需求、風格偏好和預期成果。"
      },
      {
        step: 2,
        title: "現場拍攝",
        description: "使用專業相機和燈光設備，進行高質量的現場拍攝。"
      },
      {
        step: 3,
        title: "圖片選編",
        description: "精心挑選最佳照片，進行初步篩選和分類。"
      },
      {
        step: 4,
        title: "後期修飾",
        description: "進行色彩調整、修飾和優化，確保每張照片的完美呈現。"
      }
    ],
    
    caseStudies: [
      {
        title: "企業年會攝影",
        client: "科技公司 TechCorp",
        description: "為 TechCorp 年會拍攝 500+ 張高質量照片，涵蓋主舞台、互動環節和嘉賓採訪。",
        results: ["交付 200+ 精選照片", "客戶滿意度 98%", "社交媒體使用 150+"],
        image: "/manus-storage/DSC05216_e98a5a6f.jpg"
      },
      {
        title: "產品拍攝系列",
        client: "時尚品牌 StyleHub",
        description: "為 StyleHub 新季產品進行專業拍攝，包括單品和搭配展示。",
        results: ["拍攝 300+ 產品照片", "轉化率提升 45%", "Instagram 互動增加 60%"],
        image: "/manus-storage/KT1015_c73f1a44.jpg"
      }
    ],
    
    testimonials: [
      {
        quote: "KiraFilm 的攝影師非常專業，他們捕捉到了我們活動的精髓，照片質量令人印象深刻。",
        author: "陳先生",
        role: "活動策劃",
        company: "TechCorp"
      },
      {
        quote: "婚禮當日節奏好快，但 KiraFilm 依然好準確咁記錄到每個重要瞬間，由誓詞到親友互動都影得好自然，交付出嚟嘅作品集我哋非常滿意。",
        author: "林小姐",
        role: "新娘",
        company: "Wedding Client"
      },
      {
        quote: "我哋用咗 KiraFilm 做產品相，佢哋對燈光同質感好講究，成套產品圖風格一致又乾淨，放上網店之後視覺更專業，客人查詢都多咗。",
        author: "黃先生",
        role: "品牌負責人",
        company: "Product Brand"
      },
      {
        quote: "小朋友同運動/表演活動都好難拍，但 KiraFilm 好有耐性，亦好識捕捉動作同表情，成輯相好有故事感，做成作品集真係好值得收藏。",
        author: "張太",
        role: "家長",
        company: "Kids & Sports Client"
      }
    ],
    
    packages: [
      {
        name: "商業與產品攝影",
        description: "適合電商、餐飲或品牌宣傳，按張數或時數計費",
        features: ["按張計費：每張 HK$150 – $500+", "半天 (4小時)：HK$2,000 – $6,000", "全天 (8小時)：HK$4,000 – $10,000+", "食物攝影：每小時 HK$500 – $1,800"],
        price: "HK$150 /張起"
      },
      {
        name: "活動攝影",
        description: "適用於公司周年晚宴、產品發佈會或私人派對",
        features: ["基本套餐 (2-4小時)：HK$1,200 – $2,400", "標準套餐 (4-8小時)：HK$2,400 – $4,800", "大型活動 (8小時以上)：按實際報價"],
        price: "HK$1,200 起"
      },
      {
        name: "註冊及外景攝影",
        description: "預約2-4小時，涵蓋註冊過程、家人合照及外景拍攝",
        features: ["註冊過程拍攝", "家人大合照", "Snapshots 抓拍", "註冊地點外拍攝相片", "基礎後期修飾"],
        price: "HK$1,200 – $2,400"
      }
    ]
  },
  
  "instant-photo-printing": {
    id: "instant-photo-printing",
    slug: "instant-photo-printing",
    title: "即場印相服務",
    titleEn: "Instant Photo Printing",
    subtitle: "婚禮、宴會及活動即場派相",
    description: "提供即場印相服務，4R相片每張只需8秒即可完成，並可提供雲端相簿直播服務。",
    heroImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=600&fit=crop",
    icon: "🖨️",
    color: "oklch(0.52 0.09 65)",
    
    overview: "KiraFilm 提供專業的即場印相服務，適合婚禮、宴會及各類活動。我們帶備電腦及特快熱昇華打印機，4R相片每張只需約8秒即可完成。另設無限列印服務及Photo Booth即影即有自拍印相機租用。",
    
    process: [
      {
        step: 1,
        title: "活動現場架設",
        description: "攝影師及印相員提前到達，架設電腦、打印機及燈光設備。"
      },
      {
        step: 2,
        title: "即場拍攝",
        description: "使用全片幅專業單反/無反相機（約2000萬像素）進行現場拍攝。"
      },
      {
        step: 3,
        title: "即場修圖及打印",
        description: "即場調整亮度、色溫、水平及裁切，以600dpi高精度打印光面相片。"
      },
      {
        step: 4,
        title: "相套包裝",
        description: "相片可配搭預設定製相套，即時派發給賓客。"
      }
    ],
    
    techStack: [
      {
        category: "打印設備",
        tools: ["特快熱昇華打印機", "600dpi高精度", "4R光面相紙", "每張8秒"]
      },
      {
        category: "即場修圖",
        tools: ["亮度調整", "色溫校正", "水平修正", "專業裁切"]
      },
      {
        category: "加值服務",
        tools: ["雲端相簿連結", "定製相套", "無限列印選項"]
      }
    ],
    
    caseStudies: [
      {
        title: "婚禮即場印相",
        client: "新人夫婦",
        description: "為婚禮提供即場印相服務，讓賓客即場帶走美好回憶。",
        results: ["3小時印製200張", "賓客滿意度98%", "即場帶走美好回憶"],
        image: "/instant-photo-printing/instant-01.jpg"
      },
      {
        title: "百日宴即場派相",
        client: "百日晏",
        description: "為百日晏活動提供即場拍攝及打印，並以定製相套即場派發相片。",
        results: ["即場拍攝及修圖", "快速打印派發", "提升賓客互動體驗"],
        image: "/instant-photo-printing/instant-02.jpg"
      },
      {
        title: "企業周年活動",
        client: "飛機維修公司",
        description: "為企業周年活動提供即場印相，搭配品牌定制相套。",
        results: ["4小時印製300張", "品牌曝光提升", "社交媒體分享200+"],
        image: "/instant-photo-printing/instant-03.jpg"
      }
    ],
    
    testimonials: [
      {
        quote: "KiraFilm的即場印相服務非常專業，賓客都很開心能即場帶走相片，大推！",
        author: "陳小姐",
        role: "新娘",
        company: "婚禮客戶"
      },
      {
        quote: "打印速度很快，質素也很好，相套設計精美，大推！",
        author: "李先生",
        role: "活動策劃",
        company: "企業客戶"
      }
    ],
    
    packages: [
      {
        name: "4R標準套餐(無限印4R)",
        description: "適合婚禮、宴會或活動等不同場合",
        features: ["1名攝影師及1名印相員", "全片幅專業相機", "600dpi 4R光面相片", "即場修圖", "每張約8秒", "預設相套或透明膠套"],
        price: "HK$3,480 (2小時) / $4,680 (3小時) / $5,880 (4小時)"
      },
    ]
  }
};

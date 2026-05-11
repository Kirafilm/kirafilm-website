/* =============================================================================
   HOME PAGE — KiraFilm Editorial Minimalism
   Sections: Hero (Showreel embed), Featured Works, Services, CTA
   Design: Full-screen hero with YouTube embed, asymmetric work grid
   ============================================================================= */

import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Play, ArrowRight, Film, Camera, Printer } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import ServiceCard from "@/components/ServiceCard";
import { featuredVideos, showreel } from "@/lib/videoData";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607833586/HHDaCLE4AiyyAVqiR9GkXM/kirafilm-hero-studio-nYirhHjbqGcgwJG2LfK2Aw.webp";
const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607833586/HHDaCLE4AiyyAVqiR9GkXM/kirafilm-about-bg-oZ2GwQCbKUcRns97B8i3SH.webp";

const mainServices = [
  { label: "影片製作", labelEn: "Video Production", desc: "從企業活動到品牌宣傳，我們提供全方位的專業影像製作服務。" },
  { label: "拍攝相片", labelEn: "Photography", desc: "高質素照片攝影，捕捉每一個精彩瞬間與細節。" },
  { label: "即場印相", labelEn: "Instant Photo Printing", desc: "婚禮、宴會及活動即場派相服務，4R相片每張只需8秒即可完成。" },
];

const videoServices = [
  { label: "活動花絮", labelEn: "Event Videos", desc: "企業活動、慈善晚宴、工作坊、展銷會等各類活動的專業記錄。" },
  { label: "人物專訪", labelEn: "Interview", desc: "深度訪談、業務推廣、品牌故事，以影像呈現人物魅力。" },
  { label: "企業影片", labelEn: "Corporate", desc: "公司介紹、員工培訓、品牌宣傳，提升企業形象的專業製作。" },
  { label: "社交媒體", labelEn: "Social Media", desc: "為 Instagram、Facebook、YouTube 度身訂造的短片內容。" },
  { label: "宣傳影片", labelEn: "Promo Video", desc: "產品推廣、服務介紹，以視覺說服力帶動業務增長。" },
  { label: "婚禮攝錄", labelEn: "Wedding", desc: "捕捉每一個珍貴瞬間，為您留下永恆的婚禮回憶。" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Home() {
  const [showrealOpen, setShowreelOpen] = useState(false);
  const { ref: worksRef, inView: worksInView } = useInView();
  const { ref: mainServicesRef, inView: mainServicesInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();

  return (
    <div className="min-h-screen">
      {/* ============================================================
          HERO SECTION — Full-screen with background image
          ============================================================ */}
      <section
        className="relative w-full flex items-end"
        style={{ height: "100svh", minHeight: "600px" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_BG}
            alt="KiraFilm Production"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay — bottom-heavy for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container pb-16 md:pb-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p
              className="kf-label text-white/60 mb-5 animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              Hong Kong Video Production
            </p>

            {/* Main headline */}
            <h1
              className="font-display text-white mb-6 animate-fade-up"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                lineHeight: 1.05,
                fontWeight: 600,
                animationDelay: "0.2s",
                opacity: 0,
              }}
            >
              We Frame<br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>Every Story</em>
            </h1>

            {/* Subtitle */}
            <p
              className="font-body text-white/70 text-base md:text-lg mb-10 max-w-xl animate-fade-up"
              style={{ fontWeight: 300, animationDelay: "0.35s", opacity: 0 }}
            >
              影‧想製作 — 專業影像製作，記錄每一個珍貴瞬間
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              {/* Showreel Button */}
              <button
                onClick={() => setShowreelOpen(true)}
                className="flex items-center gap-3 bg-white text-[oklch(0.18_0.005_65)] px-6 py-3 hover:bg-[oklch(0.96_0.004_65)] transition-colors duration-300 font-body text-sm"
                style={{ fontWeight: 400, letterSpacing: "0.05em" }}
              >
                <Play size={14} fill="currentColor" />
                Watch Showreel
              </button>

              {/* Work Link */}
              <Link href="/work">
                <span className="flex items-center gap-2 border border-white/50 text-white px-6 py-3 hover:border-white hover:bg-white/10 transition-all duration-300 font-body text-sm" style={{ fontWeight: 400, letterSpacing: "0.05em" }}>
                  View Our Work
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-12 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/30 animate-pulse" />
          <span className="kf-label text-white/40" style={{ writingMode: "vertical-rl" }}>
            SCROLL
          </span>
        </div>
      </section>

      {/* Showreel Modal */}
      {showrealOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setShowreelOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors kf-label"
              onClick={() => setShowreelOpen(false)}
            >
              CLOSE ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${showreel.videoId}?autoplay=1&rel=0`}
                title="KiraFilm Production Showreel"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          FEATURED WORKS SECTION
          ============================================================ */}
      <section className="py-24 md:py-32 bg-white" ref={worksRef}>
        <div className="container">
          {/* Section header */}
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between mb-14 transition-all duration-700 ${
              worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div>
              <p className="kf-label text-[oklch(0.55_0.008_65)] mb-3">Selected Works</p>
              <h2
                className="font-display text-[oklch(0.18_0.005_65)]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, lineHeight: 1.1 }}
              >
                Recent Projects
              </h2>
            </div>
            <Link href="/work">
              <span className="mt-6 md:mt-0 flex items-center gap-2 kf-label text-[oklch(0.55_0.008_65)] hover:text-[oklch(0.52_0.09_65)] transition-colors duration-300">
                View All Work <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Row 1: Large left (7 cols) + small right (5 cols) */}
            <div
              className={`md:col-span-7 transition-all duration-700 delay-100 ${
                worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <VideoCard video={featuredVideos[0]} size="large" />
            </div>
            <div
              className={`md:col-span-5 transition-all duration-700 delay-200 ${
                worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <VideoCard video={featuredVideos[1]} size="large" />
            </div>

            {/* Row 2: Medium left (5 cols) + Medium-large right (7 cols) */}
            {/* 調整：將 featuredVideos[2] (荃灣廣場) 設為 5 欄，將 featuredVideos[3] (貓瘟) 設為 7 欄 */}
            <div
              className={`md:col-span-5 transition-all duration-700 delay-300 ${
                worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <VideoCard video={featuredVideos[2]} size="large" />
            </div>
            <div
              className={`md:col-span-7 transition-all duration-700 delay-400 ${
                worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <VideoCard video={featuredVideos[3]} size="large" />
            </div>

            {/* Row 3: Equal 6-6 */}
            <div
              className={`md:col-span-6 transition-all duration-700 delay-500 ${
                worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <VideoCard video={featuredVideos[4]} size="large" />
            </div>
            <div
              className={`md:col-span-6 transition-all duration-700 delay-[600ms] ${
                worksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <VideoCard video={featuredVideos[5]} size="large" />
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================
          OUR SERVICES SECTION (Main 4 Services)
          ============================================================ */}
      <section className="py-24 md:py-32 bg-white" ref={mainServicesRef}>
        <div className="container">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              mainServicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="kf-label text-[oklch(0.55_0.008_65)] mb-3">Our Services</p>
            <h2
              className="font-display text-[oklch(0.18_0.005_65)] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, lineHeight: 1.1 }}
            >
              What We Offer
            </h2>
            <p className="font-body text-[oklch(0.55_0.008_65)] max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              從影像製作到即場印相，我們提供全面的專業攝影與製作服務。
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              label={mainServices[0].label}
              labelEn={mainServices[0].labelEn}
              desc={mainServices[0].desc}
              icon={<Film size={32} />}
              inView={mainServicesInView}
              delay={0}
              href="/service/video-production"
            />
            <ServiceCard
              label={mainServices[1].label}
              labelEn={mainServices[1].labelEn}
              desc={mainServices[1].desc}
              icon={<Camera size={32} />}
              inView={mainServicesInView}
              delay={100}
              href="/service/photography"
            />
            <ServiceCard
              label={mainServices[2].label}
              labelEn={mainServices[2].labelEn}
              desc={mainServices[2].desc}
              icon={<Printer size={32} />}
              inView={mainServicesInView}
              delay={200}
              href="/service/instant-photo-printing"
            />
          </div>
        </div>
      </section>
      
      {/* ============================================================
          ABOUT TEASER SECTION
          ============================================================ */}
      <section className="py-24 md:py-32 bg-white" ref={ctaRef}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div
              className={`relative transition-all duration-700 ${
                ctaInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ABOUT_BG}
                  alt="KiraFilm Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-[oklch(0.18_0.005_65)] text-white p-6 hidden md:block">
                <p className="font-display text-4xl text-white" style={{ fontWeight: 600 }}>156+</p>
                <p className="kf-label text-white/50 mt-1">Videos Produced</p>
              </div>
            </div>

            {/* Text */}
            <div
              className={`transition-all duration-700 delay-200 ${
                ctaInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4">About KiraFilm</p>
              <h2
                className="font-display text-[oklch(0.18_0.005_65)] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}
              >
                Crafting Stories<br />
                <em style={{ fontStyle: "italic", fontWeight: 400 }}>Through the Lens</em>
              </h2>
              <p className="font-body text-[oklch(0.55_0.008_65)] text-base leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                KiraFilm 是香港專業影像製作公司，致力於以影像記錄每一個珍貴瞬間。我們服務範圍涵蓋企業活動、人物專訪、品牌宣傳及婚禮攝錄，以細膩的視角和專業的技術，為客戶呈現最真實的故事。
              </p>
              <Link href="/about">
                <span className="flex items-center gap-2 font-body text-sm text-[oklch(0.18_0.005_65)] hover:text-[oklch(0.52_0.09_65)] transition-colors duration-300 border-b border-[oklch(0.18_0.005_65)] hover:border-[oklch(0.52_0.09_65)] pb-1 w-fit" style={{ fontWeight: 400, letterSpacing: "0.05em" }}>
                  Learn More About Us <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT CTA SECTION
          ============================================================ */}
      <section className="py-24 md:py-32 bg-[oklch(0.18_0.005_65)]">
        <div className="container text-center">
          <p className="kf-label text-white/40 mb-5">Get In Touch</p>
          <h2
            className="font-display text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1 }}
          >
            Let's Create<br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>Something Together</em>
          </h2>
          <p className="font-body text-white/50 text-base mb-10 max-w-md mx-auto" style={{ fontWeight: 300 }}>
            無論是企業活動、品牌宣傳還是婚禮攝錄，我們都期待與您合作。
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-3 bg-white text-[oklch(0.18_0.005_65)] px-8 py-4 hover:bg-[oklch(0.96_0.004_65)] transition-colors duration-300 font-body text-sm" style={{ fontWeight: 400, letterSpacing: "0.08em" }}>
              CONTACT US <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

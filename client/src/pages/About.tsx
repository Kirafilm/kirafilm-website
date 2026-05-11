/* =============================================================================
   ABOUT PAGE — KiraFilm Editorial Minimalism
   Brand story, philosophy, and team introduction
   ============================================================================= */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ABOUT_BG = "/kt.jpg";
const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663607833586/HHDaCLE4AiyyAVqiR9GkXM/kirafilm-services-bg-4Yk8pjP4TDEN34vsx4aaRs.webp";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const values = [
  {
    num: "01",
    title: "真實的記錄",
    titleEn: "Authentic Storytelling",
    desc: "我們相信每個故事都有其獨特的價值。我們的鏡頭不只是記錄事件，而是捕捉其中的情感與意義。",
  },
  {
    num: "02",
    title: "專業的技術",
    titleEn: "Professional Craft",
    desc: "從前期策劃到後期製作，我們的每個環節都以最高標準執行，確保每一幀畫面都達到最佳品質。",
  },
  {
    num: "03",
    title: "客戶的信任",
    titleEn: "Client Partnership",
    desc: "我們視每個客戶為長期夥伴。深入了解客戶需求，以影像語言精準傳達品牌核心價值。",
  },
];

export default function About() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  const { ref: storyRef, inView: storyInView } = useInView();
  const { ref: valuesRef, inView: valuesInView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <div className="container pt-16 pb-0 md:pt-24">
        <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4 animate-fade-up">
          Our Story
        </p>
        <h1
          className="font-display text-[oklch(0.18_0.005_65)] animate-fade-up delay-100"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            opacity: 0,
          }}
        >
          About<br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>KiraFilm</em>
        </h1>
      </div>

      {/* ============================================================
          HERO IMAGE
          ============================================================ */}
      <div className="container mt-12 md:mt-16">
        <div className="aspect-[21/9] overflow-hidden animate-fade-up delay-200" style={{ opacity: 0 }}>
          <img
            src={ABOUT_BG}
            alt="KiraFilm Studio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ============================================================
          BRAND STORY
          ============================================================ */}
      <section className="py-20 md:py-28" ref={storyRef}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left: Large quote */}
            <div
              className={`md:col-span-5 transition-all duration-700 ${
                storyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="sticky top-24">
                <blockquote
                  className="font-display text-[oklch(0.18_0.005_65)]"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.3 }}
                >
                  "影像是時間的藝術，<br />每一幀都是永恆。"
                </blockquote>
                <div className="kf-divider mt-6 w-12" />
                <p className="kf-label text-[oklch(0.55_0.008_65)] mt-4">KiraFilm</p>
              </div>
            </div>

            {/* Right: Story text */}
            <div
              className={`md:col-span-7 transition-all duration-700 delay-200 ${
                storyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6 font-body text-[oklch(0.40_0.006_65)] text-base leading-relaxed" style={{ fontWeight: 300 }}>
                <p>
                  KiraFilm（影‧想製作）是一家立足香港的專業影像製作公司。我們的名字源於「影像」與「想像」的結合——我們相信，最好的影像作品不只是記錄現實，更能激發觀者的想像力與情感共鳴。
                </p>
                <p>
                  自成立以來，我們已為超過 100 個客戶製作了 156 支以上的影片，服務範圍涵蓋企業活動花絮、品牌宣傳影片、人物專訪、社交媒體內容及婚禮攝錄等多個領域。
                </p>
                <p>
                  我們的客戶包括大型企業、中小型商戶、非牟利機構及個人客戶。無論項目規模大小，我們都以同等的熱情與專業對待每一個委託。
                </p>
                <p>
                  我們深信，一支優質的影片不只是技術的展現，更是對客戶品牌故事的深刻理解與精準詮釋。這正是 KiraFilm 的核心價值所在。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          VALUES SECTION
          ============================================================ */}
      <section
        className="py-20 md:py-28"
        style={{ background: "oklch(0.97 0.003 65)" }}
        ref={valuesRef}
      >
        <div className="container">
          <div
            className={`mb-14 transition-all duration-700 ${
              valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="kf-label text-[oklch(0.55_0.008_65)] mb-3">Our Philosophy</p>
            <h2
              className="font-display text-[oklch(0.18_0.005_65)]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 600 }}
            >
              What We Believe
            </h2>
          </div>

          <div className="space-y-0">
            {values.map((v, i) => (
              <div
                key={v.num}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-[oklch(0.90_0.004_65)] transition-all duration-700 ${
                  valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="md:col-span-1">
                  <span className="font-display text-[oklch(0.82_0.006_65)] text-2xl" style={{ fontWeight: 400 }}>
                    {v.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-[oklch(0.18_0.005_65)] text-xl mb-1" style={{ fontWeight: 600 }}>
                    {v.title}
                  </h3>
                  <p className="kf-label text-[oklch(0.55_0.008_65)]">{v.titleEn}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="font-body text-[oklch(0.45_0.006_65)] leading-relaxed" style={{ fontWeight: 300 }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="kf-divider" />
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS SECTION
          ============================================================ */}
      <section className="py-20 md:py-28 bg-white" ref={statsRef}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {[
              { num: "156+", label: "Videos Produced", labelZh: "影片製作" },
              { num: "100+", label: "Happy Clients", labelZh: "滿意客戶" },
              { num: "6", label: "Service Types", labelZh: "服務類型" },
              { num: "238", label: "YouTube Subscribers", labelZh: "YouTube 訂閱" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center md:border-r md:border-[oklch(0.90_0.004_65)] last:border-0 transition-all duration-700 ${
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p
                  className="font-display text-[oklch(0.18_0.005_65)]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1 }}
                >
                  {stat.num}
                </p>
                <p className="kf-label text-[oklch(0.55_0.008_65)] mt-3">{stat.label}</p>
                <p className="font-body text-[oklch(0.72_0.006_65)] text-xs mt-1" style={{ fontWeight: 300 }}>
                  {stat.labelZh}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-20 md:py-24 bg-[oklch(0.18_0.005_65)]">
        <div className="container text-center">
          <p className="kf-label text-white/40 mb-5">Ready to Start?</p>
          <h2
            className="font-display text-white mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600 }}
          >
            Let's Work Together
          </h2>
          <Link href="/contact">
            <span className="inline-flex items-center gap-3 bg-white text-[oklch(0.18_0.005_65)] px-8 py-4 hover:bg-[oklch(0.96_0.004_65)] transition-colors duration-300 font-body text-sm" style={{ fontWeight: 400, letterSpacing: "0.08em" }}>
              GET IN TOUCH <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* =============================================================================
   SERVICE DETAIL PAGE — KiraFilm
   Sections: Hero, Overview, Process, Tech Stack, Case Studies, Testimonials, Packages
   ============================================================================= */

import { useState } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, CheckCircle2, Briefcase, Users, Play } from "lucide-react";
import { serviceDetails } from "@/lib/serviceDetails";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
  const { service } = useParams<{ service: string }>();
  const detail = service ? serviceDetails[service] : null;

  if (!detail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">服務未找到</h1>
        <Link href="/">
          <a className="text-[oklch(0.52_0.09_65)] hover:underline">返回首頁</a>
        </Link>
      </div>
    );
  }

  // Photography portfolio categories
  const [activeCategory, setActiveCategory] = useState("Events");
  const portfolioCategories = [
    { id: "Events", label: "活動", count: 25 },
    { id: "Wedding", label: "婚禮", count: 14 },
    { id: "Kids", label: "兒童", count: 6 },
    { id: "Performance", label: "表演", count: 12 },
    { id: "Product", label: "產品", count: 11 },
    { id: "Sports", label: "運動", count: 9 },
  ];

  const getPortfolioImages = (category: string) => {
    const images: Record<string, string[]> = {
      Events: Array.from({ length: 25 }, (_, i) => `/photography-gallery/Events/events-${String(i + 1).padStart(2, '0')}.jpg`),
      Wedding: Array.from({ length: 14 }, (_, i) => `/photography-gallery/Wedding/wedding-${String(i + 1).padStart(2, '0')}.jpg`),
      Kids: Array.from({ length: 6 }, (_, i) => `/photography-gallery/Kids/kids-${String(i + 1).padStart(2, '0')}.jpg`),
      Performance: Array.from({ length: 12 }, (_, i) => `/photography-gallery/Performance/performance-${String(i + 1).padStart(2, '0')}.jpg`),
      Product: Array.from({ length: 11 }, (_, i) => `/photography-gallery/Product/product-${String(i + 1).padStart(2, '0')}.jpg`),
      Sports: Array.from({ length: 9 }, (_, i) => `/photography-gallery/Sports/sports-${String(i + 1).padStart(2, '0')}.jpg`),
    };
    return images[category] || [];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back button */}
      <div className="sticky top-0 z-40 bg-white border-b border-[oklch(0.92_0.004_286.32)]">
        <div className="container py-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-[oklch(0.55_0.008_65)] hover:text-[oklch(0.52_0.09_65)] transition-colors">
              <ArrowLeft size={18} />
              <span>返回</span>
            </a>
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={detail.heroImage}
          alt={detail.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container">
            <p className="kf-label text-white mb-3">{detail.titleEn.toUpperCase()}</p>
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 600 }}
            >
              {detail.title}
            </h1>
            <p className="font-body text-white/90 max-w-2xl text-lg" style={{ fontWeight: 300 }}>
              {detail.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container max-w-3xl">
          <h2
            className="font-display text-[oklch(0.18_0.005_65)] mb-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
          >
            服務概覽
          </h2>
          <p className="font-body text-[oklch(0.55_0.008_65)] text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            {detail.overview}
          </p>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24 md:py-32 bg-[oklch(0.97_0.003_65)]">
        <div className="container">
          <h2
            className="font-display text-[oklch(0.18_0.005_65)] mb-16 text-center"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
          >
            工作流程
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detail.process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: detail.color }}
                  >
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-display text-[oklch(0.18_0.005_65)] mb-2"
                      style={{ fontWeight: 600 }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-body text-[oklch(0.55_0.008_65)] text-sm" style={{ fontWeight: 300 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
                {idx < detail.process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-[oklch(0.92_0.004_286.32)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack section */}
      {detail.techStack && detail.techStack.length > 0 && (
        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <h2
              className="font-display text-[oklch(0.18_0.005_65)] mb-16 text-center"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
            >
              技術棧
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detail.techStack.map((stack, idx) => (
                <div key={idx} className="bg-[oklch(0.97_0.003_65)] p-6 rounded-lg">
                  <h3
                    className="font-display text-[oklch(0.18_0.005_65)] mb-4"
                    style={{ fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    {stack.category}
                  </h3>
                  <ul className="space-y-2">
                    {stack.tools.map((tool, toolIdx) => (
                      <li key={toolIdx} className="flex items-center gap-2 text-[oklch(0.55_0.008_65)]">
                        <CheckCircle2 size={16} style={{ color: detail.color }} />
                        <span className="font-body text-sm" style={{ fontWeight: 300 }}>
                          {tool}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case studies section */}
      {detail.id === "photography" ? (
        <section className={`py-24 md:py-32 ${detail.techStack && detail.techStack.length > 0 ? 'bg-[oklch(0.97_0.003_65)]' : 'bg-white'}`}>
          <div className="container">
            <h2
              className="font-display text-[oklch(0.18_0.005_65)] mb-8 text-center"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
            >
              作品集
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {portfolioCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-body text-sm transition-all ${
                    activeCategory === category.id
                      ? "text-white"
                      : "bg-white border border-[oklch(0.92_0.004_286.32)] text-[oklch(0.55_0.008_65)] hover:border-[oklch(0.52_0.09_65)]"
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? detail.color : undefined,
                    fontWeight: 400,
                  }}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {getPortfolioImages(activeCategory).map((image, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${activeCategory} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        detail.caseStudies.length > 0 && (
          <section className={`py-24 md:py-32 ${detail.techStack && detail.techStack.length > 0 ? 'bg-[oklch(0.97_0.003_65)]' : 'bg-white'}`}>
            <div className="container">
              <h2
                className="font-display text-[oklch(0.18_0.005_65)] mb-16 text-center"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
              >
                精選項目
              </h2>
              <div className="space-y-12">
                {detail.caseStudies.map((caseStudy, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {idx % 2 === 0 ? (
                      <>
                        <div>
                          <h3
                            className="font-display text-[oklch(0.18_0.005_65)] mb-2"
                            style={{ fontSize: "1.5rem", fontWeight: 600 }}
                          >
                            {caseStudy.title}
                          </h3>
                          <p className="font-body text-[oklch(0.55_0.008_65)] mb-4" style={{ fontWeight: 300 }}>
                            <span className="font-semibold">客戶：</span> {caseStudy.client}
                          </p>
                          <p className="font-body text-[oklch(0.55_0.008_65)] mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                            {caseStudy.description}
                          </p>
                          <div className="space-y-2">
                            {caseStudy.results.map((result, resultIdx) => (
                              <div key={resultIdx} className="flex items-center gap-2">
                                <CheckCircle2 size={18} style={{ color: detail.color }} />
                                <span className="font-body text-[oklch(0.55_0.008_65)]" style={{ fontWeight: 300 }}>
                                  {result}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {caseStudy.videoUrl ? (
                          <a
                            href={caseStudy.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block w-full h-80 rounded-lg overflow-hidden group"
                          >
                            <img
                              src={caseStudy.image}
                              alt={caseStudy.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play size={28} style={{ color: detail.color }} fill={detail.color} />
                              </div>
                            </div>
                          </a>
                        ) : (
                          <img
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        )}
                      </>
                    ) : (
                      <>
                        {caseStudy.videoUrl ? (
                          <a
                            href={caseStudy.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block w-full h-80 rounded-lg overflow-hidden group"
                          >
                            <img
                              src={caseStudy.image}
                              alt={caseStudy.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play size={28} style={{ color: detail.color }} fill={detail.color} />
                              </div>
                            </div>
                          </a>
                        ) : (
                          <img
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        )}
                        <div>
                          <h3
                            className="font-display text-[oklch(0.18_0.005_65)] mb-2"
                            style={{ fontSize: "1.5rem", fontWeight: 600 }}
                          >
                            {caseStudy.title}
                          </h3>
                          <p className="font-body text-[oklch(0.55_0.008_65)] mb-4" style={{ fontWeight: 300 }}>
                            <span className="font-semibold">客戶：</span> {caseStudy.client}
                          </p>
                          <p className="font-body text-[oklch(0.55_0.008_65)] mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                            {caseStudy.description}
                          </p>
                          <div className="space-y-2">
                            {caseStudy.results.map((result, resultIdx) => (
                              <div key={resultIdx} className="flex items-center gap-2">
                                <CheckCircle2 size={18} style={{ color: detail.color }} />
                                <span className="font-body text-[oklch(0.55_0.008_65)]" style={{ fontWeight: 300 }}>
                                  {result}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      )}

      {/* Testimonials section */}
      {detail.testimonials.length > 0 && (
        <section className={`py-24 md:py-32 ${detail.techStack && detail.techStack.length > 0 ? 'bg-white' : 'bg-[oklch(0.97_0.003_65)]'}`}>
          <div className="container">
            <h2
              className="font-display text-[oklch(0.18_0.005_65)] mb-16 text-center"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
            >
              客戶推薦
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detail.testimonials.map((testimonial, idx) => (
                <div key={idx} className="border border-[oklch(0.92_0.004_286.32)] p-8 rounded-lg">
                  <p className="font-body text-[oklch(0.55_0.008_65)] mb-6 italic leading-relaxed" style={{ fontWeight: 300 }}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-display text-[oklch(0.18_0.005_65)] font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="font-body text-[oklch(0.55_0.008_65)] text-sm" style={{ fontWeight: 300 }}>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages section */}
      <section className={`py-24 md:py-32 ${detail.techStack && detail.techStack.length > 0 ? 'bg-[oklch(0.97_0.003_65)]' : 'bg-white'}`}>
        <div className="container">
          <h2
            className="font-display text-[oklch(0.18_0.005_65)] mb-4 text-center"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
          >
            服務規模與費用預算
          </h2>
          <p className="font-body text-[oklch(0.55_0.008_65)] mb-12 text-center max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            根據不同的服務範疇，活動影片製作的報價範圍如下：
          </p>
          <div className={cn("grid grid-cols-1 gap-6", detail.packages.length > 1 ? "md:grid-cols-2" : "max-w-3xl mx-auto")}>
            {detail.packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white border border-[oklch(0.92_0.004_286.32)] p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-4">
                  <h3
                    className="font-display text-[oklch(0.18_0.005_65)] min-w-0 break-words"
                    style={{ fontSize: "1.125rem", fontWeight: 600 }}
                  >
                    {pkg.name}
                  </h3>
                  {pkg.price && (
                    <span
                      className="font-display text-[oklch(0.52_0.09_65)] min-w-0 whitespace-normal break-words md:whitespace-nowrap md:text-right"
                      style={{ fontSize: "1.125rem", fontWeight: 600 }}
                    >
                      {pkg.price}
                    </span>
                  )}
                </div>
                <p className="font-body text-[oklch(0.55_0.008_65)] text-sm mb-4 leading-relaxed" style={{ fontWeight: 300 }}>
                  {pkg.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pkg.features.map((feature, featureIdx) => (
                    <span
                      key={featureIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[oklch(0.97_0.003_65)] rounded-full text-xs font-body text-[oklch(0.55_0.008_65)]"
                      style={{ fontWeight: 300 }}
                    >
                      <CheckCircle2 size={12} style={{ color: detail.color, flexShrink: 0 }} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className={`py-24 md:py-32 ${detail.techStack && detail.techStack.length > 0 ? 'bg-white' : 'bg-[oklch(0.97_0.003_65)]'}`}>
        <div className="container text-center">
          <h2
            className="font-display text-[oklch(0.18_0.005_65)] mb-6"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
          >
            準備開始了嗎？
          </h2>
          <p className="font-body text-[oklch(0.55_0.008_65)] mb-8 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            聯絡我們的團隊，討論您的項目需求並獲取定制報價。
          </p>
          <Link href="/contact">
            <a
              className="inline-block px-8 py-3 rounded text-white font-body font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: detail.color }}
            >
              聯絡我們
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

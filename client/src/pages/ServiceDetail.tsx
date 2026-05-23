/* =============================================================================
   SERVICE DETAIL PAGE — KiraFilm
   Sections: Hero, Overview, Process, Tech Stack, Case Studies, Testimonials, Packages
   ============================================================================= */

import { useParams, Link } from "wouter";
import { ArrowLeft, CheckCircle2, Briefcase, Users } from "lucide-react";
import { serviceDetails } from "@/lib/serviceDetails";

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
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <h2
            className="font-display text-[oklch(0.18_0.005_65)] mb-16 text-center"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
          >
            技術棧
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detail.techStack.map((stack, idx) => (
              <div key={idx} className="border border-[oklch(0.92_0.004_286.32)] p-6 rounded-lg">
                <h3
                  className="font-display text-[oklch(0.18_0.005_65)] mb-4"
                  style={{ fontWeight: 600 }}
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

      {/* Case studies section */}
      {detail.caseStudies.length > 0 && (
        <section className="py-24 md:py-32 bg-[oklch(0.97_0.003_65)]">
          <div className="container">
            <h2
              className="font-display text-[oklch(0.18_0.005_65)] mb-16 text-center"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
            >
              案例研究
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
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-80 object-cover rounded-lg"
                      />
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
      )}

      {/* Testimonials section */}
      {detail.testimonials.length > 0 && (
        <section className="py-24 md:py-32 bg-white">
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
      <section className="py-24 md:py-32 bg-[oklch(0.97_0.003_65)]">
        <div className="container">
          <h2
            className="font-display text-[oklch(0.18_0.005_65)] mb-16 text-center"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600 }}
          >
            服務套餐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detail.packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white border border-[oklch(0.92_0.004_286.32)] p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3
                  className="font-display text-[oklch(0.18_0.005_65)] mb-2"
                  style={{ fontSize: "1.25rem", fontWeight: 600 }}
                >
                  {pkg.name}
                </h3>
                <p className="font-body text-[oklch(0.55_0.008_65)] mb-6 text-sm" style={{ fontWeight: 300 }}>
                  {pkg.description}
                </p>
                {pkg.price && (
                  <p
                    className="font-display text-[oklch(0.52_0.09_65)] mb-6"
                    style={{ fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    {pkg.price}
                  </p>
                )}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} style={{ color: detail.color, flexShrink: 0 }} className="mt-0.5" />
                      <span className="font-body text-[oklch(0.55_0.008_65)] text-sm" style={{ fontWeight: 300 }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  style={{ backgroundColor: detail.color }}
                  className="w-full py-3 text-white rounded font-body font-semibold hover:opacity-90 transition-opacity"
                >
                  聯絡我們
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 md:py-32 bg-white">
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

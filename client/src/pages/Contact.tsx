/* =============================================================================
   CONTACT PAGE — KiraFilm Editorial Minimalism
   Minimal contact form + contact info
   ============================================================================= */

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const serviceOptions = [
  "活動花絮 Event Videos",
  "人物專訪 Interview",
  "企業影片 Corporate",
  "社交媒體 Social Media",
  "宣傳影片 Promo",
  "攝影服務 Photography",
  "即場印相 Instant Photo Printing",
  "其他 Other",
];

export default function Contact() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

      if (!serviceId || !templateId || !publicKey) {
        setSubmitError("表單暫時未完成設定，請稍後再試。");
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          phone: formState.phone,
          service: formState.service || "其他 Other",
          message: formState.message,
        },
        {
          publicKey,
        }
      );

      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS send failed", err);
      const maybeErr = err as unknown as { status?: number; text?: string; message?: string };

      const detail =
        maybeErr?.text ||
        maybeErr?.message ||
        (typeof err === "string" ? err : "");

      setSubmitError(detail ? `提交失敗：${detail}` : "提交失敗，請稍後再試。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <div className="container pt-16 pb-0 md:pt-24">
        <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4 animate-fade-up">
          Get In Touch
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
          Contact<br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>KiraFilm</em>
        </h1>
        <div className="kf-divider mt-10 md:mt-14" />
      </div>

      {/* ============================================================
          CONTACT CONTENT
          ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
            {/* Left: Contact Info */}
            <div className="md:col-span-4">
              <div className="space-y-10">
                <div>
                  <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4">Email</p>
                  <a
                    href="mailto:kirafilm@outlook.com"
                    className="font-body text-[oklch(0.18_0.005_65)] hover:text-[oklch(0.52_0.09_65)] transition-colors duration-300 text-base"
                    style={{ fontWeight: 400 }}
                  >
                    kirafilm@outlook.com
                  </a>
                </div>

                <div>
                  <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4">WhatsApp</p>
                  <a
                    href="https://wa.me/85267437216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[oklch(0.18_0.005_65)] hover:text-[oklch(0.52_0.09_65)] transition-colors duration-300 text-base"
                    style={{ fontWeight: 400 }}
                  >
                    +852 6743 7216
                  </a>
                </div>

                <div>
                  <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4">Location</p>
                  <p className="font-body text-[oklch(0.18_0.005_65)] text-base" style={{ fontWeight: 400 }}>
                    Hong Kong
                  </p>
                </div>

                <div className="kf-divider" />

                <div>
                  <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4">Services</p>
                  <div className="space-y-2">
                    {serviceOptions.slice(0, 7).map((s) => (
                      <p key={s} className="font-body text-[oklch(0.55_0.008_65)] text-sm" style={{ fontWeight: 300 }}>
                        {s}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-8">
              {submitted ? (
                <div className="flex flex-col items-start justify-center h-full py-12">
                  <div className="kf-divider w-12 mb-8" />
                  <h2
                    className="font-display text-[oklch(0.18_0.005_65)] mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600 }}
                  >
                    Thank You
                  </h2>
                  <p className="font-body text-[oklch(0.55_0.008_65)] text-base leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                    已成功提交，我們將盡快回覆您。
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="kf-label text-[oklch(0.55_0.008_65)] hover:text-[oklch(0.52_0.09_65)] transition-colors duration-300"
                  >
                    ← Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {submitError && (
                    <div className="border border-red-200 bg-red-50 text-red-700 p-4 rounded-lg font-body text-sm" style={{ fontWeight: 300 }}>
                      {submitError}
                    </div>
                  )}
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="kf-label text-[oklch(0.55_0.008_65)] block mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full border-b border-[oklch(0.90_0.004_65)] bg-transparent py-3 font-body text-[oklch(0.18_0.005_65)] text-sm focus:outline-none focus:border-[oklch(0.18_0.005_65)] transition-colors duration-300 placeholder:text-[oklch(0.82_0.006_65)]"
                        style={{ fontWeight: 300 }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="kf-label text-[oklch(0.55_0.008_65)] block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full border-b border-[oklch(0.90_0.004_65)] bg-transparent py-3 font-body text-[oklch(0.18_0.005_65)] text-sm focus:outline-none focus:border-[oklch(0.18_0.005_65)] transition-colors duration-300 placeholder:text-[oklch(0.82_0.006_65)]"
                        style={{ fontWeight: 300 }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Service row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="kf-label text-[oklch(0.55_0.008_65)] block mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full border-b border-[oklch(0.90_0.004_65)] bg-transparent py-3 font-body text-[oklch(0.18_0.005_65)] text-sm focus:outline-none focus:border-[oklch(0.18_0.005_65)] transition-colors duration-300 placeholder:text-[oklch(0.82_0.006_65)]"
                        style={{ fontWeight: 300 }}
                        placeholder="+852 XXXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="kf-label text-[oklch(0.55_0.008_65)] block mb-2">
                        Service Type
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full border-b border-[oklch(0.90_0.004_65)] bg-transparent py-3 font-body text-[oklch(0.18_0.005_65)] text-sm focus:outline-none focus:border-[oklch(0.18_0.005_65)] transition-colors duration-300"
                        style={{ fontWeight: 300 }}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="kf-label text-[oklch(0.55_0.008_65)] block mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full border-b border-[oklch(0.90_0.004_65)] bg-transparent py-3 font-body text-[oklch(0.18_0.005_65)] text-sm focus:outline-none focus:border-[oklch(0.18_0.005_65)] transition-colors duration-300 resize-none placeholder:text-[oklch(0.82_0.006_65)]"
                      style={{ fontWeight: 300 }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex items-center gap-3 bg-[oklch(0.18_0.005_65)] text-white px-8 py-4 hover:bg-[oklch(0.52_0.09_65)] transition-colors duration-300 font-body text-sm"
                      style={{ fontWeight: 400, letterSpacing: "0.08em" }}
                    >
                      {submitting ? "SENDING..." : "SEND MESSAGE"} <Send size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

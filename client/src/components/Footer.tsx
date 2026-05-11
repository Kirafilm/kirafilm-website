/* =============================================================================
   FOOTER — KiraFilm Editorial Minimalism
   Minimal footer with brand, links, and contact info
   ============================================================================= */

import { Link } from "wouter";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.005_65)] text-white py-16 mt-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="font-display text-2xl mb-4"
              style={{ fontWeight: 600, letterSpacing: "0.12em" }}
            >
              KIRAFILM
            </h3>
            <p className="text-white/50 text-sm leading-relaxed font-body" style={{ fontWeight: 300 }}>
              影‧想製作<br />
              Hong Kong Professional<br />
              Visual Production
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="kf-label text-white/40 mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Work", href: "/work" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-body">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="kf-label text-white/40 mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:kirafilm@outlook.com"
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-body"
              >
                kirafilm@outlook.com
              </a>
              <a
                href="https://wa.me/85267437216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-body"
              >
                WhatsApp: 6743 7216
              </a>
                          </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="kf-label text-white/40 mb-4">Follow Us</p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/kirafilmart/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/kirafilmart/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.youtube.com/@kirafilmart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://wa.me/85267437216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-body" style={{ letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} KiraFilm. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-body" style={{ letterSpacing: "0.08em" }}>
            HONG KONG
          </p>
        </div>
      </div>
    </footer>
  );
}

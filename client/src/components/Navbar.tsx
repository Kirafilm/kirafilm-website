/* =============================================================================
   NAVBAR — KiraFilm Editorial Minimalism
   Ultra-thin top bar, left brand, right sparse nav links
   Transparent on hero, white on scroll
   ============================================================================= */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-sm border-b border-[oklch(0.90_0.004_65)]"
        }`}
        style={{ height: "64px" }}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Brand */}
          <Link href="/">
            <span
              className={`font-display text-lg tracking-widest transition-colors duration-500 ${
                isTransparent ? "text-white" : "text-[oklch(0.18_0.005_65)]"
              }`}
              style={{ fontWeight: 600, letterSpacing: "0.15em" }}
            >
              KIRAFILM
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`kf-nav-link transition-colors duration-500 ${
                    isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-[oklch(0.18_0.005_65)]"
                  } ${location === link.href ? "active" : ""}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-[oklch(0.18_0.005_65)]"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10"
          style={{ paddingTop: "64px" }}
        >
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href}>
              <span
                className="font-display text-4xl text-[oklch(0.18_0.005_65)] hover:text-[oklch(0.52_0.09_65)] transition-colors duration-300"
                style={{
                  fontWeight: 600,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <div className="kf-divider w-16 mt-4" />
          <a
            href="mailto:kirafilm@outlook.com"
            className="kf-label hover:text-[oklch(0.52_0.09_65)] transition-colors"
          >
            kirafilm@outlook.com
          </a>
        </div>
      )}
    </>
  );
}

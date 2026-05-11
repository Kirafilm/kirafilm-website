/* =============================================================================
   WORK PAGE — KiraFilm Editorial Minimalism
   Filterable video grid with category tabs
   ============================================================================= */

import { useState, useEffect, useRef } from "react";
import VideoCard from "@/components/VideoCard";
import { categories, allVideos, getVideosByCategory } from "@/lib/videoData";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayedVideos, setDisplayedVideos] = useState(getVideosByCategory("all"));
  const [animating, setAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const headerRef = useRef<HTMLDivElement>(null);

  const videosPerPage = 9;
  const totalPages = Math.ceil(displayedVideos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = displayedVideos.slice(startIndex, endIndex);

  const [activePhotoCategory, setActivePhotoCategory] = useState("Events");
  const photoCategories = [
    { id: "Events", label: "Events", count: 25 },
    { id: "Wedding", label: "Wedding", count: 14 },
    { id: "Product", label: "Product", count: 11 },
    { id: "Kids", label: "Kids", count: 6 },
    { id: "Performance", label: "Performance", count: 12 },
    { id: "Sports", label: "Sports", count: 9 },
  ];

  const getPhotoImages = (category: string) => {
    const images: Record<string, string[]> = {
      Events: Array.from({ length: 25 }, (_, i) => `/photography-gallery/Events/events-${String(i + 1).padStart(2, "0")}.jpg`),
      Wedding: Array.from({ length: 14 }, (_, i) => `/photography-gallery/Wedding/wedding-${String(i + 1).padStart(2, "0")}.jpg`),
      Product: Array.from({ length: 11 }, (_, i) => `/photography-gallery/Product/product-${String(i + 1).padStart(2, "0")}.jpg`),
      Kids: Array.from({ length: 6 }, (_, i) => `/photography-gallery/Kids/kids-${String(i + 1).padStart(2, "0")}.jpg`),
      Performance: Array.from({ length: 12 }, (_, i) => `/photography-gallery/Performance/performance-${String(i + 1).padStart(2, "0")}.jpg`),
      Sports: Array.from({ length: 9 }, (_, i) => `/photography-gallery/Sports/sports-${String(i + 1).padStart(2, "0")}.jpg`),
    };
    return images[category] || [];
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when displayedVideos changes
  }, [displayedVideos]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeCategory) return;
    setAnimating(true);
    setCurrentPage(1); // Reset to first page when changing category
    setTimeout(() => {
      setActiveCategory(categoryId);
      setDisplayedVideos(getVideosByCategory(categoryId));
      setAnimating(false);
    }, 250);
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <div
        className="container pt-16 pb-12 md:pt-24 md:pb-16"
        ref={headerRef}
      >
        <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4 animate-fade-up">
          Our Portfolio
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
          All Work
        </h1>
        <div className="kf-divider mt-8 md:mt-12" />
      </div>

      {/* ============================================================
          CATEGORY FILTER
          ============================================================ */}
      <div className="container pb-8">
        <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4 text-center">
          Videography
        </p>
        <h2
          className="font-display text-[oklch(0.18_0.005_65)] mb-8 text-center"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600 }}
        >
          Video Portfolio
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`relative font-body text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[oklch(0.18_0.005_65)] text-white"
                  : "bg-transparent text-[oklch(0.55_0.008_65)] hover:text-[oklch(0.18_0.005_65)] border border-[oklch(0.90_0.004_65)] md:border-0"
              }`}
              style={{ fontWeight: 400, letterSpacing: "0.05em" }}
            >
              {cat.labelEn}
              <span
                className={`ml-2 text-xs ${
                  activeCategory === cat.id ? "text-white/60" : "text-[oklch(0.72_0.006_65)]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================
          VIDEO GRID
          ============================================================ */}
      <div className="container pb-24 md:pb-32">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-250 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentVideos.map((video, i) => (
            <div
              key={video.videoId}
              style={{
                animationDelay: `${Math.min(i * 50, 400)}ms`,
                opacity: animating ? 0 : 1,
              }}
            >
              <VideoCard video={video} showCategory={true} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {displayedVideos.length === 0 && (
          <div className="text-center py-24">
            <p className="kf-label text-[oklch(0.72_0.006_65)]">No videos in this category yet.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-[oklch(0.90_0.004_65)] text-[oklch(0.55_0.008_65)] hover:border-[oklch(0.52_0.09_65)] hover:text-[oklch(0.52_0.09_65)]"
              }`}
              style={{ fontWeight: 400 }}
            >
              上一頁
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-body text-sm transition-all ${
                    currentPage === page
                      ? "bg-[oklch(0.18_0.005_65)] text-white"
                      : "bg-white border border-[oklch(0.90_0.004_65)] text-[oklch(0.55_0.008_65)] hover:border-[oklch(0.52_0.09_65)] hover:text-[oklch(0.52_0.09_65)]"
                  }`}
                  style={{ fontWeight: 400 }}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-[oklch(0.90_0.004_65)] text-[oklch(0.55_0.008_65)] hover:border-[oklch(0.52_0.09_65)] hover:text-[oklch(0.52_0.09_65)]"
              }`}
              style={{ fontWeight: 400 }}
            >
              下一頁
            </button>
          </div>
        )}

        {/* ============================================================
            PHOTO GALLERY
            ============================================================ */}
        <div className="mt-20 pt-12 border-t border-[oklch(0.90_0.004_65)]">
          <p className="kf-label text-[oklch(0.55_0.008_65)] mb-4 text-center">
            Photography
          </p>
          <h2
            className="font-display text-[oklch(0.18_0.005_65)] mb-8 text-center"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600 }}
          >
            Photo Portfolio
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {photoCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActivePhotoCategory(cat.id)}
                className={`relative font-body text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 transition-all duration-300 ${
                  activePhotoCategory === cat.id
                    ? "bg-[oklch(0.18_0.005_65)] text-white"
                    : "bg-transparent text-[oklch(0.55_0.008_65)] hover:text-[oklch(0.18_0.005_65)] border border-[oklch(0.90_0.004_65)]"
                }`}
                style={{ fontWeight: 400, letterSpacing: "0.05em" }}
              >
                {cat.label}
                <span className={`ml-2 text-xs ${activePhotoCategory === cat.id ? "text-white/60" : "text-[oklch(0.72_0.006_65)]"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {getPhotoImages(activePhotoCategory).map((src, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg bg-[oklch(0.92_0.004_65)]">
                <img
                  src={src}
                  alt={`${activePhotoCategory} ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        </div>
    </div>
  );
}

/* =============================================================================
   VIDEO CARD — KiraFilm Editorial Minimalism
   Hover: thumbnail scale + grayscale-to-color + play button reveal
   ============================================================================= */

import { useState } from "react";
import { Play } from "lucide-react";
import { getYoutubeThumbnail, type Video } from "@/lib/videoData";

interface VideoCardProps {
  video: Video;
  size?: "normal" | "large" | "small";
  showCategory?: boolean;
}

const categoryLabels: Record<string, string> = {
  reels: "REELS",
  event: "EVENT",
  interview: "INTERVIEW",
  corporate: "CORPORATE",
  social: "SOCIAL MEDIA",
  promo: "PROMO",
  shortfilm: "SHORT FILM",
  wedding: "WEDDING",
  showreel: "SHOWREEL",
};

export default function VideoCard({ video, size = "normal", showCategory = true }: VideoCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const thumbnail = getYoutubeThumbnail(video.videoId, "hqdefault");

  const aspectClass =
    size === "large" ? "aspect-[16/9]" : size === "small" ? "aspect-[4/3]" : "aspect-[16/9]";

  return (
    <>
      <div
        className="kf-video-card group"
        onClick={() => setModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className={`relative ${aspectClass} overflow-hidden bg-[oklch(0.92_0.004_65)]`}>
          <img
            src={thumbnail}
            alt={video.title}
            className="kf-thumbnail w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-400" />

          {/* Play button */}
          <div className="kf-play-btn absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Play size={20} className="text-[oklch(0.18_0.005_65)] ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Category label */}
          {showCategory && (
            <div className="absolute top-3 left-3">
              <span className="kf-label bg-white/90 text-[oklch(0.18_0.005_65)] px-2 py-1">
                {categoryLabels[video.category] || video.category.toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="pt-3 pb-1">
          <h3
            className="font-body text-sm text-[oklch(0.18_0.005_65)] leading-snug group-hover:text-[oklch(0.52_0.09_65)] transition-colors duration-300"
            style={{ fontWeight: 400 }}
          >
            {video.title}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors kf-label"
              onClick={() => setModalOpen(false)}
            >
              CLOSE ✕
            </button>

            {/* YouTube Embed */}
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Title */}
            <div className="mt-4">
              <p className="kf-label text-white/50 mb-1">
                {categoryLabels[video.category] || video.category.toUpperCase()}
              </p>
              <h2 className="font-display text-white text-xl" style={{ fontWeight: 400 }}>
                {video.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

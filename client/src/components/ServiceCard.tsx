import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  label: string;
  labelEn: string;
  desc: string;
  icon: React.ReactNode;
  inView: boolean;
  delay: number;
  href?: string;
}

import { Link } from "wouter";

export default function ServiceCard({
  label,
  labelEn,
  desc,
  icon,
  inView,
  delay,
  href,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative overflow-hidden transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card background */}
      <div className="bg-white border border-[oklch(0.92_0.004_286.32)] p-8 md:p-10 h-full flex flex-col hover:border-[oklch(0.52_0.09_65)] transition-all duration-300 hover:shadow-lg">
        {/* Icon */}
        <div className="mb-6 text-[oklch(0.52_0.09_65)] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Label */}
        <p
          className="kf-label text-[oklch(0.55_0.008_65)] mb-2 text-xs tracking-wider"
          style={{ fontWeight: 400 }}
        >
          {labelEn.toUpperCase()}
        </p>

        {/* Title */}
        <h3
          className="font-display text-[oklch(0.18_0.005_65)] text-xl md:text-2xl mb-4 group-hover:text-[oklch(0.52_0.09_65)] transition-colors duration-300"
          style={{ fontWeight: 600, lineHeight: 1.2 }}
        >
          {label}
        </h3>

        {/* Description */}
        <p
          className="font-body text-[oklch(0.55_0.008_65)] text-sm leading-relaxed mb-6 flex-grow"
          style={{ fontWeight: 300 }}
        >
          {desc}
        </p>

        {/* CTA Link */}
        {href ? (
          <Link href={href}>
            <span className="flex items-center gap-2 text-[oklch(0.52_0.09_65)] group-hover:gap-3 transition-all duration-300 hover:no-underline">
              <span
                className="font-body text-sm"
                style={{ fontWeight: 400, letterSpacing: "0.05em" }}
              >
                Learn More
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        ) : (
          <div className="flex items-center gap-2 text-[oklch(0.52_0.09_65)] group-hover:gap-3 transition-all duration-300">
            <span
              className="font-body text-sm"
              style={{ fontWeight: 400, letterSpacing: "0.05em" }}
            >
              Learn More
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}

        {/* Hover accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-[oklch(0.52_0.09_65)] w-0 group-hover:w-full transition-all duration-300" />
      </div>
    </div>
  );
}

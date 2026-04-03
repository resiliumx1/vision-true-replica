import type { ExplorerLocation } from "./types";
import { categoryColors } from "./types";

interface InfoCardProps {
  spot: ExplorerLocation | null;
  onClose: () => void;
}

const InfoCard = ({ spot, onClose }: InfoCardProps) => {
  if (!spot) return null;
  const color = categoryColors[spot.category] || "#2cb8a8";

  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[min(420px,90%)] z-30 animate-cardSlideUp">
      <div
        className="rounded-[20px] p-6 md:p-7 relative"
        style={{
          background: "rgba(5,24,30,0.82)",
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          border: "1px solid rgba(44,184,168,0.2)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(44,184,168,0.08)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white/50 hover:text-white text-xl leading-none cursor-pointer transition-colors bg-transparent border-none p-1"
        >
          ✕
        </button>

        {/* Event badge */}
        {spot.has_event && spot.event_name && (
          <div className="inline-flex items-center gap-1.5 bg-purple-500/15 border border-purple-500/30 rounded-full px-3 py-1 mb-3 text-[11px] text-purple-400 font-semibold uppercase tracking-wide">
            <span className="animate-blink">●</span> Live Event — {spot.event_name}
          </div>
        )}

        {/* Title */}
        <h3 className="text-[22px] font-display font-semibold text-white leading-tight mb-1">
          {spot.name}
        </h3>

        {/* Category */}
        <span
          className="inline-block text-[10px] uppercase tracking-[0.12em] font-bold mb-3.5"
          style={{ color }}
        >
          {spot.category}
        </span>

        {/* Description */}
        <p className="text-[13.5px] leading-relaxed text-white/70 mb-4">
          {spot.description}
        </p>

        {/* Divider + meta */}
        <div className="border-t border-white/[0.08] pt-3.5 flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-white/50">
            <span className="text-sm">🕐</span> {spot.hours}
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-[60px] h-1 rounded bg-white/10 overflow-hidden">
              <div
                className="h-full rounded"
                style={{
                  width: `${spot.popularity}%`,
                  background: `linear-gradient(90deg, ${color}, ${color}88)`,
                }}
              />
            </div>
            <span className="text-[11px] text-white/40 font-semibold">{spot.popularity}%</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${spot.latitude},${spot.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mt-4 py-3 rounded-xl text-[#05181e] font-bold text-[13px] text-center tracking-wide hover:-translate-y-0.5 hover:shadow-lg transition-all"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}cc)`,
          }}
        >
          Get Directions →
        </a>

        {/* WhatsApp CTA */}
        {spot.whatsapp_link && (
          <a
            href={spot.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-2 py-3 rounded-xl text-[#05181e] font-bold text-[13px] text-center tracking-wide hover:-translate-y-0.5 hover:shadow-lg transition-all"
            style={{ background: "linear-gradient(135deg, #25D366, #25D366cc)" }}
          >
            WhatsApp →
          </a>
        )}
      </div>
    </div>
  );
};

export default InfoCard;

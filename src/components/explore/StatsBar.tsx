interface StatsBarProps {
  locationCount: number;
  eventCount: number;
}

const StatsBar = ({ locationCount, eventCount }: StatsBarProps) => {
  const stats = [
    { value: "365", label: "Beaches", sub: "One for every day" },
    { value: `${locationCount}`, label: "Hotspots", sub: "Curated locations" },
    { value: `${eventCount}`, label: "Live Events", sub: "Happening now" },
  ];

  return (
    <div className="mx-5 mb-5 p-4 bg-white/[0.03] rounded-2xl border border-white/5 flex justify-around animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div
            className="text-2xl font-bold font-display"
            style={{
              background: "linear-gradient(135deg, hsl(170 56% 55%), #d4ad7c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {stat.value}
          </div>
          <div className="text-[11px] font-semibold text-white/50 mt-0.5">{stat.label}</div>
          <div className="text-[9px] text-white/25 mt-0.5">{stat.sub}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;

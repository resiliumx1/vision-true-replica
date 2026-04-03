import { useState, useEffect } from "react";

type WeatherState = "sunny" | "partly_cloudy" | "rainy";

interface ExploreHeaderProps {
  weather: WeatherState;
  setWeather: (w: WeatherState) => void;
  isDayMode: boolean;
  setIsDayMode: (v: boolean) => void;
  liveEventCount: number;
}

const WEATHER_STATES: WeatherState[] = ["sunny", "partly_cloudy", "rainy"];

const ExploreHeader = ({ weather, setWeather, isDayMode, setIsDayMode, liveEventCount }: ExploreHeaderProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="relative z-40 px-5 md:px-7 pt-6 pb-4 flex items-start justify-between animate-fade-in-up">
      <div>
        <div className="text-[10px] font-bold tracking-[0.2em] text-turquoise uppercase mb-1">
          Antigua Insider
        </div>
        <h1 className="text-2xl md:text-3xl font-display font-semibold leading-tight text-gradient-primary bg-gradient-to-r from-white to-[#d4ad7c] bg-clip-text"
          style={{ WebkitTextFillColor: "transparent", background: "linear-gradient(135deg, #fff 30%, #d4ad7c)", WebkitBackgroundClip: "text" }}
        >
          Island Explorer
        </h1>
        <p className="mt-1 text-xs text-white/40 font-medium">
          {time.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })} · {liveEventCount} live event{liveEventCount !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex gap-2 items-center">
        {/* Weather toggle */}
        <div className="flex gap-1 bg-white/[0.06] rounded-xl p-1 border border-white/[0.06]">
          {WEATHER_STATES.map((w) => (
            <button
              key={w}
              onClick={() => setWeather(w)}
              className={`w-8 h-7 rounded-lg flex items-center justify-center text-sm transition-all cursor-pointer ${
                weather === w
                  ? "bg-turquoise/20 text-turquoise"
                  : "bg-transparent text-white/35 hover:text-white/60"
              }`}
            >
              {w === "sunny" ? "☀️" : w === "partly_cloudy" ? "⛅" : "🌧️"}
            </button>
          ))}
        </div>

        {/* Day/Night toggle */}
        <button
          onClick={() => setIsDayMode(!isDayMode)}
          className="w-8 h-8 rounded-xl border border-white/[0.08] bg-white/[0.06] text-[#d4ad7c] flex items-center justify-center text-sm cursor-pointer hover:bg-white/10 transition-all"
        >
          {isDayMode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default ExploreHeader;

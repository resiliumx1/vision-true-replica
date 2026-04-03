import { useState, useCallback } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ExploreHeader from "@/components/explore/ExploreHeader";
import CategoryFilters from "@/components/explore/CategoryFilters";
import MapContainer from "@/components/explore/MapContainer";
import StatsBar from "@/components/explore/StatsBar";
import type { ExplorerLocation } from "@/components/explore/types";

type WeatherState = "sunny" | "partly_cloudy" | "rainy";

const Explore = () => {
  const [weather, setWeather] = useState<WeatherState>("sunny");
  const [isDayMode, setIsDayMode] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [locations, setLocations] = useState<ExplorerLocation[]>([]);

  const handleLocationsLoaded = useCallback((locs: ExplorerLocation[]) => {
    setLocations(locs);
  }, []);

  const liveEventCount = locations.filter((l) => l.has_event).length;

  const bgGradient = isDayMode
    ? "linear-gradient(160deg, #0a2e3d 0%, #05181e 40%, #0d3340 100%)"
    : "linear-gradient(160deg, #020d12 0%, #030f14 40%, #051a22 100%)";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader forceDark />
      <main className="pt-16 min-h-screen text-white relative" style={{ background: bgGradient }}>
        {/* Grid texture */}
        <div
          className="fixed inset-0 pointer-events-none animate-gridPulse"
          style={{
            backgroundImage:
              "linear-gradient(rgba(44,184,168,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(44,184,168,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            zIndex: 0,
          }}
        />

        <div className="relative z-10">
          <ExploreHeader
            weather={weather}
            setWeather={setWeather}
            isDayMode={isDayMode}
            setIsDayMode={setIsDayMode}
            liveEventCount={liveEventCount}
          />
          <CategoryFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onCategoryChange={() => {}}
          />
          <MapContainer
            weather={weather}
            isDayMode={isDayMode}
            activeCategory={activeCategory}
            onLocationsLoaded={handleLocationsLoaded}
          />
          <StatsBar locationCount={locations.length} eventCount={liveEventCount} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Explore;

import { useState, useEffect, useCallback, useRef } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import type { MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { supabase } from "@/integrations/supabase/client";
import type { ExplorerLocation } from "./types";
import { categoryColors } from "./types";
import { RainCanvas, SunOverlay, CloudOverlay, WeatherBadge } from "./WeatherOverlays";
import InfoCard from "./InfoCard";

type WeatherState = "sunny" | "partly_cloudy" | "rainy";

interface MapContainerProps {
  weather: WeatherState;
  isDayMode: boolean;
  activeCategory: string;
  onLocationsLoaded: (locations: ExplorerLocation[]) => void;
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const HotspotMarker = ({
  spot,
  isActive,
  isVisible,
  onClick,
}: {
  spot: ExplorerLocation;
  isActive: boolean;
  isVisible: boolean;
  onClick: (s: ExplorerLocation) => void;
}) => {
  const color = categoryColors[spot.category] || "#2cb8a8";

  return (
    <Marker latitude={spot.latitude} longitude={spot.longitude} anchor="center">
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClick(spot);
        }}
        className="relative cursor-pointer transition-all duration-300"
        style={{
          width: 32,
          height: 32,
          opacity: isVisible ? 1 : 0.15,
          transform: isActive ? "scale(1.3)" : "scale(1)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Pulse rings for events */}
        {spot.has_event && isVisible && (
          <>
            <div
              className="absolute -inset-2.5 rounded-full animate-pulseRing"
              style={{ border: `2px solid ${color}`, opacity: 0.6 }}
            />
            <div
              className="absolute -inset-2.5 rounded-full animate-pulseRing"
              style={{ border: `2px solid ${color}`, opacity: 0.4, animationDelay: "0.6s" }}
            />
          </>
        )}

        {/* Glow */}
        <div
          className="absolute -inset-1.5 rounded-full"
          style={{ background: `radial-gradient(circle, ${color}44 0%, transparent 70%)` }}
        />

        {/* Dot */}
        <div
          className="absolute inset-1 rounded-full flex items-center justify-center text-xs"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${color}, ${color}bb)`,
            boxShadow: `0 0 12px ${color}88, inset 0 1px 2px rgba(255,255,255,0.4)`,
          }}
        >
          {spot.emoji}
        </div>
      </div>
    </Marker>
  );
};

const MapContainer = ({ weather, isDayMode, activeCategory, onLocationsLoaded }: MapContainerProps) => {
  const [locations, setLocations] = useState<ExplorerLocation[]>([]);
  const [selectedSpot, setSelectedSpot] = useState<ExplorerLocation | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [conditionText, setConditionText] = useState("");
  const mapRef = useRef<MapRef>(null);

  // Fetch locations from Supabase
  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from("explorer_locations")
        .select("*")
        .order("popularity", { ascending: false });

      if (!error && data) {
        setLocations(data as ExplorerLocation[]);
        onLocationsLoaded(data as ExplorerLocation[]);
      }
    };
    fetchLocations();
  }, [onLocationsLoaded]);

  // Fetch real weather
  useEffect(() => {
    const weatherKey = import.meta.env.VITE_OPENWEATHER_KEY;
    if (!weatherKey) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=17.0608&lon=-61.7964&appid=${weatherKey}&units=metric`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.weather?.[0]) {
          setTemperature(Math.round(data.main.temp));
          setConditionText(data.weather[0].main);
        }
      })
      .catch(() => {});
  }, []);

  const visibleIds = new Set(
    locations
      .filter((s) => activeCategory === "all" || s.category === activeCategory)
      .map((s) => s.id)
  );

  const handleMarkerClick = useCallback((spot: ExplorerLocation) => {
    setSelectedSpot((prev) => (prev?.id === spot.id ? null : spot));
    mapRef.current?.flyTo({
      center: [spot.longitude, spot.latitude],
      zoom: 14,
      duration: 1500,
    });
  }, []);

  const mapStyle = isDayMode
    ? "mapbox://styles/mapbox/dark-v11"
    : "mapbox://styles/mapbox/navigation-night-v1";

  if (!MAPBOX_TOKEN) {
    return (
      <div className="relative mx-5 mb-5 rounded-3xl overflow-hidden border border-turquoise/10 shadow-2xl h-[clamp(400px,60vh,600px)] flex items-center justify-center bg-[#0a2e3d]">
        <div className="text-center text-white/60 p-8">
          <p className="text-lg font-display mb-2">Map requires Mapbox token</p>
          <p className="text-sm text-white/40">
            Add <code className="bg-white/10 px-2 py-0.5 rounded text-turquoise">VITE_MAPBOX_TOKEN</code> to your project secrets to enable the interactive map.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative mx-5 mb-5 rounded-3xl overflow-hidden border border-turquoise/10 shadow-2xl animate-fade-in-up"
      style={{ height: "clamp(400px, 60vh, 600px)", animationDelay: "0.2s", animationFillMode: "both" }}
    >
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: 17.0608,
          longitude: -61.7964,
          zoom: 11,
          pitch: 30,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="bottom-right" />

        {locations.map((spot) => (
          <HotspotMarker
            key={spot.id}
            spot={spot}
            isActive={selectedSpot?.id === spot.id}
            isVisible={visibleIds.has(spot.id)}
            onClick={handleMarkerClick}
          />
        ))}
      </Map>

      {/* Weather overlays */}
      <SunOverlay active={weather === "sunny"} />
      <CloudOverlay active={weather === "partly_cloudy" || weather === "rainy"} />
      <RainCanvas active={weather === "rainy"} />

      {/* Weather badge */}
      <WeatherBadge weather={weather} temperature={temperature} conditionText={conditionText} />

      {/* Scale indicator */}
      <div className="absolute bottom-4 right-4 z-[35] flex items-center gap-1.5">
        <div className="w-[60px] h-0.5 bg-[#d4ad7c]/40 relative">
          <div className="absolute left-0 -top-[3px] w-px h-2 bg-[#d4ad7c]/40" />
          <div className="absolute right-0 -top-[3px] w-px h-2 bg-[#d4ad7c]/40" />
        </div>
        <span className="text-[9px] text-[#d4ad7c]/40 font-semibold">5 km</span>
      </div>

      {/* Info card */}
      <InfoCard spot={selectedSpot} onClose={() => setSelectedSpot(null)} />
    </div>
  );
};

export default MapContainer;

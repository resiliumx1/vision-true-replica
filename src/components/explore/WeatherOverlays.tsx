import { useEffect, useRef } from "react";

type WeatherState = "sunny" | "partly_cloudy" | "rainy";

// Rain canvas component
export const RainCanvas = ({ active }: { active: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<Array<{ x: number; y: number; len: number; speed: number; opacity: number }>>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    if (!active) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    if (dropsRef.current.length === 0) {
      for (let i = 0; i < 120; i++) {
        dropsRef.current.push({
          x: Math.random() * W,
          y: Math.random() * H,
          len: 8 + Math.random() * 14,
          speed: 4 + Math.random() * 6,
          opacity: 0.15 + Math.random() * 0.25,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      dropsRef.current.forEach((d) => {
        ctx!.beginPath();
        ctx!.moveTo(d.x, d.y);
        ctx!.lineTo(d.x - 1.5, d.y + d.len);
        ctx!.strokeStyle = `rgba(174,214,241,${d.opacity})`;
        ctx!.lineWidth = 1.2;
        ctx!.stroke();
        d.y += d.speed;
        d.x -= 0.8;
        if (d.y > H) {
          d.y = -d.len;
          d.x = Math.random() * W;
        }
      });
      animRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[15] transition-opacity duration-700"
      style={{ opacity: active ? 1 : 0 }}
    />
  );
};

// Sun overlay
export const SunOverlay = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div
      className="absolute -top-10 -right-10 w-[220px] h-[220px] rounded-full z-[14] pointer-events-none animate-sunPulse"
      style={{
        background: "radial-gradient(circle, rgba(255,200,80,0.35) 0%, rgba(255,180,60,0.12) 40%, transparent 70%)",
      }}
    />
  );
};

// Cloud overlay
export const CloudOverlay = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <>
      <div
        className="absolute top-[30px] left-[10%] w-40 h-[50px] rounded-full z-[14] pointer-events-none animate-cloudDrift"
        style={{
          background: "radial-gradient(ellipse, rgba(200,210,220,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[60px] left-[45%] w-[200px] h-[60px] rounded-full z-[14] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(180,195,210,0.5) 0%, transparent 70%)",
          animation: "cloudDrift 24s linear infinite reverse",
        }}
      />
    </>
  );
};

interface WeatherBadgeProps {
  weather: WeatherState;
  temperature: number | null;
  conditionText: string;
}

export const WeatherBadge = ({ weather, temperature, conditionText }: WeatherBadgeProps) => {
  const emoji = weather === "sunny" ? "☀️" : weather === "partly_cloudy" ? "⛅" : "🌧️";
  const temp = temperature ?? (weather === "sunny" ? 29 : weather === "partly_cloudy" ? 27 : 25);
  const condition = conditionText || (weather === "sunny" ? "Sunny" : weather === "partly_cloudy" ? "Partly Cloudy" : "Rainy");

  return (
    <div className="absolute top-4 left-4 z-[35] flex items-center gap-2 bg-[#05181e]/70 backdrop-blur-xl rounded-xl px-3.5 py-2 border border-white/[0.06]">
      <span className="text-lg">{emoji}</span>
      <div>
        <div className="text-xs font-semibold text-white">{temp}°C {condition}</div>
        <div className="text-[10px] text-white/40">Antigua & Barbuda</div>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const ExploreMapCTA = () => (
  <section className="relative py-16 lg:py-20 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-navy via-[hsl(207_61%_22%)] to-teal" />

    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 pointer-events-none animate-gridPulse"
      style={{
        backgroundImage:
          "linear-gradient(rgba(44,184,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(44,184,168,0.06) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-turquoise/15 border border-turquoise/25 rounded-full px-4 py-1.5 mb-6">
          <MapPin className="w-4 h-4 text-turquoise" />
          <span className="text-turquoise text-sm font-semibold">New Feature</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          Explore Antigua Like a Local
        </h2>

        <p className="text-white/60 text-lg mb-8">
          Interactive map with live events, weather, and 365 beaches
        </p>

        <Button variant="hero" size="lg" asChild>
          <Link to="/explore" className="gap-2">
            <MapPin className="w-5 h-5" />
            Launch Island Explorer
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ExploreMapCTA;

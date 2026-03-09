import { Button } from "@/components/ui/button";
import { Check, Star, MapPin, MessageCircle, BookOpen, Ship, Camera } from "lucide-react";
import heroImg from "@/assets/hero-beach.jpg";

const stats = [
  { value: "2,500+", label: "Copies Sold" },
  { value: "4.9/5", label: "Rating" },
  { value: "130", label: "Pages" },
  { value: "60+", label: "Photos" },
];

const features = [
  "130+ pages of insider knowledge",
  "60+ high-resolution photos",
  "Clickable maps & WhatsApp contacts",
  "Cruise passenger quick-guide",
  "2025 updated edition",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Antigua beach aerial view" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
    </div>

    <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16 lg:pt-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 text-sm text-primary-foreground">
            <Star className="w-4 h-4 fill-turquoise text-turquoise" />
            Bestselling Antigua Travel Guide
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
            The Ultimate Guide to{" "}
            <span className="text-turquoise">Antigua</span> & Barbuda
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-lg">
            Written by a local. Everything you need to know before you land — beaches, restaurants, hidden gems & more.
          </p>

          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-primary-foreground/90 text-sm">
                <Check className="w-4 h-4 text-turquoise flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="lg" className="text-base px-8">
              Get Instant Access - $12.99
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base">
              Preview Sample
            </Button>
          </div>

          <p className="text-xs text-primary-foreground/60">
            30-day money-back guarantee • Instant PDF download
          </p>
        </div>

        {/* Right book mockup - desktop */}
        <div className="hidden lg:flex justify-center">
          <div className="relative">
            <div className="w-72 h-96 rounded-2xl bg-gradient-primary shadow-2xl flex flex-col items-center justify-center text-primary-foreground p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 -right-3 bg-turquoise text-foreground text-xs font-bold px-3 py-1 rounded-full">
                2025 Edition
              </div>
              <MapPin className="w-8 h-8 text-turquoise mb-4" />
              <h3 className="text-2xl font-display font-bold text-center mb-1">ANTIGUA &</h3>
              <p className="text-lg font-display">Barbuda</p>
              <div className="w-16 h-0.5 bg-turquoise my-4" />
              <p className="text-xs text-center text-primary-foreground/80">
                The Complete Travel Guide<br />Written by a Local
              </p>
              <div className="mt-6 space-y-1.5 text-[10px] text-primary-foreground/70">
                {["Interactive Maps", "WhatsApp Contacts", "Beach Guide"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-turquoise" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-16 top-12 bg-background rounded-xl shadow-card px-4 py-2 animate-float">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-foreground">4.9</span>
                <span className="text-xs text-muted-foreground">(127 reviews)</span>
              </div>
            </div>
            <div className="absolute -right-12 bottom-16 bg-whatsapp rounded-xl px-4 py-2 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-1.5 text-primary-foreground text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Ready
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl py-4 border border-primary-foreground/10">
            <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</div>
            <div className="text-xs text-primary-foreground/60 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;

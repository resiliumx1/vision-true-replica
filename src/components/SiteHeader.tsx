import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Book, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Preview", href: "#preview" },
  { label: "Contents", href: "#contents" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <Book className={`w-6 h-6 ${scrolled ? "text-primary" : "text-turquoise"}`} />
            <div>
              <span className={`font-bold text-lg leading-none ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                Antigua Guide
              </span>
              <span className={`block text-[10px] font-medium leading-none ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                2025 Edition
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-turquoise ${
                  scrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button variant={scrolled ? "navCta" : "hero"} size="sm">
              Get the Guide - $12.99
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-background shadow-2xl p-6 flex flex-col gap-6 animate-fade-in-up">
            <button onClick={() => setMobileOpen(false)} className="self-end" aria-label="Close menu">
              <X className="w-6 h-6 text-foreground" />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="cta" size="lg" className="mt-4">
              Get the Guide - $12.99
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;

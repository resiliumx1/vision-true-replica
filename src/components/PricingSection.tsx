import { Check, Shield, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "130+ page PDF guide",
  "60+ high-resolution photos",
  "Clickable Google Maps links",
  "WhatsApp contact links",
  "Cruise passenger quick-guide",
  "Printable packing checklist",
  "Taxi fare cheat sheet",
  "Restaurant reservation template",
  "Lifetime free updates",
  "30-day money-back guarantee",
];

const PricingSection = () => (
  <section id="pricing" className="py-20 lg:py-28 bg-gradient-primary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block bg-primary-foreground/10 text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-primary-foreground/20">
          Instant Download
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          Get Your Copy Today
        </h2>
        <p className="text-primary-foreground/70">
          One payment, lifetime access. No subscriptions, no hidden fees.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-card rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center border-b border-border">
          <p className="text-sm font-semibold text-muted-foreground mb-2">One-Time Payment</p>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-5xl font-bold text-foreground">$12.99</span>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="line-through">$24.99</span>{" "}
            <span className="text-tropical font-semibold">Save 48% — Limited Time</span>
          </p>
        </div>

        <div className="p-8">
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                <Check className="w-4 h-4 text-tropical flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <Button variant="cta" size="lg" className="w-full text-base py-6">
            Buy Now — Instant Download
          </Button>

          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="w-4 h-4" />
              Secure Payment
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <RefreshCcw className="w-4 h-4" />
              30-Day Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;

import { Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const chapters = [
  { num: "01", title: "Before You Land", pages: "10-15", desc: "Essential pre-trip preparation and airport survival guide", tags: ["Visa Info", "Packing List", "Currency Tips", "Airport Guide"] },
  { num: "02", title: "The Insider Beach Bible", pages: "16-35", desc: "Every beach rated, reviewed and mapped by a local", tags: ["42 Beaches", "Snorkeling Spots", "Family Friendly", "Hidden Coves"] },
  { num: "03", title: "Eat Like an Antiguan", pages: "36-50", desc: "Where the locals actually eat — 100+ honest reviews", tags: ["Local Spots", "Fine Dining", "Street Food", "Budget Eats"] },
  { num: "04", title: "Itineraries for Every Traveler", pages: "51-60", desc: "Ready-made plans for every type of trip", tags: ["Honeymoon", "Family", "Adventure", "Relaxation"] },
  { num: "05", title: "Adventures & Experiences", pages: "61-80", desc: "The best tours, hikes and water sports on the island", tags: ["Hiking Trails", "Water Sports", "Day Trips", "Nightlife"] },
  { num: "06", title: "Hidden Antigua", pages: "81-90", desc: "Secret spots that don't appear in any other guide", tags: ["Secret Beaches", "Viewpoints", "Local Events", "Off-Grid"] },
  { num: "07", title: "Practical Survival Guide", pages: "91-105", desc: "Transport, safety, tipping — everything practical", tags: ["Taxi Fares", "Safety Tips", "WiFi Spots", "Medical"] },
  { num: "08", title: "Cruise Passenger Quick-Guide", pages: "106-115", desc: "Maximize your 8 hours in port", tags: ["Port Guide", "Best Routes", "Time Plans", "Must-Sees"] },
];

const ContentsSection = () => (
  <section id="contents" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Complete Contents
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          130 Pages of Pure Gold
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {chapters.map((ch) => (
          <div key={ch.num} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border">
            <div className="flex items-start gap-4">
              <span className="bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0">
                CH {ch.num}
              </span>
              <div className="flex-1">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-bold text-foreground text-lg">{ch.title}</h3>
                  <span className="text-xs text-muted-foreground ml-2">pp. {ch.pages}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{ch.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ch.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                      <Check className="w-3 h-3 text-tropical" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bonus */}
      <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
        <div className="flex items-center gap-3 mb-4">
          <Gift className="w-6 h-6 text-turquoise" />
          <h3 className="text-xl font-bold">+ Bonus Downloads</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {["Printable packing checklist", "Taxi fare cheat sheet", "Restaurant reservation template"].map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-primary-foreground/90">
              <Check className="w-4 h-4 text-turquoise flex-shrink-0" />
              {b}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button variant="cta" size="lg" className="text-base px-10">
          Get the Guide - $12.99
        </Button>
      </div>
    </div>
  </section>
);

export default ContentsSection;

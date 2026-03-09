import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  { name: "Sarah Mitchell", loc: "New York", badge: "Honeymoon", initials: "SM", text: "The WhatsApp contacts saved our honeymoon! We booked a private boat tour in minutes. No other guide gives you that." },
  { name: "James & Emma Thompson", loc: "London", badge: "Repeat Visitors", initials: "JE", text: "We've been to Antigua 3 times and this guide showed us places we'd never discovered. Wish we had it from day one!" },
  { name: "The Rodriguez Family", loc: "Miami", badge: "Family Trip", initials: "RF", text: "Perfect for traveling with kids. The beach ratings told us exactly which ones were safe and calm for our little ones." },
  { name: "Michael Chen", loc: "Toronto", badge: "Cruise Passenger", initials: "MC", text: "Only had 8 hours in port and the cruise chapter gave me the perfect itinerary. Saw more than anyone else on the ship!" },
  { name: "Lisa & David Park", loc: "Sydney", badge: "First-time", initials: "LP", text: "Saved us over $50 on taxis alone with the fare guide. The clickable maps meant we never got lost once." },
  { name: "Karen Williams", loc: "Atlanta", badge: "Solo Traveler", initials: "KW", text: "I had this guide open on my phone at literally every stop. It's like having a local friend showing you around." },
];

const TestimonialsSection = () => (
  <section id="reviews" className="py-20 lg:py-28 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Traveler Reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Loved by 2,500+ Travelers
        </h2>
      </div>

      {/* Rating bar */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <div className="flex items-center gap-2">
          <div className="flex">{Array(5).fill(0).map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
          <span className="font-bold text-foreground">4.9/5 Average Rating</span>
        </div>
        <span className="text-muted-foreground">2,500+ Copies Sold</span>
        <span className="text-muted-foreground">97% Would Recommend</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
            <Quote className="w-8 h-8 text-turquoise/30 mb-3" />
            <div className="flex mb-3">{Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
            <p className="text-foreground text-sm mb-4 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.loc}</p>
              </div>
              <span className="ml-auto text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{t.badge}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="cta" size="lg" className="text-base px-10">
          Get the Guide - $12.99
        </Button>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

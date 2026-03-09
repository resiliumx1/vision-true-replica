import { Map, MessageCircle, Camera, Ship, Utensils, Waves } from "lucide-react";
import airportImg from "@/assets/chapter-airport.jpg";
import beachImg from "@/assets/chapter-beach.jpg";
import foodImg from "@/assets/chapter-food.jpg";
import hiddenImg from "@/assets/chapter-hidden.jpg";

const features = [
  { icon: Map, title: "Interactive Maps", desc: "Clickable Google Maps links to every location", color: "text-secondary" },
  { icon: MessageCircle, title: "WhatsApp Contacts", desc: "Direct booking links for tours & taxis", color: "text-whatsapp" },
  { icon: Camera, title: "Stunning Photography", desc: "60+ real photos from across the islands", color: "text-purple-500" },
  { icon: Ship, title: "Cruise Quick-Guide", desc: "Dedicated 10-page cruise passenger section", color: "text-orange-500" },
  { icon: Utensils, title: "Restaurant Reviews", desc: "100+ honest reviews of local eateries", color: "text-red-500" },
  { icon: Waves, title: "Beach Bible", desc: "All 42 beaches rated and reviewed", color: "text-turquoise" },
];

const chapters = [
  { img: airportImg, title: "Before You Land", desc: "Everything to prepare for your arrival" },
  { img: beachImg, title: "The Beach Bible", desc: "All 42 beaches rated and mapped" },
  { img: foodImg, title: "Eat Like a Local", desc: "100+ restaurant reviews by a local" },
  { img: hiddenImg, title: "Hidden Antigua", desc: "Secret spots tourists never find" },
];

const PreviewSection = () => (
  <section id="preview" className="py-20 lg:py-28 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          What's Inside
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          More Than Just a Travel Guide
        </h2>
        <p className="text-muted-foreground">
          Written by someone who actually lives here — not a travel writer who visited once.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <f.icon className={`w-10 h-10 ${f.color} mb-4`} />
            <h3 className="font-bold text-foreground text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Chapter previews */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-display font-bold text-foreground">Preview the Chapters</h3>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chapters.map((ch) => (
          <div key={ch.title} className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
            <img src={ch.img} alt={ch.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex flex-col justify-end p-5">
              <h4 className="text-primary-foreground font-bold text-lg">{ch.title}</h4>
              <p className="text-primary-foreground/70 text-sm">{ch.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PreviewSection;

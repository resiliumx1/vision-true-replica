import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail } from "lucide-react";

const faqs = [
  { q: "What format is the guide in?", a: "The guide is delivered as a high-quality PDF that works on any device — phone, tablet, laptop, or desktop. You can also print it if you prefer a physical copy." },
  { q: "How do I receive the guide after purchase?", a: "Instantly! After payment, you'll receive a download link immediately. You'll also get an email with the link so you can download it anytime." },
  { q: "Is this guide really written by a local?", a: "Yes! The author has lived in Antigua for over 15 years and knows every corner of the island. This isn't a quick research project — it's years of lived experience." },
  { q: "What if I'm not satisfied?", a: "We offer a full 30-day money-back guarantee, no questions asked. If the guide doesn't meet your expectations, just email us for a complete refund." },
  { q: "Is the guide updated regularly?", a: "Yes! We update the guide annually with new restaurants, beaches, and practical info. All updates are free for life once you purchase." },
  { q: "Does the guide work for cruise passengers?", a: "Absolutely! There's a dedicated 10-page Cruise Passenger Quick-Guide with optimized itineraries for 6-8 hour port stops." },
  { q: "Can I share the guide with my travel companions?", a: "The guide is licensed for personal use. You're welcome to share it with immediate family members traveling with you." },
  { q: "What makes this different from TripAdvisor or blogs?", a: "Unlike scattered blog posts, this is a curated, organized guide with clickable maps, WhatsApp contacts, and insider knowledge you won't find anywhere online." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <div className="text-center mb-12">
        <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground">
          Can't find your answer? Email us at{" "}
          <a href="mailto:hello@antiguaguide.com" className="text-secondary hover:underline">
            hello@antiguaguide.com
          </a>
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-sm">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-12 p-8 bg-muted rounded-2xl">
        <Mail className="w-8 h-8 text-secondary mx-auto mb-3" />
        <p className="font-semibold text-foreground mb-2">Still have questions?</p>
        <p className="text-sm text-muted-foreground">
          Drop us a line at{" "}
          <a href="mailto:hello@antiguaguide.com" className="text-secondary hover:underline">
            hello@antiguaguide.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default FAQSection;

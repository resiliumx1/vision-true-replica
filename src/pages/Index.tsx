import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import PreviewSection from "@/components/PreviewSection";
import ExploreMapCTA from "@/components/ExploreMapCTA";
import ContentsSection from "@/components/ContentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import SiteFooter from "@/components/SiteFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <HeroSection />
    <PreviewSection />
    <ExploreMapCTA />
    <ContentsSection />
    <TestimonialsSection />
    <PricingSection />
    <FAQSection />
    <SiteFooter />
    <StickyMobileCTA />
  </div>
);

export default Index;

import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-3">
    <Button variant="cta" size="lg" className="w-full text-base">
      Get the Guide — $12.99
    </Button>
  </div>
);

export default StickyMobileCTA;

import { Book, Heart } from "lucide-react";

const SiteFooter = () => (
  <footer className="bg-dark-footer text-primary-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-2">
          <Book className="w-5 h-5 text-turquoise" />
          <span className="font-bold">Antigua Guide</span>
          <span className="text-xs text-primary-foreground/50">Your insider companion to paradise</span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
          <a href="#" className="hover:text-turquoise transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-turquoise transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-turquoise transition-colors">Refund Policy</a>
          <a href="#" className="hover:text-turquoise transition-colors">Contact</a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
        <p>Made with <Heart className="w-3 h-3 inline text-red-400 fill-red-400" /> in Antigua</p>
        <p>© {new Date().getFullYear()} Antigua Travel Guide. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;

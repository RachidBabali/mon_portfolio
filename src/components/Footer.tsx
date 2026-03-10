import { Phone, MessageCircle, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="gradient-text font-semibold">Rachid</span>. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:+221755288122" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Téléphone">
              <Phone size={18} />
            </a>
            <a href="https://wa.me/221755288122" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="https://www.facebook.com/share/1B7qaNCDbf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.tiktok.com/@rachid7.2?_r=1&_t=ZS-94YabEhG0gu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

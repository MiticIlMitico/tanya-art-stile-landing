import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ShoppingBag, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waCustomMsg = encodeURIComponent("Ciao Tanya! Vorrei richiedere informazioni per un capo personalizzato su disegno.");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-glass border-b border-stone-200 py-2 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Official Logo */}
        <a href="#" className="flex items-center group">
          <img 
            src="/assets/logo-tanya-clean.png" 
            alt="Logo Ufficiale TANYA Art Stile" 
            className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <a href="#storia" className="text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-gold-bronze transition-colors">
            La Storia
          </a>
          <a href="#opere" className="text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-gold-bronze transition-colors">
            Le Opere & Capi
          </a>
          <a href="#filosofia" className="text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-gold-bronze transition-colors">
            Filosofia
          </a>
          <a href="#contatti" className="text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-gold-bronze transition-colors">
            Contatti
          </a>
        </nav>

        {/* E-Commerce + WhatsApp CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/393922603869?text=${waCustomMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-50 text-emerald-800 border border-emerald-300/60 hover:bg-emerald-100 text-[11px] uppercase tracking-widest font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Capo Su Misura</span>
          </a>

          <a
            href="https://taniahus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 text-[11px]"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-gold-honey" />
            <span>E-Commerce Ufficiale</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gallery-900 focus:outline-none"
          aria-label="Apri Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gallery-50 border-b border-stone-200 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4 items-center text-center">
            <a href="#storia" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-stone-800">
              La Storia
            </a>
            <a href="#opere" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-stone-800">
              Le Opere & Capi
            </a>
            <a href="#filosofia" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-stone-800">
              Filosofia
            </a>
            <a href="#contatti" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-stone-800">
              Contatti Direct
            </a>

            <div className="w-full pt-3 border-t border-stone-200 flex flex-col gap-2">
              <a
                href="https://taniahus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <ShoppingBag className="w-4 h-4 text-gold-honey" />
                <span>Vai al Sito E-Commerce (taniahus.com)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/393922603869?text=${waCustomMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center bg-white text-emerald-800 border-emerald-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Richiedi Capo Personalizzato</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


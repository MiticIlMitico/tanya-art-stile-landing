import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
        <nav className="hidden md:flex items-center gap-8">
          <a href="#storia" className="text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-gold-bronze transition-colors">
            La Storia
          </a>
          <a href="#opere" className="text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-gold-bronze transition-colors">
            Le Opere
          </a>
          <a href="#filosofia" className="text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-gold-bronze transition-colors">
            Filosofia
          </a>
          <a href="#store" className="text-xs uppercase tracking-widest font-medium text-stone-700 hover:text-gold-bronze transition-colors">
            Atelier Store
          </a>
        </nav>

        {/* Boutique Online CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="https://store.tanyaartstile.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span>Boutique Online</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold-bronze" />
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
          <nav className="flex flex-col gap-5 items-center text-center">
            <a href="#storia" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-stone-800">
              La Storia
            </a>
            <a href="#opere" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-stone-800">
              Le Opere
            </a>
            <a href="#filosofia" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-stone-800">
              Filosofia
            </a>
            <a href="#store" onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-stone-800">
              Atelier Store
            </a>
            <a
              href="https://store.tanyaartstile.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              <span>Boutique Online</span>
              <ArrowUpRight className="w-4 h-4 text-gold-honey" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { ArrowUp, Instagram, Video, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="store" className="bg-gallery-900 text-stone-400 pt-16 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Logo & Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <img 
                src="/assets/logo-tanya-clean.png" 
                alt="Logo Ufficiale TANYA Art Stile" 
                className="h-14 md:h-18 w-auto object-contain brightness-125 filter invert-[0.1]"
              />
            </a>

            <p className="text-stone-400 font-light text-xs leading-relaxed max-w-sm">
              Nel mio Atelier a Reggio Calabria unisco l'alta moda con l'espressività dell'arte artigianale. Ogni mia creazione è dipinta a mano ed unica al mondo.
            </p>

            <div className="flex items-center gap-3 text-stone-300">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold-bronze hover:text-white rounded-full transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold-bronze hover:text-white rounded-full transition-colors">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold-honey font-semibold block mb-2">
              Esplora il Mio Atelier
            </span>
            <ul className="space-y-2 text-xs text-stone-300 font-light">
              <li>
                <a href="#storia" className="hover:text-gold-honey transition-colors">La Mia Storia</a>
              </li>
              <li>
                <a href="#opere" className="hover:text-gold-honey transition-colors">Le Mie Opere</a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-gold-honey transition-colors">I Miei 3 Pilastri</a>
              </li>
              <li>
                <a href="https://store.tanyaartstile.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-honey transition-colors flex items-center gap-1">
                  <span>Boutique Online</span>
                  <span className="text-[10px] text-gold-bronze">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="md:col-span-4 space-y-3 bg-white/5 p-5 border border-white/10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gold-honey">
              <ShieldCheck className="w-4 h-4" />
              <span>Garanzia di Autenticità</span>
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Ogni mia opera è irripetibile. Piccole variazioni nelle pennellate o nelle sfumature testimoniano l'autenticità della mia esecuzione a mano.
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-light">
          <p>
            © {new Date().getFullYear()} Tetyana Husyeva — TANYA Art Stile. Tutti i diritti riservati.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-stone-400 hover:text-gold-honey uppercase tracking-widest text-[11px] transition-colors"
          >
            <span>Torna in Alto</span>
            <ArrowUp className="w-4 h-4 text-gold-bronze" />
          </button>
        </div>

      </div>
    </footer>
  );
}

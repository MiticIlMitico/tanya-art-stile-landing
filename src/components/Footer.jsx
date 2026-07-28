import React from 'react';
import { ArrowUp, Instagram, ShieldCheck, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.35 0 .68.06 1 .17V9.47a6.34 6.34 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V8.71a8.28 8.28 0 0 0 4.77 1.48V6.74a4.86 4.86 0 0 1-1-.05z"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contatti" className="bg-gallery-900 text-stone-400 pt-16 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Logo & Brand Info */}
          <div className="md:col-span-4 space-y-4">
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
              <a 
                href="https://instagram.com/tanyahusart" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram @tanyahusart"
                className="p-2.5 bg-white/5 hover:bg-gold-bronze hover:text-white rounded-full transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://tiktok.com/@ArtStileTaty" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok @ArtStileTaty"
                className="p-2.5 bg-white/5 hover:bg-gold-bronze hover:text-white rounded-full transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/393922603869" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp +39 392 260 3869"
                className="p-2.5 bg-white/5 hover:bg-emerald-600 hover:text-white rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Real Contacts Card (From Business Card) */}
          <div className="md:col-span-5 space-y-3 bg-white/5 p-6 border border-white/10">
            <span className="text-xs uppercase tracking-widest text-gold-honey font-semibold block mb-3">
              Contatti Diretti d'Atelier
            </span>
            
            <ul className="space-y-3 text-xs text-stone-300 font-light">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full text-gold-honey">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Telefono & WhatsApp</span>
                  <a href="https://wa.me/393922603869" target="_blank" rel="noopener noreferrer" className="font-mono text-stone-200 hover:text-gold-honey transition-colors font-medium">
                    +39 392 260 3869
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full text-gold-honey">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Email Ufficiale</span>
                  <a href="mailto:tetyana.husy@gmail.com" className="font-mono text-stone-200 hover:text-gold-honey transition-colors font-medium">
                    tetyana.husy@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full text-gold-honey">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Atelier di Pittura</span>
                  <span className="text-stone-200 font-medium">Reggio Calabria, Italia</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold-honey font-semibold block mb-2">
              Esplora l'Atelier
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
                <a href="https://instagram.com/tanyahusart" target="_blank" rel="noopener noreferrer" className="hover:text-gold-honey transition-colors flex items-center gap-1">
                  <span>Instagram @tanyahusart</span>
                  <span className="text-[10px] text-gold-bronze">↗</span>
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@ArtStileTaty" target="_blank" rel="noopener noreferrer" className="hover:text-gold-honey transition-colors flex items-center gap-1">
                  <span>TikTok @ArtStileTaty</span>
                  <span className="text-[10px] text-gold-bronze">↗</span>
                </a>
              </li>
            </ul>
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

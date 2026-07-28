import React from 'react';
import { ArrowDown, ExternalLink, Sparkles, Palette, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gallery-50">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Kicker Tag */}
        <div className="tag-kicker">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TETYANA HUSYEVA — Portfolio & Atelier d'Arte</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gallery-900 leading-tight">
              La Mia Arte Non Si Espone Soltanto.{' '}
              <span className="italic font-normal font-serif text-gold-gradient block mt-1">
                Si Indossa.
              </span>
            </h1>

            <p className="body-text max-w-xl">
              Benvenuti nel mio Atelier. Sono <strong className="font-medium text-gallery-900">Tetyana Husyeva (Tanya)</strong> e dipingo interamente a mano creazioni d'alta moda e pezzi d'arte irripetibili. Trasformo l'abbigliamento nella mia tela in movimento per far risplendere la tua identità.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#opere" className="btn-primary">
                <span>Esplora le Mie Creazioni</span>
                <ArrowDown className="w-4 h-4 text-gold-honey" />
              </a>

              <a
                href="#contatti"
                className="btn-outline"
              >
                <span>Contattami in Atelier</span>
                <ExternalLink className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Feature Highlights */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-gold-bronze shrink-0" />
                <span className="text-xs font-medium text-stone-700 uppercase tracking-wider">
                  Dipinto da Me a Mano
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-bronze shrink-0" />
                <span className="text-xs font-medium text-stone-700 uppercase tracking-wider">
                  Pezzi Unici Seriali
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-bronze shrink-0" />
                <span className="text-xs font-medium text-stone-700 uppercase tracking-wider">
                  Mio Certificato Autografo
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Photo of Tania Painting */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto bg-stone-900 shadow-card border border-stone-200 overflow-hidden group">
              <img
                src="/tanya_photos/tanya_che_dipinge.jpg"
                alt="Tania (Tetyana Husyeva) mentre dipinge nel suo laboratorio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gallery-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-gold-honey font-semibold block mb-1">
                  Nel Mio Atelier a Reggio Calabria
                </span>
                <p className="font-serif italic text-base text-gallery-50">
                  "Ogni mia pennellata veste l'anima."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { ExternalLink, Sparkles, Palette, ShieldCheck, ShoppingBag, MessageCircle } from 'lucide-react';

export default function Hero() {
  const waCustomMsg = encodeURIComponent("Ciao Tanya! Vorrei un capo o dipinto personalizzato su misura.");

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gallery-50">
      
      {/* Background Soft Organic Paint/Gold Blobs */}
      <div className="bg-blob-gold top-10 -right-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="bg-blob-cream -bottom-20 -left-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        

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

            <p className="body-text max-w-xl text-stone-700 leading-relaxed">
              Benvenuti nel mio universo artistico. Sono <strong className="font-medium text-gallery-900">Tetyana Husyeva (Tanya)</strong>. Questa è la mia landing page ufficiale di presentazione: qui racconto chi sono, la mia storia ed il mio processo creativo. Per acquistare le mie creazioni disponibili o commissionare un pezzo unico, esplora il mio shop o contattami direttamente.
            </p>

            {/* Just the 2 Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="https://taniahus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ShoppingBag className="w-4 h-4 text-gold-honey" />
                <span>Visita l'E-Commerce (taniahus.com)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`https://wa.me/393922603869?text=${waCustomMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline bg-emerald-50/70 border-emerald-300/80 text-emerald-900 hover:border-emerald-600 hover:text-emerald-950"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Capo Su Misura (WhatsApp)</span>
              </a>
            </div>

            {/* Feature Highlights with Soft Rounded Badges */}
            <div className="pt-6 border-t border-stone-200/70 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-amber-500/10 rounded-full text-gold-bronze">
                  <Palette className="w-4 h-4 shrink-0" />
                </div>
                <span className="text-xs font-medium text-stone-700 uppercase tracking-wider">
                  Dipinto a Mano
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-amber-500/10 rounded-full text-gold-bronze">
                  <Sparkles className="w-4 h-4 shrink-0" />
                </div>
                <span className="text-xs font-medium text-stone-700 uppercase tracking-wider">
                  Pezzi Unici d'Autore
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-amber-500/10 rounded-full text-gold-bronze">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                </div>
                <span className="text-xs font-medium text-stone-700 uppercase tracking-wider">
                  Certificato Autografo
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Photo of Tania Painting in Soft Curved Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Blob behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold-bronze/20 to-amber-200/30 rounded-[3rem] blur-2xl -z-10 transform rotate-3"></div>

            <div className="relative w-full aspect-[4/5] max-w-md mx-auto bg-stone-900 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-stone-200/80 overflow-hidden group">
              <img
                src="/tanya_photos/tanya_che_dipinge.jpg"
                alt="Tania (Tetyana Husyeva) mentre dipinge nel suo laboratorio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gallery-900/85 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase tracking-widest bg-gold-bronze/90 text-white px-3 py-1 rounded-full font-semibold inline-block mb-1">
                  Nel Mio Atelier a Reggio Calabria
                </span>
                <p className="font-serif italic text-base text-gallery-50 leading-snug">
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

import React from 'react';
import { Instagram, ArrowUpRight, Heart, Users, Sparkles } from 'lucide-react';

const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.35 0 .68.06 1 .17V9.47a6.34 6.34 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V8.71a8.28 8.28 0 0 0 4.77 1.48V6.74a4.86 4.86 0 0 1-1-.05z"/>
  </svg>
);

export default function SocialFeed() {
  return (
    <section className="py-20 md:py-28 bg-gallery-900 text-gallery-50 relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-bronze/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Banner Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra font-semibold text-gold-honey">
              <Sparkles className="w-4 h-4" />
              <span>Behind The Scenes & Community</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gallery-50 leading-tight">
              Segui il mio processo creativo{' '}
              <span className="italic font-serif text-gold-gradient font-normal block mt-1">
                sui miei canali ufficiali.
              </span>
            </h2>

            <p className="text-stone-400 font-light text-base max-w-2xl leading-relaxed">
              Condivido quotidianamente la nascita delle mie opere nel mio atelier a Reggio Calabria: dalla stesura dei miei pigmenti permanenti DEKA alla foglia d'oro genuina.
            </p>
          </div>

          {/* Social Stats Callout Card */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-11 h-11 rounded-full bg-gold-bronze/20 border border-gold-bronze/50 flex items-center justify-center text-gold-honey">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-gallery-50 block">20K+</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">Visualizzazioni Community</span>
              </div>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Video virali delle mie lavorazioni. Scopri in tempo reale le mie ultime creazioni.
            </p>
          </div>

        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Real Instagram Card */}
          <a
            href="https://instagram.com/tanyahusart"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 hover:border-gold-bronze p-8 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-tr from-amber-500 to-rose-500 text-white rounded-full">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-gallery-50 block group-hover:text-gold-honey transition-colors">
                    Instagram Ufficiale
                  </span>
                  <span className="text-xs text-gold-honey font-mono font-medium">@tanyahusart</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-gold-honey group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <p className="text-stone-300 font-light text-sm mb-6 leading-relaxed">
              I miei scatti d'Atelier, i dettagli macro dei pigmenti DEKA ed i video espositivi delle mie nuove creazioni su misura.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-widest text-gold-honey">
              <span>Seguimi su @tanyahusart</span>
              <Heart className="w-4 h-4 text-rose-400" />
            </div>
          </a>

          {/* Real Official TikTok Brand Card */}
          <a
            href="https://tiktok.com/@ArtStileTaty"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 hover:border-gold-bronze p-8 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-black border border-white/20 text-white rounded-full">
                  <TikTokIcon className="w-5 h-5 text-gold-honey" />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-gallery-50 block group-hover:text-gold-honey transition-colors">
                    TikTok Ufficiale
                  </span>
                  <span className="text-xs text-gold-honey font-mono font-medium">@ArtStileTaty</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-gold-honey group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <p className="text-stone-300 font-light text-sm mb-6 leading-relaxed">
              I miei video time-lapse del pennello sulla materia ed i momenti autentici del mio lavoro a mano in laboratorio.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-widest text-gold-honey">
              <span>Seguimi su @ArtStileTaty</span>
              <TikTokIcon className="w-4 h-4 text-gold-bronze" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Instagram, Video, ArrowUpRight, Heart, Users, Sparkles } from 'lucide-react';

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
                dietro le quinte del laboratorio.
              </span>
            </h2>

            <p className="text-stone-400 font-light text-base max-w-2xl leading-relaxed">
              Oltre <strong className="text-gallery-50 font-medium">20.000+ persone</strong> seguono la nascita delle mie creazioni nel mio atelier: dalla stesura dei miei pigmenti permanenti alla foglia d'oro genuina.
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
              Video del mio lavoro su tela e tessuto. Entra nel mio laboratorio a Reggio Calabria.
            </p>
          </div>

        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Instagram Card */}
          <a
            href="https://instagram.com"
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
                    Instagram Official
                  </span>
                  <span className="text-xs text-stone-400 font-mono">@tanya.art.stile</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-gold-honey group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <p className="text-stone-300 font-light text-sm mb-6 leading-relaxed">
              I miei scatti d'Atelier, i dettagli macro dei pigmenti DEKA e le anteprime sulle mie nuove opere in arrivo.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-widest text-gold-honey">
              <span>Seguimi su Instagram</span>
              <Heart className="w-4 h-4 text-rose-400" />
            </div>
          </a>

          {/* TikTok Card */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 hover:border-gold-bronze p-8 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-black border border-white/20 text-white rounded-full">
                  <Video className="w-5 h-5 text-gold-honey" />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-gallery-50 block group-hover:text-gold-honey transition-colors">
                    TikTok Atelier
                  </span>
                  <span className="text-xs text-stone-400 font-mono">@tanya_art_stile</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-gold-honey group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <p className="text-stone-300 font-light text-sm mb-6 leading-relaxed">
              I miei video time-lapse del pennello sulla materia ed i momenti autentici del mio processo creativo.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-widest text-gold-honey">
              <span>Guarda i Miei Time-Lapse su TikTok</span>
              <Video className="w-4 h-4 text-gold-bronze" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

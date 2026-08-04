import React from 'react';
import { Instagram, ArrowUpRight, Heart, Sparkles, MessageCircle } from 'lucide-react';

const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.35 0 .68.06 1 .17V9.47a6.34 6.34 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V8.71a8.28 8.28 0 0 0 4.77 1.48V6.74a4.86 4.86 0 0 1-1-.05z"/>
  </svg>
);

export default function SocialFeed() {
  const waCustomMsg = encodeURIComponent("Ciao Tanya! Ho visto i tuoi canali ufficiali sulla landing e vorrei parlare direttamente con te.");

  return (
    <section className="py-20 md:py-28 bg-gallery-900 text-gallery-50 relative overflow-hidden">
      
      {/* Glow Backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-bronze/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra font-semibold text-gold-honey bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Canali Ufficiali & Connessione Direct</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gallery-50 leading-tight">
            Entra Nel Mio Mondo{' '}
            <span className="italic font-serif text-gold-gradient font-normal block mt-1">
              tra arte visiva, moda e creazione.
            </span>
          </h2>

          <p className="text-stone-400 font-light text-base max-w-xl mx-auto leading-relaxed">
            Segui quotidianamente il mio lavoro nel laboratorio di pittura a Reggio Calabria e rimani in contatto diretto con me per creazioni su misura ed opere d'arte.
          </p>
        </div>

        {/* High-Fashion Social & Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Instagram Card */}
          <a
            href="https://instagram.com/tanyahusart"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-bronze p-8 rounded-[2.2rem] backdrop-blur-md transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-gallery-900 rounded-full flex items-center justify-center text-white">
                    <Instagram className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-gold-bronze group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-white" />
                </div>
              </div>

              <span className="text-[10px] uppercase tracking-ultra font-semibold text-gold-honey block mb-1">
                Galleria Visiva & Atelier
              </span>

              <h3 className="font-serif text-2xl font-bold text-gallery-50 group-hover:text-gold-honey transition-colors mb-2">
                Instagram Ufficiale
              </h3>

              <p className="text-xs font-mono text-stone-300 mb-4 bg-white/5 px-3 py-1 inline-block rounded-full border border-white/10">
                @tanyahusart
              </p>

              <p className="text-stone-400 font-light text-xs leading-relaxed mb-6">
                Scatti d'Atelier ad alta definizione, dettagli macro dei pigmenti DEKA ed anteprime sulle mie nuove creazioni d'alta moda in arrivo.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-gold-honey">
              <span>Seguimi su Instagram</span>
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400/20" />
            </div>
          </a>

          {/* TikTok Card */}
          <a
            href="https://tiktok.com/@ArtStileTaty"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-bronze p-8 rounded-[2.2rem] backdrop-blur-md transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-black border border-white/30 flex items-center justify-center text-white shadow-lg">
                  <TikTokIcon className="w-6 h-6 text-gold-honey" />
                </div>
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-gold-bronze group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-white" />
                </div>
              </div>

              <span className="text-[10px] uppercase tracking-ultra font-semibold text-gold-honey block mb-1">
                Processo Creativo & Time-Lapse
              </span>

              <h3 className="font-serif text-2xl font-bold text-gallery-50 group-hover:text-gold-honey transition-colors mb-2">
                TikTok Ufficiale
              </h3>

              <p className="text-xs font-mono text-stone-300 mb-4 bg-white/5 px-3 py-1 inline-block rounded-full border border-white/10">
                @ArtStileTaty
              </p>

              <p className="text-stone-400 font-light text-xs leading-relaxed mb-6">
                Video time-lapse delle pennellate sulla materia, segreti di stesura del colore e momenti autentici direttamente dal mio laboratorio.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-gold-honey">
              <span>Seguimi su TikTok</span>
              <TikTokIcon className="w-4 h-4 text-gold-bronze" />
            </div>
          </a>

          {/* Direct WhatsApp & Atelier Contact Card */}
          <a
            href={`https://wa.me/393922603869?text=${waCustomMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-b from-emerald-950/40 to-gallery-900 border border-emerald-500/30 hover:border-emerald-400 p-8 rounded-[2.2rem] backdrop-blur-md transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-2xl md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-full group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                </div>
              </div>

              <span className="text-[10px] uppercase tracking-ultra font-semibold text-emerald-400 block mb-1">
                Contatto Diretto Personale
              </span>

              <h3 className="font-serif text-2xl font-bold text-gallery-50 group-hover:text-emerald-300 transition-colors mb-2">
                WhatsApp & Direct
              </h3>

              <p className="text-xs font-mono text-emerald-300 mb-4 bg-emerald-950/80 px-3 py-1 inline-block rounded-full border border-emerald-500/30">
                +39 392 260 3869
              </p>

              <p className="text-stone-400 font-light text-xs leading-relaxed mb-6">
                Vuoi richiedere una creazione su misura o informazioni su un'opera? Scrivimi direttamente per parlare con me in Atelier.
              </p>
            </div>

            <div className="pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-emerald-400">
              <span>Chatta con Me su WhatsApp</span>
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Feather } from 'lucide-react';

export default function Story() {
  return (
    <section id="storia" className="py-20 md:py-28 bg-gallery-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo Column: Order-2 on mobile (below text), Order-1 on desktop (left) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto bg-stone-900 shadow-card border border-stone-300 overflow-hidden group">
              <img
                src="/tanya_photos/tanya_profilo_specchio.jpg"
                alt="Ritratto di Tetyana Husyeva (Tanya)"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gallery-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-gallery-50">
                <span className="font-script text-3xl text-gold-honey block mb-0.5">
                  Tetyana Husyeva
                </span>
                <span className="text-[10px] uppercase tracking-widest text-stone-300 block font-medium">
                  Stilista & Pittrice Autodidatta
                </span>
              </div>
            </div>

            {/* Overlapping Small Photo: Tania's hand painting */}
            <div className="hidden sm:block absolute -bottom-6 -right-4 w-44 h-44 border-4 border-gallery-50 shadow-xl overflow-hidden rounded-sm bg-stone-900">
              <img
                src="/tanya_photos/mano_tanya_dipinge.jpg"
                alt="Mano di Tania che dipinge la materia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gallery-900/30 flex items-center justify-center p-2 text-center">
                <span className="text-[9px] uppercase tracking-widest text-white font-semibold bg-black/60 px-2 py-1">
                  100% Fatto a Mano
                </span>
              </div>
            </div>
          </div>

          {/* Text Column: Order-1 on mobile (above photo), Order-2 on desktop (right) */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            
            <div className="tag-kicker">
              <Feather className="w-4 h-4" />
              <span>Il Mio Percorso Artistico</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gallery-900 leading-tight">
              Dalla mia tela al tessuto:{' '}
              <span className="italic font-serif text-gold-gradient font-normal block mt-1">
                la mia storia e la mia visione.
              </span>
            </h2>

            <div className="space-y-4 body-text">
              <p>
                Sono <strong className="font-semibold text-gallery-900">Tetyana Husyeva (Tanya)</strong>. Sono cresciuta in Ucraina con la pittura nel patrimonio della mia famiglia — ispirata fin da bambina dalla mia <strong className="font-semibold text-gallery-900">bisnonna pittrice</strong> —, ed oggi vivo e creo a Reggio Calabria nel mio atelier <strong className="font-semibold text-gallery-900">TANYA Art Stile</strong>.
              </p>

              <p>
                Sono un'artista autodidatta: la vita e la mia passione per la bellezza sono state le mie maestre più grandi. Negli anni ho esposto le mie opere in gallerie d'arte ed eventi dedicati, ma ad un certo punto ho capito che non volevo che i miei quadri rimanessero fermi su una parete. Volevo che prendessero vita in movimento sulle persone.
              </p>

              <p className="border-l-2 border-gold-bronze pl-4 italic text-stone-800 font-serif text-base py-1 bg-gold-bronze/5">
                "Il mio obiettivo è trasmettere bellezza pura. L'unicità per me significa aiutare ciascuna persona a distinguersi dagli altri e ad esprimere autenticamente se stessa."
              </p>

              <p>
                Nel mio laboratorio dipingo a mano ogni capo utilizzando pigmenti permanenti professionali (<strong className="font-semibold text-gallery-900">DEKA Permanent</strong>) su cotone organico e tessuti di pregio. Ogni pezzo ha un valore accessibile (tra i 200 € e i 400 €) ed è firmato e numerato da me con certificato d'autenticità.
              </p>
            </div>

            {/* Signature & Info */}
            <div className="pt-4 border-t border-stone-300 flex items-center justify-between">
              <div>
                <span className="font-script text-3xl text-gallery-900 block">
                  Tetyana Husyeva
                </span>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                  Atelier Reggio Calabria
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs uppercase tracking-widest text-gold-bronze font-semibold block">
                  DEKA Permanent Colors
                </span>
                <span className="text-xs text-stone-500 font-light">
                  Hand Painted in Atelier
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Sparkles, ShoppingBag, ExternalLink, MessageCircle, CheckCircle2, Palette, Frame, Layers } from 'lucide-react';

export default function Gallery() {
  const waMsgQuadro = encodeURIComponent("Ciao Tanya! Vorrei richiedere un quadro o dipinto personalizzato su misura.");
  const waMsgCustom = encodeURIComponent("Ciao Tanya! Vorrei creare un'opera o accessorio unico su mia idea e disegno.");

  return (
    <section id="opere" className="py-20 md:py-32 bg-gallery-100/40 relative overflow-hidden">
      
      {/* Background Soft Blobs */}
      <div className="bg-blob-gold top-40 -left-20"></div>
      <div className="bg-blob-gold bottom-40 -right-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28 md:space-y-36 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="tag-kicker justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Le Collezioni & Creazioni d'Autore</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gallery-900 leading-tight">
            I Principali Abiti, Dipinti & Pezzi Unici
          </h2>

          <p className="body-text text-stone-600 max-w-2xl mx-auto">
            Questa landing page presenta le opere e l'identità artistica di <strong>Tetyana Husyeva</strong>. I capi ed i quadri pronti da acquistare sono disponibili sul suo e-commerce ufficiale, mentre ogni pezzo su misura può essere concordato direttamente in Atelier.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 1: ABITI & VESTITI FATTI DA LEI */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 rounded-full text-gold-bronze text-[11px] uppercase tracking-widest font-bold">
              <Palette className="w-3.5 h-3.5" />
              <span>Prima Collezione — High Fashion & Wearable Art</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-gallery-900 leading-tight">
              Abiti Sartoriali Dipinti a Mano
            </h3>

            <p className="body-text text-stone-700 leading-relaxed">
              Ogni abito nasce come un'opera d'arte tridimensionale. Realizzati in puro cotone e tessuti di prima scelta, i capi vengono dipinti interamente a pennello da Tetyana Husyeva utilizzando pigmenti permanenti DEKA e sfumature dorate in spessore materico. 
            </p>

            <ul className="space-y-3 text-xs text-stone-700 font-medium pt-2">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-amber-500/10 rounded-full text-gold-bronze shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Pigmenti permanenti stesi a mano, resistenti ed indelebili.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-amber-500/10 rounded-full text-gold-bronze shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Capi unici numerati d'Atelier (Pezzi #001, #002, ecc.).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-amber-500/10 rounded-full text-gold-bronze shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Corredati da Certificato d'Autenticità autografo firmato.</span>
              </li>
            </ul>

            {/* Single Button for Dresses -> taniahus.com */}
            <div className="pt-4 border-t border-stone-200/70">
              <a
                href="https://taniahus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ShoppingBag className="w-4 h-4 text-gold-honey" />
                <span>Scopri gli Abiti su TaniaHus.com</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Column: Organic Collage of Real Dresses */}
          <div className="lg:col-span-6 relative">
            <div className="p-4 bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/80">
              
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                {/* Main Featured Photo */}
                <div className="col-span-8 relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-md">
                  <img
                    src="/real_products/prodotto_1.jpg"
                    alt="Giacca Sartoriale Aura Gold"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-gallery-900/90 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold border border-white/20">
                    Giacca "Aura Gold"
                  </div>
                </div>

                {/* Stacked Right Column Photos */}
                <div className="col-span-4 flex flex-col gap-3 md:gap-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-sm">
                    <img
                      src="/real_products/prodotto_2.jpg"
                      alt="Abito Cromatico Ombra & Luce"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full text-center truncate">
                      Alta Moda
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-sm">
                    <img
                      src="/real_products/prodotto_4.jpg"
                      alt="Top Fine Art Gold"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full text-center truncate">
                      Cotone & Oro
                    </div>
                  </div>
                </div>

                {/* Bottom Row Collage Cards */}
                <div className="col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm">
                  <img
                    src="/real_products/prodotto_3_front.jpg"
                    alt="Sculptural Couture Front"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2.5 left-3 text-white text-[10px] uppercase font-medium bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    Fronte Sartoriale
                  </span>
                </div>

                <div className="col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm">
                  <img
                    src="/real_products/prodotto_5.jpg"
                    alt="Atelier Line Dress"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2.5 left-3 text-white text-[10px] uppercase font-medium bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    Pezzo d'Autore
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BLOCK 2: SEZIONE QUADRI */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Organic Collage of Real Paintings */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="p-4 bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/80">
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-md">
                  <img
                    src="/real_quadri/quadro_1.jpg"
                    alt="Quadro Essenza Cromatica N.1"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-gallery-900/90 text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold">
                    Foglia d'Oro Genuina
                  </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-md">
                  <img
                    src="/real_quadri/quadro_4.jpg"
                    alt="Quadro Tratto Materico N.4"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-gallery-900/90 text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold">
                    Acrilico Materico
                  </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-md">
                  <img
                    src="/real_quadri/quadro_6.jpg"
                    alt="Quadro Riflesso d'Oro N.6"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-gallery-900/90 text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold">
                    Atelier d'Autore
                  </div>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-md">
                  <img
                    src="/real_quadri/quadro_7.jpg"
                    alt="Quadro Composizione Astratta N.7"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-gallery-900/90 text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold">
                    Pezzo Unico
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 rounded-full text-gold-bronze text-[11px] uppercase tracking-widest font-bold">
              <Frame className="w-3.5 h-3.5" />
              <span>Seconda Sezione — Opere d'Arte su Tela</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-gallery-900 leading-tight">
              Quadri & Dipinti d'Autore
            </h3>

            <p className="body-text text-stone-700 leading-relaxed">
              Oltre alla moda, la passione di Tetyana Husyeva vive sulle tele d'Atelier. Dipinti caratterizzati da dense stratificazioni cromatiche, contrasti profondi ed impreziositi con vera foglia d'oro. Opere pensate per impreziosire spazi privati, gallerie ed ambienti esclusivi.
            </p>

            <ul className="space-y-3 text-xs text-stone-700 font-medium pt-2">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-amber-500/10 rounded-full text-gold-bronze shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Tele originali lavorate a spatola con acrilici ad alta tenuta.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-amber-500/10 rounded-full text-gold-bronze shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Elementi metallici e riflessi cromatici dorati unici.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-amber-500/10 rounded-full text-gold-bronze shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Opere firmate di pugno in calce con certificazione inclusa.</span>
              </li>
            </ul>

            {/* Single Button for Paintings -> Commissiona Quadro Su Misura (WhatsApp) */}
            <div className="pt-4 border-t border-stone-200/70">
              <a
                href={`https://wa.me/393922603869?text=${waMsgQuadro}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-emerald-700 hover:bg-emerald-800 text-white"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Commissiona Quadro Su Misura</span>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BLOCK 3: E TANTO ALTRO (TEXT & WHATSAPP BUTTON ONLY) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 rounded-full text-gold-bronze text-[11px] uppercase tracking-widest font-bold justify-center">
            <Layers className="w-3.5 h-3.5" />
            <span>Terza Sezione — Custom & Bespoke Projects</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gallery-900 leading-tight">
            E Tanto Altro: Creazioni su Misura
          </h3>

          <p className="body-text text-stone-700 leading-relaxed max-w-2xl mx-auto">
            L'arte di Tanya non si ferma ai vestiti o ai quadri classici: realizza accessori d'autore, giacche personalizzate su disegno del cliente, borse dipinte, dettagli calligrafici e progetti artistici speciali per eventi e collezionisti.
          </p>

          <div className="pt-4">
            <a
              href={`https://wa.me/393922603869?text=${waMsgCustom}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-4 px-9 bg-emerald-700 hover:bg-emerald-800 text-white text-xs shadow-lg hover:shadow-emerald-900/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Crea la Tua Idea Contattandomi su WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

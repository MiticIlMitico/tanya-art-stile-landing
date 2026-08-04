import React from 'react';
import { Brush, Hash, Crown, Sparkles } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      numeral: 'I',
      title: 'Dipinto da Me a Mano',
      subtitle: 'Pigmenti DEKA Permanent',
      icon: Brush,
      description:
        'Stendo manualmente ogni traccia di colore sulla materia con pennelli, spatole e pigmenti permanenti. Rifiuto la stampa digitale per offrire essenza visiva pura.',
    },
    {
      numeral: 'II',
      title: 'Creazioni Uniche & Numerate',
      subtitle: 'Con Mio Certificato Autografo',
      icon: Hash,
      description:
        'Ogni mia creazione reca un numero di serie d\'opera progressivo ed è accompagnata dal certificato di autenticità firmato di mio pugno.',
    },
    {
      numeral: 'III',
      title: 'Espressione della Tua Identità',
      subtitle: 'Abbigliamento & Quadri su Tela',
      icon: Crown,
      description:
        'Dai miei abiti scultorei fino alle felpe couture, borse e quadri su tela: creo ogni pezzo per aiutarti a distinguerti ed esprimere chi sei.',
    },
  ];

  return (
    <section id="filosofia" className="py-20 md:py-28 bg-gallery-50 relative overflow-hidden">
      
      {/* Background Soft Blobs */}
      <div className="bg-blob-gold top-20 left-1/3 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="tag-kicker justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            <span>I Miei Valori</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gallery-900 leading-tight mb-3">
            La Filosofia della Mia Arte
          </h2>

          <p className="body-text max-w-xl mx-auto">
            Ecco i tre principi fondamentali con cui creo ogni singola opera nel mio laboratorio d'Atelier.
          </p>
        </div>

        {/* Pillars Grid in Rounded Organic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md p-8 rounded-[2.2rem] border border-stone-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_rgba(211,140,55,0.15)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                    <span className="font-serif text-3xl font-bold text-gold-bronze">
                      {pillar.numeral}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-amber-500/10 flex items-center justify-center text-gold-bronze">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-gallery-900 mb-1">
                    {pillar.title}
                  </h3>

                  <span className="text-xs uppercase tracking-widest text-gold-bronze font-semibold block mb-3">
                    {pillar.subtitle}
                  </span>

                  <p className="body-text text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-stone-100/80 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>TANYA ART STILE</span>
                  <span className="bg-amber-500/10 text-gold-bronze px-2.5 py-0.5 rounded-full font-sans font-semibold text-[10px]">
                    OPERA.0{idx+1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

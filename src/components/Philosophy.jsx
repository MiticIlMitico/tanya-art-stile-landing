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
    <section id="filosofia" className="py-20 md:py-28 bg-gallery-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
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

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 border border-stone-200 shadow-sm hover:border-gold-bronze transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                    <span className="font-serif text-3xl font-bold text-gold-bronze">
                      {pillar.numeral}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gallery-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gallery-900" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-gallery-900 mb-1">
                    {pillar.title}
                  </h3>

                  <span className="text-xs uppercase tracking-widest text-gold-bronze font-medium block mb-3">
                    {pillar.subtitle}
                  </span>

                  <p className="body-text text-sm">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>TANYA ART STILE</span>
                  <span>OPERA.0{idx+1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Tag, Sparkles, Eye, MessageCircle } from 'lucide-react';

export default function Gallery({ onSelectProduct }) {
  const [filter, setFilter] = useState('Tutti');

  const products = [
    // Real Tania Clothing Products
    {
      id: 1,
      title: 'Giacca Sartoriale "Aura Gold"',
      category: 'Alta Moda',
      price: '340 €',
      image: '/real_products/prodotto_1.jpg',
      tag: 'Pezzo Unico #001',
      description: 'Capo d\'alta moda in cotone pesante dipinto a mano con pennellate d\'oro e pigmenti permanenti DEKA. Certificato d\'autenticità autografo firmato da Tetyana Husyeva.',
    },
    {
      id: 2,
      title: 'Abito Cromatico "Ombra & Luce"',
      category: 'Alta Moda',
      price: '380 €',
      image: '/real_products/prodotto_2.jpg',
      tag: 'Pezzo Unico #002',
      description: 'Creazione esclusiva dipinta a mano con motivi artistici fluidi a forte spessore materico. Capo numerato d\'Atelier.',
    },
    {
      id: 3,
      title: 'Capo Sculptural Couture (Fronte & Retro)',
      category: 'Alta Moda',
      price: '390 €',
      image: '/real_products/prodotto_3_front.jpg',
      altImage: '/real_products/prodotto_3_back.jpg',
      tag: 'Pezzo Unico #003',
      description: 'Opera sartoriale a due facce dipinta sul fronte e sul retro con composizioni cromatiche e dettagli in foglia d\'oro genuina.',
    },
    {
      id: 4,
      title: 'Camicia / Top "Fine Art Gold"',
      category: 'Alta Moda',
      price: '260 €',
      image: '/real_products/prodotto_4.jpg',
      tag: 'Pezzo Unico #004',
      description: 'Creazione in cotone biologico dipinta a pennello libero con pigmento metallico d\'oro bronzato. Pezzo d\'autore numerato.',
    },
    {
      id: 5,
      title: 'Abito Sartoriale "Atelier Line"',
      category: 'Alta Moda',
      price: '320 €',
      image: '/real_products/prodotto_5.jpg',
      tag: 'Pezzo Unico #005',
      description: 'Capo sartoriale unico impreziosito da motivi calligrafici originali stesi a mano nel laboratorio di Reggio Calabria.',
    },

    // Real Tania Paintings (Quadri su Tela)
    {
      id: 6,
      title: 'Quadro "Essenza CROMATICA N.1"',
      category: 'Quadri su Tela',
      price: '350 €',
      image: '/real_quadri/quadro_1.jpg',
      tag: 'Opera Originale',
      description: 'Opera pittorica originale su tela realizzata da Tetyana Husyeva con pigmenti acrilici, tratti materici e foglia d\'oro genuina.',
    },
    {
      id: 7,
      title: 'Quadro "Armonia d\'Atelier N.2"',
      category: 'Quadri su Tela',
      price: '320 €',
      image: '/real_quadri/quadro_2.jpg',
      tag: 'Opera Originale',
      description: 'Dipinto su tela formato galleria caratterizzato da ampie spatolate di colore e contrasto dorato. Pezzo unico firmato dall\'artista.',
    },
    {
      id: 8,
      title: 'Quadro "Visione Astratta N.3"',
      category: 'Quadri su Tela',
      price: '390 €',
      image: '/real_quadri/quadro_3.jpg',
      tag: 'Opera Originale',
      description: 'Composizione astratta contemporanea dipinta a mano nel laboratorio di pittura di Tetyana Husyeva a Reggio Calabria.',
    },
    {
      id: 9,
      title: 'Quadro "Tratto Materico N.4"',
      category: 'Quadri su Tela',
      price: '290 €',
      image: '/real_quadri/quadro_4.jpg',
      tag: 'Opera Originale',
      description: 'Studio d\'arte su tela con stratificazioni cromatiche dense e riflessi cromatici dorati. Firmato in calce dall\'artista.',
    },
    {
      id: 10,
      title: 'Quadro "Ombra e Luce N.5"',
      category: 'Quadri su Tela',
      price: '360 €',
      image: '/real_quadri/quadro_5.jpg',
      tag: 'Opera Originale',
      description: 'Dipinto originale d\'autore con contrasti profondi ed elementi d\'arte informale. Certificato di autenticità autografo incluso.',
    },
    {
      id: 11,
      title: 'Quadro "Riflesso d\'Oro N.6"',
      category: 'Quadri su Tela',
      price: '400 €',
      image: '/real_quadri/quadro_6.jpg',
      tag: 'Opera Originale',
      description: 'Opera su tela di grande presenza visiva impreziosita da dettagli in foglia d\'oro genuina e firmata di pugno da Tetyana Husyeva.',
    },
  ];

  const filteredProducts =
    filter === 'Tutti'
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section id="opere" className="py-20 md:py-28 bg-gallery-100/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="tag-kicker justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Ufficiale</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gallery-900 leading-tight mb-3">
            Le Mie Creazioni & Quadri d'Autore
          </h2>

          <p className="body-text max-w-xl mx-auto">
            Ogni pezzo è numerato, dipinto interamente da me nel mio atelier a Reggio Calabria ed unico al mondo.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {['Tutti', 'Alta Moda', 'Quadri su Tela'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                filter === tab
                  ? 'bg-gallery-900 text-gallery-50 shadow-sm'
                  : 'bg-white text-stone-600 hover:text-gallery-900 border border-stone-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Uniform Framed Aspect Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const waMsg = encodeURIComponent(`Ciao Tanya, vorrei maggiori dettagli per la creazione "${product.title}" (${product.price}).`);
            return (
              <div
                key={product.id}
                className="group bg-white border border-stone-200 overflow-hidden shadow-sm hover:border-gold-bronze transition-all duration-300 flex flex-col justify-between"
              >
                {/* Fixed Framed Image Box */}
                <div 
                  className="relative aspect-[4/5] overflow-hidden bg-stone-900 cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Vignette Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Hand Painted Tag */}
                  <div className="absolute top-3 left-3 bg-gallery-900/90 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium flex items-center gap-1 border border-white/10 shadow-md">
                    <Tag className="w-3 h-3 text-gold-honey" />
                    <span>{product.tag}</span>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute inset-0 bg-gallery-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-4 py-2 bg-gallery-50 text-gallery-900 text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-md">
                      <Eye className="w-4 h-4 text-gold-bronze" />
                      <span>Anteprima Opera</span>
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-bronze font-semibold block mb-1">
                      {product.category}
                    </span>
                    
                    <h3 className="font-serif text-lg font-bold text-gallery-900 group-hover:text-gold-bronze transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-stone-500 font-light text-xs mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Real WhatsApp Contact CTA */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 block">Valore dell'Opera</span>
                      <span className="font-serif text-base font-bold text-gallery-900">{product.price}</span>
                    </div>

                    <a
                      href={`https://wa.me/393922603869?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Richiedi</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500 font-light italic">
            * Tutti i prezzi includono la mia confezione regalo d'Atelier ed il mio Certificato di Autenticità autografo.
          </p>
        </div>

      </div>
    </section>
  );
}

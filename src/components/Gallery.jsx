import React, { useState } from 'react';
import { ExternalLink, Tag, Sparkles, Eye } from 'lucide-react';

export default function Gallery({ onSelectProduct }) {
  const [filter, setFilter] = useState('Tutti');

  const products = [
    {
      id: 1,
      title: 'Giacca "Aura Gold" Custom',
      category: 'Alta Moda',
      price: '340 €',
      image: '/products/jacket_aura.png',
      tag: 'Creazione #001',
      description: 'Giacca strutturata in cotone biologico dipinta da me a mano con pigmenti permanenti DEKA e sfumature metalliche oro bronzato. Mio certificato autografo.',
      storeUrl: 'https://store.tanyaartstile.com',
    },
    {
      id: 2,
      title: 'Abito da Sera "Seta & Ombra"',
      category: 'Alta Moda',
      price: '390 €',
      image: '/products/dress_gold.png',
      tag: 'Creazione #002',
      description: 'Abito fluido in pura seta dipinto a pennello libero con ampie volute oro ed essenza cromatica scura. Opera d\'alta moda irripetibile.',
      storeUrl: 'https://store.tanyaartstile.com',
    },
    {
      id: 3,
      title: 'Felpa Hoodie "Canvas Noir"',
      category: 'Alta Moda',
      price: '240 €',
      image: '/products/hoodie_canvas.png',
      tag: 'Creazione #003',
      description: 'Felpa pesante oversize in cotone egiziano con tratti calligrafici ad alto spessore materico e spruzzi di pigmento dorato. Serie numerata.',
      storeUrl: 'https://store.tanyaartstile.com',
    },
    {
      id: 4,
      title: 'Borsa "Lumina" in Pelle Dipinta',
      category: 'Quadri & Accessori',
      price: '280 €',
      image: '/products/bag_accessory.png',
      tag: 'Creazione #004',
      description: 'Borsa a mano in pelle di vitello beige impreziosita dalle mie pennellate a forte rilevanza materica. Pezzo d\'autore unico.',
      storeUrl: 'https://store.tanyaartstile.com',
    },
    {
      id: 5,
      title: 'Quadro "Abstract Fusion N.1"',
      category: 'Quadri & Accessori',
      price: '350 €',
      image: '/products/canvas_painting.png',
      tag: 'Opera Originale',
      description: 'Mia opera pittorica originale su tela grande formato (120x120cm) realizzata con foglia d\'oro genuina e pigmento acrilico nero.',
      storeUrl: 'https://store.tanyaartstile.com',
    },
    {
      id: 6,
      title: 'Dettaglio Texture "Atelier Stroke"',
      category: 'Alta Moda',
      price: '220 €',
      image: '/assets/hero_brushstroke.png',
      tag: 'Creazione #005',
      description: 'Studio di pennellata macro su tessuto organico. Capo da collezione numerato direttamente dal mio laboratorio TANYA Art Stile.',
      storeUrl: 'https://store.tanyaartstile.com',
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
            <span>Portfolio Opere</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gallery-900 leading-tight mb-3">
            Le Mie Creazioni d'Autore
          </h2>

          <p className="body-text max-w-xl mx-auto">
            Ogni pezzo è numerato, dipinto interamente da me ed unico al mondo. 
            Esplora le mie creazioni d'alta moda e le mie opere d'arte visiva su tela.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {['Tutti', 'Alta Moda', 'Quadri & Accessori'].map((tab) => (
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-stone-200 overflow-hidden shadow-sm hover:border-gold-bronze transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Box */}
              <div 
                className="relative aspect-[4/5] overflow-hidden bg-stone-100 cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hand Painted Tag */}
                <div className="absolute top-3 left-3 bg-gallery-900/90 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium flex items-center gap-1">
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

                {/* Price & CTA */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 block">Valore dell'Opera</span>
                    <span className="font-serif text-base font-bold text-gallery-900">{product.price}</span>
                  </div>

                  <a
                    href={product.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gallery-900 hover:text-gold-bronze transition-colors"
                  >
                    <span>In Boutique</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold-bronze" />
                  </a>
                </div>

              </div>

            </div>
          ))}
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

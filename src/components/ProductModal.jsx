import React from 'react';
import { X, ExternalLink, Tag, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-gallery-900/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-gallery-50 border border-stone-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-gallery-900 text-white rounded-full hover:bg-gold-bronze transition-colors shadow-md"
          aria-label="Chiudi Anteprima"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Side */}
        <div className="w-full md:w-1/2 relative bg-stone-900 min-h-[300px] md:min-h-[450px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-gallery-900/90 text-white text-[10px] uppercase tracking-ultra px-3 py-1 font-medium flex items-center gap-1.5 shadow-md">
            <Tag className="w-3.5 h-3.5 text-gold-honey" />
            <span>{product.tag}</span>
          </div>
        </div>

        {/* Product Info Side */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
          
          <div className="space-y-6">
            
            <div>
              <span className="text-xs uppercase tracking-ultra text-gold-bronze font-semibold block mb-1">
                {product.category} — TANYA Art Stile
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gallery-900 leading-tight">
                {product.title}
              </h2>
            </div>

            <div className="py-3 border-y border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 block">Valore dell'Opera</span>
                <span className="font-serif text-2xl font-bold text-gallery-900">{product.price}</span>
              </div>
              <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 font-medium uppercase tracking-wider">
                Disponibile in Atelier
              </span>
            </div>

            <p className="text-stone-600 font-light text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Specifications list */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-bronze" />
                <span>100% Dipinto a mano con pigmenti DEKA Permanent</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-gold-bronze" />
                <span>Certificato d'Autenticità autografo firmato da Tetyana Husyeva</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                <Sparkles className="w-4 h-4 text-gold-bronze" />
                <span>Confezione regalo d'Atelier inclusa</span>
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
            <a
              href={product.storeUrl || 'https://store.tanyaartstile.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gallery-900 text-gallery-50 text-xs font-semibold uppercase tracking-ultra hover:bg-gold-bronze transition-colors shadow-luxury group"
            >
              <span>Acquista in Boutique</span>
              <ExternalLink className="w-4 h-4 text-gold-honey group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <button
              onClick={onClose}
              className="px-6 py-3.5 bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold uppercase tracking-ultra transition-colors"
            >
              Chiudi
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { X, Tag, ShieldCheck, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const whatsappMessage = encodeURIComponent(`Ciao Tanya, vorrei informazioni sulla creazione "${product.title}" (${product.price}).`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-gallery-900/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      
      {/* Modal Container with Fixed Bounds */}
      <div className="relative w-full max-w-3xl bg-gallery-50 border border-stone-200 shadow-2xl overflow-hidden rounded-sm my-auto flex flex-col md:flex-row max-h-[85vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 bg-gallery-900/90 text-white rounded-full hover:bg-gold-bronze transition-colors shadow-lg border border-white/20"
          aria-label="Chiudi Anteprima"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image Box with Fixed Height & Gradient Vignette */}
        <div className="w-full md:w-5/12 relative bg-stone-900 shrink-0 h-60 md:h-auto max-h-[300px] md:max-h-none overflow-hidden group">
          <img
            src={activeImage}
            alt={product.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Subtle Luxury Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none"></div>

          {/* Tag Badge */}
          <div className="absolute top-3 left-3 bg-gallery-900/90 text-white text-[10px] uppercase tracking-ultra px-2.5 py-1 font-medium flex items-center gap-1.5 shadow-md border border-white/10">
            <Tag className="w-3 h-3 text-gold-honey" />
            <span>{product.tag}</span>
          </div>

          {/* Front/Back View Switcher */}
          {product.altImage && (
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 justify-center bg-black/60 p-1.5 backdrop-blur-sm rounded">
              <button
                onClick={() => setActiveImage(product.image)}
                className={`px-3 py-0.5 text-[10px] uppercase tracking-widest font-semibold transition-colors rounded ${
                  activeImage === product.image ? 'bg-gold-honey text-gallery-900' : 'bg-white/20 text-white'
                }`}
              >
                Fronte
              </button>
              <button
                onClick={() => setActiveImage(product.altImage)}
                className={`px-3 py-0.5 text-[10px] uppercase tracking-widest font-semibold transition-colors rounded ${
                  activeImage === product.altImage ? 'bg-gold-honey text-gallery-900' : 'bg-white/20 text-white'
                }`}
              >
                Retro
              </button>
            </div>
          )}
        </div>

        {/* Product Info Side - Perfectly Sized & Compact */}
        <div className="w-full md:w-7/12 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto">
          
          <div className="space-y-4">
            
            <div>
              <span className="text-[10px] uppercase tracking-ultra text-gold-bronze font-semibold block mb-0.5">
                {product.category} — TANYA Art Stile
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gallery-900 leading-tight">
                {product.title}
              </h2>
            </div>

            <div className="py-2.5 border-y border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-stone-400 block">Valore dell'Opera</span>
                <span className="font-serif text-xl font-bold text-gallery-900">{product.price}</span>
              </div>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 font-semibold uppercase tracking-wider rounded">
                Disponibile in Atelier
              </span>
            </div>

            <p className="text-stone-600 font-light text-xs leading-relaxed">
              {product.description}
            </p>

            {/* Specifications list */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-bronze shrink-0" />
                <span>100% Dipinto a mano (Pigmenti DEKA Permanent)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-bronze shrink-0" />
                <span>Certificato d'Autenticità autografo firmato</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-gold-bronze shrink-0" />
                <span>Confezione regalo d'Atelier inclusa</span>
              </div>
            </div>

          </div>

          {/* Action CTAs Immediately Visible */}
          <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-3">
            <a
              href={`https://wa.me/393922603869?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-700 text-white text-xs font-semibold uppercase tracking-ultra hover:bg-emerald-800 transition-colors shadow-md group rounded-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Richiedi su WhatsApp</span>
            </a>
            
            <button
              onClick={onClose}
              className="px-4 py-3 bg-transparent border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold uppercase tracking-ultra transition-colors rounded-sm"
            >
              Chiudi
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

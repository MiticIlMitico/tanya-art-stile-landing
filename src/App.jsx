import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-gallery-50 text-gallery-900 font-sans selection:bg-gold-bronze selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Story />
        <Philosophy />
        <Gallery onSelectProduct={(product) => setSelectedProduct(product)} />
        <SocialFeed />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Product Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gallery-50 text-gallery-900 font-sans selection:bg-gold-bronze selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Story />
        <Philosophy />
        <Gallery />
        <SocialFeed />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


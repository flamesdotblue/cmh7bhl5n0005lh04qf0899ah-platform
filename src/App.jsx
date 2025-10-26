import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-purple-50 text-black antialiased selection:bg-pink-500/30 selection:text-black">
      <Hero />
      <main>
        <Services />
        <CaseStudies />
        <CTA />
      </main>
      <footer className="relative z-10 border-t border-black/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-black/60">
          © {new Date().getFullYear()} FluxScale Performance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

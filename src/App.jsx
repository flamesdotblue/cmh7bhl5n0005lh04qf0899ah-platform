import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-pink-500/30 selection:text-white">
      <Hero />
      <main>
        <Services />
        <CaseStudies />
        <CTA />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} FluxScale Performance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

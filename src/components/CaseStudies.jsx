import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    brand: 'Athletiq Apparel',
    stat: '+312% ROAS',
    sub: 'Meta + TikTok • 90 days',
    summary: 'Scaled with creative angle testing and post-purchase attribution. CAC down 34%.',
  },
  {
    brand: 'GlowSkin Co.',
    stat: '2.4x MER',
    sub: 'Google PMax + Meta • 60 days',
    summary: 'Offer-led landing pages and PMax structure overhaul lifted blended efficiency.',
  },
  {
    brand: 'HomeNest',
    stat: '+68% Rev',
    sub: 'Seasonal push • 45 days',
    summary: 'Bid automation and SKU pruning reduced waste and unlocked incremental lift.',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h2>
        <p className="mt-3 text-white/70">Real outcomes from high-velocity execution and creative iteration.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.article
            key={c.brand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-slate-900/70 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 opacity-60">
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-pink-500/20 blur-2xl" />
            </div>
            <div className="relative">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold tracking-tight">{c.brand}</h3>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  {c.sub}
                </span>
              </div>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
                {c.stat}
              </p>
              <p className="mt-3 text-sm text-white/75">{c.summary}</p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-purple-300/0 transition duration-300 hover:ring-2 hover:ring-purple-300/20" />
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm text-white/70 backdrop-blur">
        Results are representative of select campaigns and timeframes; individual performance may vary.
      </div>
    </section>
  );
}

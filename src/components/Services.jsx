import React from 'react';
import { Target, BarChart3, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Acquisition at Scale',
    desc: 'Full-funnel account structure across Meta, TikTok, and Google with disciplined budget pacing and creative sprints.',
    icon: Target,
  },
  {
    title: 'Creative Systems',
    desc: 'UGC, hooks, and offer matrices tested weekly. We turn insights into new iterations that compound ROAS.',
    icon: Sparkles,
  },
  {
    title: 'Measurement & LTV',
    desc: 'Blend in-platform data with post-purchase surveys and cohort LTV to optimize for profit, not vanity metrics.',
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20" id="services">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
        <p className="mt-3 text-black/70">Tightly integrated media buying, creative, and analytics—designed for ecommerce velocity.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[inset_0_1px_0_rgba(0,0,0,0.06),0_10px_40px_-10px_rgba(59,130,246,0.15)] backdrop-blur"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-2xl" />
            <div className="relative flex items-center gap-3">
              <div className="rounded-xl border border-black/10 bg-white/70 p-3 backdrop-blur">
                <s.icon className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
            <p className="relative mt-3 text-sm leading-relaxed text-black/75">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

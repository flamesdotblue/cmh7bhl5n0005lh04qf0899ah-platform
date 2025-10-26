import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-10 shadow-[0_10px_50px_-10px_rgba(236,72,153,0.35)] backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_0%,rgba(168,85,247,0.25),transparent),radial-gradient(60%_60%_at_90%_100%,rgba(59,130,246,0.25),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to scale profitably?</h3>
            <p className="mt-3 text-white/80">
              Get a free growth audit covering creative, account structure, and measurement. We’ll share quick wins and a 90-day plan.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@fluxscale.co?subject=Growth%20Audit%20Request"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                <Rocket className="h-5 w-5 text-purple-200" />
                Request Audit
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-xl border border-white/10 bg-slate-950/60 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-slate-900/70"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

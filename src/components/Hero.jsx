import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t6fYoL-pmPsm38nx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-600/40 via-pink-500/30 to-blue-600/40 mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.18),transparent)]" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-2 backdrop-blur">
              <Sparkles className="h-5 w-5 text-pink-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight">FluxScale Performance</span>
          </div>
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15">
            <Rocket className="h-4 w-4 text-purple-300 transition group-hover:translate-x-0.5" />
            Get Proposal
          </a>
        </header>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-16 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              Ecommerce Ads • Performance Marketing
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Scale profitably with high-velocity ad operations
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              We engineer profitable growth for DTC brands using creative testing, conversion data, and channel automation across Meta, TikTok, and Google.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/15 px-5 py-3 font-medium text-white shadow-[0_8px_40px_-8px_rgba(168,85,247,0.45)] backdrop-blur transition hover:bg-white/20">
                <Rocket className="h-5 w-5 text-purple-200" />
                Get a Free Audit
              </a>
              <a href="#case-studies" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/60 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-slate-900/70">
                View Case Studies
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/70">
              <span>Paid Social</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>Creative Iteration</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>Attribution + LTV</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

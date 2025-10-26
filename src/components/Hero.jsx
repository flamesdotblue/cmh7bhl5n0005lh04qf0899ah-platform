import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t6fYoL-pmPsm38nx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Ambient tint with stronger top light to support black text */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-pink-200/20 to-blue-600/40 mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.55),transparent)]" />
      </div>

      <div className="relative z-10">
        {/* In-hero header (kept within hero to avoid altering other sections) */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-black/10 bg-white/80 p-2 shadow-sm backdrop-blur">
              <Sparkles className="h-5 w-5 text-pink-600" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-black">FluxScale Performance</span>
          </div>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-black shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
          >
            <Rocket className="h-4 w-4 text-purple-700 transition group-hover:translate-x-0.5" />
            Get Proposal
          </a>
        </header>

        {/* Content card for contrast over Spline */}
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-6 sm:pt-10 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-4xl"
          >
            <div className="relative mx-auto max-w-3xl rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.2)] backdrop-blur">
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-purple-500/10 via-pink-500/10 to-blue-500/10" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-3 py-1 text-xs text-black/80 shadow-sm backdrop-blur">
                  Ecommerce Ads • Performance Marketing
                </div>
                <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl">
                  Scale profitably with high-velocity ad operations
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-black/80">
                  We engineer profitable growth for DTC brands using creative testing, conversion data, and channel automation across Meta, TikTok, and Google.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#cta"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/80 px-5 py-3 font-medium text-black shadow-[0_8px_40px_-8px_rgba(168,85,247,0.25)] backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                  >
                    <Rocket className="h-5 w-5 text-purple-700" />
                    Get a Free Audit
                  </a>
                  <a
                    href="#case-studies"
                    className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-black/10 px-5 py-3 font-medium text-black/90 backdrop-blur transition hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                  >
                    View Case Studies
                  </a>
                </div>
                <div className="mt-10 flex items-center justify-center gap-6 text-sm text-black/70">
                  <span>Paid Social</span>
                  <span className="h-1 w-1 rounded-full bg-black/40" />
                  <span>Creative Iteration</span>
                  <span className="h-1 w-1 rounded-full bg-black/40" />
                  <span>Attribution + LTV</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft orbs for ambient depth without overpowering text */}
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-pink-400/20 blur-3xl" />
    </section>
  );
}

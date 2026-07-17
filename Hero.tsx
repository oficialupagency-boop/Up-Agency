"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import Button from "@/components/ui/Button";

const easing = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[164px] pb-24 md:pt-[200px] md:pb-32">
      <div className="grid-texture pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]" />

      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing }}
          className="flex items-center gap-2.5"
        >
          <span className="h-[6px] w-[6px] rounded-full bg-signal" />
          <span className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink/60">
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing, delay: 0.08 }}
          className="mt-7 max-w-[15ch] text-display-1 font-semibold text-ink text-balance"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing, delay: 0.18 }}
          className="mt-7 max-w-[46ch] text-[17px] leading-relaxed text-ink/65 md:text-[19px]"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing, delay: 0.28 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#cta" variant="primary" showArrow>
            {hero.ctaPrimary}
          </Button>
          <Button href="#metodo" variant="secondary">
            {hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: easing, delay: 0.45 }}
          className="mt-24 border-t border-ink/[0.08] pt-8"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink/40 mb-5">
            {hero.proofLabel}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {hero.sectors.map((sector) => (
              <span key={sector} className="text-[15px] font-medium text-ink/50">
                {sector}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

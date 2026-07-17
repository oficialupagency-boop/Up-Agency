"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-mist py-24 md:py-32">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
          <Reveal>
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 className="max-w-[14ch] text-display-2 font-semibold text-ink text-balance">
              {faq.title}
            </h2>
          </Reveal>

          <div className="flex flex-col">
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={item.question} delay={i * 50}>
                  <div className="border-b border-ink/[0.08]">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-[16px] font-medium text-ink">{item.question}</span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-ink/50 transition-transform duration-300 ease-premium ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-[14.5px] leading-relaxed text-ink/60 max-w-[64ch]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

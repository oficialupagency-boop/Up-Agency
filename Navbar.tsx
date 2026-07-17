"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, siteConfig } from "@/lib/content";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-premium ${
        scrolled ? "glass border-b border-ink/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="container-content flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper text-sm font-semibold">
            U
          </span>
          <span className="text-[15px] font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-ink/65 transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#cta" variant="primary" className="!py-3 !px-6 text-[14px]">
            Solicitar Diagnóstico
          </Button>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-paper border-t border-ink/[0.06] lg:hidden"
          >
            <div className="container-content flex flex-col gap-1 py-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[16px] font-medium text-ink/80 border-b border-ink/[0.05] last:border-none"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-5">
                <Button href="#cta" variant="primary" className="w-full">
                  Solicitar Diagnóstico
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

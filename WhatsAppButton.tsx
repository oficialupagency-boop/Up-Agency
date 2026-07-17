"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a UP Agency no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-[0_8px_30px_rgba(17,17,17,0.25)] transition-all duration-300 ease-premium hover:bg-signal hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
      <span className="absolute inset-0 rounded-full bg-signal/40 animate-ping [animation-duration:2.4s]" />
    </a>
  );
}

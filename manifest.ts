import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Sua parceria de crescimento`,
    short_name: siteConfig.name,
    description:
      "Growth Partner de empresas B2B: branding, posicionamento, sites e landing pages orientados a reuniões qualificadas.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

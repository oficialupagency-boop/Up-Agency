import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "UP Agency — Sua parceria de crescimento para empresas B2B",
    template: "%s | UP Agency",
  },
  description:
    "A UP Agency é a Growth Partner de empresas B2B entre R$3M e R$30M de faturamento. Branding, posicionamento, sites institucionais, landing pages e apresentações comerciais orientados a reuniões qualificadas.",
  keywords: [
    "growth partner B2B",
    "branding B2B",
    "site institucional",
    "landing page de alta conversão",
    "posicionamento de marca",
    "agência para indústrias",
    "agência para engenharia",
    "geração de leads B2B",
  ],
  authors: [{ name: "UP Agency" }],
  creator: "UP Agency",
  publisher: "UP Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "UP Agency — Sua parceria de crescimento",
    description:
      "Growth Partner de empresas B2B: branding, posicionamento, sites institucionais e landing pages orientados a reuniões qualificadas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UP Agency — Sua parceria de crescimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UP Agency — Sua parceria de crescimento",
    description:
      "Growth Partner de empresas B2B: branding, posicionamento, sites institucionais e landing pages orientados a reuniões qualificadas.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "UP Agency",
  description:
    "Growth Partner especializada em ajudar empresas B2B a crescer através de branding, posicionamento, sites institucionais, landing pages e estratégia de crescimento.",
  url: siteConfig.url,
  email: siteConfig.email,
  areaServed: "BR",
  slogan: "Sua parceria de crescimento.",
  knowsAbout: [
    "Branding",
    "Posicionamento de marca",
    "Desenvolvimento de sites institucionais",
    "Landing pages",
    "Apresentações comerciais",
    "Estratégia de crescimento B2B",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-paper text-ink antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

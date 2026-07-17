# UP Agency — Site Institucional

Site oficial da UP Agency, Growth Partner de empresas B2B. Construído com Next.js 15 (App Router), TypeScript, Tailwind CSS e Framer Motion.

## Stack

- **Next.js 15** — App Router, Metadata API, Route Handlers
- **TypeScript**
- **Tailwind CSS** — design tokens customizados (paleta, tipografia, easing)
- **Framer Motion** — animações de entrada e microinterações
- **Lucide Icons**
- SEO: metadata dinâmica, Open Graph, Schema.org (`ProfessionalService`), sitemap e robots via Metadata API
- PWA-ready: `manifest.ts` + ícones
- Dark mode habilitado via classe (`darkMode: "class"`) — pronto para ativação futura

## Estrutura

```
src/
  app/
    layout.tsx          # Metadata, fonts, Schema.org, WhatsApp button global
    page.tsx             # Composição das seções da home
    globals.css          # Tokens e utilitários globais
    sitemap.ts            # /sitemap.xml
    robots.ts             # /robots.txt
    manifest.ts            # /manifest.webmanifest
    not-found.tsx
    loading.tsx
    api/contact/route.ts  # Endpoint do formulário de contato
  components/
    sections/            # Navbar, Hero, Problems, Method, Services,
                          # Differentials, Process, FAQ, CTA, ContactForm, Footer
    ui/                   # Button, Eyebrow, Reveal, WhatsAppButton
  lib/
    content.ts             # Todo o copy do site, centralizado
    useReveal.ts            # Hook de scroll-reveal (IntersectionObserver)
public/
  favicon.svg, icon-192.png, icon-512.png, apple-touch-icon.png, og-image.png
```

## Instalação

Pré-requisito: Node.js 18.18 ou superior.

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Build de produção (local)

```bash
npm run build
npm run start
```

## Publicar na Vercel

**Opção 1 — via CLI**

```bash
npm install -g vercel
vercel
```

Siga o fluxo interativo (login, escolha do escopo, confirmação do diretório) e depois rode `vercel --prod` para publicar em produção.

**Opção 2 — via GitHub**

1. Suba este projeto para um repositório no GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. A Vercel detecta Next.js automaticamente — não é necessário configurar build command ou output directory.
4. Clique em "Deploy".

## Antes de publicar

- [ ] Atualizar `whatsappNumber` em `src/lib/content.ts` com o número real (formato `55DDDNÚMERO`, sem símbolos).
- [ ] Atualizar `email` e `url` em `siteConfig` (`src/lib/content.ts`) com o domínio final.
- [ ] Substituir os ícones em `/public` (favicon, ícones PWA e imagem Open Graph) pelos ativos de marca definitivos — os atuais são placeholders gerados programaticamente.
- [ ] Conectar `src/app/api/contact/route.ts` a um CRM, provedor de email (ex. Resend) ou webhook (ex. Slack) — atualmente o endpoint apenas registra o lead em log.
- [ ] Revisar o copy em `src/lib/content.ts` com o time de negócio.

## Notas de SEO e performance

- Todas as imagens devem usar `next/image` ao serem adicionadas (fotos de equipe, cases, etc.).
- A fonte Inter é carregada via `next/font/google` com `display: swap`, sem layout shift.
- `prefers-reduced-motion` é respeitado globalmente em `globals.css`.
- Estrutura semântica (`header`, `main`, `section`, `footer`) e foco visível em todos os elementos interativos.

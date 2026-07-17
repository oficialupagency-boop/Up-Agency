import Link from "next/link";
import { footer, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-paper pt-16 pb-8">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper text-sm font-semibold">
                U
              </span>
              <span className="text-[15px] font-semibold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="mt-5 max-w-[36ch] text-[14px] leading-relaxed text-ink/55">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink/40">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-ink/60 transition-colors duration-200 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink/[0.08] pt-8 text-[13px] text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

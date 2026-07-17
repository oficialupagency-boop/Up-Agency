import { services } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="container-content">
        <Reveal>
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 className="max-w-[24ch] text-display-2 font-semibold text-ink text-balance">
            {services.title}
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-5">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="group grid grid-cols-1 gap-6 rounded-2xl border border-ink/[0.08] p-8 transition-all duration-300 ease-premium hover:border-ink/20 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)] md:grid-cols-[1.1fr_1fr_1fr_1fr] md:items-center md:gap-8 md:p-10">
                <h3 className="text-[19px] font-semibold text-ink">{item.title}</h3>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/35">
                    Problema
                  </span>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{item.problem}</p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/35">
                    Solução
                  </span>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{item.solution}</p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-signal">
                    Resultado
                  </span>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/80">{item.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { differentials } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-mist py-24 md:py-32">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
          <Reveal>
            <Eyebrow>{differentials.eyebrow}</Eyebrow>
            <h2 className="max-w-[16ch] text-display-2 font-semibold text-ink text-balance">
              {differentials.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/[0.06] sm:grid-cols-2">
            {differentials.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full bg-mist p-7 transition-colors duration-300 hover:bg-paper">
                  <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

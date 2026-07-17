import { problems } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Problems() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="container-content">
        <Reveal>
          <Eyebrow>{problems.eyebrow}</Eyebrow>
          <h2 className="max-w-[20ch] text-display-2 font-semibold text-ink text-balance">
            {problems.title}
          </h2>
          <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-ink/60">
            {problems.description}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/[0.06] md:grid-cols-2 lg:grid-cols-3">
          {problems.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="h-full bg-mist p-8 transition-colors duration-300 hover:bg-paper">
                <span className="mb-5 block text-[13px] font-semibold text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[17px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/60">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { process } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  return (
    <section id="processo" className="py-24 md:py-32">
      <div className="container-content">
        <Reveal>
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2 className="max-w-[26ch] text-display-2 font-semibold text-ink text-balance">
            {process.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-5">
          {process.steps.map((step, i) => (
            <Reveal key={step.name} delay={i * 70}>
              <div
                className={`relative border-t border-ink/[0.08] py-8 pr-6 md:py-0 md:pb-2 md:pt-8 ${
                  i !== 0 ? "md:border-l md:pl-7" : ""
                }`}
              >
                <span className="text-[13px] font-semibold text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">{step.name}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

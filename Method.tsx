import { method } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function Method() {
  return (
    <section id="metodo" className="bg-ink py-24 text-paper md:py-32">
      <div className="container-content">
        <Reveal>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="h-[6px] w-[6px] rounded-full bg-signal shrink-0" />
            <span className="text-[13px] font-medium tracking-[0.14em] uppercase text-paper/50">
              {method.eyebrow}
            </span>
          </div>
          <h2 className="text-display-2 font-semibold text-paper">{method.title}</h2>
          <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-paper/55">
            {method.description}
          </p>
        </Reveal>

        <div className="mt-20 relative">
          <div
            className="absolute left-[27px] top-0 bottom-0 w-px bg-paper/[0.12] md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-14 md:gap-0">
            {method.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={step.letter} delay={i * 90}>
                  <div
                    className={`relative flex items-start gap-7 md:gap-0 md:py-10 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`hidden md:block md:w-[calc(50%-40px)] ${
                        isEven ? "text-right pr-2" : "text-left pl-2"
                      }`}
                    >
                      <h3 className="text-[22px] font-semibold text-paper">{step.name}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-paper/55 max-w-[38ch] md:ml-auto">
                        {step.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-paper/15 bg-ink text-[19px] font-semibold text-signal">
                      {step.letter}
                    </div>

                    <div className="md:hidden">
                      <h3 className="text-[19px] font-semibold text-paper">{step.name}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-paper/55">
                        {step.description}
                      </p>
                    </div>

                    <div className="hidden md:block md:w-[calc(50%-40px)]" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

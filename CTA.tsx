import { cta } from "@/lib/content";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";

export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Eyebrow>{cta.eyebrow}</Eyebrow>
            <h2 className="max-w-[18ch] text-display-2 font-semibold text-ink text-balance">
              {cta.title}
            </h2>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-ink/60">
              {cta.description}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Accordion } from "@/components/ui/Accordion";
import { FaqItem } from "@/types";

interface FaqProps {
  faqs: FaqItem[];
}

export const Faq: React.FC<FaqProps> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  const accordionItems = faqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    children: <p>{faq.answer}</p>,
  }));

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 overflow-hidden bg-brand-dark"
    >
      <div className="absolute bottom-0 left-[-10%] w-[45%] h-[60%] rounded-full bg-brand-purple/6 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            RESOLVEMOS TUS DUDAS
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-purple to-brand-violet mx-auto mt-2" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={accordionItems} allowMultiple={true} />
        </div>
      </div>
    </section>
  );
};

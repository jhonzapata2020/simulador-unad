import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BenefitsContent } from "@/types";

interface BenefitsProps {
  content: BenefitsContent;
}

export const Benefits: React.FC<BenefitsProps> = ({ content }) => {
  if (!content.showSection) return null;

  return (
    <section
      id="resultados"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #11081A 0%, #1a0f2e 50%, #11081A 100%)",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-gold uppercase">
            {content.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            {content.sectionSubtitle}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-gold to-brand-violet mx-auto mt-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {content.items.map((item, index) => (
            <div
              key={index}
              className="card-premium border-brand-violet/10 hover:border-brand-gold/20 hover:card-premium-hover p-6 md:p-8 bg-brand-dark/35 flex items-start space-x-5 group"
            >
              <div className="flex-shrink-0 p-2 rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold mt-0.5 transition-colors duration-300 group-hover:bg-brand-gold/20">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-display font-bold text-brand-light group-hover:text-brand-gold transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brand-light/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

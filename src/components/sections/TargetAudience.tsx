import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { AudienceContent } from "@/types";

interface TargetAudienceProps {
  content: AudienceContent;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ content }) => {
  if (!content.showSection) return null;

  return (
    <section
      id="para-quien"
      className="relative py-20 md:py-28 overflow-hidden bg-brand-dark"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] rounded-full bg-brand-purple/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
            FILTRO DE ADMISIÓN
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            {content.sectionTitle}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-purple to-brand-violet mx-auto mt-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* For whom */}
          <div className="card-premium border-emerald-500/15 bg-brand-dark/40 p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-lg md:text-xl font-display font-bold text-emerald-400 mb-6 uppercase">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              Este programa ES para ti si…
            </h3>
            <ul className="space-y-4">
              {content.forWhom.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-brand-light/85 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for whom */}
          <div className="card-premium border-brand-pink/15 bg-brand-dark/40 p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-lg md:text-xl font-display font-bold text-brand-pink mb-6 uppercase">
              <XCircle className="h-5 w-5 flex-shrink-0" />
              NO es para ti si…
            </h3>
            <ul className="space-y-4">
              {content.notForWhom.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-brand-pink flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-brand-light/85 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

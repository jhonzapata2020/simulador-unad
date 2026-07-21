import React from "react";
import { AlertCircle } from "lucide-react";
import { ProblemsContent } from "@/types";

interface ProblemsProps {
  content: ProblemsContent;
}

export const Problems: React.FC<ProblemsProps> = ({ content }) => {
  if (!content.showSection) return null;

  return (
    <section
      id="diagnostico"
      className="relative py-20 md:py-28 overflow-hidden bg-brand-dark/90 border-t border-brand-violet/5"
    >
      {/* Background soft blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-pink uppercase">
            {content.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            {content.sectionSubtitle}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-pink to-brand-violet mx-auto mt-2"></div>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {content.items.map((problem) => (
            <div
              key={problem.id}
              className="card-premium border-brand-violet/10 hover:border-brand-pink/20 hover:card-premium-hover p-6 md:p-8 bg-brand-dark/40 flex items-start space-x-4 md:space-x-5"
            >
              {/* Alert icon with subtle glow */}
              <div className="flex-shrink-0 p-3 rounded-xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink mt-1 shadow-inner shadow-brand-pink/5">
                <AlertCircle className="h-6 w-6" />
              </div>
              
              <div className="flex-col space-y-2">
                <h3 className="text-lg md:text-xl font-display font-bold text-brand-light">
                  {problem.title}
                </h3>
                <p className="text-sm md:text-base text-brand-light/75 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Hook text */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
          <p className="text-sm md:text-base text-brand-gold font-display font-bold uppercase tracking-wider">
            La diferencia entre un negocio y un autoempleo es que el negocio tiene sistemas que funcionan aunque tú no estés. El Apex Performance System es exactamente eso.
          </p>
        </div>

      </div>
    </section>
  );
};

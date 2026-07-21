import React from "react";
import { MethodContent } from "@/types";

interface MethodProps {
  content: MethodContent;
}

export const Method: React.FC<MethodProps> = ({ content }) => {
  if (!content.showSection) return null;

  return (
    <section
      id="metodo"
      className="relative py-20 md:py-28 overflow-hidden bg-brand-dark"
    >
      {/* Background blurs */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-violet/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-15%] w-[45%] h-[45%] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
            {content.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            {content.sectionSubtitle}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-purple to-brand-violet mx-auto mt-2"></div>
        </div>

        {/* Step List / Visual Sequence */}
        <div className="relative flex flex-col space-y-12 md:space-y-16">
          {/* Vertical joining line for desktop */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-purple via-brand-violet/30 to-brand-gold/10 hidden md:block"></div>

          {content.steps.map((step) => {
            const formattedNumber = step.stepNumber.toString().padStart(2, "0");
            
            return (
              <div
                key={step.stepNumber}
                className="relative flex flex-col md:flex-row items-start md:space-x-8 lg:space-x-12 group"
              >
                {/* Step circle index marker */}
                <div className="flex-shrink-0 z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-brand-dark border-2 border-brand-violet/35 text-gradient-premium font-display font-extrabold text-xl md:text-2xl shadow-lg shadow-brand-purple/15 transition-all duration-300 group-hover:border-brand-violet group-hover:shadow-brand-violet/25 group-hover:scale-102">
                  {formattedNumber}
                </div>

                {/* Step content card */}
                <div className="mt-4 md:mt-0 flex-grow card-premium border-brand-violet/10 group-hover:border-brand-violet/25 group-hover:card-premium-hover p-6 md:p-8 bg-brand-dark/45">
                  <h3 className="text-lg md:text-xl font-display font-bold text-brand-light mb-2 group-hover:text-brand-violet transition-colors duration-200 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-light/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

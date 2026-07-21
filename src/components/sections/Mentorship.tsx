import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MentorshipContent } from "@/types";

interface MentorshipProps {
  content: MentorshipContent;
}

export const Mentorship: React.FC<MentorshipProps> = ({ content }) => {
  if (!content.showSection) return null;

  return (
    <section
      id="mentoria"
      className="relative py-20 md:py-28 overflow-hidden bg-brand-dark"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
                ACOMPAÑAMIENTO
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
                {content.sectionTitle}
              </h2>
              <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-brand-purple to-brand-violet" />
            </div>

            <p className="text-base md:text-lg text-brand-light/80 leading-relaxed">
              {content.description}
            </p>

            <ul className="space-y-3">
              {content.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-violet flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-brand-light/85">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {content.ctaText &&
              content.ctaUrl &&
              !content.ctaUrl.includes("PENDIENTE") &&
              !content.ctaUrl.includes("DATOS_REALES_REQUERIDOS") &&
              !content.ctaText.includes("DATOS_REALES_REQUERIDOS") && (
                <div className="pt-2">
                  <Button variant="outline" size="md" href={content.ctaUrl} className="group">
                    {content.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              )}
          </div>

          {/* Right: placeholder founder space */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden card-premium border-brand-violet/15 bg-brand-dark/40 flex flex-col items-center justify-center p-8 text-center space-y-4">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-violet/5 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-brand-purple/30 border-2 border-brand-violet/30 flex items-center justify-center text-brand-violet/50">
                  <span className="text-3xl font-display font-extrabold">A</span>
                </div>
                <div className="space-y-1">
                  <p className="font-display font-bold text-brand-light text-lg">
                    Equipo Directivo APEX
                  </p>
                  <p className="text-xs text-brand-light/60">
                    Fundadores & Especialistas en Performance
                  </p>
                </div>
                <p className="text-xs text-brand-light/70 max-w-xs">
                  Mentoría estratégica de alto nivel para asegurar la implementación sin fricciones de tu sistema de ventas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CtaFinalProps {
  ctaPrimaryText: string;
  ctaPrimaryUrl: string;
  offerTitle: string;
}

export const CtaFinal: React.FC<CtaFinalProps> = ({
  ctaPrimaryText,
  ctaPrimaryUrl,
  offerTitle,
}) => {
  const isPending =
    !ctaPrimaryUrl ||
    ctaPrimaryUrl.includes("PENDIENTE") ||
    ctaPrimaryUrl.includes("DATOS_REALES_REQUERIDOS");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-brand-dark">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,40,217,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center space-y-8">
        <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
          ÚLTIMA LLAMADA
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
          {offerTitle}
        </h2>
        <p className="text-base md:text-lg text-brand-light/80 leading-relaxed max-w-xl">
          Cada día sin un sistema automatizado es un día cediendo terreno a tu competencia. Hoy puedes cambiar eso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          {isPending ? (
            <a
              href="#footer"
              className="py-4 px-8 rounded-xl bg-brand-purple/20 border border-brand-violet/30 text-brand-light font-display font-bold text-sm hover:bg-brand-purple/30 transition-colors inline-flex items-center justify-center"
            >
              CONSULTAR DISPONIBILIDAD Y ADMISIÓN
              <ArrowRight className="ml-2 h-4 w-4 text-brand-gold" />
            </a>
          ) : (
            <Button
              variant="secondary"
              size="lg"
              href={ctaPrimaryUrl}
              className="group text-base md:text-lg"
            >
              {ctaPrimaryText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>

        <p className="text-xs text-brand-light/40">
          Acceso inmediato · Garantía de 14 días · Sin riesgo
        </p>
      </div>
    </section>
  );
};

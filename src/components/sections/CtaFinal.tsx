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
  const isPending = !ctaPrimaryUrl || ctaPrimaryUrl.includes("PENDIENTE");

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
            <div className="py-4 px-8 rounded-xl border border-dashed border-brand-gold/30 text-brand-gold font-display font-bold text-sm">
              [PENDIENTE] Enlace de compra — editar en CMS
            </div>
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

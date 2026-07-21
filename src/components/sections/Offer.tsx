import React from "react";
import { Gift, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OfferContent } from "@/types";

interface OfferProps {
  content: OfferContent;
}

export const Offer: React.FC<OfferProps> = ({ content }) => {
  if (!content.showSection) return null;

  const isCheckoutPending = !content.checkoutUrl || content.checkoutUrl.includes("PENDIENTE");

  return (
    <section
      id="offer"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(109,40,217,0.12) 0%, #11081A 70%)",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-gold uppercase">
            INVERSIÓN
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            {content.sectionTitle}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-gold to-brand-violet mx-auto mt-2" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          {/* Bonuses (left col, 2/5) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="font-display font-bold text-lg text-brand-light flex items-center gap-2 uppercase">
              <Gift className="h-5 w-5 text-brand-gold" />
              Bonos Incluidos
            </h3>
            {content.bonuses.map((bonus, i) => (
              <div
                key={i}
                className="card-premium border-brand-gold/10 bg-brand-dark/40 p-5 space-y-1.5 group hover:border-brand-gold/25"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-display font-bold text-brand-light group-hover:text-brand-gold transition-colors">
                    {bonus.title}
                  </h4>
                  <span className="flex-shrink-0 text-xs font-display font-extrabold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded">
                    {bonus.value}
                  </span>
                </div>
                <p className="text-xs text-brand-light/65 leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>

          {/* Price box (right col, 3/5) */}
          <div className="lg:col-span-3">
            <div className="card-premium border-brand-gold/20 bg-brand-dark/50 p-8 md:p-10 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
              {/* Gold shimmer top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

              <Tag className="h-8 w-8 text-brand-gold/60" />

              {/* Original price (struck through) */}
              <div className="flex flex-col items-center space-y-1">
                <span className="text-sm font-semibold text-brand-light/40 line-through">
                  Precio normal: {content.currencySymbol}
                  {content.priceOriginal}
                </span>
                <p className="text-xs text-brand-light/40">
                  Precio de lanzamiento especial
                </p>
              </div>

              {/* Current price */}
              <div className="flex items-start justify-center gap-1">
                <span className="text-2xl font-display font-bold text-brand-gold mt-3">
                  {content.currencySymbol}
                </span>
                <span className="text-6xl md:text-7xl font-display font-extrabold text-gradient-gold leading-none">
                  {content.priceCurrent}
                </span>
              </div>

              {content.instalmentsText && (
                <p className="text-sm text-brand-light/60 -mt-2">
                  {content.instalmentsText}
                </p>
              )}

              <div className="w-full pt-2">
                {isCheckoutPending ? (
                  <div className="w-full py-4 px-6 rounded-xl bg-brand-gold/10 border border-dashed border-brand-gold/30 text-brand-gold font-display font-bold text-sm text-center">
                    [PENDIENTE] Enlace de compra — editar en el CMS
                  </div>
                ) : (
                  <Button
                    variant="secondary"
                    size="lg"
                    href={content.checkoutUrl}
                    className="w-full justify-center group text-base md:text-lg"
                  >
                    QUIERO EL PROGRAMA AHORA
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </div>

              <p className="text-xs text-brand-light/50">
                Acceso de por vida · Pagos seguros · Garantía de 14 días
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

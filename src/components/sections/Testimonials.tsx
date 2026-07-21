import React from "react";
import Image from "next/image";
import { Quote, Play, TrendingUp } from "lucide-react";
import { TestimonialItem } from "@/types";

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section
        id="testimonios"
        className="relative py-20 md:py-28 bg-brand-dark/90 border-t border-brand-violet/5"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-display font-bold tracking-widest text-brand-violet uppercase">
            CASOS DE ÉXITO
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-gradient-premium uppercase">
            RESULTADOS DE ALUMNOS
          </h2>
          <div className="mt-12 p-8 card-premium border-brand-violet/10 bg-brand-dark/40 max-w-lg mx-auto">
            <Quote className="h-8 w-8 text-brand-violet/30 mx-auto mb-4" />
            <p className="text-brand-light/50 text-sm">
              [PENDIENTE] Los testimonios reales de los alumnos se mostrarán aquí.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="testimonios"
      className="relative py-20 md:py-28 overflow-hidden bg-brand-dark/90 border-t border-brand-violet/5"
    >
      <div className="absolute top-0 right-0 w-[40%] h-[60%] rounded-full bg-brand-violet/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
            CASOS DE ÉXITO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            RESULTADOS DE ALUMNOS
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-purple to-brand-violet mx-auto mt-2" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="card-premium border-brand-violet/10 hover:border-brand-violet/25 hover:card-premium-hover p-6 bg-brand-dark/40 flex flex-col space-y-4 group"
            >
              {/* Video embed if present */}
              {t.videoUrl && (
                <div className="relative aspect-video rounded-xl overflow-hidden bg-brand-dark/60 flex items-center justify-center">
                  <iframe
                    src={t.videoUrl}
                    title={`Testimonio de ${t.name}`}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <Play className="h-10 w-10 text-white/50" />
                  </div>
                </div>
              )}

              {/* Metric badge */}
              {t.metricLabel && t.metricValue && (
                <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-brand-gold/10 border border-brand-gold/20 self-start">
                  <TrendingUp className="h-4 w-4 text-brand-gold flex-shrink-0" />
                  <span className="text-xs font-display font-bold text-brand-gold">
                    {t.metricValue} — {t.metricLabel}
                  </span>
                </div>
              )}

              {/* Quote */}
              <div className="flex-grow">
                <Quote className="h-5 w-5 text-brand-violet/40 mb-2" />
                <p className="text-sm md:text-base text-brand-light/80 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-brand-violet/10 flex items-center gap-3">
                {t.avatarUrl ? (
                  <Image
                    src={t.avatarUrl}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border-2 border-brand-violet/20"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-brand-purple/30 border border-brand-violet/20 flex items-center justify-center text-brand-violet font-display font-bold text-sm">
                    {t.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="text-sm font-display font-bold text-brand-light">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-light/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

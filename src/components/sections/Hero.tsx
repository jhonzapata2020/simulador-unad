import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroContent } from "@/types";

interface HeroProps {
  content: HeroContent;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  if (!content.showSection) return null;

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-brand-dark">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[60%] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-violet/15 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy (7 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            <span className="inline-block text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
              {content.tagline}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
              {content.title}
            </h1>
            
            <div className="inline-block py-2 px-4 rounded-lg bg-brand-purple/20 border border-brand-purple/30 text-brand-gold font-display font-bold text-sm md:text-base max-w-max uppercase">
              {content.highlightedText}
            </div>
            
            <p className="text-base md:text-lg text-brand-light/85 leading-relaxed max-w-xl">
              {content.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" href={content.ctaPrimaryUrl}>
                {content.ctaPrimaryText}
              </Button>
              <Button variant="outline" size="lg" href={content.ctaSecondaryUrl}>
                {content.ctaSecondaryText}
              </Button>
            </div>
          </div>

          {/* Hero Video/Image (5 cols on large screens) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden card-premium border-brand-violet/20 flex flex-col items-center justify-center p-4 bg-brand-dark/40 group">
              {content.videoUrl ? (
                /* Embedded video iframe if URL is present */
                <iframe
                  src={content.videoUrl}
                  title={content.imageAlt || "Apex Performance System Presentation"}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : content.imageUrl ? (
                /* Image fallback if imageUrl present but video is not */
                <Image
                  src={content.imageUrl}
                  alt={content.imageAlt || "Apex Performance System Presentation"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              ) : (
                /* Placeholders for video/image real founder content */
                <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="p-4 rounded-full bg-brand-purple/30 border border-brand-purple/50 text-brand-gold animate-bounce">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-brand-light">
                    VIDEO DE LA FUNDADORA
                  </h3>
                  <p className="text-xs md:text-sm text-brand-light/60 max-w-xs">
                    [PENDIENTE_VIDEO_REAL] Aquí se incrustará el video de presentación del sistema desde YouTube o Vimeo.
                  </p>
                </div>
              )}
            </div>
          </div>


        </div>

        {/* Metrics Row (placed nicely below hero) */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {content.metrics.map((metric, i) => (
            <div
              key={i}
              className="card-premium border-brand-violet/10 hover:border-brand-violet/30 p-6 md:p-8 flex flex-col items-center justify-center text-center bg-brand-dark/35"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-gold tracking-tight mb-2">
                {metric.value}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-brand-light/70 uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

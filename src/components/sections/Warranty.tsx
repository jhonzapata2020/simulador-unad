import React from "react";
import { ShieldCheck } from "lucide-react";
import { WarrantyContent } from "@/types";

interface WarrantyProps {
  content: WarrantyContent;
}

export const Warranty: React.FC<WarrantyProps> = ({ content }) => {
  if (!content.showSection) return null;

  return (
    <section
      id="garantia"
      className="relative py-16 md:py-20 overflow-hidden bg-brand-dark/95 border-y border-brand-violet/5"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="card-premium border-emerald-500/15 bg-brand-dark/40 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {/* Seal */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-emerald-400/30 bg-emerald-500/5 text-emerald-400 space-y-1">
            <ShieldCheck className="h-10 w-10" />
            <div className="font-display font-extrabold text-2xl leading-none">
              {content.daysCount}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider">días</div>
            {content.sealText && (
              <div className="text-[10px] font-bold text-emerald-400/70 uppercase tracking-widest">
                {content.sealText}
              </div>
            )}
          </div>

          {/* Text */}
          <div className="flex-grow space-y-3">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-light uppercase">
              {content.title}
            </h2>
            <p className="text-sm md:text-base text-brand-light/80 leading-relaxed max-w-xl">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

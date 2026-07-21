import React from "react";
import { HelpCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-brand-purple/10 blur-[130px] pointer-events-none"></div>

      <div className="card-premium border-brand-violet/10 p-8 md:p-12 max-w-lg w-full text-center flex flex-col items-center space-y-6 relative z-10 bg-brand-dark/40">
        <div className="p-4 rounded-2xl bg-brand-violet/10 border border-brand-violet/20 text-brand-gold animate-pulse">
          <HelpCircle className="h-12 w-12" />
        </div>

        <h1 className="text-6xl font-display font-extrabold text-gradient-premium tracking-tighter">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-display font-bold text-brand-light uppercase">
            Página No Encontrada
          </h2>
          <p className="text-sm md:text-base text-brand-light/75 leading-relaxed">
            El enlace que has seguido puede estar roto o la página ha sido movida. Puedes volver al inicio para ver el programa completo.
          </p>
        </div>

        <div className="pt-4 w-full">
          <Button variant="primary" size="md" href="/" className="w-full justify-center group">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            VOLVER AL INICIO
          </Button>
        </div>
      </div>
    </div>
  );
}

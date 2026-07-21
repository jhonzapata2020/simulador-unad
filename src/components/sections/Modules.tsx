import React from "react";
import { Accordion } from "@/components/ui/Accordion";
import { ModuleItem } from "@/types";

interface ModulesProps {
  modules: ModuleItem[];
}

export const Modules: React.FC<ModulesProps> = ({ modules }) => {
  if (!modules || modules.length === 0) return null;

  const accordionItems = modules.map((mod) => ({
    id: mod.id,
    title: `Módulo ${mod.order}: ${mod.title}`,
    children: (
      <div className="space-y-4">
        <p className="text-brand-light/80 leading-relaxed">{mod.description}</p>
        {mod.lessons && mod.lessons.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-brand-violet/10">
            {mod.lessons.map((lesson, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-brand-light/70">
                <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-violet/20 text-brand-violet text-[10px] font-bold">
                  {i + 1}
                </span>
                {lesson}
              </li>
            ))}
          </ul>
        )}
      </div>
    ),
  }));

  return (
    <section
      id="modulos"
      className="relative py-20 md:py-28 overflow-hidden bg-brand-dark"
    >
      <div className="absolute top-[-5%] right-[-10%] w-[45%] h-[60%] rounded-full bg-brand-purple/8 blur-[130px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
            CURRÍCULO COMPLETO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            DENTRO DEL PROGRAMA
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-purple to-brand-violet mx-auto mt-2" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={accordionItems} allowMultiple={false} />
        </div>
      </div>
    </section>
  );
};

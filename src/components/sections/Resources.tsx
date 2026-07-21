import React from "react";
import { ResourcesContent } from "@/types";
import {
  Calculator,
  Layout,
  CheckSquare,
  FileText,
  BarChart2,
  Zap,
  Target,
  BookOpen,
  Download,
} from "lucide-react";

// Map icon names from CMS to actual Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="h-6 w-6" />,
  Layout: <Layout className="h-6 w-6" />,
  CheckSquare: <CheckSquare className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
  BarChart2: <BarChart2 className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Target: <Target className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
};

interface ResourcesProps {
  content: ResourcesContent;
}

export const Resources: React.FC<ResourcesProps> = ({ content }) => {
  if (!content.showSection) return null;

  return (
    <section
      id="recursos"
      className="relative py-20 md:py-28 overflow-hidden bg-brand-dark/95 border-t border-brand-violet/5"
    >
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-brand-violet/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-3">
          <span className="text-xs md:text-sm font-display font-bold tracking-widest text-brand-violet uppercase">
            {content.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-premium tracking-tight leading-[1.1] uppercase">
            {content.sectionSubtitle}
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-brand-purple to-brand-violet mx-auto mt-2" />
          <p className="text-base text-brand-light/70 max-w-xl mx-auto">
            No solo aprenderás el sistema — recibirás las herramientas exactas para implementarlo desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item) => {
            const icon = iconMap[item.iconName] ?? <FileText className="h-6 w-6" />;
            return (
              <div
                key={item.id}
                className="card-premium border-brand-violet/10 hover:border-brand-violet/30 hover:card-premium-hover p-6 bg-brand-dark/40 flex flex-col space-y-4 group"
              >
                <div className="p-3 rounded-xl bg-brand-violet/10 border border-brand-violet/20 text-brand-violet self-start transition-colors group-hover:bg-brand-violet/20">
                  {icon}
                </div>
                <div className="flex-grow space-y-2">
                  <h3 className="text-base md:text-lg font-display font-bold text-brand-light group-hover:text-brand-violet transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-sm text-brand-light/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.downloadUrl && (
                  <a
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:underline"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Descargar recurso
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

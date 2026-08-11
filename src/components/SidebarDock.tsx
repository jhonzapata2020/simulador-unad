// src/components/SidebarDock.tsx
import React from 'react';
import { FileCheck, Download, RotateCcw, HelpCircle, Sun, Moon } from 'lucide-react';

interface SidebarDockProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onDownloadCode: () => void;
  onResetCode: () => void;
  onOpenHelp: () => void;
  onOpenEvidenceModal: () => void;
}

export const SidebarDock: React.FC<SidebarDockProps> = ({
  darkMode,
  onToggleTheme,
  onDownloadCode,
  onResetCode,
  onOpenHelp,
  onOpenEvidenceModal,
}) => {
  return (
    <aside className={`flex flex-col items-center py-4 px-2 rounded-2xl border shadow-xl transition-all h-fit self-start sticky top-20 z-20 ${
      darkMode ? 'bg-slate-900/90 border-slate-800 backdrop-blur-md' : 'bg-white/95 border-slate-200 backdrop-blur-md'
    }`}>
      <div className="flex flex-col items-center gap-3">
        
        {/* 1. Generate Evidence UNAD */}
        <button
          onClick={onOpenEvidenceModal}
          className="group relative flex flex-col items-center p-2.5 rounded-xl text-slate-900 bg-gradient-to-br from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all duration-150 active:scale-95"
          title="Generar Evidencia UNAD"
        >
          <FileCheck className="w-5 h-5 text-slate-950" />
          <span className="text-[9px] font-black uppercase tracking-tight mt-1 text-slate-950 text-center leading-tight">
            Evidencia
          </span>
        </button>

        <div className="w-full h-px bg-slate-800/40 dark:bg-slate-800 my-0.5" />

        {/* 2. Download .py */}
        <button
          onClick={onDownloadCode}
          className={`group flex flex-col items-center p-2.5 rounded-xl border text-xs font-semibold transition-all ${
            darkMode
              ? 'bg-slate-800/80 hover:bg-slate-700 border-slate-700/60 text-slate-200'
              : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
          }`}
          title="Descargar código .py"
        >
          <Download className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-[9px] font-bold mt-1 text-slate-400 group-hover:text-slate-200">
            .py
          </span>
        </button>

        {/* 3. Clean Code */}
        <button
          onClick={onResetCode}
          className={`group flex flex-col items-center p-2.5 rounded-xl border text-xs font-semibold transition-all ${
            darkMode
              ? 'bg-slate-800/80 hover:bg-slate-700 border-slate-700/60 text-slate-200'
              : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
          }`}
          title="Limpiar Código"
        >
          <RotateCcw className="w-4 h-4 text-orange-400 group-hover:rotate-180 transition-transform duration-300" />
          <span className="text-[9px] font-bold mt-1 text-slate-400 group-hover:text-slate-200">
            Limpiar
          </span>
        </button>

        {/* 4. Help */}
        <button
          onClick={onOpenHelp}
          className={`group flex flex-col items-center p-2.5 rounded-xl border text-xs font-semibold transition-all ${
            darkMode
              ? 'bg-slate-800/80 hover:bg-slate-700 border-slate-700/60 text-slate-200'
              : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
          }`}
          title="Guía del usuario"
        >
          <HelpCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="text-[9px] font-bold mt-1 text-slate-400 group-hover:text-slate-200">
            Ayuda
          </span>
        </button>

        <div className="w-full h-px bg-slate-800/40 dark:bg-slate-800 my-0.5" />

        {/* 5. Dark/Light Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className={`group flex flex-col items-center p-2.5 rounded-xl border text-xs font-semibold transition-all ${
            darkMode
              ? 'bg-slate-800/80 hover:bg-slate-700 border-slate-700/60 text-amber-400'
              : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
          }`}
          title={darkMode ? "Modo Claro" : "Modo Oscuro"}
        >
          {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          <span className="text-[9px] font-bold mt-1 text-slate-400 group-hover:text-slate-200">
            Tema
          </span>
        </button>

      </div>
    </aside>
  );
};

// src/components/Header.tsx
import React from 'react';
import {
  Sun,
  Moon,
  Download,
  RotateCcw,
  HelpCircle,
  FileCheck,
  Code2,
  GraduationCap
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onDownloadCode: () => void;
  onResetCode: () => void;
  onOpenHelp: () => void;
  onOpenEvidenceModal: () => void;
  isExecuting?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleTheme,
  onDownloadCode,
  onResetCode,
  onOpenHelp,
  onOpenEvidenceModal,
  isExecuting = false
}) => {
  return (
    <header className={`border-b transition-colors duration-200 sticky top-0 z-30 ${
      darkMode
        ? 'bg-slate-900/95 border-slate-800 text-slate-100 backdrop-blur-md'
        : 'bg-white/95 border-slate-200 text-slate-900 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-[1920px] mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left Corner: UNAD Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#003366] to-[#005691] text-amber-400 font-bold shadow-md shadow-blue-900/20 ring-1 ring-amber-400/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                UNAD
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-[#003366] text-amber-300 border border-amber-400/30">
                ECBTI
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-400 leading-none mt-0.5">
              Escuela de Ciencias Básicas, Tecnología e Ingeniería
            </p>
          </div>
        </div>

        {/* Central Title */}
        <div className="hidden md:flex items-center gap-2.5 bg-slate-800/40 dark:bg-slate-800/60 px-4 py-1.5 rounded-full border border-slate-700/50">
          <Code2 className="w-4 h-4 text-amber-400 animate-pulse" />
          <h1 className="text-sm font-bold tracking-wide">
            <span className="text-amber-400">SimuPy UNAD</span>
            <span className="mx-1.5 text-slate-500">|</span>
            <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>
              Simulador Virtual de Fundamentos de Programación
            </span>
          </h1>
        </div>

        {/* Right Corner: Controls */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Evidencias Report Button */}
          <button
            onClick={onOpenEvidenceModal}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-150 active:scale-95"
            title="Generar Ficha de Evidencia en PDF para el informe UNAD"
          >
            <FileCheck className="w-4 h-4" />
            <span className="hidden sm:inline">Generar Evidencia UNAD</span>
          </button>

          {/* Download Code */}
          <button
            onClick={onDownloadCode}
            className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
            }`}
            title="Descargar archivo script.py"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span className="hidden lg:inline">Descargar .py</span>
          </button>

          {/* Reset Code */}
          <button
            onClick={onResetCode}
            className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
            }`}
            title="Restablecer plantilla inicial del ejercicio"
          >
            <RotateCcw className="w-4 h-4 text-orange-400" />
            <span className="hidden lg:inline">Limpiar</span>
          </button>

          {/* Help Button */}
          <button
            onClick={onOpenHelp}
            className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
            }`}
            title="Guía del usuario e instrucciones"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="hidden lg:inline">Ayuda</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border transition-all ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-amber-400'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
            }`}
            title={darkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};

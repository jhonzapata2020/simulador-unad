// src/components/Header.tsx
import React from 'react';
import { GraduationCap, Code2 } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  return (
    <header className={`border-b transition-colors duration-200 sticky top-0 z-30 ${
      darkMode
        ? 'bg-slate-900/95 border-slate-800 text-slate-100 backdrop-blur-md'
        : 'bg-white/95 border-slate-200 text-slate-900 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-[1920px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Far Left: UNAD & ECBTI Institutional Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#003366] to-[#005691] text-amber-400 font-bold shadow-md shadow-blue-900/20 ring-1 ring-amber-400/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black tracking-tight text-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                UNAD
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-[#003366] text-amber-300 border border-amber-400/30">
                ECBTI
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-400 leading-none mt-0.5">
              Escuela de Ciencias Básicas, Tecnología e Ingeniería
            </p>
          </div>
        </div>

        {/* Far Right: Clean Modern "SimuPy UNAD" Title Logo */}
        <div className="flex items-center gap-2.5">
          <Code2 className="w-5 h-5 text-amber-400" />
          <span className="text-lg font-black tracking-tight bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-mono">
            SimuPy UNAD
          </span>
        </div>

      </div>
    </header>
  );
};

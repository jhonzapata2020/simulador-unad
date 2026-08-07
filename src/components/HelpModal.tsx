// src/components/HelpModal.tsx
import React from 'react';
import { HelpCircle, X, Terminal, Cpu, Code2, BookOpen, Bug, ShieldCheck } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const HelpModal: React.FC<HelpModalProps> = ({
  isOpen,
  onClose,
  darkMode
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden my-8 transition-all ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#003366] text-white">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-amber-400" />
            <h2 className="text-base font-extrabold tracking-wide text-amber-300">
              Guía del Usuario - SimuPy UNAD
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-slate-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs leading-relaxed max-h-[70vh] overflow-y-auto">
          
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
            <h3 className="font-bold flex items-center gap-2 text-sm mb-1">
              <BookOpen className="w-4 h-4" /> ¿Qué es SimuPy UNAD?
            </h3>
            <p>
              Es el simulador virtual interactivo del curso de **Fundamentos de Programación** de la UNAD. Ejecuta código Python 3.12 directamente en tu navegador mediante tecnología WebAssembly (Pyodide), sin necesidad de instalar Python ni pagar servidor.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
              Estructura de los 3 Paneles de Trabajo:
            </h4>

            <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/60 space-y-1">
              <div className="font-bold text-emerald-400 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Panel 1: Editor de Código (Monaco VS Code)
              </div>
              <p className="text-slate-300">
                Escribe tu algoritmo en Python 3.12. Puedes presionar <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">Ctrl + Enter</kbd> para ejecutar rápidamente.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/60 space-y-1">
              <div className="font-bold text-cyan-400 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Panel 2: Consola Interactiva
              </div>
              <p className="text-slate-300">
                Muestra la salida `print()` en verde y los errores en rojo. Soporta la función `input()` mediante prompts interactivos directamente en la terminal.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/60 space-y-1">
              <div className="font-bold text-purple-400 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Panel 3: Inspector de Memoria y Variables
              </div>
              <p className="text-slate-300">
                Visualiza en tiempo real las variables declaradas, sus tipos de datos (`int`, `str`, `list`, etc.) y sus valores actualizados en cada iteración del código.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-rose-800/50 bg-rose-950/20 space-y-1">
              <div className="font-bold text-rose-400 flex items-center gap-2">
                <Bug className="w-4 h-4" /> Modo Depuración / Bug Fixing (Fase 4)
              </div>
              <p className="text-slate-300">
                En la Fase 4 encontrarás ejercicios con errores sintácticos y lógicos preprogramados. Haz clic en **"Verificar Solución"** para que el evaluador automático valide si corregiste la falla.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-amber-800/50 bg-amber-950/20 space-y-1">
              <div className="font-bold text-amber-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Generación de Evidencias UNAD
              </div>
              <p className="text-slate-300">
                Haz clic en el botón superior **"Generar Evidencia UNAD"** para crear una ficha oficial en PDF con tu nombre, cédula, grupo, código, consola y captura del estado de memoria para adjuntar en tu informe del campus.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};

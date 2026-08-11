// src/components/CodeEditorPanel.tsx
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Play, Type, Code, FastForward, Loader2 } from 'lucide-react';

const Editor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full text-slate-400 bg-slate-900 gap-3">
      <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
      <span className="text-xs font-mono">Cargando Editor Monaco (VS Code)...</span>
    </div>
  )
});

interface CodeEditorPanelProps {
  code: string;
  onChangeCode: (newCode: string) => void;
  onExecute: () => void;
  onTraceStep: () => void;
  isExecuting: boolean;
  darkMode: boolean;
  exerciseTitle: string;
}

export const CodeEditorPanel: React.FC<CodeEditorPanelProps> = ({
  code,
  onChangeCode,
  onExecute,
  onTraceStep,
  isExecuting,
  darkMode,
  exerciseTitle
}) => {
  const [fontSize, setFontSize] = useState<number>(14);

  // Keyboard shortcut: Ctrl + Enter to Execute
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        onExecute();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onExecute]);

  return (
    <div className={`flex flex-col h-full rounded-2xl border overflow-hidden shadow-xl transition-all ${
      darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
    }`}>
      {/* Code Editor Header Bar with Integrated ▶ RUN CODE */}
      <div className={`flex flex-wrap items-center justify-between px-4 py-2.5 border-b text-xs font-bold ${
        darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-100 border-slate-200'
      }`}>
        {/* Left Side: High contrast dark blue main.py header */}
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          
          <div className="flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded-lg bg-[#003366] text-white font-mono shadow-sm">
            <Code className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-extrabold tracking-wide">main.py</span>
          </div>
        </div>

        {/* Right Side: Prominent Green ▶ RUN CODE Button + Font Controls */}
        <div className="flex items-center gap-3">
          
          {/* Font size control */}
          <div className="flex items-center gap-1 bg-slate-800/50 dark:bg-slate-900 px-2 py-1 rounded-lg border border-slate-700/50 text-slate-300">
            <Type className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => setFontSize(Math.max(10, fontSize - 1))}
              className="px-1 text-slate-400 hover:text-white font-bold"
              title="Disminuir tamaño"
            >
              -
            </button>
            <span className="text-[11px] font-mono w-4 text-center">{fontSize}</span>
            <button
              onClick={() => setFontSize(Math.min(24, fontSize + 1))}
              className="px-1 text-slate-400 hover:text-white font-bold"
              title="Aumentar tamaño"
            >
              +
            </button>
          </div>

          {/* Integrated Prominent Green ▶ RUN CODE Button */}
          <button
            onClick={onExecute}
            disabled={isExecuting}
            className="flex items-center gap-2 px-4 py-1.5 text-xs font-black text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-xl shadow-md shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all duration-150 active:scale-95 disabled:opacity-50"
            title="Ejecutar Código Python (Ctrl + Enter)"
          >
            {isExecuting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                <span>EJECUTANDO...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span className="tracking-wider">▶ RUN CODE</span>
              </>
            )}
          </button>

        </div>
      </div>

      {/* Monaco Code Editor Area */}
      <div className="flex-1 relative min-h-[360px]">
        <Editor
          height="100%"
          language="python"
          theme={darkMode ? "vs-dark" : "light"}
          value={code}
          onChange={(val) => onChangeCode(val || '')}
          options={{
            fontSize: fontSize,
            fontFamily: "Fira Code, JetBrains Mono, Consolas, monospace",
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            autoClosingBrackets: "always",
            autoClosingQuotes: "always",
            folding: true,
            lineNumbers: "on",
            cursorBlinking: "smooth",
            renderLineHighlight: "all"
          }}
        />
      </div>

      {/* Code Editor Bottom Bar */}
      <div className={`px-4 py-2 border-t flex items-center justify-between text-[11px] ${
        darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}>
        <div className="flex items-center gap-2 font-mono">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 text-[10px]">
            Ctrl + Enter
          </span>
          <span>para ejecutar rápidamente</span>
        </div>

        <button
          onClick={onTraceStep}
          disabled={isExecuting}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-[11px] font-bold transition-all border border-amber-400/30"
          title="Ver trazado de prueba de escritorio"
        >
          <FastForward className="w-3.5 h-3.5 text-amber-400" />
          <span>Prueba de Escritorio</span>
        </button>
      </div>
    </div>
  );
};

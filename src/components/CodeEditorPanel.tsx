// src/components/CodeEditorPanel.tsx
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Play, Type, CheckCircle, Code, FastForward, Loader2 } from 'lucide-react';

// Dynamic import for Monaco Editor to avoid SSR window issues
const Editor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full text-slate-400 bg-slate-900 gap-3">
      <Loader2 className="w-8 h-8 animate-spin text-amber-400" />
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

  // Keyboard shortcut: Ctrl + Enter or Cmd + Enter to Execute
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
    <div className={`flex flex-col h-full rounded-2xl border overflow-hidden shadow-lg transition-all ${
      darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
    }`}>
      {/* Panel Top Header Bar */}
      <div className={`flex flex-wrap items-center justify-between px-4 py-2.5 border-b text-xs font-semibold ${
        darkMode ? 'bg-slate-950/90 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
      }`}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <Code className="w-4 h-4 text-amber-400 ml-2" />
          <span className="font-mono text-slate-300 hidden sm:inline">main.py</span>
          <span className="text-slate-500 hidden md:inline">•</span>
          <span className="text-xs text-amber-400/90 truncate max-w-[200px] lg:max-w-[300px]">
            {exerciseTitle}
          </span>
        </div>

        {/* Font size & controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-800/60 dark:bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-700/50">
            <Type className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => setFontSize(Math.max(10, fontSize - 1))}
              className="px-1 text-slate-400 hover:text-white font-bold"
              title="Disminuir letra"
            >
              -
            </button>
            <span className="text-[11px] font-mono w-5 text-center text-slate-300">{fontSize}</span>
            <button
              onClick={() => setFontSize(Math.min(24, fontSize + 1))}
              className="px-1 text-slate-400 hover:text-white font-bold"
              title="Aumentar letra"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Monaco Code Editor Area */}
      <div className="flex-1 relative min-h-[350px]">
        <Editor
          height="100%"
          language="python"
          theme={darkMode ? "vs-dark" : "light"}
          value={code}
          onChange={(val) => onChangeCode(val || '')}
          options={{
            fontSize: fontSize,
            fontFamily: "Fira Code, JetBrains Mono, Menlo, Monaco, Consolas, monospace",
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

      {/* Panel Bottom Action Buttons */}
      <div className={`p-3 border-t flex flex-wrap items-center justify-between gap-3 ${
        darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="text-[11px] text-slate-400 flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-amber-300">
            Ctrl + Enter
          </span>
          <span className="hidden sm:inline">para ejecutar de forma rápida</span>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Desktop Test / Step Trace Button */}
          <button
            onClick={onTraceStep}
            disabled={isExecuting}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl border transition-all ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-amber-400/30'
                : 'bg-white hover:bg-slate-100 text-blue-900 border-slate-300 shadow-sm'
            } disabled:opacity-50`}
            title="Prueba de Escritorio: Inspecciona el estado de memoria tras ejecutar"
          >
            <FastForward className="w-4 h-4 text-amber-400" />
            <span>Prueba de Escritorio</span>
          </button>

          {/* Primary Execute Button */}
          <button
            onClick={onExecute}
            disabled={isExecuting}
            className="flex items-center gap-2 px-5 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all duration-150 active:scale-95 disabled:opacity-50"
          >
            {isExecuting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Ejecutando...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Ejecutar Código</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

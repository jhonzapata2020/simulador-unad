// src/components/ConsolePanel.tsx
import React, { useRef, useEffect } from 'react';
import { Terminal, Copy, Trash2, Check, AlertTriangle, ArrowRight, CornerDownLeft } from 'lucide-react';

export interface ConsoleLogEntry {
  id: string;
  type: 'stdout' | 'stderr' | 'system' | 'input';
  text: string;
  timestamp: string;
}

interface ConsolePanelProps {
  logs: ConsoleLogEntry[];
  onClearConsole: () => void;
  darkMode: boolean;
  executionTimeMs?: number | null;
  onSendInput?: (val: string) => void;
  waitingForInput?: boolean;
  inputPromptText?: string;
}

export const ConsolePanel: React.FC<ConsolePanelProps> = ({
  logs,
  onClearConsole,
  darkMode,
  executionTimeMs,
  onSendInput,
  waitingForInput = false,
  inputPromptText = ''
}) => {
  const [copied, setCopied] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const consoleEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, waitingForInput]);

  const handleCopy = () => {
    const fullText = logs.map(l => l.text).join('\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSendInput && waitingForInput) {
      onSendInput(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className={`flex flex-col h-full rounded-2xl border overflow-hidden shadow-lg transition-all ${
      darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-800 text-slate-100'
    }`}>
      {/* Refined Dark Blue Console Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-[#002244] text-white text-xs font-bold">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="font-mono tracking-wide">Console</span>
          {executionTimeMs !== undefined && executionTimeMs !== null && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900/80 text-emerald-400 font-mono border border-emerald-500/30">
              {executionTimeMs} ms
            </span>
          )}
        </div>

        {/* Icon-only controls for Copy and Clear without textual labels */}
        <div className="flex items-center gap-1.5">
          {/* Copy Console Icon Button */}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60"
            title={copied ? "¡Copiado al portapapeles!" : "Copiar consola"}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Clear Console Icon Button */}
          <button
            onClick={onClearConsole}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60"
            title="Limpiar consola"
          >
            <Trash2 className="w-4 h-4 text-slate-300" />
          </button>
        </div>
      </div>

      {/* Terminal Logs Window */}
      <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-1.5 min-h-[160px] bg-slate-950/95 scrollbar-thin scrollbar-thumb-slate-800">
        {logs.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-600 gap-2 select-none">
            <Terminal className="w-8 h-8 opacity-40 text-emerald-400" />
            <p className="text-xs text-slate-500 font-sans">Presiona "▶ RUN CODE" para ejecutar Python.</p>
          </div>
        ) : (
          logs.map(log => {
            if (log.type === 'stderr') {
              return (
                <div key={log.id} className="p-2 rounded bg-rose-950/40 border border-rose-800/40 text-rose-300 whitespace-pre-wrap flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">{log.text}</div>
                </div>
              );
            }
            if (log.type === 'system') {
              return (
                <div key={log.id} className="text-amber-400/90 text-[11px] italic py-0.5 border-b border-slate-800/50">
                  ⚡ {log.text}
                </div>
              );
            }
            if (log.type === 'input') {
              return (
                <div key={log.id} className="text-cyan-300 flex items-center gap-1.5 py-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{log.text}</span>
                </div>
              );
            }
            return (
              <div key={log.id} className="text-emerald-300 whitespace-pre-wrap leading-relaxed">
                {log.text}
              </div>
            );
          })
        )}

        {/* Input Prompt Field when Python calls input() */}
        {waitingForInput && (
          <form onSubmit={handleInputSubmit} className="mt-3 p-2 rounded-xl bg-slate-900 border border-cyan-500/50 flex items-center gap-2 animate-pulse">
            <span className="text-cyan-400 font-bold text-xs shrink-0">
              {inputPromptText || 'Entrada input():'}
            </span>
            <input
              type="text"
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe el valor y presiona Enter..."
              className="flex-1 bg-transparent text-white text-xs font-mono outline-none border-none"
            />
            <button type="submit" className="p-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div ref={consoleEndRef} />
      </div>
    </div>
  );
};

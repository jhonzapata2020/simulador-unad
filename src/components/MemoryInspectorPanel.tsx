// src/components/MemoryInspectorPanel.tsx
import React from 'react';
import { VariableItem } from '../lib/pyodideRunner';
import { Cpu, Variable, Layers, Hash, Info, Eye } from 'lucide-react';

interface MemoryInspectorPanelProps {
  variables: VariableItem[];
  darkMode: boolean;
}

export const MemoryInspectorPanel: React.FC<MemoryInspectorPanelProps> = ({
  variables,
  darkMode
}) => {
  const getTypeBadgeColor = (typeName: string) => {
    switch (typeName.toLowerCase()) {
      case 'int':
      case 'float':
        return 'bg-blue-950 text-blue-300 border-blue-700/50';
      case 'str':
        return 'bg-emerald-950 text-emerald-300 border-emerald-700/50';
      case 'list':
      case 'tuple':
      case 'set':
        return 'bg-amber-950 text-amber-300 border-amber-700/50';
      case 'dict':
        return 'bg-purple-950 text-purple-300 border-purple-700/50';
      case 'bool':
        return 'bg-rose-950 text-rose-300 border-rose-700/50';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className={`flex flex-col h-full rounded-2xl border overflow-hidden shadow-lg transition-all ${
      darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
    }`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-2 border-b text-xs font-semibold ${
        darkMode ? 'bg-slate-950/90 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
      }`}>
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-amber-400" />
          <span className="font-mono">Visualizador de Memoria y Variables</span>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-mono border border-amber-400/30">
          {variables.length} {variables.length === 1 ? 'Variable' : 'Variables'}
        </span>
      </div>

      {/* Variables Table Content */}
      <div className="flex-1 overflow-y-auto min-h-[160px] p-3 scrollbar-thin">
        {variables.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-2 select-none py-6">
            <Variable className="w-8 h-8 opacity-30 text-amber-400" />
            <p className="text-xs text-center">
              No hay variables asignadas en la memoria activa.<br />
              Ejecuta el código para observar el estado de la prueba de escritorio.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className={`border-b text-[11px] font-sans font-bold uppercase tracking-wider ${
                  darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
                }`}>
                  <th className="pb-2 pl-2">Variable</th>
                  <th className="pb-2">Tipo de Dato</th>
                  <th className="pb-2 pr-2">Valor en Memoria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {variables.map((v, idx) => (
                  <tr
                    key={v.name + idx}
                    className={`transition-colors hover:bg-slate-800/30 ${
                      darkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}
                  >
                    {/* Variable Name */}
                    <td className="py-2 pl-2 font-bold text-amber-300 flex items-center gap-1.5">
                      <Hash className="w-3 h-3 text-slate-500" />
                      <span>{v.name}</span>
                    </td>

                    {/* Type Badge */}
                    <td className="py-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${getTypeBadgeColor(v.type)}`}>
                        {v.type}
                      </span>
                    </td>

                    {/* Value */}
                    <td className="py-2 pr-2 font-mono text-emerald-400 max-w-[200px] truncate" title={v.value}>
                      {v.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

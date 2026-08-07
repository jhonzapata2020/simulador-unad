// src/components/EvidenceModal.tsx
import React, { useState, useRef } from 'react';
import { VariableItem } from '../lib/pyodideRunner';
import { ConsoleLogEntry } from './ConsolePanel';
import { Exercise, PhaseInfo } from '../data/exercisesData';
import { FileCheck, Download, Printer, X, GraduationCap, CheckCircle, Calendar, Hash, User, Code, Terminal, Cpu } from 'lucide-react';

interface EvidenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentExercise: Exercise;
  currentPhase: PhaseInfo;
  code: string;
  logs: ConsoleLogEntry[];
  variables: VariableItem[];
  darkMode: boolean;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({
  isOpen,
  onClose,
  currentExercise,
  currentPhase,
  code,
  logs,
  variables,
  darkMode
}) => {
  const [studentName, setStudentName] = useState<string>('');
  const [studentId, setStudentId] = useState<string>('');
  const [studentGroup, setStudentGroup] = useState<string>('301301_45');
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const currentDateStr = new Date().toLocaleDateString('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handlePrintOrPDF = () => {
    if (!studentName.trim() || !studentId.trim()) {
      alert("Por favor completa tu Nombre y Cédula para generar el informe oficial.");
      return;
    }

    const printContent = printRef.current;
    if (!printContent) return;

    const win = window.open('', '', 'width=900,height=900');
    if (!win) return;

    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Informe_Evidencia_UNAD_${studentId}.pdf</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; color: #1e293b; line-height: 1.5; }
            .header { border-bottom: 3px solid #003366; padding-bottom: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
            .title { font-size: 20px; font-weight: bold; color: #003366; }
            .subtitle { font-size: 13px; color: #005691; font-weight: 600; }
            .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px; font-size: 13px; }
            .section-title { font-size: 14px; font-weight: bold; color: #003366; border-left: 4px solid #f39c12; padding-left: 8px; margin: 20px 0 10px 0; }
            pre { background: #0f172a; color: #f8fafc; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 11px; overflow-x: auto; white-space: pre-wrap; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
            th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: left; }
            th { background: #003366; color: white; }
            .footer { margin-top: 30px; border-top: 1px solid #cbd5e1; pt: 10px; font-size: 11px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden my-8 transition-all ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#003366] text-white">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-amber-400" />
            <div>
              <h2 className="text-base font-extrabold tracking-wide text-amber-300">
                Generador de Evidencias para Informe UNAD
              </h2>
              <p className="text-xs text-blue-200">
                Escuela de Ciencias Básicas, Tecnología e Ingeniería (ECBTI)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-slate-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Student Info Form */}
          <div className={`p-4 rounded-xl border ${
            darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <User className="w-4 h-4" /> Datos de Identificación del Estudiante
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-semibold">
              <div>
                <label className="block text-slate-400 mb-1">Nombre Completo del Estudiante:</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ej. Maria Fernanda Perez"
                  className={`w-full px-3 py-2 rounded-lg border outline-none font-medium ${
                    darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                  }`}
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Cédula / Documento de Identidad:</label>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="Ej. 1098765432"
                  className={`w-full px-3 py-2 rounded-lg border outline-none font-medium ${
                    darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                  }`}
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Código de Grupo UNAD:</label>
                <input
                  type="text"
                  value={studentGroup}
                  onChange={(e) => setStudentGroup(e.target.value)}
                  placeholder="Ej. 301301_45"
                  className={`w-full px-3 py-2 rounded-lg border outline-none font-medium ${
                    darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Printable Report Document Container */}
          <div ref={printRef} className="p-6 rounded-xl border border-slate-700 bg-white text-slate-900 shadow-inner">
            
            {/* Report Header */}
            <div className="flex items-center justify-between border-b-2 border-[#003366] pb-4 mb-4">
              <div>
                <h1 className="text-lg font-black text-[#003366] tracking-tight">
                  UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA - UNAD
                </h1>
                <h2 className="text-xs font-bold text-[#005691]">
                  ESCUELA DE CIENCIAS BÁSICAS, TECNOLOGÍA E INGENIERÍA (ECBTI)
                </h2>
                <p className="text-[11px] font-semibold text-slate-500">
                  Fundamentos de Programación - SimuPy UNAD Code Lab
                </p>
              </div>
              <div className="text-right text-[11px] font-mono text-slate-600">
                <div>Ficha Oficial de Evidencia</div>
                <div className="font-bold text-[#003366]">{currentDateStr}</div>
              </div>
            </div>

            {/* Student Metadata Box */}
            <div className="grid grid-cols-2 gap-3 bg-slate-100 p-3 rounded-lg border border-slate-300 text-xs mb-4">
              <div>
                <span className="font-bold text-slate-600">Estudiante:</span>{' '}
                <span className="font-extrabold text-[#003366]">{studentName || '[PENDIENTE: NOMBRE]'}</span>
              </div>
              <div>
                <span className="font-bold text-slate-600">Cédula / ID:</span>{' '}
                <span className="font-extrabold text-[#003366]">{studentId || '[PENDIENTE: CÉDULA]'}</span>
              </div>
              <div>
                <span className="font-bold text-slate-600">Fase Evaluada:</span>{' '}
                <span className="font-semibold text-slate-800">{currentPhase.title}</span>
              </div>
              <div>
                <span className="font-bold text-slate-600">Grupo:</span>{' '}
                <span className="font-semibold text-slate-800">{studentGroup}</span>
              </div>
              <div className="col-span-2">
                <span className="font-bold text-slate-600">Ejercicio Desarrollado:</span>{' '}
                <span className="font-bold text-[#005691]">{currentExercise.title}</span>
              </div>
            </div>

            {/* Python Source Code */}
            <div className="mb-4">
              <h4 className="text-xs font-bold text-[#003366] border-l-4 border-amber-500 pl-2 mb-2 uppercase">
                1. Código Python 3.12 Desarrollado por el Estudiante
              </h4>
              <pre className="p-3 rounded bg-slate-900 text-emerald-300 font-mono text-[11px] overflow-x-auto leading-relaxed max-h-[220px]">
                {code}
              </pre>
            </div>

            {/* Console Output */}
            <div className="mb-4">
              <h4 className="text-xs font-bold text-[#003366] border-l-4 border-amber-500 pl-2 mb-2 uppercase">
                2. Resultado de Ejecución en Consola (stdout / stderr)
              </h4>
              <pre className="p-3 rounded bg-slate-950 text-slate-100 font-mono text-[11px] overflow-x-auto max-h-[160px]">
                {logs.length === 0 ? "Sin salidas registradas en consola." : logs.map(l => l.text).join('\n')}
              </pre>
            </div>

            {/* Variables Memory Snapshot */}
            <div>
              <h4 className="text-xs font-bold text-[#003366] border-l-4 border-amber-500 pl-2 mb-2 uppercase">
                3. Tabla de Inspección de Memoria y Variables
              </h4>
              {variables.length === 0 ? (
                <p className="text-xs text-slate-500 italic">No hay variables registradas en el espacio de nombres.</p>
              ) : (
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#003366] text-white text-[11px]">
                      <th className="p-1.5 border border-slate-300">Variable</th>
                      <th className="p-1.5 border border-slate-300">Tipo de Dato</th>
                      <th className="p-1.5 border border-slate-300">Valor Almacenado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variables.map((v, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-1.5 border border-slate-300 font-mono font-bold text-blue-900">{v.name}</td>
                        <td className="p-1.5 border border-slate-300 font-mono text-slate-700">{v.type}</td>
                        <td className="p-1.5 border border-slate-300 font-mono text-emerald-700">{v.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Digital Stamp */}
            <div className="mt-6 pt-3 border-t border-slate-300 flex items-center justify-between text-[10px] text-slate-500">
              <div>
                Validación Digital SimuPy UNAD: Hash-{Math.random().toString(36).substring(2, 10).toUpperCase()}
              </div>
              <div className="font-bold text-[#003366]">
                Universidad Nacional Abierta y a Distancia © {new Date().getFullYear()}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950">
          <span className="text-xs text-slate-400">
            Imprime o guarda en PDF para adjuntar en tu informe de la UNAD.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-all"
            >
              Cancelar
            </button>
            <button
              onClick={handlePrintOrPDF}
              className="flex items-center gap-2 px-5 py-2 text-xs font-extrabold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Exportar PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

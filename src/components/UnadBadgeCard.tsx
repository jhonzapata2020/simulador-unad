// src/components/UnadBadgeCard.tsx
import React, { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ShieldCheck, Download, X, GraduationCap, CheckCircle2, Calendar, User, Sparkles, Hash } from 'lucide-react';
import html2canvas from 'html2canvas';

interface UnadBadgeCardProps {
  isVisible: boolean;
  onClose: () => void;
  studentName?: string;
  studentId?: string;
  exerciseTitle: string;
  phaseBadge: string;
  executionTimeMs?: number | null;
  darkMode: boolean;
}

export const UnadBadgeCard: React.FC<UnadBadgeCardProps> = ({
  isVisible,
  onClose,
  studentName = "Estudiante UNAD ECBTI",
  studentId = "1098765432",
  exerciseTitle,
  phaseBadge,
  executionTimeMs,
  darkMode
}) => {
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  if (!isVisible) return null;

  const timestampStr = new Date().toLocaleString('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const verificationHash = `UNAD-EXEC-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  const qrValue = `https://unad.edu.co/verify?code=${verificationHash}&std=${encodeURIComponent(studentName)}&ex=${encodeURIComponent(exerciseTitle)}`;

  const handleDownloadPNG = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: darkMode ? '#0f172a' : '#ffffff'
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `Insignia_UNAD_${verificationHash}.png`;
      link.click();
    } catch (err) {
      console.error("Error descargando la insignia:", err);
      alert("No se pudo exportar la insignia. Intenta nuevamente.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-sm w-full animate-fadeIn shadow-2xl">
      <div
        ref={cardRef}
        className={`p-4 rounded-2xl border transition-all ${
          darkMode
            ? 'bg-slate-900/95 border-emerald-500/40 text-slate-100 backdrop-blur-xl ring-1 ring-emerald-500/20'
            : 'bg-white border-emerald-500/30 text-slate-900 shadow-xl'
        }`}
      >
        {/* Card Top Banner */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#003366] to-[#005691] flex items-center justify-center text-amber-400 font-bold border border-amber-400/30 shadow-md">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-amber-400 uppercase tracking-wide">
                  INSIGNIA UNAD
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 font-extrabold border border-emerald-700/50">
                  CÓDIGO CORRECTO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">ECBTI - Fundamentos de Programación</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
            title="Cerrar insignia"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Verification Badge */}
        <div className="mb-3 p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 text-xs font-bold text-emerald-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
          <div className="flex-1 truncate">
            <span>Código Ejecutado Correctamente</span>
            {executionTimeMs !== undefined && executionTimeMs !== null && (
              <span className="ml-1 text-[10px] text-emerald-400 font-mono">({executionTimeMs} ms)</span>
            )}
          </div>
        </div>

        {/* Student & Exercise Info + Dynamic QR */}
        <div className="grid grid-cols-12 gap-3 items-center mb-3 text-xs">
          
          {/* Metadata */}
          <div className="col-span-8 space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate max-w-[170px]" title={studentName}>
                {studentName}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <Hash className="w-3 h-3 text-slate-500 shrink-0" />
              <span>ID: {studentId}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <Calendar className="w-3 h-3 text-slate-500 shrink-0" />
              <span>{timestampStr}</span>
            </div>

            <div className="text-[10px] font-bold text-amber-300 truncate max-w-[170px]" title={exerciseTitle}>
              [{phaseBadge}] {exerciseTitle}
            </div>
          </div>

          {/* QR Code Container */}
          <div className="col-span-4 flex flex-col items-center justify-center p-1.5 bg-white rounded-xl shadow-inner border border-slate-200">
            <QRCodeCanvas
              value={qrValue}
              size={72}
              level="H"
              includeMargin={false}
            />
            <span className="text-[8px] font-mono text-slate-700 font-bold mt-1 tracking-tighter">
              VALIDACIÓN QR
            </span>
          </div>

        </div>

        {/* Footer Hash & Action Download Button */}
        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
          <div className="text-[9px] font-mono text-slate-500 truncate" title={verificationHash}>
            Hash: {verificationHash}
          </div>

          <button
            onClick={handleDownloadPNG}
            disabled={downloading}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloading ? 'Generando...' : 'Descargar Insignia PNG'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

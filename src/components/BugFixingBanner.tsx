// src/components/BugFixingBanner.tsx
import React, { useState } from 'react';
import { Exercise } from '../data/exercisesData';
import { Bug, CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw, Sparkles, Loader2 } from 'lucide-react';
import { getPyodideInstance } from '../lib/pyodideRunner';

interface BugFixingBannerProps {
  exercise: Exercise;
  currentCode: string;
  darkMode: boolean;
}

export const BugFixingBanner: React.FC<BugFixingBannerProps> = ({
  exercise,
  currentCode,
  darkMode
}) => {
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    success: boolean;
    message: string;
    details?: string[];
  } | null>(null);

  if (!exercise.isBugFixing) return null;

  const handleVerifySolution = async () => {
    setVerifying(true);
    setVerificationResult(null);

    try {
      const pyodide = await getPyodideInstance();
      if (!pyodide) {
        throw new Error("Pyodide no está disponible");
      }

      const testResults: string[] = [];
      let allPassed = true;

      // Run user code first
      await pyodide.runPythonAsync(currentCode);

      if (exercise.testCases && exercise.testCases.length > 0) {
        for (let i = 0; i < exercise.testCases.length; i++) {
          const tc = exercise.testCases[i];
          try {
            await pyodide.runPythonAsync(tc.testPythonSnippet);
            testResults.push(`✓ Prueba ${i + 1}: ${tc.description}`);
          } catch (err: any) {
            allPassed = false;
            testResults.push(`✗ Prueba ${i + 1}: Falló - ${err?.message || String(err)}`);
          }
        }
      } else {
        testResults.push("✓ Código ejecutado sin errores sintácticos.");
      }

      if (allPassed) {
        setVerificationResult({
          success: true,
          message: "¡FELICITACIONES! Has corregido todos los errores del ejercicio.",
          details: testResults
        });
      } else {
        setVerificationResult({
          success: false,
          message: "Aún existen fallas en la solución. Revisa los resultados de las pruebas:",
          details: testResults
        });
      }
    } catch (err: any) {
      setVerificationResult({
        success: false,
        message: "Error de ejecución o sintaxis al verificar la solución:",
        details: [err?.message || String(err)]
      });
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className={`p-4 rounded-2xl border mb-4 transition-all shadow-md ${
      darkMode
        ? 'bg-rose-950/20 border-rose-800/50 text-slate-100'
        : 'bg-rose-50 border-rose-200 text-slate-900'
    }`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left Side: Fault description */}
        <div className="flex items-start gap-3 flex-1">
          <div className="p-2.5 rounded-xl bg-rose-600/20 border border-rose-500/30 text-rose-400 shrink-0 mt-0.5">
            <Bug className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800">
                MODO BUG FIXING (DEPURACIÓN)
              </span>
              <span className="text-xs font-bold text-slate-300">
                {exercise.title}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 whitespace-pre-line leading-relaxed">
              {exercise.bugDescription || 'Depura la función Python corrigiendo errores sintácticos y lógicos.'}
            </p>
          </div>
        </div>

        {/* Right Side: Verify Solution Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleVerifySolution}
            disabled={verifying}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 rounded-xl shadow-lg shadow-rose-900/40 hover:shadow-rose-900/60 transition-all duration-150 active:scale-95 disabled:opacity-50"
          >
            {verifying ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Evaluando Pruebas...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Verificar Solución</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Test Verification Feedback Modal/Alert */}
      {verificationResult && (
        <div className={`mt-4 p-3.5 rounded-xl border text-xs animate-fadeIn ${
          verificationResult.success
            ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200'
            : 'bg-rose-950/60 border-rose-500/50 text-rose-200'
        }`}>
          <div className="flex items-center gap-2 font-bold mb-2">
            {verificationResult.success ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-400" />
            )}
            <span className="text-sm">{verificationResult.message}</span>
          </div>

          {verificationResult.details && (
            <ul className="space-y-1 font-mono text-[11px] pl-6 list-disc opacity-90">
              {verificationResult.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

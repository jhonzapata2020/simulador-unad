'use client';

import React, { useState, useCallback } from 'react';
import { Header } from '../components/Header';
import { PhaseSelector } from '../components/PhaseSelector';
import { CodeEditorPanel } from '../components/CodeEditorPanel';
import { ConsolePanel, ConsoleLogEntry } from '../components/ConsolePanel';
import { MemoryInspectorPanel } from '../components/MemoryInspectorPanel';
import { BugFixingBanner } from '../components/BugFixingBanner';
import { EvidenceModal } from '../components/EvidenceModal';
import { HelpModal } from '../components/HelpModal';
import { UnadBadgeCard } from '../components/UnadBadgeCard';
import { SidebarDock } from '../components/SidebarDock';
import { EXERCISES, PHASES, Exercise } from '../data/exercisesData';
import { runPythonCode, VariableItem } from '../lib/pyodideRunner';
import { BookOpen } from 'lucide-react';

export default function SimuPyUNADPage() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedPhaseId, setSelectedPhaseId] = useState<'fase2' | 'fase3' | 'fase4'>('fase2');
  const [currentExercise, setCurrentExercise] = useState<Exercise>(EXERCISES[0]);
  const [code, setCode] = useState<string>(EXERCISES[0].initialCode);
  
  // Execution state
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionTimeMs, setExecutionTimeMs] = useState<number | null>(null);
  const [logs, setLogs] = useState<ConsoleLogEntry[]>([
    {
      id: 'init-1',
      type: 'system',
      text: 'SimuPy UNAD preparado. CPython 3.12 WebAssembly cargado.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [variables, setVariables] = useState<VariableItem[]>([]);

  // Insignia Badge Card state
  const [showBadgeCard, setShowBadgeCard] = useState<boolean>(false);

  // Modals state
  const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);

  // Input handling
  const [waitingForInput, setWaitingForInput] = useState<boolean>(false);
  const [inputPromptText, setInputPromptText] = useState<string>('');

  // Handle phase change
  const handleSelectPhase = (phaseId: 'fase2' | 'fase3' | 'fase4') => {
    setSelectedPhaseId(phaseId);
    const firstEx = EXERCISES.find(ex => ex.phaseId === phaseId) || EXERCISES[0];
    setCurrentExercise(firstEx);
    setCode(firstEx.initialCode);
    setLogs([{
      id: String(Date.now()),
      type: 'system',
      text: `Módulo cambiado a: ${phaseId.toUpperCase()} - ${firstEx.title}`,
      timestamp: new Date().toLocaleTimeString()
    }]);
    setVariables([]);
  };

  // Handle exercise change
  const handleSelectExercise = (ex: Exercise) => {
    setCurrentExercise(ex);
    setCode(ex.initialCode);
    setLogs([{
      id: String(Date.now()),
      type: 'system',
      text: `Ejercicio cargado: ${ex.title}`,
      timestamp: new Date().toLocaleTimeString()
    }]);
    setVariables([]);
  };

  // Run python code callback
  const handleExecuteCode = useCallback(async () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setExecutionTimeMs(null);

    const newLogs: ConsoleLogEntry[] = [
      {
        id: String(Date.now()),
        type: 'system',
        text: 'Iniciando ejecución en Pyodide...',
        timestamp: new Date().toLocaleTimeString()
      }
    ];
    setLogs(newLogs);

    const appendStdout = (text: string) => {
      setLogs(prev => [
        ...prev,
        {
          id: String(Date.now() + Math.random()),
          type: 'stdout',
          text,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    };

    const appendStderr = (text: string) => {
      setLogs(prev => [
        ...prev,
        {
          id: String(Date.now() + Math.random()),
          type: 'stderr',
          text,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    };

    try {
      const result = await runPythonCode(
        code,
        appendStdout,
        appendStderr,
        undefined,
        (statusText) => {
          setLogs(prev => [
            ...prev,
            {
              id: String(Date.now() + Math.random()),
              type: 'system',
              text: statusText,
              timestamp: new Date().toLocaleTimeString()
            }
          ]);
        }
      );

      setVariables(result.variables);
      setExecutionTimeMs(result.executionTimeMs);
      
      if (!result.error) {
        setShowBadgeCard(true);
      }

      setLogs(prev => [
        ...prev,
        {
          id: String(Date.now() + Math.random()),
          type: 'system',
          text: `Proceso finalizado con éxito en ${result.executionTimeMs} ms.`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    } catch (err: any) {
      appendStderr(err?.message || String(err));
      setShowBadgeCard(false);
    } finally {
      setIsExecuting(false);
    }
  }, [code, isExecuting]);

  // Step Trace / Desktop Test
  const handleTraceStep = async () => {
    await handleExecuteCode();
  };

  // Download Python file
  const handleDownloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `simupy_unad_${currentExercise.id}.py`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Reset exercise code
  const handleResetCode = () => {
    if (confirm("¿Deseas restablecer el código a la plantilla inicial del ejercicio?")) {
      setCode(currentExercise.initialCode);
      setVariables([]);
      setLogs([
        {
          id: String(Date.now()),
          type: 'system',
          text: 'Código restablecido a la plantilla original.',
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    }
  };

  const currentPhase = PHASES.find(p => p.id === selectedPhaseId) || PHASES[0];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
    }`}>
      {/* Streamlined Header */}
      <Header darkMode={darkMode} />

      {/* Phase Navigation Tab Bar & Exercise Dropdown */}
      <PhaseSelector
        selectedPhaseId={selectedPhaseId}
        onSelectPhase={handleSelectPhase}
        selectedExerciseId={currentExercise.id}
        onSelectExercise={handleSelectExercise}
        darkMode={darkMode}
      />

      {/* Main Content Workspace with Sidebar Dock */}
      <main className="flex-1 p-4 max-w-[1920px] mx-auto w-full flex items-start gap-4">
        
        {/* Main Grid: Code Editor + Console + Memory Inspector */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          
          {/* Phase 4 Bug Fixing Banner */}
          {currentExercise.isBugFixing && (
            <BugFixingBanner
              exercise={currentExercise}
              currentCode={code}
              darkMode={darkMode}
            />
          )}

          {/* Clean Exercise Info Banner */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-2.5 shadow-sm ${
            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="truncate">
              <span className="font-bold text-amber-400">{currentExercise.title}: </span>
              <span className="text-slate-300">{currentExercise.description}</span>
            </div>
          </div>

          {/* Unified Editor and Console Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-[620px]">
            
            {/* Panel 1: Code Editor (main.py) */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col min-h-[500px]">
              <CodeEditorPanel
                code={code}
                onChangeCode={setCode}
                onExecute={handleExecuteCode}
                onTraceStep={handleTraceStep}
                isExecuting={isExecuting}
                darkMode={darkMode}
                exerciseTitle={currentExercise.title}
              />
            </div>

            {/* Right Pane: Console & Memory Inspector */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4 min-h-[500px]">
              
              {/* Panel 2: Interactive Console */}
              <div className="flex-1 min-h-[260px]">
                <ConsolePanel
                  logs={logs}
                  onClearConsole={() => setLogs([])}
                  darkMode={darkMode}
                  executionTimeMs={executionTimeMs}
                  waitingForInput={waitingForInput}
                  inputPromptText={inputPromptText}
                />
              </div>

              {/* Panel 3: Memory & Variable Visualizer */}
              <div className="h-[280px]">
                <MemoryInspectorPanel
                  variables={variables}
                  darkMode={darkMode}
                />
              </div>

            </div>

          </div>

        </div>

        {/* Dynamic Sidebar Dock (Far Right) */}
        <SidebarDock
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode(!darkMode)}
          onDownloadCode={handleDownloadCode}
          onResetCode={handleResetCode}
          onOpenHelp={() => setIsHelpModalOpen(true)}
          onOpenEvidenceModal={() => setIsEvidenceModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <footer className={`border-t py-3 px-6 text-center text-xs transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-slate-200 border-slate-300 text-slate-600'
      }`}>
        <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            SimuPy UNAD v1.0 • CPython 3.12 WebAssembly Engine
          </div>
          <div>
            Escuela de Ciencias Básicas, Tecnología e Ingeniería - ECBTI | UNAD Colombia
          </div>
        </div>
      </footer>

      {/* Evidence Report Modal */}
      <EvidenceModal
        isOpen={isEvidenceModalOpen}
        onClose={() => setIsEvidenceModalOpen(false)}
        currentExercise={currentExercise}
        currentPhase={currentPhase}
        code={code}
        logs={logs}
        variables={variables}
        darkMode={darkMode}
      />

      {/* User Help Modal */}
      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        darkMode={darkMode}
      />

      {/* Insignia Digital de Ejecución QR */}
      <UnadBadgeCard
        isVisible={showBadgeCard}
        onClose={() => setShowBadgeCard(false)}
        exerciseTitle={currentExercise.title}
        phaseBadge={currentPhase.badge}
        executionTimeMs={executionTimeMs}
        darkMode={darkMode}
      />
    </div>
  );
}

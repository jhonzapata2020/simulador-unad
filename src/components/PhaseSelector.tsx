// src/components/PhaseSelector.tsx
import React from 'react';
import { PHASES, EXERCISES, Exercise } from '../data/exercisesData';
import { Layers, Bug, Sparkles, BookOpen } from 'lucide-react';

interface PhaseSelectorProps {
  selectedPhaseId: 'fase2' | 'fase3' | 'fase4';
  onSelectPhase: (phaseId: 'fase2' | 'fase3' | 'fase4') => void;
  selectedExerciseId: string;
  onSelectExercise: (exercise: Exercise) => void;
  darkMode: boolean;
}

export const PhaseSelector: React.FC<PhaseSelectorProps> = ({
  selectedPhaseId,
  onSelectPhase,
  selectedExerciseId,
  onSelectExercise,
  darkMode
}) => {
  const currentExercises = EXERCISES.filter(ex => ex.phaseId === selectedPhaseId);
  const currentPhase = PHASES.find(p => p.id === selectedPhaseId);

  return (
    <div className={`border-b transition-colors px-4 py-3 ${
      darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Phase Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {PHASES.map(phase => {
            const isActive = phase.id === selectedPhaseId;
            const isPhase4 = phase.id === 'fase4';
            return (
              <button
                key={phase.id}
                onClick={() => onSelectPhase(phase.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? isPhase4
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-rose-900/30 ring-1 ring-rose-400/40'
                      : 'bg-gradient-to-r from-[#003366] to-[#005691] text-amber-300 shadow-md shadow-blue-900/30 ring-1 ring-amber-400/30'
                    : darkMode
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                      : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {isPhase4 ? (
                  <Bug className={`w-4 h-4 ${isActive ? 'text-white animate-bounce' : 'text-rose-400'}`} />
                ) : (
                  <Layers className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-blue-400'}`} />
                )}
                <span>{phase.badge}</span>
                {isPhase4 && (
                  <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-rose-950 text-rose-200 uppercase font-black tracking-wider">
                    Bug Fixing
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Exercise Dropdown & Description */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400 hidden sm:block" />
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">Ejercicio:</span>
          </div>

          <select
            value={selectedExerciseId}
            onChange={(e) => {
              const found = EXERCISES.find(ex => ex.id === e.target.value);
              if (found) onSelectExercise(found);
            }}
            className={`text-xs font-medium px-3 py-2 rounded-xl border outline-none transition-all cursor-pointer ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-slate-100 focus:border-amber-400'
                : 'bg-white border-slate-300 text-slate-800 focus:border-blue-600 shadow-sm'
            }`}
          >
            {currentExercises.map(ex => (
              <option key={ex.id} value={ex.id}>
                {ex.title} {ex.isBugFixing ? '🐛 [Modo Depuración]' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Phase Description Bar */}
      {currentPhase && (
        <div className="max-w-[1920px] mx-auto mt-2 pt-2 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span className="font-semibold text-amber-400/90">{currentPhase.subtitle}:</span>
            <span className="hidden sm:inline text-slate-400">{currentPhase.description}</span>
          </div>
        </div>
      )}
    </div>
  );
};

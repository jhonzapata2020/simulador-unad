// src/components/PhaseSelector.tsx
import React from 'react';
import { PHASES, EXERCISES, Exercise } from '../data/exercisesData';
import { BookOpen } from 'lucide-react';

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

  const navTabs = [
    { id: 'fase1', label: 'Phase 1', disabled: true },
    { id: 'fase2', label: 'Phase 2', disabled: false },
    { id: 'fase3', label: 'Phase 3', disabled: false },
    { id: 'fase4', label: 'Phase 4', tag: 'BUG FIXING', disabled: false }
  ];

  return (
    <div className={`border-b transition-colors px-6 py-2.5 ${
      darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Unified Horizontal Phase Tab Bar */}
        <div className="flex items-center gap-6 overflow-x-auto border-b md:border-b-0 border-slate-800/40 pb-2 md:pb-0">
          {navTabs.map(tab => {
            const isActive = tab.id === selectedPhaseId;
            return (
              <button
                key={tab.id}
                disabled={tab.disabled}
                onClick={() => !tab.disabled && onSelectPhase(tab.id as any)}
                className={`relative py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  tab.disabled
                    ? 'text-slate-600 cursor-not-allowed opacity-50'
                    : isActive
                      ? darkMode
                        ? 'text-amber-400 font-extrabold'
                        : 'text-[#003366] font-extrabold'
                      : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                
                {tab.tag && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded font-black bg-rose-950/80 text-rose-400 border border-rose-800/60 tracking-wider">
                    {tab.tag}
                  </span>
                )}

                {/* Subtle active underline highlight */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full shadow-sm shadow-amber-400/50 animate-fadeIn" />
                )}
              </button>
            );
          })}
        </div>

        {/* Exercise Dropdown Selector */}
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-400 shrink-0">Ejercicio:</span>

          <select
            value={selectedExerciseId}
            onChange={(e) => {
              const found = EXERCISES.find(ex => ex.id === e.target.value);
              if (found) onSelectExercise(found);
            }}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border outline-none transition-all cursor-pointer ${
              darkMode
                ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-amber-400'
                : 'bg-white border-slate-300 text-slate-800 focus:border-blue-600 shadow-sm'
            }`}
          >
            {currentExercises.map(ex => (
              <option key={ex.id} value={ex.id}>
                {ex.title} {ex.isBugFixing ? '🐛 [Depuración]' : ''}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

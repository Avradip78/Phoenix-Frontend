import React, { useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  ArrowRight,
  AlertTriangle,
  Send,
  Zap,
  Activity
} from 'lucide-react';
import { Button } from '../ui/Button';

export function PresentationModeModal({
  isOpen,
  onClose,
  allDemos,
  currentDemo,
  onSelectDomain,
  currentStepIndex,
  onStepChange,
  isPlaying,
  onTogglePlay,
  onReset,
  humanApproved,
  onApproveGate
}) {
  const { navigate } = useRouter();

  // Escape key cleanup
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const steps = currentDemo.steps;
  const currentStep = steps[currentStepIndex] || steps[0];

  return (
    <div className="fixed inset-0 z-50 bg-[#07111F] text-white flex flex-col overflow-hidden animate-in fade-in duration-200">
      
      {/* Top Presentation Bar */}
      <div className="px-6 py-4 border-b border-[#1E3553] bg-[#0D1B2A] flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-600/30 border border-teal-500/40 text-teal-400 flex items-center justify-center font-bold">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                PHOENIXINSIGHTS PRESENTATION MODE
              </span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                Live Client Demo
              </span>
            </div>
            <h2 className="text-sm font-bold text-white">
              {currentDemo.name} — {currentDemo.scenario}
            </h2>
          </div>
        </div>

        {/* Quick Domain Switcher */}
        <div className="flex flex-wrap items-center gap-1.5">
          {allDemos.map((d) => {
            const Icon = d.icon;
            const isSelected = d.id === currentDemo.id;
            return (
              <button
                key={d.id}
                onClick={() => onSelectDomain(d.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-[#07111F] text-slate-300 hover:text-white hover:bg-slate-800 border border-[#1E3553]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{d.domain.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Close Presentation Mode */}
        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          title="Exit Presentation Mode (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Presentation Body */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
        
        {/* Step Progress Ribbon */}
        <div className="bg-[#0D1B2A] rounded-xl border border-[#1E3553] p-4 flex items-center justify-between gap-2 overflow-x-auto">
          {steps.map((s, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isDone = idx < currentStepIndex;
            return (
              <button
                key={idx}
                onClick={() => onStepChange(idx)}
                className={`px-3 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  isCurrent
                    ? s.isGate
                      ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400'
                      : 'bg-teal-600 text-white shadow-md'
                    : isDone
                    ? 'bg-teal-950/60 text-teal-300 border border-teal-800/60'
                    : 'bg-[#07111F] text-slate-500 border border-[#1E3553]'
                }`}
              >
                <span>{s.stepNumber}</span>
                <span>{s.name}</span>
                {s.isGate && <ShieldCheck className="w-3.5 h-3.5 text-amber-900" />}
              </button>
            );
          })}
        </div>

        {/* Two-Column Stage Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-stretch">
          
          {/* Left Column: Active Step Reasoning & Extracted Data (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#1E3553] mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase bg-teal-950/80 px-2.5 py-1 rounded border border-teal-800">
                    STAGE {currentStep.stepNumber} OF 08
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Agent: <strong className="text-white">{currentStep.agent}</strong>
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  System: {currentStep.system}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2">
                {currentStep.name}
              </h3>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {currentStep.desc}
              </p>

              {/* High-Level AI Reasoning Stream */}
              <div className="bg-[#07111F] rounded-xl border border-[#1E3553] p-4 mb-6 text-xs font-mono">
                <div className="text-[10px] text-teal-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>High-Level AI Reasoning Log</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {currentStep.reasoning}
                </p>
              </div>

              {/* Extracted Structured Data Fields */}
              {currentStep.extractedFields && (
                <div className="bg-[#07111F] rounded-xl border border-[#1E3553] p-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider mb-3">
                    Structured Data Extraction
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {Object.entries(currentStep.extractedFields).map(([key, val]) => (
                      <div key={key} className="bg-[#0D1B2A] p-2.5 rounded-lg border border-[#1E3553]">
                        <span className="text-[10px] font-mono text-slate-400 block">{key}</span>
                        <span className="text-xs font-bold text-teal-300 truncate block mt-0.5">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Step Indicator */}
            <div className="pt-6 mt-6 border-t border-[#1E3553] flex items-center justify-between text-xs text-slate-400">
              <span>PhoenixInsights Deterministic Workflow Execution</span>
              <span className="text-teal-400 font-mono">Verified Zero Hallucination Guard</span>
            </div>
          </div>

          {/* Right Column: Human Gate or Business System State (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* If Current Step is Human Gate: Highlighted Sign-Off Panel */}
            {currentStep.isGate && (
              <div className="bg-amber-950/60 rounded-2xl border-2 border-amber-500/80 p-6 shadow-2xl flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                        CRITICAL GOVERNANCE GATE
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {currentStep.gateDetails?.title || "Managerial Confirmation Required"}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-amber-200 leading-relaxed mb-4 bg-amber-950/80 p-3 rounded-lg border border-amber-800/60">
                    {currentStep.gateDetails?.message}
                  </p>

                  <div className="text-[11px] text-slate-300 font-mono mb-4">
                    Authorized Approver: <strong className="text-amber-300">{currentStep.gateDetails?.approverRole}</strong>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-amber-800/60">
                  <button
                    onClick={onApproveGate}
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve & Continue Downstream Execution</span>
                  </button>

                  <button
                    onClick={() => onStepChange(currentStepIndex + 1)}
                    className="w-full py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700 transition-colors cursor-pointer"
                  >
                    Simulate Alternative Exception Route
                  </button>
                </div>
              </div>
            )}

            {/* Target Enterprise System Summary */}
            <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 flex-1 flex flex-col justify-between shadow-xl text-left">
              <div>
                <span className="text-[10px] font-mono text-teal-400 uppercase font-bold tracking-wider block mb-1">
                  Connected Enterprise System
                </span>
                <h4 className="text-lg font-bold text-white mb-4">
                  {currentDemo.outputSummary.system}
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="bg-[#07111F] p-3 rounded-lg border border-[#1E3553]">
                    <span className="text-slate-400 text-[11px] block">Record Target:</span>
                    <span className="font-mono text-teal-300 font-bold">{currentDemo.outputSummary.record}</span>
                  </div>

                  <div className="bg-[#07111F] p-3 rounded-lg border border-[#1E3553]">
                    <span className="text-slate-400 text-[11px] block">Execution State:</span>
                    <span className="font-medium text-emerald-400">{currentDemo.outputSummary.status}</span>
                  </div>

                  <div className="bg-[#07111F] p-3 rounded-lg border border-[#1E3553]">
                    <span className="text-slate-400 text-[11px] block">Audit Trail:</span>
                    <span className="text-slate-300 font-mono text-[11px]">{currentDemo.outputSummary.auditState}</span>
                  </div>
                </div>
              </div>

              {/* Performance Scorecard */}
              <div className="mt-6 pt-4 border-t border-[#1E3553] grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="bg-[#07111F] p-2 rounded-lg border border-[#1E3553]">
                  <span className="text-slate-400 block text-[10px]">AI SPEED</span>
                  <span className="text-teal-300 font-bold">{currentDemo.metrics.aiTime}</span>
                </div>
                <div className="bg-[#07111F] p-2 rounded-lg border border-[#1E3553]">
                  <span className="text-slate-400 block text-[10px]">OVERSIGHT</span>
                  <span className="text-amber-400 font-bold">100% Governed</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Playback Control Ribbon */}
      <div className="px-6 py-4 border-t border-[#1E3553] bg-[#0D1B2A] flex flex-wrap items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePlay}
            className="px-4 py-2 rounded-lg bg-teal-600 text-white font-bold text-xs flex items-center gap-2 hover:bg-teal-500 transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            <span>{isPlaying ? "Pause Simulation" : "Play Simulation"}</span>
          </button>

          <button
            onClick={onReset}
            className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Demo</span>
          </button>

          <button
            disabled={currentStepIndex >= steps.length - 1}
            onClick={() => onStepChange(currentStepIndex + 1)}
            className="px-3 py-2 rounded-lg bg-slate-800 disabled:opacity-40 text-slate-300 hover:text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Next Step</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">
            Discuss this architecture for your team:
          </span>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onClose();
              navigate('/poc');
            }}
            icon={ArrowRight}
            className="text-xs font-bold"
          >
            Show Us Your Workflow
          </Button>
        </div>
      </div>

    </div>
  );
}

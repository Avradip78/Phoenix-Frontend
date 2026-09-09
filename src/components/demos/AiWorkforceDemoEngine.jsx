import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import { ALL_DEMOS, getDemoById } from '../../data/demoData/demoRegistry';
import { PresentationModeModal } from './PresentationModeModal';
import {
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
  Maximize2,
  FileText,
  Activity,
  AlertTriangle,
  Zap,
  Sliders,
  TrendingUp,
  CreditCard,
  Users,
  Megaphone,
  Headphones,
  BrainCircuit
} from 'lucide-react';

export function AiWorkforceDemoEngine() {
  const { navigate } = useRouter();

  const [activeDomainId, setActiveDomainId] = useState('finance');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [humanApproved, setHumanApproved] = useState(false);
  const [presentationModeOpen, setPresentationModeOpen] = useState(false);

  const currentDemo = getDemoById(activeDomainId);
  const steps = currentDemo.steps;
  const currentStep = steps[currentStepIndex] || steps[0];

  // Auto-play timer
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setTimeout(() => {
        // If current step is a human gate and not yet approved, pause!
        if (currentStep.isGate && !humanApproved) {
          setIsPlaying(false);
          return;
        }

        if (currentStepIndex < steps.length - 1) {
          setCurrentStepIndex((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2400); // 2.4 seconds per step for comfortable readability
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex, steps.length, currentStep.isGate, humanApproved]);

  const handleSelectDomain = (domainId) => {
    setActiveDomainId(domainId);
    setCurrentStepIndex(0);
    setIsPlaying(false);
    setHumanApproved(false);
  };

  const handleTogglePlay = () => {
    if (currentStepIndex >= steps.length - 1) {
      setCurrentStepIndex(0);
      setHumanApproved(false);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
    setHumanApproved(false);
  };

  const handleApproveGate = () => {
    setHumanApproved(true);
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      setIsPlaying(true);
    }
  };

  return (
    <section id="ai-workforce-demo" className="py-20 md:py-28 bg-[#07111F] text-white border-b border-[#1E3553] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[700px] h-[350px] bg-teal-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[300px] bg-violet-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B2A] border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>SEE WHAT AI CAN DO — INTERACTIVE DEMONSTRATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            PhoenixInsights AI Workforce Demo
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
            Not a static diagram. Select a business domain below to experience how raw enterprise inputs progress through automated intelligence, mandatory human approval, and governed system execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setPresentationModeOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D1B2A] border border-teal-500/40 text-teal-300 hover:text-white hover:bg-teal-950/60 text-xs font-mono font-bold transition-all shadow-md cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Launch Client Presentation Mode</span>
            </button>
            <span className="text-xs font-mono text-slate-400 bg-[#07111F] px-3 py-1.5 rounded-lg border border-[#1E3553]">
              Illustrative Simulation · Deterministic Sample Data
            </span>
          </div>
        </div>

        {/* 7-Domain Interactive Switcher Ribbon */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {ALL_DEMOS.map((d) => {
            const Icon = d.icon;
            const isSelected = d.id === activeDomainId;

            return (
              <button
                key={d.id}
                onClick={() => handleSelectDomain(d.id)}
                className={`px-4 py-3 rounded-xl border flex items-center gap-2.5 whitespace-nowrap text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white border-teal-500 shadow-lg shadow-teal-500/20 ring-2 ring-teal-400/20'
                    : 'bg-[#0D1B2A] text-slate-300 border-[#1E3553] hover:border-slate-600 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{d.domain}</span>
              </button>
            );
          })}
        </div>

        {/* Master Interactive Demo Console */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] shadow-2xl p-6 sm:p-8 relative">
          
          {/* Top Demo Bar: Scenario Title & Controls */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-[#1E3553] mb-8">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                  {currentDemo.badge}
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-[#07111F] px-2 py-0.5 rounded border border-[#1E3553]">
                  {currentDemo.scenario}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentDemo.name}
              </h3>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleTogglePlay}
                className="px-4 py-2 rounded-lg bg-teal-600 text-white font-bold text-xs flex items-center gap-2 hover:bg-teal-500 transition-all shadow-md cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                <span>{isPlaying ? "Pause Demo" : "Auto-Run Workflow"}</span>
              </button>

              <button
                onClick={handleReset}
                className="p-2 rounded-lg bg-[#07111F] text-slate-300 hover:text-white border border-[#1E3553] hover:bg-slate-800 transition-colors cursor-pointer"
                title="Reset Workflow"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                disabled={currentStepIndex >= steps.length - 1}
                onClick={() => {
                  if (currentStepIndex < steps.length - 1) {
                    setCurrentStepIndex((prev) => prev + 1);
                  }
                }}
                className="px-3 py-2 rounded-lg bg-[#07111F] disabled:opacity-30 text-slate-300 hover:text-white border border-[#1E3553] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Step Forward</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Ribbon (Horizontal on Desktop, Scrollable) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {steps.map((s, idx) => {
              const isCurrent = idx === currentStepIndex;
              const isPast = idx < currentStepIndex;

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    isCurrent
                      ? s.isGate
                        ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-400/40 text-amber-200'
                        : 'bg-[#07111F] border-teal-400 ring-2 ring-teal-400/30 text-white'
                      : isPast
                      ? 'bg-[#07111F]/60 border-teal-800/60 text-teal-300'
                      : 'bg-[#07111F]/30 border-[#1E3553] text-slate-500 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold">
                      {s.stepNumber}
                    </span>
                    {s.isGate && (
                      <span className="text-[9px] font-mono text-amber-400 font-bold">GATE</span>
                    )}
                  </div>
                  <span className="text-xs font-bold truncate block">
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Two-Column Stage Execution Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Active Step Execution & Reasoning Log (7 cols) */}
            <div className="lg:col-span-7 bg-[#07111F] rounded-2xl border border-[#1E3553] p-6 sm:p-8 flex flex-col justify-between text-left shadow-xl">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#1E3553] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase text-teal-400 bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-800">
                      STEP {currentStep.stepNumber} ACTIVE
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Agent: <strong className="text-white">{currentStep.agent}</strong>
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    System Hook: {currentStep.system}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  {currentStep.name}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {currentStep.desc}
                </p>

                {/* Live Reasoning Terminal */}
                <div className="bg-[#0D1B2A] rounded-xl border border-[#1E3553] p-4 mb-6 font-mono text-xs">
                  <div className="text-[10px] text-teal-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5" />
                    <span>AI Reasoning Trace Stream</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed font-mono">
                    {currentStep.reasoning}
                  </p>
                </div>

                {/* Extracted Structured Entities */}
                {currentStep.extractedFields && (
                  <div className="bg-[#0D1B2A] rounded-xl border border-[#1E3553] p-4">
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider mb-3">
                      Structured Extracted Metadata
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {Object.entries(currentStep.extractedFields).map(([k, v]) => (
                        <div key={k} className="bg-[#07111F] p-2.5 rounded-lg border border-[#1E3553]">
                          <span className="text-[10px] font-mono text-slate-400 block">{k}</span>
                          <span className="text-xs font-bold text-teal-300 truncate block mt-0.5">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Summary Footer */}
              <div className="pt-6 mt-6 border-t border-[#1E3553] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
                <span>Deterministic Execution Bounds Enforced</span>
                <span className="text-teal-400 font-mono">PhoenixInsights Orchestrator Active</span>
              </div>
            </div>

            {/* Right Column: Human Gate Sign-Off OR Target System State (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              
              {/* Human Approval Gate Alert Panel */}
              {currentStep.isGate ? (
                <div className="bg-amber-950/70 rounded-2xl border-2 border-amber-500/80 p-6 shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                          HUMAN APPROVAL GATE
                        </span>
                        <h4 className="text-base font-bold text-white">
                          {currentStep.gateDetails?.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-amber-200 leading-relaxed mb-4 bg-amber-950 p-3 rounded-lg border border-amber-800/60">
                      {currentStep.gateDetails?.message}
                    </p>

                    <div className="text-[11px] text-slate-300 font-mono mb-4">
                      Approver Role: <strong className="text-amber-300">{currentStep.gateDetails?.approverRole}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-amber-800/60">
                    <button
                      onClick={handleApproveGate}
                      className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approve Workflow Step & Continue</span>
                    </button>

                    <button
                      onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
                      className="w-full py-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white text-xs font-mono border border-slate-700 transition-colors cursor-pointer"
                    >
                      Simulate Exception Handling
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard Connected Business System Panel */
                <div className="bg-[#07111F] rounded-2xl border border-[#1E3553] p-6 shadow-xl flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-teal-400 uppercase font-bold tracking-wider block mb-1">
                      Connected Enterprise System
                    </span>
                    <h4 className="text-lg font-bold text-white mb-4">
                      {currentDemo.outputSummary.system}
                    </h4>

                    <div className="space-y-3 text-xs">
                      <div className="bg-[#0D1B2A] p-3 rounded-lg border border-[#1E3553]">
                        <span className="text-slate-400 text-[11px] block">Target Mutation Record:</span>
                        <span className="font-mono text-teal-300 font-bold">{currentDemo.outputSummary.record}</span>
                      </div>

                      <div className="bg-[#0D1B2A] p-3 rounded-lg border border-[#1E3553]">
                        <span className="text-slate-400 text-[11px] block">Workflow Status:</span>
                        <span className="font-medium text-emerald-400">{currentDemo.outputSummary.status}</span>
                      </div>

                      <div className="bg-[#0D1B2A] p-3 rounded-lg border border-[#1E3553]">
                        <span className="text-slate-400 text-[11px] block">Cryptographic Telemetry:</span>
                        <span className="text-slate-300 font-mono text-[11px]">{currentDemo.outputSummary.auditState}</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metric Box */}
                  <div className="mt-6 pt-4 border-t border-[#1E3553] grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="bg-[#0D1B2A] p-2 rounded-lg border border-[#1E3553]">
                      <span className="text-slate-400 block text-[10px]">EXECUTION TIME</span>
                      <span className="text-teal-300 font-bold">{currentDemo.metrics.aiTime}</span>
                    </div>
                    <div className="bg-[#0D1B2A] p-2 rounded-lg border border-[#1E3553]">
                      <span className="text-slate-400 block text-[10px]">GOVERNANCE</span>
                      <span className="text-amber-400 font-bold">100% Sign-Off</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Conversion Box */}
              <div className="bg-[#07111F] rounded-xl border border-teal-500/30 p-5 text-left">
                <h5 className="text-xs font-bold text-white mb-1">
                  Have a similar workflow in your company?
                </h5>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                  We build focused, low-risk POCs around your specific tools, data, and approval thresholds.
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/poc')}
                  icon={ArrowRight}
                  className="w-full justify-center text-xs font-bold"
                >
                  Show Us Your Workflow
                </Button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Presentation Mode Fullscreen Modal */}
      <PresentationModeModal
        isOpen={presentationModeOpen}
        onClose={() => setPresentationModeOpen(false)}
        allDemos={ALL_DEMOS}
        currentDemo={currentDemo}
        onSelectDomain={handleSelectDomain}
        currentStepIndex={currentStepIndex}
        onStepChange={(idx) => setCurrentStepIndex(idx)}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onReset={handleReset}
        humanApproved={humanApproved}
        onApproveGate={handleApproveGate}
      />
    </section>
  );
}

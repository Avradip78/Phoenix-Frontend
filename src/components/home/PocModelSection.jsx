import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Target,
  Cpu,
  Activity,
  Rocket,
  TrendingUp,
  Sparkles,
  Lock
} from 'lucide-react';

export function PocModelSection() {
  const { navigate } = useRouter();

  const stages = [
    {
      num: "01",
      name: "ONE PROCESS",
      desc: "Select a single friction point with high operational friction and clear baseline metrics.",
      icon: Target,
      color: "cyan",
      iconClass: "bg-cyan-950/80 text-cyan-400 border border-cyan-800"
    },
    {
      num: "02",
      name: "POC ARCHITECTURE",
      desc: "Build a focused prototype with explicit guardrails, private RAG context, and system hooks.",
      icon: Cpu,
      color: "teal",
      iconClass: "bg-teal-950/80 text-teal-400 border border-teal-800"
    },
    {
      num: "03",
      name: "HUMAN VALIDATION",
      desc: "Test on realistic client datasets and enforce mandatory managerial approval checkpoints.",
      icon: ShieldCheck,
      color: "amber",
      isGate: true,
      iconClass: "bg-amber-500 text-slate-950 font-bold"
    },
    {
      num: "04",
      name: "BENCHMARK & MEASURE",
      desc: "Quantify cycle time reductions, accuracy rates, and operational throughput vs baseline.",
      icon: Activity,
      color: "blue",
      iconClass: "bg-blue-950/80 text-blue-400 border border-blue-800"
    },
    {
      num: "05",
      name: "CONTROLLED RELEASE",
      desc: "Deploy in a controlled, phased operating environment with instant rollback safety.",
      icon: Rocket,
      color: "teal",
      iconClass: "bg-teal-950/80 text-teal-400 border border-teal-800"
    },
    {
      num: "06",
      name: "GOVERNED SCALE",
      desc: "Replicate the proven agent topology and shared orchestration across adjacent workflows.",
      icon: TrendingUp,
      color: "violet",
      iconClass: "bg-violet-950/80 text-violet-400 border border-violet-800"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07111F] text-white border-b border-[#1E3553] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-teal-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B2A] border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>PRAGMATIC ADOPTION METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Start With One Workflow. Prove Value. Then Scale.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Avoid costly high-risk multi-year digital overhauls. We target one bounded operational bottleneck where intelligent automation and decision support produce immediate, verifiable ROI.
          </p>
        </div>

        {/* Visual Continuum Container */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col justify-between text-left transition-all ${
                    stage.isGate
                      ? 'bg-amber-950/40 border-amber-500/80 ring-1 ring-amber-500/30 shadow-lg'
                      : 'bg-[#07111F] border-[#1E3553] hover:border-teal-500/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stage.iconClass}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${
                        stage.isGate ? 'text-amber-400 font-extrabold' : 'text-teal-400'
                      }`}>
                        {stage.num}
                      </span>
                    </div>

                    <h4 className={`text-xs font-bold mb-1.5 leading-snug tracking-wide ${
                      stage.isGate ? 'text-amber-200 font-extrabold' : 'text-white'
                    }`}>
                      {stage.name}
                    </h4>

                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  {idx < stages.length - 1 && (
                    <div className="mt-3 pt-2 border-t border-[#1E3553] text-[10px] text-teal-400 font-mono font-bold hidden lg:block text-right">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Conversion Prompt */}
          <div className="mt-10 pt-8 border-t border-[#1E3553] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">
                  Low-Risk Enterprise Engagement Principle:
                </span>
                <span className="text-xs text-slate-400">
                  Fixed scope, clear pre-agreed evaluation benchmarks, and explicit human sign-off without enterprise workflow disruption.
                </span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/poc')}
              icon={ArrowRight}
              className="shrink-0 w-full sm:w-auto justify-center text-sm font-bold shadow-lg"
            >
              Start a Focused POC
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}

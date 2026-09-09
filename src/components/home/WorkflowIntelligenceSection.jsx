import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  Workflow,
  Database,
  Cpu,
  Zap,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
  Sliders,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

export function WorkflowIntelligenceSection() {
  const { navigate } = useRouter();

  const pillars = [
    {
      title: "Workflow Intelligence",
      tag: "Process Foundation",
      desc: "Deconstructing actual business tasks, system dependencies, handoffs, and decision bottlenecks.",
      icon: Workflow,
      color: "teal"
    },
    {
      title: "Data Intelligence",
      tag: "Analytical Rigor",
      desc: "Connecting enterprise databases, lakehouses, document stores, and streaming event buses.",
      icon: Database,
      color: "blue"
    },
    {
      title: "Applied AI & Agents",
      tag: "Task Execution",
      desc: "Specialized models and state machines executing bounded analysis, extraction, and synthesis.",
      icon: Cpu,
      color: "violet"
    },
    {
      title: "Automated Integration",
      tag: "System Interop",
      desc: "Deterministic API connectors linking directly with ERP, CRM, ATS, and internal tools.",
      icon: Zap,
      color: "cyan"
    },
    {
      title: "Human Oversight",
      tag: "Control Plane",
      desc: "Mandatory managerial confirmation gates protecting sensitive operations and customer touchpoints.",
      icon: ShieldCheck,
      color: "amber"
    },
    {
      title: "Business Measurement",
      tag: "Verifiable Telemetry",
      desc: "Continuous latency, accuracy, and audit telemetry tracking tangible operational outcomes.",
      icon: Activity,
      color: "emerald"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07111F] border-b border-[#1E3553] text-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Philosophy Banner */}
        <div className="bg-[#0D1B2A] text-white rounded-2xl border border-[#1E3553] p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase block mb-3">
              THE PHOENIXINSIGHTS PHILOSOPHY
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              “We don't start by asking: <span className="text-slate-400 font-normal">‘Where can we use AI?’</span><br />
              We start by asking: <span className="text-teal-400">‘Where is your business losing time, money or decision quality?’</span>”
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              You don't need to know which AI model or tool you need. Show us how the work happens today, and we'll identify where intelligent workflows could create real operational value.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/poc')}
                icon={ArrowRight}
                className="text-xs font-bold shadow-md shadow-teal-500/20"
              >
                Show Us Your Workflow
              </Button>
              <span className="text-xs font-mono text-slate-400">
                Fixed-scope POC discovery without long-term commitment.
              </span>
            </div>
          </div>
        </div>

        {/* 6 Structural Pillars */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-2">
            INTEGRATED OPERATIONAL ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            The 6 Dimensions of an Intelligent Workflow
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            True transformation requires more than raw AI models. It demands deep workflow mapping, data integration, and explicit human governance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isAmber = pillar.color === 'amber';

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between shadow-xl ${
                  isAmber
                    ? 'bg-[#131E2A] border-amber-500/40 hover:border-amber-400'
                    : 'bg-[#0D1B2A] border-[#1E3553] hover:border-teal-400/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                      isAmber ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-teal-950/60 text-teal-400 border border-teal-500/40'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      isAmber ? 'bg-amber-950/70 text-amber-300 border-amber-500/40' : 'bg-[#111827] text-slate-300 border-[#1E3553]'
                    }`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-medium text-slate-400 flex items-center justify-between">
                  <span>Deterministic Standard</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isAmber ? 'text-amber-400' : 'text-teal-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

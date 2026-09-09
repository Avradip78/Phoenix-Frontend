import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  ShieldCheck,
  User,
  Cpu,
  Layers,
  Lock,
  Zap,
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Eye,
  Sliders
} from 'lucide-react';

export function GovernanceSection() {
  const { navigate } = useRouter();

  const architectureNodes = [
    {
      step: "01",
      name: "AUTHENTICATED USER",
      desc: "Verified Identity, Role & Session Scope",
      icon: User,
      color: "blue",
      badge: "Identity",
      border: "border-slate-800",
      iconClass: "bg-blue-950/80 text-blue-400 border border-blue-800"
    },
    {
      step: "02",
      name: "BOUNDED AGENT",
      desc: "Task Planner operating within strictly typed schemas",
      icon: Cpu,
      color: "violet",
      badge: "Agent Core",
      border: "border-slate-800",
      iconClass: "bg-violet-950/80 text-violet-400 border border-violet-800"
    },
    {
      step: "03",
      name: "DETERMINISTIC POLICY",
      desc: "Pre-execution guardrail check & prompt injection defense",
      icon: Lock,
      isPolicy: true,
      color: "cyan",
      badge: "Guardrail",
      border: "border-cyan-500/40",
      iconClass: "bg-cyan-950/80 text-cyan-400 border border-cyan-800"
    },
    {
      step: "04",
      name: "SCOPED TOOL / API",
      desc: "Whitelisted connectors with least-privilege token access",
      icon: Layers,
      color: "teal",
      badge: "Sandbox",
      border: "border-slate-800",
      iconClass: "bg-teal-950/80 text-teal-400 border border-teal-800"
    },
    {
      step: "05",
      name: "HUMAN APPROVAL GATE",
      desc: "Mandatory manager sign-off on sensitive / high-impact actions",
      icon: ShieldCheck,
      isGate: true,
      color: "amber",
      badge: "Control Gate",
      border: "border-amber-500/80 ring-2 ring-amber-500/30 glow-amber",
      iconClass: "bg-amber-500 text-slate-950 font-bold"
    },
    {
      step: "06",
      name: "CONTROLLED ACTION",
      desc: "Atomic mutation, email dispatch, or DB commit",
      icon: Zap,
      color: "emerald",
      badge: "Execution",
      border: "border-slate-800",
      iconClass: "bg-emerald-950/80 text-emerald-400 border border-emerald-800"
    },
    {
      step: "07",
      name: "IMMUTABLE AUDIT LOG",
      desc: "Cryptographically verifiable chronological event telemetry",
      icon: Activity,
      color: "blue",
      badge: "Compliance",
      border: "border-slate-800",
      iconClass: "bg-blue-950/80 text-blue-400 border border-blue-800"
    }
  ];

  const governanceFeatures = [
    {
      title: "Role-Based Access Control",
      desc: "Granular access policies restricting agent visibility and execution permissions strictly by authenticated role and department.",
      iconColor: "text-cyan-400"
    },
    {
      title: "Human Approval Gates",
      desc: "Configurable sign-off thresholds requiring explicit managerial confirmation before high-stakes mutations or outward dispatches.",
      iconColor: "text-amber-400"
    },
    {
      title: "Tool & API Whitelisting",
      desc: "Strict deterministic execution whitelisting defining precisely which endpoints, parameters, and tables an agent may touch.",
      iconColor: "text-teal-400"
    },
    {
      title: "Continuous Telemetry",
      desc: "Real-time observability tracking request latencies, token consumption, execution paths, and error frequencies.",
      iconColor: "text-blue-400"
    },
    {
      title: "Deterministic Evaluation",
      desc: "Automated regression benchmarking against predefined accuracy, factual grounding, and latency standards.",
      iconColor: "text-violet-400"
    },
    {
      title: "Cryptographic Audit Trails",
      desc: "Immutable chronological logging recording every user prompt, agent thought trace, API call, and operator approval.",
      iconColor: "text-teal-400"
    },
    {
      title: "Partitioned Knowledge Isolation",
      desc: "Zero data leakage between business units via strictly partitioned vector indexes and scoped document namespaces.",
      iconColor: "text-cyan-400"
    },
    {
      title: "Deterministic Exception Fallbacks",
      desc: "Graceful escalation to human operators whenever ambiguity, system timeouts, or guardrail breaches occur.",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07111F] text-white border-b border-[#1E3553] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[300px] bg-teal-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B2A] border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>ENTERPRISE GOVERNANCE & CONTROL SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            AI That Can Act — With Deterministic Control.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Autonomy where safe. Human control where essential. PhoenixInsights builds cryptographic guardrails and explicit managerial approval gates into every agent interaction.
          </p>
        </div>

        {/* Visual Pipeline: USER -> AGENT -> POLICY -> TOOL -> HUMAN APPROVAL -> ACTION -> AUDIT */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-8 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#1E3553]">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400">
                Deterministic Execution Pipeline
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Every Action Flows Through Verified Verification Gates
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-800/60 px-3 py-1 rounded-full">
              Zero Unmonitored Autonomous Side-Effects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {architectureNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex flex-col justify-between text-left transition-all ${
                    node.isGate
                      ? 'bg-amber-950/40 border-amber-500/80 ring-1 ring-amber-500/30 shadow-lg'
                      : node.isPolicy
                      ? 'bg-[#07111F] border-cyan-500/40'
                      : 'bg-[#07111F] border-[#1E3553]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${node.iconClass}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${
                        node.isGate ? 'text-amber-400' : 'text-slate-500'
                      }`}>
                        {node.step}
                      </span>
                    </div>

                    <span className={`text-[9px] font-mono uppercase tracking-wider block mb-1 ${
                      node.isGate ? 'text-amber-400 font-bold' : 'text-slate-400'
                    }`}>
                      {node.badge}
                    </span>

                    <h4 className={`text-xs font-bold leading-tight mb-1 ${
                      node.isGate ? 'text-amber-200 font-extrabold' : 'text-white'
                    }`}>
                      {node.name}
                    </h4>

                    <p className="text-[11px] text-slate-300 leading-snug">
                      {node.desc}
                    </p>
                  </div>

                  {idx < architectureNodes.length - 1 && (
                    <div className="mt-3 pt-2 border-t border-[#1E3553] text-[10px] text-teal-400 font-mono font-bold hidden lg:block text-right">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 8 Governance Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {governanceFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D1B2A] border border-[#1E3553] text-left flex flex-col justify-between hover:border-teal-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className={`w-4 h-4 ${feat.iconColor} shrink-0`} />
                  <h4 className="text-xs font-bold text-white tracking-wide">
                    {feat.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left max-w-xl">
            <h4 className="text-base font-bold text-white">
              Enterprise Risk, Security & Compliance Alignment
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Every workflow POC is engineered around your enterprise SOC2 boundaries, data residency constraints, and IT approval protocols.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/governance')}
            icon={ArrowRight}
            className="shrink-0 w-full sm:w-auto justify-center text-xs font-bold"
          >
            Explore Governance Architecture
          </Button>
        </div>

      </div>
    </section>
  );
}

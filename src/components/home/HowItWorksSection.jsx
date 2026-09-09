import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import {
  Compass,
  GitBranch,
  LayoutTemplate,
  Cpu,
  ShieldCheck,
  Rocket,
  Activity,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  FileText,
  Lock,
  Zap,
  ChevronRight
} from 'lucide-react';

export function HowItWorksSection() {
  const { navigate } = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      name: "Discover",
      phase: "Analysis",
      desc: "Understand the process, pain point, and business objective.",
      icon: Compass,
      color: "cyan",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      activeBg: "bg-cyan-500",
      detail: "Identify operational bottlenecks, specify measurable target KPIs, and evaluate existing systems and tool availability.",
      deliverables: ["Process Friction Audit", "Baseline KPI Scorecard", "Technical Feasibility Assessment"],
      governance: "Confidentiality & non-disclosure boundaries established.",
      input: "Stakeholder interviews & workflow observation",
      output: "Documented POC project charter"
    },
    {
      num: "02",
      name: "Map",
      phase: "Architecture",
      desc: "Map data, systems, decisions, people, and dependencies.",
      icon: GitBranch,
      color: "blue",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      activeBg: "bg-blue-500",
      detail: "Formulate input/output schemas, API connection points, exception paths, and explicit human sign-off thresholds.",
      deliverables: ["Data Flow Topology", "System API Catalog", "Exception Escalation Matrix"],
      governance: "Read-only access provisioning with least-privilege scoping.",
      input: "Schema definitions, API specs, and SOPs",
      output: "Comprehensive workflow state graph"
    },
    {
      num: "03",
      name: "Design",
      phase: "Governance",
      desc: "Design the AI/data architecture and governance model.",
      icon: LayoutTemplate,
      color: "violet",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
      activeBg: "bg-violet-500",
      detail: "Specify agent reasoning bounds, RAG context partitions, tool permission whitelists, and deterministic fallback procedures.",
      deliverables: ["Agent Role Definitions", "Vector Partition Schema", "Approval Gate Thresholds"],
      governance: "Human-in-the-loop policies formally documented.",
      input: "Compliance rules and team permission levels",
      output: "Governed technical specification blueprint"
    },
    {
      num: "04",
      name: "Build",
      phase: "Engineering",
      desc: "Build the required models, agents, workflows, and integrations.",
      icon: Cpu,
      color: "teal",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      activeBg: "bg-teal-500",
      detail: "Engineer specialized agent chains, connect authenticated APIs, and construct automated verification test suites.",
      deliverables: ["Agent Workflow Codebase", "OAuth/API Connectors", "Regression Test Suites"],
      governance: "Deterministic sandbox testing in non-production environment.",
      input: "Technical blueprint and synthetic test data",
      output: "Functional POC execution prototype"
    },
    {
      num: "05",
      name: "Validate",
      phase: "Quality Gate",
      desc: "Test performance, reliability, data quality, and business outcomes.",
      icon: ShieldCheck,
      color: "amber",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      activeBg: "bg-amber-500",
      detail: "Benchmark prototype outputs against baseline accuracy metrics to guarantee zero hallucination and enforce safety guardrails.",
      deliverables: ["Accuracy & Latency Benchmark", "Edge-Case Resilience Report", "Operator Usability Review"],
      governance: "Mandatory client stakeholder review and acceptance.",
      input: "Historical workflow samples & edge cases",
      output: "Production readiness sign-off certificate"
    },
    {
      num: "06",
      name: "Deploy",
      phase: "Release",
      desc: "Move the validated workflow into the operating environment.",
      icon: Rocket,
      color: "teal",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      activeBg: "bg-teal-500",
      detail: "Execute a controlled, phased rollout with operator training, automated fallbacks, and instant rollback capability.",
      deliverables: ["Phased Rollout Schedule", "Operator Runbooks & SOPs", "Rollback Protocol"],
      governance: "Zero-downtime deployment with live operator supervision.",
      input: "Validated agent release artifacts",
      output: "Live operating agent workforce workflow"
    },
    {
      num: "07",
      name: "Monitor",
      phase: "Telemetry",
      desc: "Track quality, failures, usage, and business signals.",
      icon: Activity,
      color: "blue",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      activeBg: "bg-blue-500",
      detail: "Real-time telemetry measuring request latency, token consumption, exception frequencies, and operator confirmation rates.",
      deliverables: ["Telemetry Dashboard", "Automated Exception Alerts", "Weekly Performance Logs"],
      governance: "Immutable audit logging of every agent action and approval.",
      input: "Live production event stream",
      output: "Continuous operational health metrics"
    },
    {
      num: "08",
      name: "Improve",
      phase: "Optimization",
      desc: "Continuously improve the workflow based on evidence.",
      icon: RefreshCw,
      color: "violet",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
      activeBg: "bg-violet-500",
      detail: "Incorporate operational feedback, optimize model prompts, eliminate remaining edge cases, and adapt to schema updates.",
      deliverables: ["Prompt Optimization Log", "Model Performance Diff", "Expansion Feasibility Brief"],
      governance: "Governed version control for all system modifications.",
      input: "Operator feedback and telemetry outliers",
      output: "Refined, enterprise-hardened AI workflow"
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="STRUCTURED METHODOLOGY"
          badgeVariant="purple"
          title="From Business Problem to Governed Production"
          subtitle="A disciplined 8-stage methodology taking an operational challenge from root analysis into a reliable, human-governed production workflow."
          align="center"
          className="mb-14"
        />

        {/* Continuous Process Ribbon & Timeline */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-8">
          
          {/* Top Continuous Progress Track (Desktop) */}
          <div className="hidden lg:block relative mb-12">
            {/* Connecting Track Line behind nodes */}
            <div className="absolute top-6 left-8 right-8 h-1 bg-slate-200 -z-0" />
            
            <div className="grid grid-cols-8 gap-2 relative z-10">
              {steps.map((s, idx) => {
                const isSelected = activeStep === idx;
                const Icon = s.icon;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                  >
                    {/* Circular Node */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 mb-2 ${
                        isSelected
                          ? `${s.activeBg} text-white shadow-lg ring-4 ring-teal-500/20 scale-105`
                          : 'bg-white border-2 border-slate-300 text-slate-600 hover:border-slate-400 group-hover:scale-102'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Step Number & Name */}
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isSelected ? 'text-[#07111F]' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                      {s.num}
                    </span>
                    <span className={`text-xs font-bold transition-colors ${
                      isSelected ? 'text-[#07111F]' : 'text-slate-700 group-hover:text-slate-900'
                    }`}>
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile / Tablet Step Selector Pills */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin">
            {steps.map((s, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold font-mono whitespace-nowrap shrink-0 border transition-all ${
                    isSelected
                      ? 'bg-[#07111F] text-white border-[#07111F] shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {s.num} {s.name}
                </button>
              );
            })}
          </div>

          {/* Expanded Step Focal Showcase */}
          <div className="bg-[#07111F] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${current.activeBg} text-white shadow-md`}>
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
                      STAGE {current.num} OF 08
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {current.phase}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {current.name}: {current.desc}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-mono transition-colors"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-mono transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Stage Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
              {/* Detailed Execution */}
              <div className="bg-[#0D1B2A] p-5 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Execution Scope
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {current.detail}
                </p>
                
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="text-[10px] font-mono text-teal-400 uppercase mb-1.5 font-bold">Key Deliverables</div>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {current.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Data & System Handshake */}
              <div className="bg-[#0D1B2A] p-5 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Inputs & Artifacts
                </span>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 text-[11px] block">Primary Inputs:</span>
                    <span className="text-slate-200 font-medium">{current.input}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Stage Output:</span>
                    <span className="text-teal-300 font-medium font-mono">{current.output}</span>
                  </div>
                </div>
              </div>

              {/* Enterprise Governance Checkpoint */}
              <div className="bg-[#0D1B2A] p-5 rounded-xl border border-amber-500/40">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-2">
                  Governance Checkpoint
                </span>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  {current.governance}
                </p>
                <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/60 text-[11px] text-amber-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Verified before advancing to the next stage.</span>
                </div>
              </div>
            </div>

            {/* Bottom Step Progression Banner */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-left">
                Ready to evaluate your workflow for <strong className="text-white">Step 01: Discover</strong>?
              </div>

              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/poc')}
                icon={ArrowRight}
                className="shrink-0 w-full sm:w-auto justify-center text-xs font-bold"
              >
                Start an Architecture POC
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

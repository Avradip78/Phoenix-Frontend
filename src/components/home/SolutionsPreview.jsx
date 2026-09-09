import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import {
  BrainCircuit,
  Cpu,
  Sparkles,
  LineChart,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  FileText,
  Lock,
  Zap,
  Server
} from 'lucide-react';

export function SolutionsPreview() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] text-slate-800 border-b border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="PREMIUM SOLUTIONS"
          badgeVariant="purple"
          title="AI & Data Solutions Built Around Business Outcomes"
          subtitle="We combine data engineering, machine learning, and multi-agent systems into tailored operational architectures."
          align="center"
          className="mb-16"
        />

        {/* ASYMMETRIC STORYTELLING 1: DATA & DECISION INTELLIGENCE */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Visual Pipeline */}
            <div className="lg:col-span-6 bg-[#07111F] text-white rounded-xl p-6 border border-slate-800 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase text-teal-400">
                  SYSTEM ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono text-slate-400">Data → Decision</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#0D1B2A] border border-slate-800">
                  <Database className="w-4 h-4 text-blue-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Enterprise Data Ingestion</span>
                    <span className="text-[10px] text-slate-400">PostgreSQL, Lakehouses, ERP streams</span>
                  </div>
                </div>

                <div className="flex justify-center text-slate-600 text-xs font-bold">↓</div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#0D1B2A] border border-slate-800">
                  <LineChart className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Statistical & ML Inference</span>
                    <span className="text-[10px] text-slate-400">Supervised algorithms & anomaly scoring</span>
                  </div>
                </div>

                <div className="flex justify-center text-slate-600 text-xs font-bold">↓</div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#14253B] border border-teal-500/50 glow-teal">
                  <BrainCircuit className="w-4 h-4 text-teal-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Decision Scoring Matrix</span>
                    <span className="text-[10px] text-teal-300">Policy thresholds & recommendations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Capabilities */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-mono font-bold">
                <span>01</span>
                <span>CORE INTELLIGENCE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Data & Decision Intelligence
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect enterprise data streams to analytical models and decision frameworks that guide high-impact business choices with verified telemetry.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Decision trees and multi-parameter contextual scoring engines</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Unified operational and financial telemetry integration</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Deterministic validation checkpoints before downstream action</span>
                </div>
              </div>

              <div className="pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/data-decision-intelligence')}
                  icon={ArrowRight}
                  className="bg-white text-xs font-bold"
                >
                  Explore Decision Intelligence
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* ASYMMETRIC STORYTELLING 2: AI AGENT WORKFLOWS */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Narrative & Capabilities */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-violet-50 text-violet-700 text-xs font-mono font-bold">
                <span>02</span>
                <span>AGENTIC WORKFORCES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                AI Agent Workflows
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Autonomous and semi-autonomous multi-agent architectures that execute complex multi-step processes across enterprise software tools.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <span>Dynamic tool calling and API orchestration across SaaS platforms</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <span>Configurable escalation and mandatory human approval gates</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                  <span>Deterministic fallback mechanisms and persistent state management</span>
                </div>
              </div>

              <div className="pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/ai-workforce')}
                  icon={ArrowRight}
                  className="bg-white text-xs font-bold"
                >
                  Explore AI Workforces
                </Button>
              </div>
            </div>

            {/* Right: Visual Architecture */}
            <div className="lg:col-span-6 bg-[#07111F] text-white rounded-xl p-6 border border-slate-800 shadow-md order-1 lg:order-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase text-violet-400">
                  EXECUTION PIPELINE
                </span>
                <span className="text-[10px] font-mono text-slate-400">Trigger → Action</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-lg bg-[#0D1B2A] border border-slate-800 text-center">
                  <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-white block">Event Trigger</span>
                  <span className="text-[9px] text-slate-400">Webhook / CRM</span>
                </div>
                <div className="p-3 rounded-lg bg-[#14253B] border border-violet-500/50 text-center glow-violet">
                  <Cpu className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-white block">Agent Planner</span>
                  <span className="text-[9px] text-violet-300">Task Routing</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0D1B2A] border border-slate-800 text-center">
                  <Server className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-white block">API Execution</span>
                  <span className="text-[9px] text-slate-400">Tool Binding</span>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-lg bg-[#1E251E] border border-amber-500/50 flex items-center justify-between text-left glow-amber">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] text-amber-200 font-semibold">Human Approval Checkpoint</span>
                </div>
                <span className="text-[9px] font-mono uppercase bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                  GATED
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ASYMMETRIC STORYTELLING 3: GENERATIVE AI & RAG */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-12 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Visual RAG Pipeline */}
            <div className="lg:col-span-6 bg-[#07111F] text-white rounded-xl p-6 border border-slate-800 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase text-cyan-400">
                  RAG BLUEPRINT
                </span>
                <span className="text-[10px] font-mono text-slate-400">Grounded Synthesis</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-lg bg-[#0D1B2A] border border-slate-800">
                  <FileText className="w-3.5 h-3.5 text-blue-400 mb-1" />
                  <span className="text-[11px] font-bold text-white block">Company Docs</span>
                  <span className="text-[9px] text-slate-400">SOPs, Wikis, Specs</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0D1B2A] border border-slate-800">
                  <Database className="w-3.5 h-3.5 text-cyan-400 mb-1" />
                  <span className="text-[11px] font-bold text-white block">Vector Database</span>
                  <span className="text-[9px] text-slate-400">Hybrid Search</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0D1B2A] border border-slate-800">
                  <BrainCircuit className="w-3.5 h-3.5 text-violet-400 mb-1" />
                  <span className="text-[11px] font-bold text-white block">Isolated Context</span>
                  <span className="text-[9px] text-slate-400">Zero Leakage</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#14253B] border border-teal-500/50 glow-teal">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400 mb-1" />
                  <span className="text-[11px] font-bold text-white block">Factual Delivery</span>
                  <span className="text-[9px] text-teal-300">Strict Attribution</span>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Capabilities */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-50 text-cyan-700 text-xs font-mono font-bold">
                <span>03</span>
                <span>ENTERPRISE GENAI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Generative AI & Grounded RAG
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Grounded retrieval-augmented generation pipelines that synthesize private business knowledge without hallucination or confidential data leakage.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Vector search over internal documents, PDFs, and transactional DBs</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Strict context window isolation and departmental role permissions</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>Structured output formatting for automated downstream system updates</span>
                </div>
              </div>

              <div className="pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/solutions')}
                  icon={ArrowRight}
                  className="bg-white text-xs font-bold"
                >
                  Explore RAG Architectures
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* 3 COMPLEMENTARY SERVICES TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200/90 text-left flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <LineChart className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400">04 · PREDICTIVE</span>
              <h4 className="text-base font-bold text-slate-900 mb-1 mt-0.5">
                AI / ML Solutions
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Supervised models, classification engines, and anomaly scoring tailored to domain-specific business telemetry.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-blue-600 hover:text-slate-900 cursor-pointer inline-flex items-center gap-1" onClick={() => navigate('/solutions')}>
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200/90 text-left flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-9 h-9 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400">05 · TIME-SERIES</span>
              <h4 className="text-base font-bold text-slate-900 mb-1 mt-0.5">
                Predictive Analytics & Forecasting
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Multi-horizon forecasting, churn modeling, and credit risk quantification to anticipate operational shifts.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-cyan-600 hover:text-slate-900 cursor-pointer inline-flex items-center gap-1" onClick={() => navigate('/solutions')}>
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200/90 text-left flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400">06 · CONTROL</span>
              <h4 className="text-base font-bold text-slate-900 mb-1 mt-0.5">
                AI Governance & Observability
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Granular tool permissions, immutable audit trails, prompt-injection defense, and live token observability.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-amber-600 hover:text-slate-900 cursor-pointer inline-flex items-center gap-1" onClick={() => navigate('/governance')}>
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

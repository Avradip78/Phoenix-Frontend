import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  Cpu,
  BrainCircuit,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Database,
  FileText,
  Layers,
  Search,
  Activity,
  GitBranch,
  CheckCircle2,
  Lock,
  AlertTriangle
} from 'lucide-react';

export function VisualServiceArchitectures() {
  const { navigate } = useRouter();

  const agentWorkflowNodes = [
    {
      step: "01",
      name: "TRIGGER",
      desc: "Event, Webhook, Schedule or User Intent",
      icon: Zap,
      accent: "teal",
      tag: "Event Ingestion",
      iconClass: "bg-teal-50 text-teal-600 border border-teal-200"
    },
    {
      step: "02",
      name: "AI AGENT",
      desc: "Specialized Task Execution Planner",
      icon: Cpu,
      accent: "violet",
      tag: "Reasoning Loop",
      iconClass: "bg-violet-50 text-violet-600 border border-violet-200"
    },
    {
      step: "03",
      name: "KNOWLEDGE",
      desc: "Context Vector Store & Corporate SOPs",
      icon: Database,
      accent: "blue",
      tag: "Grounding",
      iconClass: "bg-blue-50 text-blue-600 border border-blue-200"
    },
    {
      step: "04",
      name: "TOOL / API",
      desc: "Enterprise Connectors & SaaS Endpoints",
      icon: Layers,
      accent: "cyan",
      tag: "Execution Whitelist",
      iconClass: "bg-cyan-50 text-cyan-600 border border-cyan-200"
    },
    {
      step: "05",
      name: "DECISION",
      desc: "Threshold Scoring & Business Rules",
      icon: GitBranch,
      accent: "teal",
      tag: "Evaluation",
      iconClass: "bg-teal-50 text-teal-600 border border-teal-200"
    },
    {
      step: "06",
      name: "HUMAN APPROVAL",
      desc: "Managerial Confirmation Gate",
      icon: ShieldCheck,
      isGate: true,
      accent: "amber",
      tag: "Critical Gate",
      iconClass: "bg-amber-100 text-amber-700 border border-amber-300 ring-2 ring-amber-400/20"
    },
    {
      step: "07",
      name: "SYSTEM UPDATE",
      desc: "Atomic Database & CRM Mutation",
      icon: Activity,
      accent: "teal",
      tag: "Audit Logged",
      iconClass: "bg-emerald-50 text-emerald-600 border border-emerald-200"
    }
  ];

  const dataIntelligenceNodes = [
    {
      step: "01",
      name: "DATA LAKE / DB",
      desc: "Raw transactional data, event logs, customer records",
      icon: Database,
      tag: "Source Layer",
      iconClass: "bg-blue-50 text-blue-600 border border-blue-200"
    },
    {
      step: "02",
      name: "ANALYTICS ENGINE",
      desc: "Descriptive aggregation, trend detection & KPI rollups",
      icon: Activity,
      tag: "Metrics",
      iconClass: "bg-cyan-50 text-cyan-600 border border-cyan-200"
    },
    {
      step: "03",
      name: "MACHINE LEARNING",
      desc: "Predictive models, churn probabilities, anomaly scoring",
      icon: BrainCircuit,
      tag: "Inference",
      iconClass: "bg-violet-50 text-violet-600 border border-violet-200"
    },
    {
      step: "04",
      name: "OPERATIONAL INSIGHT",
      desc: "Ranked opportunities, risk flags & priority alerts",
      icon: Sparkles,
      tag: "Synthesized",
      iconClass: "bg-teal-50 text-teal-600 border border-teal-200"
    },
    {
      step: "05",
      name: "GOVERNED ACTION",
      desc: "Automated alert dispatch or strategic human review",
      icon: ShieldCheck,
      tag: "Outcome",
      iconClass: "bg-amber-50 text-amber-700 border border-amber-300"
    }
  ];

  const ragNodes = [
    {
      step: "01",
      name: "ENTERPRISE CORPUS",
      desc: "Private PDFs, Notion, Confluence, ERP & DB docs",
      icon: FileText,
      iconClass: "bg-blue-50 text-blue-600 border border-blue-200"
    },
    {
      step: "02",
      name: "HYBRID RETRIEVAL",
      desc: "Dense semantic vector search + exact BM25 keyword matching",
      icon: Search,
      iconClass: "bg-cyan-50 text-cyan-600 border border-cyan-200"
    },
    {
      step: "03",
      name: "CONTEXT ASSEMBLY",
      desc: "Dynamic prompt window construction with citation metadata",
      icon: Layers,
      iconClass: "bg-violet-50 text-violet-600 border border-violet-200"
    },
    {
      step: "04",
      name: "FOUNDATION LLM",
      desc: "Grounded reasoning and structured synthesis",
      icon: BrainCircuit,
      iconClass: "bg-violet-50 text-violet-600 border border-violet-200"
    },
    {
      step: "05",
      name: "SOURCE-ATTRIBUTED OUTPUT",
      desc: "Verifiable, cited response with zero hallucination guarantee",
      icon: ShieldCheck,
      iconClass: "bg-teal-50 text-teal-600 border border-teal-200"
    },
    {
      step: "06",
      name: "WORKFLOW DISPATCH",
      desc: "Deliver response, trigger CRM draft, or update ticket",
      icon: Zap,
      iconClass: "bg-teal-50 text-teal-600 border border-teal-200"
    }
  ];

  return (
    <div className="w-full">
      {/* 1. AI AGENT WORKFLOWS */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  Operational Architecture · POC-Ready
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#07111F] tracking-tight">
                AI Agent Workflows with Control Gates
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Connect autonomous reasoning with enterprise data, authenticated APIs, and human approval checkpoints. Every critical decision is audited and verifiable.
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/ai-workforce')}
              icon={ArrowRight}
              className="shrink-0 border-teal-500/40 text-teal-700 hover:bg-teal-50"
            >
              Explore Agent Workflows
            </Button>
          </div>

          {/* Connected Flow Diagram */}
          <div className="bg-[#F5F7FA] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
              {agentWorkflowNodes.map((node, idx) => {
                const Icon = node.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border flex flex-col justify-between text-left transition-all ${
                      node.isGate
                        ? 'bg-amber-50/90 border-amber-400 ring-2 ring-amber-400/20 shadow-xs'
                        : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${node.iconClass}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-[10px] font-mono font-bold ${
                          node.isGate ? 'text-amber-700 font-extrabold' : 'text-slate-400'
                        }`}>
                          {node.step}
                        </span>
                      </div>

                      <div className="mb-1">
                        <span className={`text-[9px] font-mono uppercase tracking-wider font-semibold block ${
                          node.isGate ? 'text-amber-700' : 'text-slate-400'
                        }`}>
                          {node.tag}
                        </span>
                        <h4 className={`text-xs font-bold leading-tight ${
                          node.isGate ? 'text-amber-950 font-extrabold' : 'text-[#07111F]'
                        }`}>
                          {node.name}
                        </h4>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-snug">
                        {node.desc}
                      </p>
                    </div>

                    {idx < agentWorkflowNodes.length - 1 && (
                      <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-teal-600 font-mono font-bold hidden lg:block text-right">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DATA & DECISION INTELLIGENCE */}
      <section className="py-20 md:py-24 bg-[#F5F7FA] border-b border-slate-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Data Science Core
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#07111F] tracking-tight">
                Data & Decision Intelligence Pipeline
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Connect raw enterprise data to structured machine learning pipelines and decision frameworks that turn metrics into concrete operational actions.
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/data-decision-intelligence')}
              icon={ArrowRight}
              className="shrink-0 bg-white border-blue-500/40 text-blue-700 hover:bg-blue-50"
            >
              Explore Decision Intelligence
            </Button>
          </div>

          {/* Connected Flow Diagram */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {dataIntelligenceNodes.map((node, idx) => {
                const Icon = node.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#F5F7FA] border border-slate-200 text-left flex flex-col justify-between hover:border-blue-300 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${node.iconClass}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          STAGE {node.step}
                        </span>
                      </div>

                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                        {node.tag}
                      </span>
                      <h4 className="text-xs font-bold text-[#07111F] mb-1.5 leading-tight">
                        {node.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-snug">
                        {node.desc}
                      </p>
                    </div>

                    {idx < dataIntelligenceNodes.length - 1 && (
                      <div className="mt-4 pt-2 border-t border-slate-200 text-xs text-blue-600 font-mono font-bold hidden lg:block text-right">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GENERATIVE AI & RAG */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-2 py-0.5 rounded border border-violet-200">
                  Grounded LLM Systems
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#07111F] tracking-tight">
                Generative AI & Enterprise RAG
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Ground language models directly in your company’s internal documentation, SOPs, and relational databases for verifiable, citation-backed responses.
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/solutions')}
              icon={ArrowRight}
              className="shrink-0 border-violet-500/40 text-violet-700 hover:bg-violet-50"
            >
              Explore Solutions
            </Button>
          </div>

          {/* Connected Flow Diagram */}
          <div className="bg-[#F5F7FA] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
              {ragNodes.map((node, idx) => {
                const Icon = node.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 text-left flex flex-col justify-between hover:border-violet-300 transition-colors shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${node.iconClass}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-[#07111F] mb-1.5 leading-tight">
                        {node.name}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {node.desc}
                      </p>
                    </div>

                    {idx < ragNodes.length - 1 && (
                      <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-violet-600 font-mono font-bold hidden lg:block text-right">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

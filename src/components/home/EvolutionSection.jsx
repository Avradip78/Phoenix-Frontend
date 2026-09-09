import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import {
  Database,
  Layers,
  LineChart,
  BrainCircuit,
  Sparkles,
  GitBranch,
  Cpu,
  Server,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';

export function EvolutionSection() {
  const { navigate } = useRouter();

  const dataSources = [
    { name: "Databases", sub: "PostgreSQL, Snowflake", icon: Database },
    { name: "Enterprise APIs", sub: "REST, GraphQL, Webhooks", icon: Server },
    { name: "Documents", sub: "PDFs, Notion, SOPs", icon: FileText },
    { name: "Business Systems", sub: "ERP, CRM, ATS, HRMS", icon: Layers },
    { name: "Operational Data", sub: "Logs & Real-Time Events", icon: LineChart }
  ];

  const pipelineStages = [
    {
      num: "01",
      name: "DATA SOURCES",
      desc: "Structured & unstructured enterprise feeds",
      accent: "border-blue-300 text-blue-700 bg-blue-50/50",
      icon: Database
    },
    {
      num: "02",
      name: "DATA ENGINEERING",
      desc: "Schema modeling, ETL/ELT pipelines",
      accent: "border-blue-300 text-blue-700 bg-blue-50/50",
      icon: Layers
    },
    {
      num: "03",
      name: "ANALYTICS",
      desc: "Descriptive insights & aggregation",
      accent: "border-cyan-300 text-cyan-700 bg-cyan-50/50",
      icon: LineChart
    },
    {
      num: "04",
      name: "ML",
      desc: "Probabilistic forecasting & scoring",
      accent: "border-cyan-300 text-cyan-700 bg-cyan-50/50",
      icon: BrainCircuit
    },
    {
      num: "05",
      name: "GENERATIVE AI",
      desc: "Grounded LLM context synthesis",
      accent: "border-violet-300 text-violet-700 bg-violet-50/50",
      icon: Sparkles
    },
    {
      num: "06",
      name: "DECISION INTELLIGENCE",
      desc: "Rules, threshold gates & scoring",
      accent: "border-amber-400 text-amber-800 bg-amber-50",
      icon: GitBranch
    },
    {
      num: "07",
      name: "AI AGENTS",
      desc: "Specialized task execution plans",
      accent: "border-violet-300 text-violet-700 bg-violet-50/50",
      icon: Cpu
    },
    {
      num: "08",
      name: "BUSINESS SYSTEMS",
      desc: "API tool bindings & state mutation",
      accent: "border-blue-300 text-blue-700 bg-blue-50/50",
      icon: Server
    },
    {
      num: "09",
      name: "ACTION",
      desc: "Governed, measurable outcome",
      accent: "border-teal-400 text-teal-800 bg-teal-50",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="WHAT PHOENIXINSIGHTS DOES"
          badgeVariant="purple"
          title="From Data to Decisions to Intelligent Action"
          subtitle="Most businesses already have data, dashboards, and enterprise software. The challenge is connecting that intelligence to actual business decisions and workflow execution."
          align="center"
          className="mb-14"
        />

        {/* 1. Input Sources Overview */}
        <div className="bg-[#F5F7FA] rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 text-left">
          <div className="mb-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
              ENTERPRISE INPUT ENVIRONMENT
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Connecting to Your Existing Systems & Data Assets
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {dataSources.map((source, idx) => {
              const Icon = source.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-left flex flex-col justify-between shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {source.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {source.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. The Complete Data-to-Action Architectural Pipeline */}
        <div className="bg-[#07111F] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

          <div className="relative z-10 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-teal-400 block">
                  CONTINUOUS DATA PIPELINE
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  The End-to-End Operational Intelligence Stream
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Data → Intelligence → Decision → Action
              </span>
            </div>

            {/* Responsive Pipeline Flow Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2.5">
              {pipelineStages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#0D1B2A] border border-slate-800 flex flex-col justify-between text-left hover:border-teal-400 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-700">
                          <Icon className="w-3.5 h-3.5 text-teal-400" />
                        </div>
                        <span className="text-[9px] font-mono font-bold text-slate-500">
                          {stage.num}
                        </span>
                      </div>
                      <h4 className="text-[11px] font-bold text-white leading-tight mb-1">
                        {stage.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-snug">
                        {stage.desc}
                      </p>
                    </div>

                    {idx < pipelineStages.length - 1 && (
                      <div className="mt-2 pt-1 border-t border-slate-800 text-[10px] text-teal-400 font-mono font-bold hidden lg:block text-right">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Bottom Value Callout */}
        <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Deterministic Execution Without Hallucination
              </h4>
              <p className="text-xs text-slate-600">
                Every stage includes input validation, policy checks, and explicit manager confirmation points.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/how-it-works')}
            icon={ArrowRight}
            className="shrink-0 w-full sm:w-auto justify-center text-xs font-bold bg-white"
          >
            Explore How It Works
          </Button>
        </div>

      </div>
    </section>
  );
}

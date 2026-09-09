import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { EXISTING_CAPABILITIES } from '../data/mockData';
import {
  Database,
  BrainCircuit,
  LineChart,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  TrendingUp,
  Activity,
  Server
} from 'lucide-react';

export function DataDecisionIntelligencePage() {
  const { navigate } = useRouter();

  const pipelineStages = [
    { name: "Raw Data", sub: "Enterprise Sources & Events", desc: "Ingestion from transactional databases, cloud storage, APIs, and streaming brokers.", color: "text-blue-300 bg-blue-500/10 border-blue-500/30" },
    { name: "Data Engineering", sub: "Clean Pipelines & ETL", desc: "Automated dbt transformation, schema validation, and warehouse modeling.", color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30" },
    { name: "Analytics & BI", sub: "Descriptive Insights", desc: "Interactive executive KPI tracking, cohort metrics, and historical baselines.", color: "text-blue-300 bg-blue-500/10 border-blue-500/30" },
    { name: "Machine Learning", sub: "Predictive Models", desc: "Supervised and unsupervised models for churn, risk scoring, and forecasting.", color: "text-violet-300 bg-violet-500/10 border-violet-500/30" },
    { name: "Generative AI", sub: "Contextual Synthesis", desc: "Retrieval-augmented LLMs, semantic extraction, and structured JSON parsing.", color: "text-violet-300 bg-violet-500/10 border-violet-500/30" },
    { name: "Decision Intelligence", sub: "Action Logic & Optimization", desc: "Rule engines, optimization algorithms, and counterfactual simulation.", color: "text-teal-300 bg-teal-500/10 border-teal-500/30" },
    { name: "AI Agents", sub: "Task Orchestration", desc: "Multi-agent coordination graphs executing multi-step business workflows.", color: "text-teal-300 bg-teal-500/10 border-teal-500/30" },
    { name: "Governed Action", sub: "Controlled System Execution", desc: "API mutations across CRM, ERP, and HRMS with immutable audit logs.", color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30" },
  ];

  const categories = Array.from(new Set(EXISTING_CAPABILITIES.map(c => c.category)));

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-[#CBD5E1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <BrainCircuit className="w-3.5 h-3.5 text-teal-400" />
            <span>INTELLIGENCE FOUNDATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            From Data → Decisions → Governed Action.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            PhoenixInsights connects data engineering, predictive machine learning, generative AI, and intelligent agents to help organizations move from raw data toward controlled operational execution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/poc')}
              icon={ArrowRight}
              className="shadow-md glow-teal"
            >
              Discuss a Data & AI POC
            </Button>
            <Button
              variant="outline"
              size="md"
              className="bg-[#0D1B2A] border-[#1E3553] text-white hover:bg-[#112236]"
              onClick={() => navigate('/ai-workforce')}
            >
              Explore AI Workforce Architecture
            </Button>
          </div>
        </div>

        {/* 8-Stage Intelligence Pipeline */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-8 shadow-xl mb-16 text-left">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 font-mono">
              Closed-Loop Operational Architecture
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              The 8 Stages from Data to Business Action
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#07111F] border border-[#1E3553] flex flex-col justify-between hover:border-teal-500/40 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${stage.color}`}>
                      STAGE 0{idx + 1}
                    </span>
                    {idx < pipelineStages.length - 1 && (
                      <span className="text-slate-600 font-bold hidden lg:inline">→</span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white mb-0.5">
                    {stage.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-2 font-mono">
                    {stage.sub}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities by Category */}
        <div className="space-y-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-white">
              Enterprise Data Science & AI Capabilities
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              These statistical, machine learning, and data engineering competencies provide the analytical accuracy behind every agentic decision.
            </p>
          </div>

          {categories.map((category) => {
            const caps = EXISTING_CAPABILITIES.filter(c => c.category === category);
            return (
              <div key={category} className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 md:p-8 shadow-xl text-left">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1E3553]">
                  <div className="w-8 h-8 rounded-lg bg-[#07111F] border border-[#1E3553] text-teal-400 flex items-center justify-center font-bold text-xs">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category} ({caps.length})
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {caps.map((cap, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553] hover:border-teal-500/40 transition-colors shadow-lg"
                    >
                      <h4 className="text-sm font-bold text-white mb-1.5">
                        {cap.name}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#0D1B2A] text-white rounded-2xl p-8 md:p-10 border border-[#1E3553] text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">
            Connect Intelligence Directly to Your Business Operations
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Explore how PhoenixInsights can ground your operational workflows in rigorous machine learning and decision intelligence.
          </p>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shadow-lg glow-teal"
          >
            Start a POC Discussion
          </Button>
        </div>
      </div>
    </div>
  );
}

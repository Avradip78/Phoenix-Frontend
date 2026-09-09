import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { WORKFORCE_SOLUTIONS } from '../../data/mockData';
import {
  Megaphone,
  ShieldAlert,
  Server,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export function MarketingWorkforcePage() {
  const { navigate } = useRouter();
  const data = WORKFORCE_SOLUTIONS.find(s => s.id === 'marketing') || WORKFORCE_SOLUTIONS[2];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-slate-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/solutions')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Solutions Hub</span>
        </button>

        <div className="max-w-4xl mb-12 text-left">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="teal" size="md">
              Marketing & Content AI
            </Badge>
            <Badge variant="concept" size="sm">
              AI Workforce Concept
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            {data.shortDesc}
          </p>
        </div>

        {/* Operational Bottleneck vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          <div className="p-6 rounded-xl bg-[#0D1B2A] border border-rose-900/50 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-2 font-mono">
              Marketing Bottleneck
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">
              {data.problem}
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#0D1B2A] border border-teal-500/40 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-2 font-mono">
              AI Workforce Architecture
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">
              7 specialized marketing agents conduct deep competitive research, adapt core narratives across SEO/GEO and social formats, and synchronize distribution with brand director editorial review.
            </p>
          </div>
        </div>

        {/* Human Approval Gates */}
        <div className="bg-[#18211A] border-2 border-amber-500/70 rounded-2xl p-6 md:p-8 mb-12 shadow-2xl text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
                Brand & Editorial Governance
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                Mandatory Editorial & Budget Sign-Off
              </h3>
              <p className="text-sm text-amber-200/90 leading-relaxed mb-4">
                To prevent hallucinations and protect company reputation, all public-facing content and spending triggers require human verification:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.humanApprovalGates.map((gate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#0D1B2A] p-3 rounded-lg border border-amber-500/40 text-xs font-semibold text-amber-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{gate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 10-Stage Workflow */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-8 shadow-2xl mb-12 text-left">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono block mb-1">
              Campaign Execution Sequence
            </span>
            <h3 className="text-2xl font-bold text-white">
              10-Stage Marketing & SEO/GEO Pipeline
            </h3>
          </div>

          <div className="space-y-3">
            {data.workflow.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#07111F] border border-[#1E3553] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-teal-950/80 text-teal-300 border border-teal-500/40 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {step}
                  </span>
                </div>
                {idx < data.workflow.length - 1 && (
                  <span className="text-xs font-mono text-teal-400 font-bold hidden sm:inline">
                    Step {idx + 1} →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 7 Specialized Agents */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-8 shadow-2xl mb-12 text-left">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono block mb-1">
              Marketing Agent Fleet
            </span>
            <h3 className="text-2xl font-bold text-white">
              7 Specialized Marketing & Content Agents
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.agents.map((agent, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-white">
                      {agent.name}
                    </h4>
                    <span className="text-[10px] font-mono text-teal-300 bg-teal-950/80 border border-teal-500/40 px-2 py-0.5 rounded font-semibold">
                      Agent #{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {agent.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-6 bg-[#0D1B2A] p-6 rounded-2xl border border-[#1E3553] shadow-xl">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2 font-mono">
              <Server className="w-4 h-4 text-teal-400" />
              Supported Marketing & CMS Connectors
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.integrations.map((integ, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-[#07111F] text-xs font-medium text-teal-300 border border-[#1E3553]">
                  {integ}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0D1B2A] text-white p-6 rounded-2xl border border-[#1E3553] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Explore a Marketing AI POC
              </h4>
              <p className="text-xs text-slate-300">
                Validate automated research and multi-format content pipelines.
              </p>
            </div>
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/poc')}
              icon={ArrowRight}
              className="shrink-0 font-bold shadow-md shadow-teal-500/20"
            >
              Start Marketing POC
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

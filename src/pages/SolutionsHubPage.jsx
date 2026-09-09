import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { WORKFORCE_SOLUTIONS } from '../data/mockData';
import {
  Users,
  TrendingUp,
  Megaphone,
  CreditCard,
  Headphones,
  Sliders,
  Database,
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  Sparkles
} from 'lucide-react';

export function SolutionsHubPage() {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');

  const icons = {
    hr: Users,
    sales: TrendingUp,
    marketing: Megaphone,
    finance: CreditCard,
    support: Headphones,
    operations: Sliders,
    'data-intelligence': Database,
  };

  const filteredSolutions = activeFilter === 'all'
    ? WORKFORCE_SOLUTIONS
    : WORKFORCE_SOLUTIONS.filter(s => s.id === activeFilter);

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-slate-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hub Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>AI WORKFORCE SOLUTIONS HUB</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            AI Workforces Built Around Your Business.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Specialized agent architectures tailored to core enterprise functions—bridging data intelligence with governed operational execution.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-teal-500 text-[#07111F] shadow-lg shadow-teal-500/20 font-extrabold'
                : 'bg-[#0D1B2A] text-slate-300 hover:bg-[#111827] hover:text-white border border-[#1E3553]'
            }`}
          >
            All Workforces ({WORKFORCE_SOLUTIONS.length})
          </button>
          {WORKFORCE_SOLUTIONS.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setActiveFilter(sol.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === sol.id
                  ? 'bg-teal-500 text-[#07111F] shadow-lg shadow-teal-500/20 font-extrabold'
                  : 'bg-[#0D1B2A] text-slate-300 hover:bg-[#111827] hover:text-white border border-[#1E3553]'
              }`}
            >
              {sol.department}
            </button>
          ))}
        </div>

        {/* Solutions Comprehensive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSolutions.map((solution) => {
            const Icon = icons[solution.id] || Users;
            return (
              <div
                key={solution.id}
                className="p-6 md:p-8 bg-[#0D1B2A] border border-[#1E3553] rounded-2xl hover:border-teal-400/60 flex flex-col justify-between shadow-xl group text-left transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#111827] text-teal-400 border border-[#1E3553] flex items-center justify-center font-bold group-hover:bg-teal-500 group-hover:text-[#07111F] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-[#07111F] px-2 py-0.5 rounded border border-[#1E3553]">
                      {solution.conceptLabel}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-1 font-mono">
                    {solution.department}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-teal-300 transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {solution.shortDesc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Coordinated Agents:</span>
                      <span className="font-bold text-white">{solution.agents.length} Specialized Agents</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Human Approval Points:</span>
                      <span className="font-bold text-amber-300">{solution.humanApprovalGates.length} Critical Gates</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Workflow Stages:</span>
                      <span className="font-bold text-teal-300 font-mono">{solution.workflow.length} Defined Steps</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center text-xs font-bold shadow-md shadow-teal-500/20"
                    onClick={() => navigate(solution.id === 'data-intelligence' ? '/data-decision-intelligence' : `/solutions/${solution.id}`)}
                    icon={ArrowRight}
                  >
                    View Workflow & Agents
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#0D1B2A] text-white rounded-2xl p-8 md:p-10 border border-[#1E3553] text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">
            Need a Custom Workflow Architecture?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            We map bespoke operational processes and design tailored multi-agent systems with explicit human-in-the-loop controls.
          </p>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shadow-lg shadow-teal-500/20"
          >
            Start a Custom POC Discussion
          </Button>
        </div>
      </div>
    </div>
  );
}

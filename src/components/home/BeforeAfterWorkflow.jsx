import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  XCircle,
  CheckCircle2,
  FileSpreadsheet,
  Mail,
  Users,
  Clock,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  GitBranch,
  Layers,
  Sliders
} from 'lucide-react';

export function BeforeAfterWorkflow() {
  const { navigate } = useRouter();
  const [viewMode, setViewMode] = useState('side-by-side'); // 'side-by-side' | 'before' | 'after'

  const beforeAttributes = [
    { label: "Manual Work", desc: "High volumes of repetitive manual copying between email, portal downloads, and desktop files.", icon: Users },
    { label: "Emails & Slack Handoffs", desc: "Critical approvals and notifications lost in fragmented inboxes and chat threads.", icon: Mail },
    { label: "Spreadsheet Dependencies", desc: "Single points of failure managed in siloed Excel / Sheets with zero version control.", icon: FileSpreadsheet },
    { label: "Repetitive Data Entry", desc: "Same line-item data keyed manually into ERP, CRM, and accounting portals.", icon: Layers },
    { label: "Disconnected Systems", desc: "No programmatic sync between enterprise CRM, HRMS, and legacy billing engines.", icon: Sliders },
    { label: "Delayed Decisions", desc: "Days spent waiting for human review of routine items with no prioritization.", icon: Clock },
    { label: "Human Bottlenecks", desc: "Skilled operators burnt out on clerical tasks rather than strategic problem solving.", icon: XCircle }
  ];

  const afterAttributes = [
    { label: "Enterprise Business Data", desc: "Automated ingestion directly from transactional DBs, APIs, and document streams.", icon: Database },
    { label: "Intelligent Workflows", desc: "Stateful orchestration coordinating tasks, dependencies, and business rules.", icon: GitBranch },
    { label: "Specialized AI Assistance", desc: "Models extract data, draft responses, and score options within strict bounds.", icon: Cpu },
    { label: "Deterministic Validation", desc: "Automated schema matching, PO verification, and strict rule enforcement.", icon: CheckCircle2 },
    { label: "Explicit Human Approval", desc: "Mandatory managerial sign-off on sensitive operations, deviations, and spend.", icon: ShieldCheck },
    { label: "Governed Business Action", desc: "Atomic API mutations executed directly into ERP, CRM, or ATS systems.", icon: Zap },
    { label: "Verifiable Measurement", desc: "Cryptographic audit logging, cycle time tracking, and health telemetry.", icon: Activity }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07111F] border-b border-[#1E3553] text-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <span>OPERATIONAL WORKFLOW COMPARISON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Before and After PhoenixInsights
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
            Compare the operational reality of legacy manual processes against governed, data-grounded AI workflows.
          </p>

          {/* View Mode Toggle Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-[#0D1B2A] border border-[#1E3553] gap-1">
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'side-by-side' ? 'bg-teal-500 text-[#07111F] shadow-sm font-extrabold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              onClick={() => setViewMode('before')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'before' ? 'bg-rose-700 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              Legacy Process
            </button>
            <button
              onClick={() => setViewMode('after')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'after' ? 'bg-teal-700 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              Intelligent Workflow
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch text-left">
          
          {/* BEFORE CARD */}
          {(viewMode === 'side-by-side' || viewMode === 'before') && (
            <div className="bg-[#0D1B2A] rounded-2xl border-2 border-rose-900/60 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-rose-900/40 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-950/80 text-rose-400 border border-rose-800/60 flex items-center justify-center font-bold">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block">
                        Legacy Operating Baseline
                      </span>
                      <h3 className="text-xl font-extrabold text-white">
                        Fragmented Manual Work
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-300 bg-rose-950/80 border border-rose-800/80 px-2.5 py-1 rounded">
                    High Friction
                  </span>
                </div>

                <div className="space-y-3.5">
                  {beforeAttributes.map((attr, idx) => {
                    const Icon = attr.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#111827] border border-rose-950/60 flex items-start gap-3"
                      >
                        <Icon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-rose-200">
                            {attr.label}
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                            {attr.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-rose-900/40 text-[11px] font-mono text-rose-400">
                Outcome: Delayed execution, manual fatigue, and zero audit trail.
              </div>
            </div>
          )}

          {/* AFTER CARD */}
          {(viewMode === 'side-by-side' || viewMode === 'after') && (
            <div className="bg-[#0D1B2A] text-white rounded-2xl border-2 border-teal-500/60 p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-[#1E3553] mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold shadow-sm">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-teal-400 font-bold uppercase tracking-wider block">
                        PhoenixInsights Architecture
                      </span>
                      <h3 className="text-xl font-extrabold text-white">
                        Governed Intelligent Workflow
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-300 bg-teal-950/80 border border-teal-800 px-2.5 py-1 rounded">
                    Human Governed
                  </span>
                </div>

                <div className="space-y-3.5">
                  {afterAttributes.map((attr, idx) => {
                    const Icon = attr.icon;
                    const isGate = attr.label.includes("Human Approval");

                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                          isGate
                            ? 'bg-amber-950/70 border-amber-500/70 text-amber-200'
                            : 'bg-[#07111F] border-[#1E3553] text-slate-300'
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${isGate ? 'text-amber-400' : 'text-teal-400'}`} />
                        <div>
                          <h4 className={`text-xs font-bold ${isGate ? 'text-amber-200 font-extrabold' : 'text-white'}`}>
                            {attr.label}
                          </h4>
                          <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                            {attr.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1E3553] text-[11px] font-mono text-teal-400 relative z-10">
                Outcome: Low-latency turnaround, verified accuracy, and full human control.
              </div>
            </div>
          )}

        </div>

        {/* Action Prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#0D1B2A] rounded-xl border border-[#1E3553] text-left">
          <div>
            <h4 className="text-sm font-bold text-white">
              Ready to replace manual friction with an intelligent workflow?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Start with one bounded process. Prove deterministic outcomes before expanding.
            </p>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shrink-0 text-xs font-bold"
          >
            Show Us Your Workflow
          </Button>
        </div>

      </div>
    </section>
  );
}

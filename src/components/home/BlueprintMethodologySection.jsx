import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  Compass,
  Search,
  LayoutTemplate,
  Cpu,
  Rocket,
  Activity,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Layers
} from 'lucide-react';

export function BlueprintMethodologySection() {
  const { navigate } = useRouter();
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      name: "DISCOVER",
      tagline: "Show us how the workflow works today.",
      icon: Compass,
      color: "cyan",
      desc: "We observe how data enters, how teams touch the process, where manual steps occur, and what systems are involved.",
      deliverable: "Process Intake & Workflow Map",
      clientTime: "1–2 hours stakeholder interview",
      example: "Walking through how an invoice is received by email, converted to PDF, manually checked against a spreadsheet PO, and keyed into ERP."
    },
    {
      num: "02",
      name: "DIAGNOSE",
      tagline: "Identify friction, delays, and bottlenecks.",
      icon: Search,
      color: "blue",
      desc: "We isolate precisely where time is lost, where errors are introduced, and where decisions are needlessly delayed.",
      deliverable: "Friction & Risk Scorecard",
      clientTime: "Zero disruption to live systems",
      example: "Pinpointing that 42% of invoice processing time is spent chasing manager Slack approvals for minor variances under $500."
    },
    {
      num: "03",
      name: "DESIGN",
      tagline: "Determine where AI, data, and humans belong.",
      icon: LayoutTemplate,
      color: "violet",
      desc: "We architect the optimal division of labor: autonomous processing where deterministic and safe, human approval where critical.",
      deliverable: "Architecture & Governance Blueprint",
      clientTime: "1 review session",
      example: "Designing an automated 3-way matching agent with mandatory human manager sign-off on any line item exceeding PO threshold."
    },
    {
      num: "04",
      name: "DEMONSTRATE",
      tagline: "Build a focused, working POC.",
      icon: Cpu,
      color: "teal",
      desc: "We build a functional prototype operating on representative sample data to validate accuracy, safety, and business utility.",
      deliverable: "Interactive Working POC",
      clientTime: "Hands-on team testing",
      example: "Demonstrating the prototype reading 50 historical vendor invoices and correctly flagging 3 unapproved surcharge exceptions."
    },
    {
      num: "05",
      name: "DEPLOY",
      tagline: "Connect to live business systems.",
      icon: Rocket,
      color: "teal",
      desc: "We integrate the validated workflow with your existing ERP, CRM, databases, and communication tools via authenticated APIs.",
      deliverable: "Production Integration & Operator Runbooks",
      clientTime: "Controlled staged rollout",
      example: "Connecting authenticated webhook listeners to NetSuite AP ledger and configuring employee notification channels."
    },
    {
      num: "06",
      name: "MEASURE",
      tagline: "Define and monitor meaningful business metrics.",
      icon: Activity,
      color: "blue",
      desc: "We establish continuous telemetry measuring real-world cycle times, accuracy rates, exception frequencies, and operator feedback.",
      deliverable: "Live Telemetry & Audit Dashboard",
      clientTime: "Weekly review digest",
      example: "Tracking that invoice cycle latency dropped from 4 business days to 3.4 seconds with zero unauthorized line items posted."
    },
    {
      num: "07",
      name: "EXPAND",
      tagline: "Scale successful workflows across operations.",
      icon: TrendingUp,
      color: "emerald",
      desc: "Once one workflow demonstrates proven ROI and high team trust, we replicate the architecture across adjacent business processes.",
      deliverable: "Multi-Workflow Expansion Roadmap",
      clientTime: "Incremental roadmap review",
      example: "Extending verified AP invoice matching into procurement requisition approvals and vendor contract compliance monitoring."
    }
  ];

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 md:py-28 bg-[#07111F] border-b border-[#1E3553] text-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-teal-400" />
            <span>THE DELIVERY METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            PhoenixInsights Workflow Intelligence Blueprint™
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A disciplined 7-stage engineering framework taking an operational bottleneck from initial discovery into a governed production workflow.
          </p>
        </div>

        {/* Interactive 7-Stage Horizontal Stepper Ribbon */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-8 shadow-2xl mb-8">
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
            {stages.map((st, idx) => {
              const isSelected = activeStage === idx;
              const Icon = st.icon;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-500 text-[#07111F] border-teal-400 shadow-lg shadow-teal-500/20 ring-2 ring-teal-400/40'
                      : 'bg-[#07111F] text-slate-300 border-[#1E3553] hover:border-teal-500/50 hover:bg-[#111827]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold ${
                      isSelected ? 'text-[#07111F]' : 'text-slate-400'
                    }`}>
                      {st.num}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#07111F]' : 'text-slate-400'}`} />
                  </div>

                  <span className={`text-xs font-bold ${isSelected ? 'text-[#07111F]' : 'text-white'}`}>
                    {st.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Focal Stage Inspection Card */}
          <div className="bg-[#07111F] text-white rounded-2xl border border-[#1E3553] p-6 sm:p-8 shadow-xl text-left">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#1E3553] mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-md shrink-0">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
                      STAGE {current.num}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Phase: {current.name}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {current.name} — {current.tagline}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-mono transition-colors"
                >
                  ← Prev Stage
                </button>
                <button
                  onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-mono transition-colors"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="bg-[#0D1B2A] p-5 rounded-xl border border-[#1E3553]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold block mb-1.5">
                  Phase Objective
                </span>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {current.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-[#1E3553]">
                  <span className="text-slate-400 text-[11px] block">Client Commitment:</span>
                  <span className="text-white font-bold">{current.clientTime}</span>
                </div>
              </div>

              <div className="bg-[#0D1B2A] p-5 rounded-xl border border-[#1E3553]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold block mb-1.5">
                  Stage Deliverable
                </span>
                <p className="text-white font-bold text-sm mb-2">
                  {current.deliverable}
                </p>
                <div className="p-2.5 rounded-lg bg-[#07111F] border border-[#1E3553] text-[11px] text-slate-300">
                  Deterministic technical artifact signed off by both teams.
                </div>
              </div>

              <div className="bg-[#0D1B2A] p-5 rounded-xl border border-[#1E3553]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1.5">
                  Realistic Business Example
                </span>
                <p className="text-slate-200 leading-relaxed text-xs">
                  "{current.example}"
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1E3553] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Ready to begin with <strong>Stage 01: Discover</strong>?
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/poc')}
                icon={ArrowRight}
                className="text-xs font-bold"
              >
                Show Us Your Workflow
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

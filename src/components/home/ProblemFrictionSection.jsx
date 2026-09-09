import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  AlertTriangle,
  ArrowRight,
  Clock,
  FileSpreadsheet,
  Mail,
  Users,
  Database,
  ShieldCheck,
  Zap,
  TrendingDown,
  CheckCircle2,
  XCircle,
  CreditCard,
  TrendingUp,
  Headphones,
  Sliders,
  BrainCircuit
} from 'lucide-react';

export function ProblemFrictionSection() {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState('finance');

  const domainProblems = [
    {
      id: "finance",
      name: "Finance",
      icon: CreditCard,
      title: "Invoice Verification & AP Reconciliation",
      fragment: [
        { icon: Mail, label: "Vendor Invoices via Email", status: "unstructured" },
        { icon: FileSpreadsheet, label: "Manual Entry into Excel", status: "friction" },
        { icon: Users, label: "Chasing Slack Approvals", status: "delay" },
        { icon: FileSpreadsheet, label: "Reconciliation Spreadsheet", status: "friction" },
        { icon: TrendingDown, label: "Delayed Ledger Closing", status: "loss" }
      ],
      transition: {
        inputs: "PDF Invoices, ERP POs, Banking Feeds",
        intelligence: "Document OCR + 3-Way PO Matching Model",
        humanGate: "Manager signs off on $390 unapproved surcharge",
        action: "Direct NetSuite ERP ledger posting & automated scheduled disbursement"
      }
    },
    {
      id: "sales",
      name: "Sales",
      icon: TrendingUp,
      title: "Inbound Lead Qualification & Follow-Up",
      fragment: [
        { icon: Mail, label: "Raw Form Submissions", status: "unstructured" },
        { icon: Users, label: "Rep Googling LinkedIn & Funding", status: "friction" },
        { icon: FileSpreadsheet, label: "Pasting Data into CRM", status: "delay" },
        { icon: Clock, label: "Generic Cold Template Drafted", status: "friction" },
        { icon: TrendingDown, label: "Delayed 48h Response / Lost Deal", status: "loss" }
      ],
      transition: {
        inputs: "Inbound form, email domain, company registry",
        intelligence: "Automated firmographic enrichment & ICP scoring (95/100)",
        humanGate: "Account Executive reviews tailored research brief & draft",
        action: "Salesforce Opportunity updated and personalized outreach staged"
      }
    },
    {
      id: "hr",
      name: "HR & Talent",
      icon: Users,
      title: "Resume Screening & Interview Scheduling",
      fragment: [
        { icon: Mail, label: "200+ Resume PDFs in Portal", status: "unstructured" },
        { icon: Users, label: "Recruiter Skimming 30s Each", status: "friction" },
        { icon: Mail, label: "Back-and-Forth Calendar Emails", status: "delay" },
        { icon: FileSpreadsheet, label: "Manual ATS Status Updates", status: "friction" },
        { icon: TrendingDown, label: "Top Candidates Drop Off", status: "loss" }
      ],
      transition: {
        inputs: "Inbound resumes, job rubric, interview calendars",
        intelligence: "Skills taxonomy extraction & objective rubric scoring",
        humanGate: "Technical recruiter makes final decision to advance candidate",
        action: "Greenhouse stage updated, interview briefing packet generated"
      }
    },
    {
      id: "support",
      name: "Support",
      icon: Headphones,
      title: "Technical Inquiry & SLA Resolution",
      fragment: [
        { icon: Mail, label: "Incoming Technical Ticket", status: "unstructured" },
        { icon: Users, label: "Agent Searching Confluence Docs", status: "friction" },
        { icon: Users, label: "Asking Senior Eng on Slack", status: "delay" },
        { icon: Clock, label: "Ticket Stagnates in Queue", status: "friction" },
        { icon: TrendingDown, label: "SLA Miss & Frustrated Customer", status: "loss" }
      ],
      transition: {
        inputs: "Customer ticket, system error logs, private documentation",
        intelligence: "Hybrid RAG search across engineering SOPs & API specs",
        humanGate: "Support lead validates response and staged rate-limit override",
        action: "Grounded technical response delivered and Zendesk ticket resolved"
      }
    },
    {
      id: "operations",
      name: "Operations",
      icon: Sliders,
      title: "Throughput Bottlenecks & Anomaly Detection",
      fragment: [
        { icon: Database, label: "IoT Sensor Log Streams", status: "unstructured" },
        { icon: FileSpreadsheet, label: "Exporting CSV at Shift End", status: "friction" },
        { icon: Clock, label: "Manual Analysis 6 Hours Later", status: "delay" },
        { icon: Users, label: "Scrambling to Re-route Jams", status: "friction" },
        { icon: TrendingDown, label: "180 Deliveries Miss Carrier Cutoff", status: "loss" }
      ],
      transition: {
        inputs: "Real-time WMS telemetry, PLC conveyor sensor readings",
        intelligence: "Statistical anomaly detection & causal correlation",
        humanGate: "Shift supervisor authorizes queue diversion to Bay 14",
        action: "Dynamic PLC reroute command issued and floor crew notified"
      }
    },
    {
      id: "management",
      name: "Executive",
      icon: BrainCircuit,
      title: "Retention Diagnosis & Strategy Formulation",
      fragment: [
        { icon: Database, label: "Siloed Billing, CRM & Product DBs", status: "unstructured" },
        { icon: FileSpreadsheet, label: "Stitching 8 Spreadsheets Together", status: "friction" },
        { icon: Clock, label: "3 Weeks for Consultant Diagnosis", status: "delay" },
        { icon: Users, label: "Debating Opinions in Meetings", status: "friction" },
        { icon: TrendingDown, label: "$3.2M ARR Churn Accelerates", status: "loss" }
      ],
      transition: {
        inputs: "Stripe billing, Salesforce opps, Mixpanel usage, Zendesk tickets",
        intelligence: "Causal cohort modeling isolating API connector gating impact",
        humanGate: "CFO & CCO authorize revised standard packaging plan",
        action: "LaunchDarkly feature flag staged and CS outreach queue activated"
      }
    }
  ];

  const currentProblem = domainProblems.find((p) => p.id === activeTab) || domainProblems[0];

  return (
    <section className="py-20 md:py-28 bg-[#07111F] border-b border-[#1E3553] text-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>OPERATIONAL FRICTION ANALYSIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Where Is Your Business Losing Time, Money or Decision Quality?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Most businesses don't need another generic AI chatbot. They have high-value operational processes broken by manual spreadsheets, repetitive data copying, and delayed decisions.
          </p>
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {domainProblems.map((tab) => {
            const Icon = tab.icon;
            const isSelected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-500 text-[#07111F] shadow-lg shadow-teal-500/20 font-extrabold'
                    : 'bg-[#0D1B2A] text-slate-300 hover:bg-[#111827] hover:text-white border border-[#1E3553]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Workflow Transformation Comparison Container */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-10 shadow-2xl mb-10 text-left">
          
          <div className="pb-6 border-b border-[#1E3553] mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                Workflow Transformation Scenario
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentProblem.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-rose-300 bg-rose-950/60 border border-rose-500/40 px-3 py-1 rounded-full">
              Identified High-Friction Bottleneck
            </span>
          </div>

          {/* 1. Legacy Fragmented Process (Red/Slate visual stream) */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-4 h-4 text-rose-400" />
              <h4 className="text-xs font-mono uppercase font-bold text-rose-300 tracking-wider">
                How It Happens Today: The Fragmented Legacy Bottleneck
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {currentProblem.fragment.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#111827] border border-rose-900/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#07111F] border border-slate-700 text-slate-300 flex items-center justify-center">
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-rose-400 font-bold">
                          Step 0{idx + 1}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-white block leading-snug">
                        {step.label}
                      </span>
                    </div>

                    {idx < currentProblem.fragment.length - 1 && (
                      <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-500 font-bold text-right hidden lg:block">
                        → Delays
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transition Divider Graphic */}
          <div className="py-2 mb-10 flex items-center justify-center">
            <div className="h-0.5 bg-gradient-to-r from-rose-500/40 via-teal-400 to-emerald-400/60 w-full relative flex items-center justify-center">
              <span className="bg-[#07111F] text-teal-300 border border-teal-500/40 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-xl">
                Transformed by PhoenixInsights Intelligent Workflow ↓
              </span>
            </div>
          </div>

          {/* 2. Intelligent AI Workflow (Teal/Emerald connected stream) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <h4 className="text-xs font-mono uppercase font-bold text-teal-300 tracking-wider">
                How It Happens With PhoenixInsights: Governed AI Architecture
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-[#07111F] text-white border border-[#1E3553]">
                <span className="text-[10px] font-mono text-blue-400 uppercase font-bold block mb-1">
                  1. Unified Ingestion
                </span>
                <h5 className="text-sm font-bold text-white mb-2">Automated Data Capture</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentProblem.transition.inputs}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#07111F] text-white border border-[#1E3553]">
                <span className="text-[10px] font-mono text-teal-400 uppercase font-bold block mb-1">
                  2. AI Intelligence
                </span>
                <h5 className="text-sm font-bold text-white mb-2">Specialized Domain Reasoning</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentProblem.transition.intelligence}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#07111F] text-white border-2 border-amber-500/80">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block mb-1">
                  3. Mandatory Control Gate
                </span>
                <h5 className="text-sm font-bold text-white mb-2">Explicit Human Approval</h5>
                <p className="text-xs text-amber-200 leading-relaxed font-medium">
                  {currentProblem.transition.humanGate}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#07111F] text-white border border-[#1E3553]">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
                  4. Governed Action
                </span>
                <h5 className="text-sm font-bold text-white mb-2">Atomic System Execution</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentProblem.transition.action}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-1">
              Have a Similar Workflow Challenge?
            </span>
            <h4 className="text-lg font-bold text-white">
              Tell us how your process runs today. We'll map where intelligence creates measurable value.
            </h4>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shrink-0 w-full sm:w-auto justify-center text-xs font-bold"
          >
            Show Us Your Workflow
          </Button>
        </div>

      </div>
    </section>
  );
}

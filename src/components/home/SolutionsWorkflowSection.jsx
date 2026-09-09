import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  CreditCard,
  TrendingUp,
  Users,
  Headphones,
  Sliders,
  BrainCircuit,
  FileText,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Activity
} from 'lucide-react';

export function SolutionsWorkflowSection() {
  const { navigate } = useRouter();
  const [activeSolutionId, setActiveSolutionId] = useState('finance');

  const solutions = [
    {
      id: "finance",
      name: "Finance",
      fullName: "Finance Workflow Intelligence",
      icon: CreditCard,
      badge: "Accounts Payable & Reconciliation",
      problem: "Vendor invoices arriving via fragmented emails, manual entry into spreadsheets, delayed PO cross-checking, and slow monthly closes.",
      workflow: "Invoice Email Ingestion → OCR Extraction → 3-Way PO Matching → Surcharge Check",
      opportunity: "Autonomous matching of 90%+ standard invoices while routing variances for single-click manager review.",
      aiAssistance: "Multimodal extraction agent parses tables, currencies, and line items with strict zero-hallucination verification.",
      humanControl: "Finance controller retains mandatory sign-off on any line-item variance exceeding authorized PO ceiling.",
      businessAction: "Approved records posted atomically to NetSuite / SAP ledger with scheduled payment date."
    },
    {
      id: "sales",
      name: "Sales",
      fullName: "Sales Workflow Intelligence",
      icon: TrendingUp,
      badge: "Inbound Pipeline & Enrichment",
      problem: "High-value inbound leads sit unworked for 48 hours while reps manually google company headcount, tech stacks, and funding rounds.",
      workflow: "Lead Submission → Firmographic Enrichment → ICP Intent Scoring → CRM Opportunity Creation",
      opportunity: "Instantaneous enrichment and qualification delivering tailored meeting briefings to Account Executives.",
      aiAssistance: "Market research agent compiles executive pain points, tech stack compatibility, and personalized outreach drafts.",
      humanControl: "Account Executive reviews and authorizes the tailored outreach draft before email dispatch.",
      businessAction: "Salesforce Opportunity created with research brief and personalized cadence activated."
    },
    {
      id: "hr",
      name: "HR",
      fullName: "HR & Recruitment Intelligence",
      icon: Users,
      badge: "Screening & Coordination",
      problem: "Recruiting teams overwhelmed by hundreds of inbound resumes, leading to superficial 30-second skimming and candidate drop-off.",
      workflow: "Application Ingestion → Resume Deconstruction → Skills Scoring → Interview Coordination",
      opportunity: "Standardized, unbiased skills extraction against explicit job rubrics to surface top qualified talent.",
      aiAssistance: "Skills taxonomy agent maps candidate career narratives to required competencies with zero demographic bias.",
      humanControl: "Human technical recruiter holds sole authority to advance, interview, or archive any candidate.",
      businessAction: "Greenhouse / Lever stage updated and calendar slots staged for hiring manager interview."
    },
    {
      id: "support",
      name: "Support",
      fullName: "Customer Support Intelligence",
      icon: Headphones,
      badge: "Knowledge-Grounded Resolution",
      problem: "Tier-1 and Tier-2 support engineers spend hours searching disparate wikis and asking colleagues on Slack to resolve technical inquiries.",
      workflow: "Ticket Arrival → Intent Detection → Private RAG Retrieval → Grounded Draft Synthesis",
      opportunity: "Instant retrieval of exact technical documentation and configuration procedures with citations.",
      aiAssistance: "RAG agent searches private corporate vector stores, generating source-attributed resolution drafts.",
      humanControl: "Support lead validates draft accuracy and authorizes any account configuration or quota modification.",
      businessAction: "Grounded technical response delivered through Zendesk / Intercom and ticket resolved."
    },
    {
      id: "operations",
      name: "Operations",
      fullName: "Operations & Logistics Intelligence",
      icon: Sliders,
      badge: "SLA Exception Detection",
      problem: "Facility bottlenecks detected only after batches miss carrier cutoffs, causing expensive expedited shipping and SLA penalties.",
      workflow: "IoT Event Ingestion → Velocity Tracking → Anomaly Detection → Corrective Queue Routing",
      opportunity: "Predictive detection of throughput slowdowns 45 minutes before SLA breaches occur.",
      aiAssistance: "Time-series agent correlates sensor readings, identifies root causes, and simulates rerouting options.",
      humanControl: "Shift operations manager authorizes queue diversion to auxiliary conveyor lines.",
      businessAction: "PLC commands issued to diverters and maintenance crew notified via mobile terminal."
    },
    {
      id: "decision",
      name: "Decision",
      fullName: "Decision Intelligence Systems",
      icon: BrainCircuit,
      badge: "Executive Strategic Support",
      problem: "Leadership making multi-million dollar pricing and packaging decisions based on fragmented reports and subjective debate.",
      workflow: "Cross-System Lakehouse Ingestion → Cohort Modeling → Anomaly Diagnosis → Scenario Simulation",
      opportunity: "Unified causal attribution revealing exact operational drivers behind customer retention and revenue trends.",
      aiAssistance: "Optimization model runs 5,000 probabilistic scenario simulations to project ARR recovery outcomes.",
      humanControl: "CFO and executive committee retain 100% strategic decision authority on all commercial policies.",
      businessAction: "Implementation roadmap staged across billing systems, feature flags, and customer success."
    },
    {
      id: "document",
      name: "Document",
      fullName: "Document Intelligence",
      icon: FileText,
      badge: "Contracts, Policies & Unstructured PDFs",
      problem: "Critical contractual terms, SLA clauses, and compliance liabilities buried in thousands of static PDF documents.",
      workflow: "Document OCR Ingestion → Clause Extraction → Obligation Mapping → Compliance Auditing",
      opportunity: "Automated extraction of renewal dates, liability caps, payment terms, and regulatory commitments.",
      aiAssistance: "Document understanding agent extracts structured entity key-values and flags non-standard clauses.",
      humanControl: "Legal counsel reviews flagged liability exceptions before contract signing or amendment.",
      businessAction: "Extracted contract entities synced to CLM database with automated renewal alerts."
    },
    {
      id: "knowledge",
      name: "Knowledge",
      fullName: "Knowledge Intelligence",
      icon: BookOpen,
      badge: "Enterprise RAG & Private Wiki Search",
      problem: "Institutional company knowledge scattered across private Notion, Confluence, SharePoint, and Google Drive silos.",
      workflow: "Multi-Source Connector Sync → Vector Indexing → Hybrid Keyword/Semantic Search → Cited Answers",
      opportunity: "Single, secure source of truth delivering factual, source-attributed answers to internal teams.",
      aiAssistance: "Hybrid RAG engine synthesizes answers with strict page and paragraph citations from internal files.",
      humanControl: "Role-based access control restricts sensitive departmental documents strictly to authorized employees.",
      businessAction: "Instant, verified knowledge delivered directly into Slack, Teams, or enterprise search portal."
    }
  ];

  const activeSolution = solutions.find((s) => s.id === activeSolutionId) || solutions[0];
  const ActiveIcon = activeSolution.icon;

  return (
    <section className="py-20 md:py-28 bg-[#07111F] border-b border-[#1E3553] text-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <span>WORKFLOW INTELLIGENCE SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Solutions Built Around Real Business Workflows
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore how PhoenixInsights connects data, models, human approval, and business action across core operational functions.
          </p>
        </div>

        {/* Horizontal Solutions Selector */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {solutions.map((s) => {
            const Icon = s.icon;
            const isSelected = s.id === activeSolutionId;

            return (
              <button
                key={s.id}
                onClick={() => setActiveSolutionId(s.id)}
                className={`px-4 py-2.5 rounded-xl border flex items-center gap-2 text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-500 text-[#07111F] border-teal-400 font-extrabold shadow-lg shadow-teal-500/20'
                    : 'bg-[#0D1B2A] text-slate-300 border-[#1E3553] hover:border-teal-500/50 hover:bg-[#111827] hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#07111F]' : 'text-slate-400'}`} />
                <span>{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Deep Dive Showcase */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-10 shadow-2xl mb-10 text-left">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1E3553] mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-950/80 text-teal-400 border border-teal-500/40 flex items-center justify-center font-bold">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-teal-400 tracking-wider block">
                  {activeSolution.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeSolution.fullName}
                </h3>
              </div>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/poc')}
              icon={ArrowRight}
              className="text-xs font-bold shadow-md shadow-teal-500/20"
            >
              Discuss {activeSolution.name} Workflow
            </Button>
          </div>

          {/* 6-Part Architectural Anatomy */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. The Problem */}
            <div className="p-5 rounded-xl bg-[#07111F] border border-rose-900/40">
              <span className="text-[10px] font-mono text-rose-400 uppercase font-bold tracking-wider block mb-1">
                1. Operational Problem
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeSolution.problem}
              </p>
            </div>

            {/* 2. The Workflow */}
            <div className="p-5 rounded-xl bg-[#07111F] border border-blue-900/40">
              <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider block mb-1">
                2. Target Workflow Stream
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {activeSolution.workflow}
              </p>
            </div>

            {/* 3. Intelligence Opportunity */}
            <div className="p-5 rounded-xl bg-[#07111F] border border-teal-900/40">
              <span className="text-[10px] font-mono text-teal-400 uppercase font-bold tracking-wider block mb-1">
                3. Intelligence Opportunity
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeSolution.opportunity}
              </p>
            </div>

            {/* 4. AI Assistance */}
            <div className="p-5 rounded-xl bg-[#07111F] text-white border border-violet-900/40">
              <span className="text-[10px] font-mono text-violet-400 uppercase font-bold tracking-wider block mb-1">
                4. Specialized AI Assistance
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeSolution.aiAssistance}
              </p>
            </div>

            {/* 5. Human Control Gate */}
            <div className="p-5 rounded-xl bg-[#181E19] border-2 border-amber-500/70">
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider block mb-1">
                5. Mandatory Human Control
              </span>
              <p className="text-xs text-amber-200 font-medium leading-relaxed">
                {activeSolution.humanControl}
              </p>
            </div>

            {/* 6. Governed Business Action */}
            <div className="p-5 rounded-xl bg-[#07111F] border border-emerald-900/40">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider block mb-1">
                6. Governed Business Action
              </span>
              <p className="text-xs text-emerald-200 leading-relaxed">
                {activeSolution.businessAction}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

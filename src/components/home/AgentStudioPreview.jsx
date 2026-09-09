import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  Code,
  ShieldCheck,
  Database,
  Terminal,
  Cpu,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  Eye,
  Sliders,
  History,
  CheckCircle2
} from 'lucide-react';

export function AgentStudioPreview() {
  const { navigate } = useRouter();

  const sampleAgents = [
    {
      id: 'resume-agent',
      name: 'Resume Screening Agent',
      domain: 'HR & Recruitment',
      objective: 'Parse and objectively rank candidate resumes against specific job description criteria.',
      inputs: ['Raw PDF/DOCX Resumes', 'Job Description Taxonomy', 'Candidate Application Data'],
      knowledge: ['Internal Engineering Competency Matrix', 'Degree Equivalency Standards (RAG)'],
      tools: ['Document Parser API', 'Vector Semantic Matcher', 'ATS Candidate Record Writer'],
      permissions: ['Read-only on candidate archive', 'Write permission to ATS Candidate Screening Score field'],
      actions: ['Extract candidate experience', 'Score skill relevance [0-100]', 'Generate structured evaluation summary'],
      humanApproval: 'Mandatory approval required prior to issuing candidate rejection or moving to finalist interview queue.',
      outputs: ['Structured Candidate JSON Scorecard', 'Strengths/Gaps Analysis Summary'],
      memory: 'Session context preserved throughout active requisition cycle.',
      monitoring: 'Scoring distribution telemetry, token latency logs, parsing error tracking.',
      auditTrail: 'Full cryptographic hash of raw resume, prompt version, reasoning trace, and reviewer sign-off.'
    },
    {
      id: 'ap-agent',
      name: 'Accounts Payable Agent',
      domain: 'Finance & Accounts',
      objective: 'Perform 3-way matching between vendor PDF invoices, approved Purchase Orders, and warehouse intake slips.',
      inputs: ['Vendor PDF Invoices', 'ERP Purchase Orders', 'Receiving Slips'],
      knowledge: ['Corporate Procurement Policy', 'Approved Vendor Master List', 'Tax Exemption Rules'],
      tools: ['OCR Table Extraction', 'ERP General Ledger API', 'Banking Verification Endpoint'],
      permissions: ['Read ERP Purchase Orders', 'Draft Journal Voucher (No direct bank payout trigger)'],
      actions: ['Extract line-item costs', 'Cross-reference PO line numbers', 'Flag price variance > 2%'],
      humanApproval: 'Mandatory human controller sign-off for any variance > $500 or new vendor bank account details.',
      outputs: ['Validated Reconciliation Docket', 'Variance Exception Report'],
      memory: 'Persistent cross-period vendor history & recurring invoice template caching.',
      monitoring: 'Processing cycle time, OCR confidence score distribution, exception rate dashboard.',
      auditTrail: 'Complete ledger trace with invoice timestamp, field-level extraction diff, and controller approval ID.'
    },
    {
      id: 'lead-agent',
      name: 'Lead Intelligence Agent',
      domain: 'Sales & BD',
      objective: 'Enrich target account profiles and score intent signals against Ideal Customer Profile (ICP).',
      inputs: ['Company Domain', 'Inbound Form Submission', 'Public Technographic Signals'],
      knowledge: ['PhoenixInsights ICP Criteria', 'Product Feature Taxonomy', 'Competitor Differentiation Matrix'],
      tools: ['CRM Search API', 'Enrichment Data Provider', 'LLM Synthesis Pipeline'],
      permissions: ['Read & Write to CRM Lead Records', 'Create Sales Outreach Drafts'],
      actions: ['Query company tech stack', 'Verify business email format', 'Generate Account Intelligence Brief'],
      humanApproval: 'Sales Representative must approve customized outreach sequences for Tier-1 Enterprise accounts.',
      outputs: ['Enriched CRM Lead Profile', 'Executive Summary Memo', 'Personalized Email Draft'],
      memory: 'Account relationship tree and historical touchpoint logging.',
      monitoring: 'Enrichment accuracy rate, CRM sync latency, rep acceptance rate of draft messages.',
      auditTrail: 'Logged data sources, enrichment timestamp, prompt tokens, and sales rep modification delta.'
    }
  ];

  const [selectedAgent, setSelectedAgent] = useState(sampleAgents[0]);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeader
          badge="Product Concept"
          badgeVariant="concept"
          title="Design Agents Around the Way You Work."
          subtitle="Design agents around the way your business actually works with granular inputs, tool permissions, human checkpoints, and immutable audit trails."
          align="center"
          className="mb-14"
        />

        {/* Studio Interactive Card Container */}
        <div className="bg-[#0B1F3A] text-white rounded-2xl border border-navy-800 shadow-2xl overflow-hidden">
          {/* Studio Top Control Bar */}
          <div className="bg-[#071224] px-6 py-4 border-b border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-gray-400">
                agent-studio.config.json — PhoenixInsights Agent Studio
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="concept" size="sm">
                PRODUCT CONCEPT
              </Badge>
              <span className="text-xs font-mono text-purple-400">
                v1.0-spec
              </span>
            </div>
          </div>

          {/* Studio Layout: Left Agent Switcher, Right 11 Config Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-navy-800">
            {/* Left Column: Sample Agent Templates (4 cols) */}
            <div className="lg:col-span-4 p-6 bg-navy-950/60 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Select Agent Specification
              </div>
              {sampleAgents.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedAgent.id === agent.id
                      ? 'bg-navy-900 border-purple-500 shadow-md ring-1 ring-purple-500/30'
                      : 'bg-navy-900/40 border-navy-800 hover:border-navy-700 hover:bg-navy-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">
                      {agent.name}
                    </span>
                    <span className="text-[10px] text-purple-300 font-mono">
                      {agent.domain}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {agent.objective}
                  </p>
                </button>
              ))}

              <div className="pt-4 border-t border-navy-800">
                <Button
                  variant="outlineDark"
                  size="sm"
                  className="w-full justify-center text-xs"
                  onClick={() => navigate('/agent-studio')}
                  icon={ArrowRight}
                >
                  Open Full Agent Studio Page
                </Button>
              </div>
            </div>

            {/* Right Column: 11 Comprehensive Parameter Blocks (8 cols) */}
            <div className="lg:col-span-8 p-6 md:p-8 space-y-6 max-h-[600px] overflow-y-auto">
              {/* Header Details */}
              <div className="pb-4 border-b border-navy-800 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-purple-400">
                    Agent Blueprint Specification
                  </span>
                  <h4 className="text-2xl font-bold text-white">
                    {selectedAgent.name}
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">
                    {selectedAgent.objective}
                  </p>
                </div>
              </div>

              {/* 11 Configuration Parameters in Structured Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* 1. Objective */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    1. Objective
                  </div>
                  <p className="text-gray-200 leading-relaxed">{selectedAgent.objective}</p>
                </div>

                {/* 2. Inputs */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    2. Permitted Inputs
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-0.5">
                    {selectedAgent.inputs.map((inp, i) => <li key={i}>{inp}</li>)}
                  </ul>
                </div>

                {/* 3. Knowledge */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    3. Knowledge / RAG Base
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-0.5">
                    {selectedAgent.knowledge.map((k, i) => <li key={i}>{k}</li>)}
                  </ul>
                </div>

                {/* 4. Tools */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    4. Connected Tools & APIs
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-0.5">
                    {selectedAgent.tools.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>

                {/* 5. Permissions */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    5. RBAC & Boundaries
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-0.5">
                    {selectedAgent.permissions.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>

                {/* 6. Actions */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    6. Authorized Actions
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-0.5">
                    {selectedAgent.actions.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>

                {/* 7. Human Approval (Highlight) */}
                <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/40 md:col-span-2">
                  <div className="font-bold text-amber-400 uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    7. Mandatory Human Approval Checkpoint
                  </div>
                  <p className="text-amber-200 leading-relaxed font-medium">
                    {selectedAgent.humanApproval}
                  </p>
                </div>

                {/* 8. Outputs */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    8. Structured Outputs
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-0.5">
                    {selectedAgent.outputs.map((o, i) => <li key={i}>{o}</li>)}
                  </ul>
                </div>

                {/* 9. Memory */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    9. Context & State Memory
                  </div>
                  <p className="text-gray-300 leading-relaxed">{selectedAgent.memory}</p>
                </div>

                {/* 10. Monitoring */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    10. Telemetry & Observability
                  </div>
                  <p className="text-gray-300 leading-relaxed">{selectedAgent.monitoring}</p>
                </div>

                {/* 11. Audit Trail */}
                <div className="p-3.5 rounded-lg bg-navy-900/80 border border-navy-800">
                  <div className="font-bold text-purple-300 uppercase tracking-wider text-[10px] mb-1">
                    11. Immutable Audit Trail
                  </div>
                  <p className="text-gray-300 leading-relaxed">{selectedAgent.auditTrail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

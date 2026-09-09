import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
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
  CheckCircle2,
  FileCode,
  KeyRound,
  Activity
} from 'lucide-react';

export function AgentStudioPage() {
  const { navigate } = useRouter();

  const sampleAgents = [
    {
      id: 'resume-agent',
      name: 'Resume Screening Agent',
      domain: 'HR & Recruitment',
      objective: 'Parse and objectively score incoming candidate resumes against specific job requirements against structured skill criteria.',
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
    },
    {
      id: 'support-agent',
      name: 'Ticket Resolution Agent',
      domain: 'Customer Support',
      objective: 'Analyze incoming customer support tickets, perform authorized database lookups, and draft verified solutions.',
      inputs: ['Ticket Subject & Body', 'Customer Account ID', 'Attachment Logs'],
      knowledge: ['Knowledge Base Markdown Docs', 'Product Troubleshooting Guides', 'SLA Guidelines'],
      tools: ['Helpdesk API (Zendesk)', 'Internal DB Status Reader', 'Vector RAG Search'],
      permissions: ['Read-only on user profile', 'Draft internal ticket note (No direct external send without approval for VIPs)'],
      actions: ['Classify ticket urgency', 'Query system status logs', 'Draft context-rich reply template'],
      humanApproval: 'Human agent review required for all billing disputes, account cancellations, or SLA tier-1 accounts.',
      outputs: ['Draft Support Response', 'Internal Debugging Note', 'Relevant Knowledge Citations'],
      memory: 'Customer conversation history and previous ticket resolutions cached in session vector store.',
      monitoring: 'First-contact resolution probability score, retrieval latency, customer sentiment delta.',
      auditTrail: 'Full log of retrieved document IDs, LLM prompt tokens, and final agent edits before dispatch.'
    }
  ];

  const [selectedAgent, setSelectedAgent] = useState(sampleAgents[0]);
  const [activeTab, setActiveTab] = useState('parameters'); // 'parameters' | 'json'

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-[#CBD5E1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="concept" size="md" className="mb-4">
            Product Concept & Architecture
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            PhoenixInsights Agent Studio
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Design agents around the way your business actually works with granular inputs, tool permissions, human checkpoints, and immutable audit trails.
          </p>
        </div>

        {/* Studio Workspace Shell */}
        <div className="bg-[#0D1B2A] text-white rounded-2xl border border-[#1E3553] shadow-2xl overflow-hidden mb-16">
          {/* Top Studio Nav Bar */}
          <div className="bg-[#07111F] px-6 py-4 border-b border-[#1E3553] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-300 font-bold">
                PhoenixInsights Agent Studio Spec Interface
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex bg-[#0D1B2A] rounded-lg p-1 border border-[#1E3553]">
                <button
                  onClick={() => setActiveTab('parameters')}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'parameters' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Structured Schema
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'json' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Raw JSON Spec
                </button>
              </div>
              <Badge variant="concept" size="sm">
                PRODUCT CONCEPT
              </Badge>
            </div>
          </div>

          {/* Main Studio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1E3553]">
            {/* Agent Select List (4 cols) */}
            <div className="lg:col-span-4 p-6 bg-[#07111F]/60 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                Agent Configurations ({sampleAgents.length})
              </span>
              {sampleAgents.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedAgent.id === agent.id
                      ? 'bg-[#0D1B2A] border-teal-500/80 shadow-md ring-1 ring-teal-500/30'
                      : 'bg-[#0D1B2A]/40 border-[#1E3553] hover:border-slate-600 hover:bg-[#0D1B2A]/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">
                      {agent.name}
                    </span>
                    <span className="text-[10px] text-teal-400 font-mono">
                      {agent.domain}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {agent.objective}
                  </p>
                </button>
              ))}

              <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#1E3553] text-xs text-slate-400 leading-relaxed">
                <span className="text-white font-bold block mb-1">Architecture Specification Note:</span>
                This interactive interface reflects the schema contract used to configure specialized agent workforces.
              </div>
            </div>

            {/* Config View (8 cols) */}
            <div className="lg:col-span-8 p-6 md:p-8 space-y-6 max-h-[650px] overflow-y-auto">
              {activeTab === 'parameters' ? (
                <>
                  <div className="pb-4 border-b border-[#1E3553]">
                    <span className="text-xs font-mono text-teal-400 font-bold">
                      {selectedAgent.domain} • Schema Specification
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {selectedAgent.name}
                    </h3>
                  </div>

                  {/* 11 Configuration Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        1. Core Objective
                      </div>
                      <p className="text-slate-300 leading-relaxed">{selectedAgent.objective}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        2. Permitted Inputs
                      </div>
                      <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {selectedAgent.inputs.map((inp, i) => <li key={i}>{inp}</li>)}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        3. Knowledge & RAG Collections
                      </div>
                      <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {selectedAgent.knowledge.map((k, i) => <li key={i}>{k}</li>)}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        4. Connected Tools & APIs
                      </div>
                      <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {selectedAgent.tools.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        5. RBAC & Execution Permissions
                      </div>
                      <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {selectedAgent.permissions.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        6. Authorized Actions
                      </div>
                      <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {selectedAgent.actions.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </div>

                    {/* Human Approval Checkpoint (Span 2 cols) */}
                    <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/50 ring-1 ring-amber-500/30 md:col-span-2">
                      <div className="font-bold text-amber-400 uppercase tracking-wider text-[10px] mb-1.5 flex items-center gap-2 font-mono">
                        <ShieldCheck className="w-4 h-4" />
                        7. Mandatory Human Approval Checkpoint
                      </div>
                      <p className="text-amber-200 leading-relaxed font-medium">
                        {selectedAgent.humanApproval}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        8. Structured Outputs
                      </div>
                      <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {selectedAgent.outputs.map((o, i) => <li key={i}>{o}</li>)}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        9. Context & State Memory
                      </div>
                      <p className="text-slate-300 leading-relaxed">{selectedAgent.memory}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        10. Telemetry & Observability
                      </div>
                      <p className="text-slate-300 leading-relaxed">{selectedAgent.monitoring}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553]">
                      <div className="font-bold text-teal-300 uppercase tracking-wider text-[10px] mb-1 font-mono">
                        11. Immutable Audit Trail
                      </div>
                      <p className="text-slate-300 leading-relaxed">{selectedAgent.auditTrail}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-[#07111F] rounded-xl p-5 border border-[#1E3553] font-mono text-xs overflow-x-auto text-teal-300">
                  <pre>{JSON.stringify(selectedAgent, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="text-center max-w-3xl mx-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shadow-lg glow-teal"
          >
            Discuss Custom Agent Studio Architecture
          </Button>
        </div>
      </div>
    </div>
  );
}

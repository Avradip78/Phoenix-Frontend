import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import {
  Cpu,
  Layers,
  Database,
  Lock,
  Eye,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Users,
  Activity,
  History,
  GitBranch,
  Sparkles,
  TrendingUp,
  Megaphone,
  CreditCard,
  Headphones,
  Sliders,
  ChevronRight,
  Zap
} from 'lucide-react';

export function AiWorkforcePage() {
  const { navigate } = useRouter();
  const [selectedComponent, setSelectedComponent] = useState('01');
  const [hoveredDomain, setHoveredDomain] = useState('hr');

  // The 8 Core Architecture Components
  const architectureComponents = {
    '01': {
      id: '01',
      title: "AI Orchestrator",
      category: "Control Plane",
      accent: "teal",
      icon: Cpu,
      desc: "The central control plane that interprets multi-step workflow goals, delegates tasks to specialized agents, tracks execution state machines, and enforces system boundaries.",
      specs: ["State machine management", "Dependency graph resolution", "Dynamic fallback & retry policies"]
    },
    '02': {
      id: '02',
      title: "Specialized AI Agents",
      category: "Task Executors",
      accent: "violet",
      icon: Users,
      desc: "Role-specific agents engineered with targeted domain instructions (e.g., resume parsing, invoice verification, lead qualification) rather than one generic chatbot.",
      specs: ["Domain prompt constraints", "Role-based tool calling", "Autonomous task decomposition"]
    },
    '03': {
      id: '03',
      title: "Company Knowledge",
      category: "Context Layer",
      accent: "blue",
      icon: Layers,
      desc: "Vetted internal documentation, SOPs, corporate policies, and domain taxonomies indexed for high-precision retrieval without hallucinations.",
      specs: ["Private SOP embeddings", "Policy rulebooks", "Zero data exfiltration guardrails"]
    },
    '04': {
      id: '04',
      title: "Data / RAG / Memory",
      category: "Context & State",
      accent: "cyan",
      icon: Database,
      desc: "Vector databases, operational relational stores, and persistent workflow context ensuring agents maintain state across long-running tasks.",
      specs: ["Hybrid vector & keyword search", "Session state persistence", "Cross-turn conversational memory"]
    },
    '05': {
      id: '05',
      title: "Business Systems",
      category: "Tool Integrations",
      accent: "blue",
      icon: Server,
      desc: "Bidirectional API connectors linking agent actions directly to ATS, CRM, ERP, HRMS, email, and internal databases.",
      specs: ["Enterprise REST & Webhooks", "OAuth 2.0 credential isolation", "Atomic database transaction safety"]
    },
    '06': {
      id: '06',
      title: "Human Approval Gates",
      category: "Safety & Governance",
      accent: "amber",
      icon: ShieldCheck,
      desc: "Explicit pause points requiring manager sign-off before sensitive actions (e.g., payments, candidate rejections, public messages) are finalized.",
      specs: ["Configurable threshold halts", "Slack/Email interactive approvals", "Mandatory dual-key authorizations"]
    },
    '07': {
      id: '07',
      title: "Monitoring & Observability",
      category: "Telemetry",
      accent: "teal",
      icon: Activity,
      desc: "Real-time telemetry tracking token consumption, model confidence scores, error rates, and cycle-time velocity.",
      specs: ["Latency & token telemetry", "Drift and anomaly alerts", "Live pipeline throughput dashboards"]
    },
    '08': {
      id: '08',
      title: "Auditability & Logging",
      category: "Compliance",
      accent: "teal",
      icon: History,
      desc: "Cryptographically verifiable chronological logs capturing exact prompt versions, data inputs, agent reasoning traces, and user authorizations.",
      specs: ["Immutable chronological logs", "Full reasoning chain attribution", "Regulatory audit compliance readiness"]
    }
  };

  // Domain Workforces Data
  const domainNodes = [
    {
      id: "hr",
      name: "HR",
      fullName: "HR & Recruitment AI",
      icon: Users,
      accent: "violet",
      path: "/solutions/hr",
      capabilities: [
        "Candidate intelligence & parsing",
        "Multi-round recruitment workflow",
        "Interview coordination & calendar sync"
      ]
    },
    {
      id: "sales",
      name: "Sales",
      fullName: "Sales & BD AI",
      icon: TrendingUp,
      accent: "blue",
      path: "/solutions/sales",
      capabilities: [
        "Lead intelligence & tech stack enrichment",
        "ICP qualification & intent scoring",
        "Contextual follow-up workflows"
      ]
    },
    {
      id: "marketing",
      name: "Marketing",
      fullName: "Marketing & Content AI",
      icon: Megaphone,
      accent: "cyan",
      path: "/solutions/marketing",
      capabilities: [
        "Audience & competitor research",
        "Multi-channel content adaptation",
        "Campaign attribution intelligence"
      ]
    },
    {
      id: "finance",
      name: "Finance",
      fullName: "Finance & Accounts AI",
      icon: CreditCard,
      accent: "amber",
      path: "/solutions/finance",
      capabilities: [
        "Invoice document intelligence",
        "3-way reconciliation matching",
        "Financial anomaly detection"
      ]
    },
    {
      id: "support",
      name: "Support",
      fullName: "Customer Support AI",
      icon: Headphones,
      accent: "teal",
      path: "/solutions/support",
      capabilities: [
        "Knowledge retrieval from private SOPs",
        "Ticket triage & response drafting",
        "Escalation routing & SLA monitoring"
      ]
    },
    {
      id: "operations",
      name: "Operations",
      fullName: "Operations & Logistics AI",
      icon: Sliders,
      accent: "teal",
      path: "/solutions/operations",
      capabilities: [
        "Process telemetry & bottleneck detection",
        "Automated exception routing",
        "Operational decision support"
      ]
    }
  ];

  const activeComp = architectureComponents[selectedComponent] || architectureComponents['01'];
  const activeDomain = domainNodes.find(d => d.id === hoveredDomain) || domainNodes[0];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-white min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* PAGE HERO */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto mb-20 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>AI WORKFORCE OPERATING SYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.12]">
            PhoenixInsights AI Workforce
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Instead of automating a single task, PhoenixInsights designs coordinated AI agents that can execute defined business workflows across the systems an organization already uses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-sm px-8 py-4 bg-teal-500 hover:bg-teal-400 text-dark-950 font-bold shadow-lg glow-teal"
              onClick={() => navigate('/poc')}
              icon={ArrowRight}
            >
              Start a Workflow POC
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-sm px-8 py-4 bg-[#0D1B2A] border-slate-700 hover:border-slate-500 text-white"
              onClick={() => navigate('/solutions')}
            >
              View Domain Workforces
            </Button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 1. THE 8 CORE COMPONENTS: CENTRAL ARCHITECTURE VISUALIZATION */}
        {/* ============================================================ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 block mb-2">
              SYSTEM TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              The 8 Core Components of an AI Workforce
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              An integrated operating system architecture rather than disconnected tools. Click any component to inspect its role and dependencies.
            </p>
          </div>

          {/* Master Architecture Panel (Deep Slate) */}
          <div className="bg-[#0D1B2A] rounded-2xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

            {/* DESKTOP INTEGRATED SYSTEM ARCHITECTURE (Hidden on Mobile) */}
            <div className="hidden lg:block relative z-10 max-w-5xl mx-auto mb-10">
              
              {/* Top Layer: Company Knowledge */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setSelectedComponent('03')}
                  className={`w-80 p-4 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedComponent === '03'
                      ? 'bg-[#14253B] border-blue-400 shadow-lg glow-blue ring-2 ring-blue-400/30'
                      : 'bg-[#07111F]/90 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-mono font-bold uppercase text-blue-400 tracking-wider">03 CONTEXT</span>
                  </div>
                  <div className="text-sm font-bold text-white">Company Knowledge</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Vetted SOPs, Policies & Taxonomies</div>
                </button>
              </div>

              {/* Connecting Vector Down */}
              <div className="w-0.5 h-6 bg-blue-400/50 mx-auto -mt-3 mb-3" />

              {/* Core Orchestration Hub */}
              <div className="grid grid-cols-12 gap-6 items-center mb-6">
                
                {/* Left: Specialized Agents (02) */}
                <div className="col-span-4 flex justify-end">
                  <button
                    onClick={() => setSelectedComponent('02')}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedComponent === '02'
                        ? 'bg-[#14253B] border-violet-400 shadow-lg glow-violet ring-2 ring-violet-400/30'
                        : 'bg-[#07111F]/90 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-violet-400" />
                        <span className="text-[10px] font-mono font-bold uppercase text-violet-400 tracking-wider">02 AGENTS</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">Input</span>
                    </div>
                    <div className="text-sm font-bold text-white">Specialized AI Agents</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Role-specific autonomous planners</div>
                  </button>
                </div>

                {/* Arrow to Center */}
                <div className="col-span-1 flex justify-center text-violet-400 font-bold text-lg">
                  →
                </div>

                {/* CENTER: AI Orchestrator (01) */}
                <div className="col-span-7">
                  <button
                    onClick={() => setSelectedComponent('01')}
                    className={`w-full p-5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedComponent === '01'
                        ? 'bg-[#14253B] border-teal-400 shadow-2xl glow-teal ring-2 ring-teal-400/40'
                        : 'bg-[#07111F] border-teal-500/50 hover:border-teal-400'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1.5">
                      <Cpu className="w-5 h-5 text-teal-400 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold uppercase text-teal-300 tracking-widest">
                        01 CENTRAL CONTROL PLANE
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-white tracking-wide">
                      AI ORCHESTRATOR
                    </h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                      Interprets workflow goals, resolves dependency graphs, and governs state.
                    </p>
                  </button>
                </div>
              </div>

              {/* Branching Lines Down to Middle Tier */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-0.5 h-6 bg-teal-400/50" />
                <div className="w-[82%] h-0.5 bg-slate-600" />
                <div className="grid grid-cols-3 w-[82%]">
                  <div className="flex justify-center"><div className="w-0.5 h-6 bg-blue-400/50" /></div>
                  <div className="flex justify-center"><div className="w-0.5 h-6 bg-amber-400/70" /></div>
                  <div className="flex justify-center"><div className="w-0.5 h-6 bg-cyan-400/50" /></div>
                </div>
              </div>

              {/* Middle Tier: Business Systems (05) | Human Approval (06) | Data/RAG (04) */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                
                {/* 05 Business Systems */}
                <button
                  onClick={() => setSelectedComponent('05')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedComponent === '05'
                      ? 'bg-[#14253B] border-blue-400 shadow-lg glow-blue ring-2 ring-blue-400/30'
                      : 'bg-[#07111F]/90 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-blue-400" />
                      <span className="text-[10px] font-mono font-bold uppercase text-blue-400">05 TOOLS</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500">APIs</span>
                  </div>
                  <div className="text-sm font-bold text-white">Business Systems</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">ATS, CRM, ERP, HRMS Connectors</div>
                </button>

                {/* 06 Human Approval Gates (Warm Amber - Prominent) */}
                <button
                  onClick={() => setSelectedComponent('06')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedComponent === '06'
                      ? 'bg-[#1E251E] border-amber-400 shadow-xl glow-amber ring-2 ring-amber-400/40'
                      : 'bg-[#07111F]/95 border-amber-500/60 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span className="text-[10px] font-mono font-bold uppercase text-amber-400">06 GOVERNANCE</span>
                    </div>
                    <span className="text-[9px] font-mono text-amber-300 font-bold bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
                      HUMAN GATE
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">Human Approval Gates</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Explicit sign-off before execution</div>
                </button>

                {/* 04 Data / RAG / Memory */}
                <button
                  onClick={() => setSelectedComponent('04')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedComponent === '04'
                      ? 'bg-[#14253B] border-cyan-400 shadow-lg glow-blue ring-2 ring-cyan-400/30'
                      : 'bg-[#07111F]/90 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-cyan-400" />
                      <span className="text-[10px] font-mono font-bold uppercase text-cyan-400">04 STATE</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500">Vector</span>
                  </div>
                  <div className="text-sm font-bold text-white">Data / RAG / Memory</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Vector embeddings & task state</div>
                </button>
              </div>

              {/* Converging Vector Lines to Telemetry Tier */}
              <div className="flex flex-col items-center mb-4">
                <div className="grid grid-cols-3 w-[82%]">
                  <div className="flex justify-center"><div className="w-0.5 h-5 bg-slate-600" /></div>
                  <div className="flex justify-center"><div className="w-0.5 h-5 bg-amber-400/70" /></div>
                  <div className="flex justify-center"><div className="w-0.5 h-5 bg-slate-600" /></div>
                </div>
                <div className="w-[82%] h-0.5 bg-slate-600" />
                <div className="w-0.5 h-5 bg-teal-400/50" />
              </div>

              {/* Lower Tier: Monitoring (07) & Auditability (08) */}
              <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                
                {/* 07 Monitoring */}
                <button
                  onClick={() => setSelectedComponent('07')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedComponent === '07'
                      ? 'bg-[#14253B] border-teal-400 shadow-lg glow-teal ring-2 ring-teal-400/30'
                      : 'bg-[#07111F]/90 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-teal-400" />
                    <span className="text-[10px] font-mono font-bold uppercase text-teal-400">07 TELEMETRY</span>
                  </div>
                  <div className="text-sm font-bold text-white">Monitoring & Observability</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Token metrics, latency & error telemetry</div>
                </button>

                {/* 08 Auditability */}
                <button
                  onClick={() => setSelectedComponent('08')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedComponent === '08'
                      ? 'bg-[#14253B] border-teal-400 shadow-lg glow-teal ring-2 ring-teal-400/30'
                      : 'bg-[#07111F]/90 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <History className="w-4 h-4 text-teal-400" />
                    <span className="text-[10px] font-mono font-bold uppercase text-teal-400">08 AUDIT</span>
                  </div>
                  <div className="text-sm font-bold text-white">Auditability & Logging</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Immutable chronological action traces</div>
                </button>
              </div>

            </div>

            {/* MOBILE SYSTEM ARCHITECTURE PIPELINE (Visible only on < lg) */}
            <div className="lg:hidden space-y-3 mb-8">
              {Object.values(architectureComponents).map((item) => {
                const Icon = item.icon;
                const isSelected = selectedComponent === item.id;
                const isAmber = item.accent === 'amber';

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedComponent(item.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? isAmber
                          ? 'bg-[#1E251E] border-amber-400 ring-2 ring-amber-400/40'
                          : 'bg-[#14253B] border-teal-400 ring-2 ring-teal-400/40'
                        : 'bg-[#07111F] border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${isAmber ? 'text-amber-400' : 'text-teal-400'}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase ${isAmber ? 'text-amber-400' : 'text-teal-400'}`}>
                          {item.id} · {item.category}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">→</span>
                    </div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <p className="text-xs text-slate-300 mt-1">{item.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Component Detail Inspector Card */}
            <div className="bg-[#07111F] rounded-xl border border-slate-700 p-5 sm:p-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeComp.accent === 'amber' ? 'bg-amber-950/80 text-amber-400 border border-amber-500/40' : 'bg-teal-950/80 text-teal-400 border border-teal-500/40'
                  }`}>
                    {React.createElement(activeComp.icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-teal-400 tracking-wider">
                      COMPONENT {activeComp.id} · {activeComp.category}
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {activeComp.title}
                    </h4>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  Controlled Execution Protocol
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {activeComp.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-800">
                {activeComp.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="leading-tight">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. "YOUR AI WORKFORCE" DOMAIN ARCHITECTURE VISUALIZATION */}
        {/* ============================================================ */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 block mb-2">
              DEPARTMENTAL TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Your AI Workforce
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Specialized domain workforces coordinated through an intelligent central orchestration plane. Hover or click any node to view real capabilities.
            </p>
          </div>

          <div className="bg-[#0D1B2A] rounded-2xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

            {/* Central Orchestrator Top Node */}
            <div className="max-w-md mx-auto text-center mb-6 relative z-10">
              <div className="bg-[#07111F] border border-teal-500/60 rounded-xl p-5 shadow-xl glow-teal">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Cpu className="w-5 h-5 text-teal-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-300">
                    Central Orchestration Hub
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white">
                  PHOENIXINSIGHTS AI ORCHESTRATOR
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Dispatches workflow tasks, enforces permissions, and tracks execution state.
                </p>
              </div>

              {/* Desktop Connecting Vector Tree */}
              <div className="hidden lg:flex flex-col items-center mt-3">
                <div className="w-0.5 h-6 bg-teal-400/60" />
                <div className="w-[90%] h-0.5 bg-slate-600" />
                <div className="grid grid-cols-6 w-[90%]">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex justify-center">
                      <div className="w-0.5 h-6 bg-teal-400/60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6 Connected Domain Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 mb-8 relative z-10">
              {domainNodes.map((domain) => {
                const Icon = domain.icon;
                const isHovered = hoveredDomain === domain.id;

                return (
                  <div
                    key={domain.id}
                    onMouseEnter={() => setHoveredDomain(domain.id)}
                    onClick={() => setHoveredDomain(domain.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isHovered
                        ? 'bg-[#14253B] border-teal-400 shadow-xl glow-teal ring-2 ring-teal-400/30'
                        : 'bg-[#07111F]/90 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                          isHovered ? 'bg-teal-500 text-dark-950' : 'bg-slate-800 text-teal-400'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-mono font-bold uppercase text-teal-300 bg-teal-950/60 px-1.5 py-0.5 rounded border border-teal-500/30">
                          {domain.name}
                        </span>
                      </div>

                      <h4 className="text-xs font-bold text-white mb-2 leading-tight">
                        {domain.fullName}
                      </h4>

                      <div className="space-y-1.5 pt-2 border-t border-slate-800">
                        {domain.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-1.5 text-[10px] text-slate-300">
                            <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-800">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(domain.path);
                        }}
                        className="text-[11px] font-semibold text-teal-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore {domain.name}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Domain Overview Callout */}
            <div className="bg-[#07111F] rounded-xl border border-slate-700 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-left relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-950 text-teal-400 border border-teal-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Integrated Control & Unified Audit Logging
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">
                    All six domain workforces share centralized security policies, human-in-the-loop approval gates, and cryptographic auditability.
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/poc')}
                icon={ArrowRight}
                className="shrink-0 w-full sm:w-auto justify-center text-xs font-bold bg-teal-500 hover:bg-teal-400 text-dark-950"
              >
                Start a Domain POC
              </Button>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM CALL TO ACTION */}
        {/* ============================================================ */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-slate-700/80 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07111F] border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>PRAGMATIC POC ADOPTION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Validate an Agent Architecture on One Workflow
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Begin with a single defined process, benchmark against baseline metrics, and verify human approval gates before scaling.
          </p>

          <Button
            variant="primary"
            size="lg"
            className="text-sm px-8 py-4 bg-teal-500 hover:bg-teal-400 text-dark-950 font-bold shadow-lg glow-teal"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
          >
            Start a Workflow POC
          </Button>
        </div>

      </div>
    </div>
  );
}

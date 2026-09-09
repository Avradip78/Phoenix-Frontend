import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  Cpu,
  Users,
  TrendingUp,
  Megaphone,
  CreditCard,
  Headphones,
  Sliders,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  Sparkles,
  Zap,
  Lock,
  Activity,
  Layers
} from 'lucide-react';

export function MeetWorkforceArchitecture() {
  const { navigate } = useRouter();
  const [activeDept, setActiveDept] = useState('hr');

  const domains = [
    {
      id: "hr",
      name: "HR",
      fullName: "HR & Talent Intelligence",
      icon: Users,
      path: "/solutions/hr",
      accent: "violet",
      colorClasses: {
        border: "border-violet-500/40 hover:border-violet-400",
        activeBorder: "border-violet-400 ring-2 ring-violet-500/30",
        badge: "bg-violet-950/80 text-violet-300 border-violet-800/80",
        iconBg: "bg-violet-600 text-white",
        textAccent: "text-violet-400"
      },
      status: "Concept / POC-ready",
      role: "Candidate Sourcing & Screening Agent",
      capabilities: [
        "Automated resume parsing & semantic scoring",
        "Multi-stage interview orchestration",
        "Deterministic candidate rank reporting"
      ],
      systemHook: "Integrates with Greenhouse, Lever, Workday"
    },
    {
      id: "sales",
      name: "Sales",
      fullName: "Sales & BD Intelligence",
      icon: TrendingUp,
      path: "/solutions/sales",
      accent: "teal",
      colorClasses: {
        border: "border-teal-500/40 hover:border-teal-400",
        activeBorder: "border-teal-400 ring-2 ring-teal-500/30",
        badge: "bg-teal-950/80 text-teal-300 border-teal-800/80",
        iconBg: "bg-teal-600 text-white",
        textAccent: "text-teal-400"
      },
      status: "Concept / POC-ready",
      role: "Outbound Qualification & Intent Agent",
      capabilities: [
        "Firmographic enrichment & ICP scoring",
        "Contextual hyper-personalized drafts",
        "Automated CRM stage & pipeline updates"
      ],
      systemHook: "Integrates with Salesforce, HubSpot, Apollo"
    },
    {
      id: "marketing",
      name: "Marketing",
      fullName: "Marketing & Growth Engine",
      icon: Megaphone,
      path: "/solutions/marketing",
      accent: "cyan",
      colorClasses: {
        border: "border-cyan-500/40 hover:border-cyan-400",
        activeBorder: "border-cyan-400 ring-2 ring-cyan-500/30",
        badge: "bg-cyan-950/80 text-cyan-300 border-cyan-800/80",
        iconBg: "bg-cyan-600 text-white",
        textAccent: "text-cyan-400"
      },
      status: "Concept / POC-ready",
      role: "Competitive Research & Content Agent",
      capabilities: [
        "Continuous industry & competitor monitoring",
        "Multi-channel content draft generation",
        "Performance telemetry & attribution insight"
      ],
      systemHook: "Integrates with Google Ads, Meta, LinkedIn APIs"
    },
    {
      id: "finance",
      name: "Finance",
      fullName: "Finance & Accounts Operations",
      icon: CreditCard,
      path: "/solutions/finance",
      accent: "amber",
      colorClasses: {
        border: "border-amber-500/40 hover:border-amber-400",
        activeBorder: "border-amber-400 ring-2 ring-amber-500/30",
        badge: "bg-amber-950/80 text-amber-300 border-amber-800/80",
        iconBg: "bg-amber-600 text-white",
        textAccent: "text-amber-400"
      },
      status: "Concept / POC-ready",
      role: "Invoice Reconciliation & Audit Agent",
      capabilities: [
        "Automated 3-way invoice matching & OCR",
        "Anomaly detection on vendor line items",
        "Reconciliation draft with managerial gate"
      ],
      systemHook: "Integrates with SAP, QuickBooks, NetSuite"
    },
    {
      id: "support",
      name: "Support",
      fullName: "Customer Support Co-Pilot",
      icon: Headphones,
      path: "/solutions/support",
      accent: "blue",
      colorClasses: {
        border: "border-blue-500/40 hover:border-blue-400",
        activeBorder: "border-blue-400 ring-2 ring-blue-500/30",
        badge: "bg-blue-950/80 text-blue-300 border-blue-800/80",
        iconBg: "bg-blue-600 text-white",
        textAccent: "text-blue-400"
      },
      status: "Concept / POC-ready",
      role: "Knowledge-Grounded Resolution Agent",
      capabilities: [
        "Vector search across private help documents",
        "High-confidence response auto-drafting",
        "Deterministic escalation for complex edge cases"
      ],
      systemHook: "Integrates with Zendesk, Intercom, Freshdesk"
    },
    {
      id: "operations",
      name: "Operations",
      fullName: "Process & Operations Control",
      icon: Sliders,
      path: "/solutions/operations",
      accent: "teal",
      colorClasses: {
        border: "border-teal-500/40 hover:border-teal-400",
        activeBorder: "border-teal-400 ring-2 ring-teal-500/30",
        badge: "bg-teal-950/80 text-teal-300 border-teal-800/80",
        iconBg: "bg-teal-600 text-white",
        textAccent: "text-teal-400"
      },
      status: "Concept / POC-ready",
      role: "Workflow Health & Exception Agent",
      capabilities: [
        "End-to-end SLA tracking & choke-point alerting",
        "Automated cross-system reconciliation",
        "Executive throughput telemetry digests"
      ],
      systemHook: "Integrates with Jira, Linear, Custom REST APIs"
    }
  ];

  const selectedDomain = domains.find(d => d.id === activeDept) || domains[0];

  return (
    <section className="py-20 md:py-28 bg-[#07111F] text-white border-b border-[#1E3553] relative overflow-hidden">
      {/* Background ambient lighting and technical grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-teal-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[300px] bg-violet-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B2A] border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>AI WORKFORCE ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Meet Your Coordinated AI Workforce
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Not isolated chatbots or prompt wrappers. A unified enterprise operating topology coordinating specialized domain agents under deterministic control planes and human oversight.
          </p>
        </div>

        {/* Central Architecture Interactive Console */}
        <div className="bg-[#0D1B2A]/90 rounded-2xl border border-[#1E3553] p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Node: PhoenixInsights Central AI Orchestrator */}
          <div className="max-w-2xl mx-auto text-center mb-8 relative">
            <div className="bg-[#07111F] text-white rounded-2xl p-6 border border-teal-500/40 shadow-xl relative overflow-hidden glow-teal">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-violet-500" />
              
              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-teal-400">
                  CENTRAL CONTROL PLANE
                </span>
                <span className="text-[10px] font-mono bg-teal-950/80 border border-teal-800/80 text-teal-300 px-2 py-0.5 rounded">
                  Active Coordination Hub
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                PHOENIXINSIGHTS AI ORCHESTRATOR
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto mb-4">
                Interprets workflow goals, manages state graphs and dependencies, verifies permission whitelists, and routes tasks to domain-specific agent pools.
              </p>

              {/* Real Architectural Controls Pipeline Inside the Hub */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-[#1E3553] text-[11px] font-mono">
                <div className="bg-[#0D1B2A] p-2 rounded-lg border border-[#1E3553] text-left">
                  <div className="text-slate-400 text-[10px]">ROUTING</div>
                  <div className="text-white font-bold">Goal Decomposition</div>
                </div>
                <div className="bg-[#0D1B2A] p-2 rounded-lg border border-[#1E3553] text-left">
                  <div className="text-slate-400 text-[10px]">MEMORY</div>
                  <div className="text-teal-300 font-bold">Scoped Context Vector</div>
                </div>
                <div className="bg-[#0D1B2A] p-2 rounded-lg border border-[#1E3553] text-left">
                  <div className="text-slate-400 text-[10px]">SECURITY</div>
                  <div className="text-cyan-300 font-bold">API Whitelist Policy</div>
                </div>
                <div className="bg-[#0D1B2A] p-2 rounded-lg border border-amber-500/40 text-left">
                  <div className="text-amber-400 text-[10px]">CONTROL</div>
                  <div className="text-amber-300 font-bold">Human Approval Gate</div>
                </div>
              </div>
            </div>

            {/* Visual Signal Flow Lines (Desktop) */}
            <div className="hidden lg:flex flex-col items-center mt-3">
              <div className="w-0.5 h-6 bg-gradient-to-b from-teal-400 to-teal-500/50" />
              <div className="w-[90%] h-0.5 bg-teal-500/30" />
              <div className="grid grid-cols-6 w-[90%]">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex justify-center">
                    <div className="w-0.5 h-6 bg-teal-500/40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile / Tablet Flow Marker */}
            <div className="lg:hidden flex flex-col items-center my-4">
              <div className="w-0.5 h-5 bg-teal-400/50" />
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-teal-400 bg-[#07111F] px-2 py-0.5 rounded border border-teal-800">
                Connected Specialized Agents ↓
              </span>
              <div className="w-0.5 h-4 bg-teal-400/50" />
            </div>
          </div>

          {/* 6 Connected Domain Agent Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isSelected = activeDept === domain.id;
              const { border, activeBorder, badge, iconBg, textAccent } = domain.colorClasses;

              return (
                <div
                  key={domain.id}
                  onClick={() => setActiveDept(domain.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between text-left ${
                    isSelected
                      ? `bg-[#07111F] ${activeBorder} shadow-lg shadow-black/40`
                      : `bg-[#07111F]/70 ${border} hover:bg-[#07111F]`
                  }`}
                >
                  <div>
                    {/* Header: Icon + Domain Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${iconBg}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${badge}`}>
                        {domain.name}
                      </span>
                    </div>

                    {/* Agent Full Title & Specialized Role */}
                    <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                      {domain.fullName}
                    </h4>

                    <span className={`text-[10px] font-mono block mb-2.5 ${textAccent}`}>
                      {domain.role}
                    </span>

                    {/* Capabilities preview */}
                    <div className="space-y-1.5 pt-2 border-t border-[#1E3553]">
                      {domain.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <CheckCircle2 className={`w-3 h-3 ${textAccent} shrink-0 mt-0.5`} />
                          <span className="leading-tight">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer link */}
                  <div className="pt-3 mt-3 border-t border-[#1E3553]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(domain.path);
                      }}
                      className={`text-xs font-semibold ${textAccent} hover:text-white inline-flex items-center gap-1 cursor-pointer`}
                    >
                      <span>Explore {domain.name}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Focal Inspector Showcase for Selected Domain */}
          <div className="bg-[#07111F] rounded-xl border border-teal-500/30 p-5 sm:p-6 mb-8 text-left">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#1E3553]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                    Focal Domain Architecture:
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-[#0D1B2A] px-2 py-0.5 rounded border border-[#1E3553]">
                    {selectedDomain.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {selectedDomain.fullName} — {selectedDomain.role}
                </h4>
              </div>

              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate(selectedDomain.path)}
                icon={ArrowRight}
                className="shrink-0 text-xs font-bold"
              >
                View Full {selectedDomain.name} Specifications
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs">
              <div className="bg-[#0D1B2A] p-3.5 rounded-lg border border-[#1E3553]">
                <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">Primary Workflows</div>
                <ul className="space-y-1 text-slate-200">
                  {selectedDomain.capabilities.map((c, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-teal-400">▸</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0D1B2A] p-3.5 rounded-lg border border-[#1E3553]">
                <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">Enterprise Connectors</div>
                <div className="text-slate-200 leading-relaxed font-mono text-[11px] mb-2">
                  {selectedDomain.systemHook}
                </div>
                <div className="text-[11px] text-slate-400">
                  Secured through OAuth 2.0 with scoped read/write permissions.
                </div>
              </div>

              <div className="bg-[#0D1B2A] p-3.5 rounded-lg border border-amber-500/30">
                <div className="text-[10px] font-mono text-amber-400 uppercase mb-1">Human Approval Threshold</div>
                <p className="text-slate-200 leading-relaxed text-[11px]">
                  All high-impact mutations, contract dispatches, or budget triggers require explicit human sign-off before downstream execution.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Callout: Shared Central Enterprise Safeguards */}
          <div className="bg-[#07111F]/90 rounded-xl border border-[#1E3553] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-lg bg-teal-950/80 text-teal-400 border border-teal-800/80 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white">Centralized Enterprise Guardrails</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  All domain workforces inherit role-based access control, cryptographic audit logging, and human approval gates from the central control plane.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/poc')}
              icon={ArrowRight}
              className="shrink-0 w-full sm:w-auto justify-center text-xs font-bold border-teal-500/40 text-teal-300 hover:bg-teal-950/50"
            >
              Start an Architecture POC
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { GOVERNANCE_PILLARS } from '../data/mockData';
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Eye,
  AlertTriangle,
  History,
  KeyRound,
  Sliders,
  Sparkles,
  ArrowRight,
  Fingerprint,
  CheckCircle2,
  AlertOctagon
} from 'lucide-react';

export function GovernancePage() {
  const { navigate } = useRouter();

  const pillarIcons = [
    ShieldCheck,
    KeyRound,
    Lock,
    History,
    FileCheck,
    Fingerprint,
    Eye,
    Sliders,
    AlertTriangle,
    ShieldCheck
  ];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-[#CBD5E1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>ENTERPRISE GOVERNANCE & CONTROL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            AI That Can Act — With Control.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Autonomy where appropriate. Human control where necessary. PhoenixInsights builds cryptographic safeguards and explicit sign-off gates directly into every agent interaction.
          </p>
        </div>

        {/* 10 Governance Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {GOVERNANCE_PILLARS.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || ShieldCheck;
            const isAmber = idx === 1 || idx === 8;
            return (
              <Card
                key={idx}
                className="p-6 md:p-8 bg-[#0D1B2A] border-[#1E3553] hover:border-teal-500/40 flex flex-col justify-between shadow-xl group text-left transition-all"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold mb-4 ${
                    isAmber ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'bg-teal-500/10 text-teal-400 border border-teal-500/30'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t border-[#1E3553] flex items-center gap-1.5 text-xs font-semibold ${
                  isAmber ? 'text-amber-400' : 'text-teal-400'
                }`}>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mandatory Enterprise Control</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Human-in-the-Loop Topology */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-8 md:p-12 shadow-xl mb-16 text-left">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-1 font-mono">
              Deterministic Safeguards
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              The PhoenixInsights Human-in-the-Loop Topology
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We separate low-risk routine workflow actions from sensitive decisions requiring managerial authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-[#07111F] border border-[#1E3553] space-y-2">
              <span className="text-[10px] font-mono font-bold text-teal-300 bg-teal-500/10 border border-teal-500/30 px-2 py-0.5 rounded uppercase block w-fit">
                Tier 1: Automated Read & Prep
              </span>
              <h4 className="text-sm font-bold text-white">Information Retrieval & Synthesis</h4>
              <p className="text-slate-400 leading-relaxed">
                Reading documents, parsing resumes, querying RAG knowledge bases, drafting summaries, and checking calendar availability.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#07111F] border border-[#1E3553] space-y-2">
              <span className="text-[10px] font-mono font-bold text-blue-300 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded uppercase block w-fit">
                Tier 2: Conditional Staging
              </span>
              <h4 className="text-sm font-bold text-white">Draft Creation & Verification</h4>
              <p className="text-slate-400 leading-relaxed">
                Staging email outreach drafts, preparing journal voucher entries, compiling interview briefing packets, and flagging anomalies.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-950/30 border border-amber-500/50 ring-1 ring-amber-500/30 space-y-2 shadow-lg">
              <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded uppercase block w-fit">
                Tier 3: Mandatory Human Gate
              </span>
              <h4 className="text-sm font-bold text-amber-200">Critical Execution & Mutations</h4>
              <p className="text-amber-300/80 leading-relaxed font-medium">
                Candidate rejections, offer issuances, financial payments, contract approvals, CRM pipeline overrides, and database mutations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#0D1B2A] text-white rounded-2xl p-8 md:p-10 border border-[#1E3553] text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">
            Build Governed AI Into Your Organization
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Review governance topologies and human approval policies with our AI safety specialists.
          </p>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shadow-lg glow-teal"
          >
            Start a Governed POC Discussion
          </Button>
        </div>
      </div>
    </div>
  );
}

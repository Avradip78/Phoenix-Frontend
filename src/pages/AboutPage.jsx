import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { COMPANY_INFO, DIFFERENTIATORS } from '../data/mockData';
import {
  Building2,
  User,
  ShieldCheck,
  Target,
  ArrowRight,
  Sparkles,
  Layers,
  MapPin,
  Mail,
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';

export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-slate-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5 text-teal-400" />
            <span>ABOUT PHOENIXINSIGHTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Connecting Intelligence with Governed Business Execution.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            An emerging technology company combining Data Science, Machine Learning, Generative AI, and intelligent multi-agent workflow systems.
          </p>
        </div>

        {/* Company Overview & Philosophy Card */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-8 md:p-12 shadow-2xl mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="mb-2">
                <img
                  src="/phoenixinsights-logo-white.png"
                  alt="PhoenixInsights Official Brand Logo"
                  className="h-12 sm:h-14 w-auto object-contain mb-4"
                  style={{ aspectRatio: '738/218' }}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 font-mono block">
                Company Mission & Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {COMPANY_INFO.coreStatement}
              </p>

              <div className="p-5 rounded-xl bg-[#07111F] border border-[#1E3553]">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-1 font-mono">
                  The Core Philosophy
                </span>
                <p className="text-sm font-semibold text-slate-200 leading-relaxed italic">
                  "{COMPANY_INFO.philosophy}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The objective is not simply to build another chatbot. The objective is to design intelligent systems that can understand a workflow, access approved knowledge and data, use defined tools, coordinate specialized AI agents, execute permitted actions, ask humans for approval when required, record what happened, measure the result, and continuously improve the workflow.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#07111F] text-white rounded-2xl p-6 md:p-8 border border-[#1E3553] space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
              <div className="relative z-10 mb-4">
                <img
                  src="/phoenixinsights-logo-white.png"
                  alt="PhoenixInsights Official Brand Logo"
                  className="h-10 w-auto object-contain"
                  style={{ aspectRatio: '738/218' }}
                />
              </div>
              <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-teal-400 font-mono block">
                Corporate Profile
              </span>
              <div className="relative z-10 space-y-4 text-xs">
                <div className="pb-3 border-b border-[#1E3553]">
                  <span className="text-slate-400 block mb-0.5">Legal Entity Name:</span>
                  <span className="font-bold text-white text-sm">{COMPANY_INFO.name}</span>
                </div>
                <div className="pb-3 border-b border-[#1E3553]">
                  <span className="text-slate-400 block mb-0.5">Registered Office:</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.registeredOffice}</span>
                </div>
                <div className="pb-3 border-b border-[#1E3553]">
                  <span className="text-slate-400 block mb-0.5">Business Focus:</span>
                  <span className="font-semibold text-teal-300">Product-Led AI Solutions & Workforce Engineering</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Official Website:</span>
                  <a
                    href={COMPANY_INFO.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:text-white underline font-semibold"
                  >
                    {COMPANY_INFO.officialUrl}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div id="founder" className="bg-[#07111F] text-white rounded-2xl border border-[#1E3553] p-8 md:p-12 shadow-xl mb-16 text-left relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-teal-500/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-2xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center text-white shrink-0 shadow-lg">
              <User className="w-12 h-12 text-teal-400" />
            </div>

            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 font-mono">
                FOUNDER & DIRECTOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {COMPANY_INFO.founder.name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {COMPANY_INFO.founder.bio}
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  Hyderabad, Telangana, India
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  Director, PhoenixInsights Private Limited
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Key Differentiators */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-8 md:p-12 shadow-2xl mb-16 text-left">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono block mb-1">
              WHY PHOENIXINSIGHTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              10 Pillars of Differentiation
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              How PhoenixInsights approaches enterprise workflow transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map((diff) => (
              <div
                key={diff.num}
                className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553] flex items-start gap-3 hover:border-teal-400/60 transition-colors shadow-sm"
              >
                <span className="w-7 h-7 rounded-lg bg-teal-950/80 border border-teal-500/40 text-teal-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {diff.num}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shadow-lg shadow-teal-500/20"
          >
            Start a POC Discussion
          </Button>
        </div>
      </div>
    </div>
  );
}

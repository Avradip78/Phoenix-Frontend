import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { COMPANY_INFO } from '../../data/mockData';
import {
  MapPin,
  User,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building
} from 'lucide-react';

export function AboutPreview() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 md:py-28 bg-[#07111F] text-white border-b border-[#1E3553] relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="ABOUT PHOENIXINSIGHTS"
          badgeVariant="purple"
          title="Building the Intelligence Layer Between Data and Action."
          subtitle="An emerging technology company based in Hyderabad, India, dedicated to transforming complex business workflows into governed, measurable AI operations."
          align="center"
          className="mb-14"
        />

        {/* Company & Leadership Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Company Mission & Philosophy (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-8 sm:p-10 shadow-xl flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-400 block mb-2">
                Company Mission
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Pragmatic, Deterministic AI Architecture
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                PhoenixInsights is an emerging technology company based in Hyderabad, India, focused on practical AI, data science, and intelligent workflow systems.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Rather than treating AI as disconnected chat interfaces or superficial overlays, we engineer coordinated agent architectures that operate directly on enterprise processes — with strict human approval gates, role-based tool access, and transparent measurement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#1E3553]">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Zero Exaggerations:</strong> Truthful, evidence-based technical delivery.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-amber-300">Human-in-the-Loop:</strong> Explicit sign-off checkpoints on high-stakes steps.</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#1E3553] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Registered Office: Hyderabad, Telangana, India</span>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/about')}
                icon={ArrowRight}
                className="w-full sm:w-auto justify-center text-xs font-bold border-teal-500/40 text-teal-300 hover:bg-teal-950/40"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right Column: Founder & Leadership (5 cols) */}
          <div className="lg:col-span-5 bg-[#07111F] text-white rounded-2xl border border-[#1E3553] p-8 sm:p-10 shadow-xl flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 blur-2xl pointer-events-none rounded-full" />

            <div className="relative z-10">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-400 block mb-2">
                Leadership
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Avradip Mitra Chowdhury
              </h3>
              <p className="text-xs font-mono text-teal-300 mb-6">
                Founder & Director
              </p>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <p>
                  AI journalist leading PhoenixInsights and bridging analytical intelligence with governed, agentic workflow execution.
                </p>
                <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#1E3553] text-slate-300">
                  <strong className="text-white block mb-1">Guiding Principle:</strong>
                  "Start with a well-scoped business workflow, validate deterministic outcomes with real data, and expand only what measurably succeeds."
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1E3553] relative z-10 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">
                PHOENIXINSIGHTS PRIVATE LIMITED
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/contact')}
                className="text-xs font-bold glow-teal"
              >
                Contact Founder
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

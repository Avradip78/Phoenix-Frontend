import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { TECHNOLOGY_ECOSYSTEM } from '../data/mockData';
import {
  Cpu,
  Brain,
  Search,
  Network,
  Database,
  Cloud,
  Layers,
  Activity,
  Shield,
  ArrowRight,
  Code2,
  Lock,
  Sparkles,
  Info
} from 'lucide-react';

export function TechnologyPage() {
  const { navigate } = useRouter();

  const techIcons = [
    Brain,
    Cpu,
    Search,
    Network,
    Layers,
    Database,
    Cloud,
    Activity,
    Shield,
    Code2
  ];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-[#CBD5E1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Built on Modern Enterprise AI Infrastructure.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            A modular, enterprise-grade technology stack designed to support low-latency inference, stateful agent orchestration, and deterministic data handling.
          </p>
        </div>

        {/* Responsible Disclosure */}
        <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#1E3553] flex items-start gap-3 max-w-3xl mx-auto mb-14 shadow-lg text-left">
          <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-white font-semibold">Technology Ecosystem Disclosure:</strong> The architectures and frameworks detailed below represent our engineering ecosystem and technology standards for designing, deploying, and observing custom enterprise AI workforces.
          </p>
        </div>

        {/* Technology Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TECHNOLOGY_ECOSYSTEM.map((tech, idx) => {
            const Icon = techIcons[idx] || Cpu;
            return (
              <Card
                key={idx}
                className="p-6 md:p-8 bg-[#0D1B2A] border-[#1E3553] hover:border-teal-500/50 hover:bg-[#112236] transition-all flex flex-col justify-between shadow-lg group text-left"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center font-bold mb-5 group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {tech.category}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E3553]/60 flex items-center gap-1.5 text-[11px] font-mono text-teal-400 font-bold">
                  <span>Layer #{idx + 1} Architecture</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stack Layers Architecture Deep Dive */}
        <div className="bg-[#07111F] text-white rounded-2xl p-8 md:p-12 border border-[#1E3553] shadow-xl mb-16 text-left relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 font-mono block mb-1">
              Multi-Tier Topology
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              The 4 Architectural Layers of an AI Workforce
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every deployment maintains clean separation between model reasoning, execution state, security guardrails, and enterprise storage.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-[#0D1B2A] border border-[#1E3553] space-y-2">
              <span className="text-blue-400 font-mono font-bold block">01. INGESTION & DATA PLANE</span>
              <h4 className="text-base font-bold text-white">Hybrid Retrieval & Storage</h4>
              <p className="text-slate-300 leading-relaxed">
                Connects operational databases (Postgres, Snowflake) with dense vector embeddings and enterprise document stores via isolated tenant schemas.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D1B2A] border border-[#1E3553] space-y-2">
              <span className="text-violet-400 font-mono font-bold block">02. REASONING & ORCHESTRATION</span>
              <h4 className="text-base font-bold text-white">Stateful Agent Execution Graphs</h4>
              <p className="text-slate-300 leading-relaxed">
                Coordinates domain-specific models using LangGraph/StateGraph machines with explicit token limits, retry logic, and memory checkpoints.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D1B2A] border border-amber-500/40 space-y-2">
              <span className="text-amber-400 font-mono font-bold block">03. GOVERNANCE & POLICY GATE</span>
              <h4 className="text-base font-bold text-white">Deterministic Guardrails & Human Gates</h4>
              <p className="text-slate-300 leading-relaxed">
                Inspects all planned tool invocations against RBAC permission matrices and halts execution for mandatory human review on sensitive actions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D1B2A] border border-[#1E3553] space-y-2">
              <span className="text-teal-400 font-mono font-bold block">04. INTEGRATION & TELEMETRY</span>
              <h4 className="text-base font-bold text-white">Bi-Directional Connectors & Audit Logs</h4>
              <p className="text-slate-300 leading-relaxed">
                Executes permitted API payloads against ATS, CRM, ERP, and communication platforms with comprehensive OpenTelemetry tracing.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shadow-lg glow-teal"
          >
            Start a Technology POC
          </Button>
        </div>
      </div>
    </div>
  );
}

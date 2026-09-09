import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  Compass,
  Cpu,
  Rocket,
  Layers,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export function CommercialModelSection() {
  const { navigate } = useRouter();

  const commercialStages = [
    {
      step: "01",
      name: "Workflow Intelligence Assessment",
      tagline: "Understand the workflow and identify opportunities.",
      icon: Compass,
      desc: "A focused collaborative review of your current manual process, data handoffs, and friction bottlenecks. We specify measurable outcomes and feasibility.",
      deliverable: "Workflow Assessment & POC Project Charter",
      scope: "Fixed scope, low client lift"
    },
    {
      step: "02",
      name: "Focused AI Proof-of-Concept",
      tagline: "Build a focused proof of concept.",
      icon: Cpu,
      desc: "We engineer a working prototype on representative client sample data, complete with domain agent chains and explicit managerial approval gates.",
      deliverable: "Functional Interactive POC Prototype",
      scope: "Measurable validation window"
    },
    {
      step: "03",
      name: "Production AI Workflow",
      tagline: "Implement the validated workflow.",
      icon: Rocket,
      desc: "Transition the validated prototype into a production-grade operating service equipped with deterministic guardrails, fallback logic, and rollback capability.",
      deliverable: "Production Workflow Deployment",
      scope: "Enterprise SLA & operator training"
    },
    {
      step: "04",
      name: "Integration & Customization",
      tagline: "Connect to business systems.",
      icon: Layers,
      desc: "Connect the live intelligent workflow to your ERP (SAP, NetSuite), CRM (Salesforce, HubSpot), ATS (Greenhouse), and internal database environments.",
      deliverable: "Bi-directional Enterprise Connectors",
      scope: "OAuth2 / REST API integrations"
    },
    {
      step: "05",
      name: "Ongoing Optimization & Expansion",
      tagline: "Monitor, improve, and expand.",
      icon: RefreshCw,
      desc: "Continuous telemetry tracking latency, accuracy, and exception rates. As confidence grows, replicate proven architectures across adjacent departments.",
      deliverable: "Ongoing Telemetry & Multi-Workflow Roadmap",
      scope: "Continuous adaptation & scaling"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07111F] border-b border-[#1E3553] text-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <span>HOW CUSTOMERS ENGAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            How Organizations Start with PhoenixInsights
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A low-risk, phased commercial pathway designed around tangible demonstration and verifiable outcomes before enterprise-wide expansion.
          </p>
        </div>

        {/* 5-Stage Commercial Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 text-left">
          {commercialStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D1B2A] border border-[#1E3553] hover:border-teal-400/60 flex flex-col justify-between transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#111827] border border-[#1E3553] text-teal-400 flex items-center justify-center font-bold shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      PHASE {stage.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 leading-snug">
                    {stage.name}
                  </h3>

                  <span className="text-[11px] font-semibold text-teal-400 block mb-3 font-mono">
                    {stage.tagline}
                  </span>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] space-y-1">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Deliverable:</span>
                    <span className="text-white font-bold block leading-tight">{stage.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Low-Risk Guarantee Callout */}
        <div className="bg-[#0D1B2A] text-white rounded-2xl border border-[#1E3553] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl text-left">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-mono font-bold text-teal-400 uppercase">
                Pragmatic Engagement Principle
              </span>
            </div>
            <h4 className="text-base font-bold text-white">
              No Multi-Year Commitments to Begin
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Every workflow engagement starts with a well-scoped proof of concept evaluated against clear accuracy and cycle-time benchmarks.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shrink-0 w-full sm:w-auto justify-center text-xs font-bold shadow-md shadow-teal-500/20"
          >
            Show Us Your Workflow
          </Button>
        </div>

      </div>
    </section>
  );
}

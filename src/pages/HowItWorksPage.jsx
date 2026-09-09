import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import {
  Compass,
  GitMerge,
  Cpu,
  Hammer,
  Network,
  ShieldCheck,
  Rocket,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export function HowItWorksPage() {
  const { navigate } = useRouter();

  const stepColors = [
    { text: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/30", badge: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30" },
    { text: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/30", badge: "text-blue-300 bg-blue-500/10 border-blue-500/30" },
    { text: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/30", badge: "text-violet-300 bg-violet-500/10 border-violet-500/30" },
    { text: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/30", badge: "text-teal-300 bg-teal-500/10 border-teal-500/30" },
    { text: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30", badge: "text-amber-300 bg-amber-500/10 border-amber-500/30 font-bold" },
    { text: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/30", badge: "text-teal-300 bg-teal-500/10 border-teal-500/30" },
    { text: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/30", badge: "text-blue-300 bg-blue-500/10 border-blue-500/30" },
    { text: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/30", badge: "text-violet-300 bg-violet-500/10 border-violet-500/30" }
  ];

  const stepIcons = [
    Compass,
    GitMerge,
    Cpu,
    Hammer,
    Network,
    ShieldCheck,
    Rocket,
    RefreshCw
  ];

  const stepDetails = [
    {
      deliverable: "Workflow Assessment & Friction Matrix",
      stakeholders: "Domain Team Leads & PhoenixInsights AI Architects",
      timeline: "Days 1–3"
    },
    {
      deliverable: "Structured BPMN Process Graph & Data Schema Map",
      stakeholders: "Process Owners & Systems Engineers",
      timeline: "Days 4–7"
    },
    {
      deliverable: "Agent Specification & Approval Gate Policy",
      stakeholders: "Security Leads & AI Solution Engineers",
      timeline: "Week 2"
    },
    {
      deliverable: "Interactive Functional Proof-of-Concept (POC)",
      stakeholders: "PhoenixInsights Core Build Team",
      timeline: "Weeks 2–3"
    },
    {
      deliverable: "Secure OAuth2 / API Connectors & RAG Index",
      stakeholders: "Enterprise IT & PhoenixInsights Engineers",
      timeline: "Weeks 3–4"
    },
    {
      deliverable: "Safety, Accuracy & Guardrail Benchmark Report",
      stakeholders: "Compliance, QA & Business Sponsors",
      timeline: "Week 5"
    },
    {
      deliverable: "Controlled Production Rollout & User Onboarding",
      stakeholders: "Operations Team & Systems Admins",
      timeline: "Week 6"
    },
    {
      deliverable: "Ongoing Telemetry Dashboard & Prompt/Model Tuning",
      stakeholders: "PhoenixInsights Managed Operations & Domain Leads",
      timeline: "Continuous"
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-[#CBD5E1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <span>STRUCTURED DELIVERY METHODOLOGY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            How PhoenixInsights Works.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            From workflow discovery to deployment and continuous improvement, we engineer AI systems around the way your enterprise actually operates.
          </p>
        </div>

        {/* 8-Stage Deep Dive List */}
        <div className="space-y-6 mb-16">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            const details = stepDetails[idx];
            const color = stepColors[idx];

            return (
              <Card
                key={step.step}
                className="p-6 md:p-8 bg-[#0D1B2A] border-[#1E3553] hover:border-teal-500/40 shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Step Number & Icon (3 cols) */}
                  <div className="lg:col-span-3 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-bold text-lg shrink-0 ${color.bg} ${color.text}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-xs font-mono font-bold uppercase tracking-widest block mb-0.5 ${color.text}`}>
                        STAGE {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {step.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description & Objective (5 cols) */}
                  <div className="lg:col-span-5 space-y-2 text-left">
                    <h4 className="text-base font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverables & Stakeholders (4 cols) */}
                  <div className="lg:col-span-4 bg-[#07111F] p-4 rounded-xl border border-[#1E3553] space-y-2 text-xs text-left">
                    <div>
                      <span className="text-slate-400 font-semibold block">Key Deliverable:</span>
                      <span className="font-bold text-white">{details.deliverable}</span>
                    </div>
                    <div className="pt-2 border-t border-[#1E3553] flex justify-between">
                      <span className="text-slate-400">Timeline:</span>
                      <span className={`font-mono font-semibold ${color.text}`}>{details.timeline}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#0D1B2A] text-white rounded-2xl p-8 md:p-10 border border-[#1E3553] text-center max-w-4xl mx-auto shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07111F] border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>POC-First Methodology</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Start With Stage 01 Discovery
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Review your workflow with our technical team. We map the friction points and propose an actionable proof-of-concept.
          </p>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shadow-lg glow-teal"
          >
            Show Us Your Workflow
          </Button>
        </div>
      </div>
    </div>
  );
}

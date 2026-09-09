import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import {
  Users,
  TrendingUp,
  Megaphone,
  CreditCard,
  Headphones,
  Sliders,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

export function SolutionDomainsSection() {
  const { navigate } = useRouter();

  const domains = [
    {
      id: "hr",
      name: "HR",
      title: "HR & Talent Intelligence AI",
      path: "/solutions/hr",
      icon: Users,
      colorClass: "text-violet-600 border-violet-200 bg-violet-50 group-hover:bg-violet-600 group-hover:text-white",
      badgeClass: "text-violet-700 bg-violet-50 border-violet-200",
      desc: "Candidate screening, interview scheduling synchronization, and employee onboarding handoffs.",
      workflows: "Inbound Resume Screening, Multi-Participant Scheduling, Onboarding Packets"
    },
    {
      id: "sales",
      name: "Sales",
      title: "Sales & BD Intelligence AI",
      path: "/solutions/sales",
      icon: TrendingUp,
      colorClass: "text-teal-600 border-teal-200 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white",
      badgeClass: "text-teal-700 bg-teal-50 border-teal-200",
      desc: "Prospect research, ICP intent scoring, meeting brief preparation, and two-way CRM sync.",
      workflows: "Target Account Research, Lead Qualification, CRM Note Synchronization"
    },
    {
      id: "marketing",
      name: "Marketing",
      title: "Marketing & Growth AI",
      path: "/solutions/marketing",
      icon: Megaphone,
      colorClass: "text-cyan-600 border-cyan-200 bg-cyan-50 group-hover:bg-cyan-600 group-hover:text-white",
      badgeClass: "text-cyan-700 bg-cyan-50 border-cyan-200",
      desc: "Topic research, multi-channel copy adaptation, SEO/GEO optimization, and campaign analytics.",
      workflows: "Content Repurposing, Competitor Monitoring, Campaign Attribution"
    },
    {
      id: "finance",
      name: "Finance",
      title: "Finance & Accounts AI",
      path: "/solutions/finance",
      icon: CreditCard,
      colorClass: "text-amber-700 border-amber-300 bg-amber-50 group-hover:bg-amber-500 group-hover:text-slate-950",
      badgeClass: "text-amber-700 bg-amber-50 border-amber-200",
      desc: "Invoice document intelligence, 3-way reconciliation matching, and anomaly detection.",
      workflows: "Accounts Payable Matching, Month-End Reconciliation, Expense Auditing"
    },
    {
      id: "support",
      name: "Support",
      title: "Customer Support AI",
      path: "/solutions/support",
      icon: Headphones,
      colorClass: "text-blue-600 border-blue-200 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white",
      badgeClass: "text-blue-700 bg-blue-50 border-blue-200",
      desc: "Ticket triage, knowledge base synthesis, response drafting, and escalation routing.",
      workflows: "L1 Support Drafting, Internal Knowledge Lookup, Incident Routing"
    },
    {
      id: "operations",
      name: "Operations",
      title: "Process & Operations AI",
      path: "/solutions/operations",
      icon: Sliders,
      colorClass: "text-teal-600 border-teal-200 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white",
      badgeClass: "text-teal-700 bg-teal-50 border-teal-200",
      desc: "Process telemetry, automated exception handling, and operational decision support.",
      workflows: "Order Exception Flagging, SLA Breach Prevention, Data ETL Ingestion"
    },
    {
      id: "data-intelligence",
      name: "Data & Decision Intelligence",
      title: "Data & Decision Intelligence Systems",
      path: "/data-decision-intelligence",
      icon: BrainCircuit,
      colorClass: "text-blue-600 border-blue-200 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white",
      badgeClass: "text-blue-700 bg-blue-50 border-blue-200",
      desc: "Enterprise data platform integration, predictive modeling, scoring logic, and executive insights.",
      workflows: "Churn Prediction, Risk Scoring Models, Strategic Scenario Simulation"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="SOLUTION DOMAINS"
          badgeVariant="purple"
          title="Explore AI Workforces by Department"
          subtitle="Specialized agent blueprints engineered for specific operational teams and high-friction workflows."
          align="center"
          className="mb-14"
        />

        {/* 7 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((d, idx) => {
            const Icon = d.icon;
            const isWide = idx === 6;

            return (
              <div
                key={d.id}
                onClick={() => navigate(d.path)}
                className={`p-6 rounded-2xl bg-[#F5F7FA] border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between text-left group ${
                  isWide ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors shadow-2xs ${d.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${d.badgeClass}`}>
                      {d.name}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#07111F] mb-2 group-hover:text-teal-700 transition-colors">
                    {d.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {d.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-200">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block mb-1">
                      Example Workflows:
                    </span>
                    <span className="text-xs text-[#07111F] font-medium block">
                      {d.workflows}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-teal-700 group-hover:text-teal-800 inline-flex items-center gap-1.5 transition-colors">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { WHY_PHOENIXINSIGHTS } from '../../data/mockData';
import {
  Briefcase,
  Layers,
  Cpu,
  ShieldCheck,
  Target,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../ui/Button';

export function WhyPhoenixInsights() {
  const { navigate } = useRouter();

  const cardMetadata = [
    { icon: Briefcase, color: "teal", iconClass: "bg-teal-50 text-teal-600 border border-teal-200 group-hover:bg-teal-600 group-hover:text-white" },
    { icon: Layers, color: "blue", iconClass: "bg-blue-50 text-blue-600 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white" },
    { icon: Cpu, color: "violet", iconClass: "bg-violet-50 text-violet-600 border border-violet-200 group-hover:bg-violet-600 group-hover:text-white" },
    { icon: ShieldCheck, color: "amber", iconClass: "bg-amber-50 text-amber-700 border border-amber-300 group-hover:bg-amber-500 group-hover:text-slate-950" },
    { icon: Target, color: "cyan", iconClass: "bg-cyan-50 text-cyan-600 border border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white" }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="STRATEGIC ADVANTAGE"
          badgeVariant="purple"
          title="Why PhoenixInsights"
          subtitle="A disciplined engineering philosophy focused on practical utility, existing tool integration, and verifiable business value."
          align="center"
          className="mb-14"
        />

        {/* 5 Premium Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_PHOENIXINSIGHTS.map((item, idx) => {
            const meta = cardMetadata[idx] || cardMetadata[0];
            const Icon = meta.icon;
            const isSpan = idx === 4;

            return (
              <div
                key={item.num}
                className={`p-6 sm:p-8 rounded-2xl bg-[#F5F7FA] border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between text-left group ${
                  isSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shadow-2xs ${meta.iconClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#07111F] mb-2 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-medium text-slate-500 flex items-center justify-between">
                  <span>Pragmatic Adoption</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 font-bold" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

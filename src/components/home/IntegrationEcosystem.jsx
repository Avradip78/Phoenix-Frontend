import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { INTEGRATION_CATEGORIES } from '../../data/mockData';
import {
  Users,
  Database,
  Mail,
  Calendar,
  Cloud,
  FileCode,
  MessageSquare,
  BarChart3,
  BookOpen,
  Server,
  DollarSign,
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/Button';

export function IntegrationEcosystem() {
  const { navigate } = useRouter();

  const categoryIcons = {
    ATS: Users,
    HRMS: Users,
    ERP: Server,
    Accounting: DollarSign,
    CRM: Briefcase,
    Email: Mail,
    Calendar: Calendar,
    Databases: Database,
    'Cloud Storage': Cloud,
    'Business APIs': FileCode,
    'Internal Applications': Layers,
    'Communication Platforms': MessageSquare,
    BI: BarChart3,
    'Knowledge Bases': BookOpen
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="INTEGRATION ECOSYSTEM"
          badgeVariant="purple"
          title="Works With Your Existing Enterprise Systems"
          subtitle="Deploy intelligent agents into the software and platforms your teams already use every day. Designed to connect via native APIs and standard protocols."
          align="center"
          className="mb-14"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {INTEGRATION_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[cat.name] || Layers;

            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-teal-400 hover:shadow-xs transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                      Can integrate with
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#07111F] mb-1">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-slate-500 block leading-tight">
                    Example: {cat.examples}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer & CTA */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1 font-mono">
              Custom & Proprietary Stack Support
            </span>
            <p className="text-xs sm:text-sm text-[#07111F] font-semibold max-w-xl">
              Don't see your specific internal tool or legacy database? PhoenixInsights connects through custom REST endpoints, webhooks, and secure database drivers.
            </p>
          </div>

          <Button
            variant="outline"
            size="md"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
            className="shrink-0 w-full sm:w-auto justify-center text-xs font-bold border-teal-500/40 text-teal-700 hover:bg-teal-50"
          >
            Check Stack Compatibility
          </Button>
        </div>

      </div>
    </section>
  );
}

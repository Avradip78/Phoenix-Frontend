import React from 'react';
import { Database, LineChart, Sparkles, GitBranch, Cpu, Zap } from 'lucide-react';

export function VisualIntelligenceStrip() {
  const progression = [
    { label: "DATA", icon: Database, accent: "text-blue-400", border: "border-blue-500/30" },
    { label: "ML", icon: LineChart, accent: "text-cyan-400", border: "border-cyan-500/30" },
    { label: "GENAI", icon: Sparkles, accent: "text-violet-400", border: "border-violet-500/30" },
    { label: "DECISION INTELLIGENCE", icon: GitBranch, accent: "text-teal-400", border: "border-teal-500/30" },
    { label: "AI AGENTS", icon: Cpu, accent: "text-violet-400", border: "border-violet-500/30" },
    { label: "WORKFLOW AUTOMATION", icon: Zap, accent: "text-teal-400", border: "border-teal-500/40" }
  ];

  return (
    <div className="w-full bg-[#0D1B2A] border-y border-slate-800 py-5 sm:py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-left shrink-0">
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 block font-bold">
              TECHNOLOGY PROGRESSION
            </span>
            <span className="text-xs text-slate-300">
              The PhoenixInsights Intelligence Stack
            </span>
          </div>

          {/* Desktop & Tablet horizontal connected sequence */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
              {progression.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.label}>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#07111F] border ${item.border} text-white hover:border-teal-400 transition-colors shadow-2xs`}>
                      <Icon className={`w-3.5 h-3.5 ${item.accent} shrink-0`} />
                      <span className="text-xs font-bold font-mono tracking-wide text-white block leading-none">
                        {item.label}
                      </span>
                    </div>

                    {idx < progression.length - 1 && (
                      <span className="text-slate-600 text-xs font-bold shrink-0">→</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

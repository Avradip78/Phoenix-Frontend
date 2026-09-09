import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export function FinalCta() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 md:py-28 bg-[#07111F] text-white relative overflow-hidden border-t border-[#1E3553]">
      {/* Background subtle mesh decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-grid-pattern-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B2A] border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Proof-of-Concept Framework</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Your Workflow Is the Starting Point.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Show us how the work happens today. We'll help identify where intelligent workflows could create value.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-base px-8 py-4 shadow-lg shadow-teal-500/20"
            onClick={() => navigate('/poc')}
            icon={ArrowRight}
          >
            Show Us Your Workflow
          </Button>

          <Button
            variant="outlineDark"
            size="lg"
            className="w-full sm:w-auto text-base px-8 py-4"
            onClick={() => navigate('/ai-workforce')}
          >
            Explore AI Workforces
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>No long-term commitments required for POC discovery and validation.</span>
        </div>
      </div>
    </section>
  );
}

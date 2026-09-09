import React from 'react';

export function Badge({ children, variant = 'purple', size = 'md', className = '' }) {
  const variants = {
    purple: 'bg-violet-950/80 text-violet-300 border border-violet-500/40',
    teal: 'bg-teal-950/80 text-teal-300 border border-teal-500/40',
    cyan: 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40',
    coral: 'bg-rose-950/80 text-rose-300 border border-rose-500/40',
    navy: 'bg-[#111827] text-slate-200 border border-[#1E3553]',
    navySoft: 'bg-slate-800/80 text-slate-200 border border-slate-700',
    concept: 'bg-amber-950/80 text-amber-300 border border-amber-500/40 font-semibold',
    neutral: 'bg-slate-800/80 text-slate-300 border border-slate-700',
    success: 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs font-medium tracking-wide uppercase',
    md: 'px-3 py-1 text-xs font-semibold tracking-wider uppercase',
    lg: 'px-3.5 py-1.5 text-sm font-semibold tracking-wide',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${variants[variant] || variants.purple} ${sizes[size] || sizes.md} ${className}`}>
      {children}
    </span>
  );
}

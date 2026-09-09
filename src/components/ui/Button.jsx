import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-[#07111F] font-bold shadow-lg shadow-teal-500/20 focus:ring-teal-400 border border-teal-400/50',
    teal: 'bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-[#07111F] font-bold shadow-lg shadow-teal-500/20 focus:ring-teal-400 border border-teal-400/50',
    dark: 'bg-[#0D1B2A] text-white hover:bg-[#111827] active:bg-[#07111F] focus:ring-slate-700 shadow-sm border border-[#1E3553]',
    purple: 'bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700 focus:ring-violet-500 shadow-lg shadow-violet-500/20 border border-violet-500 font-bold',
    violet: 'bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700 focus:ring-violet-500 shadow-lg shadow-violet-500/20 border border-violet-500 font-bold',
    amber: 'bg-amber-500 text-slate-950 hover:bg-amber-400 active:bg-amber-600 focus:ring-amber-500 shadow-lg shadow-amber-500/20 border border-amber-500 font-bold',
    outline: 'bg-transparent text-slate-200 border border-[#1E3553] hover:border-teal-400 hover:text-teal-300 hover:bg-teal-500/10 focus:ring-teal-400 shadow-sm',
    outlineDark: 'bg-transparent text-white border border-[#1E3553] hover:border-teal-400 hover:text-teal-300 hover:bg-teal-500/10 focus:ring-teal-400',
    ghost: 'bg-transparent text-slate-300 hover:bg-slate-800/60 hover:text-white focus:ring-teal-400',
    coral: 'bg-[#E8798A] text-white hover:bg-[#D94F65] focus:ring-coral-500 shadow-sm',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide',
    md: 'px-5 py-2.5 text-sm tracking-wide',
    lg: 'px-7 py-3.5 text-base tracking-wide',
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2 shrink-0" />}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2 shrink-0" />}
    </button>
  );
}

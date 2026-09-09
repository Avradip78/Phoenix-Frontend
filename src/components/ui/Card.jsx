import React from 'react';

export function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  onClick,
  ...props
}) {
  const variants = {
    default: 'bg-[#111827] border border-[#1E3553] text-[#CBD5E1] shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
    dark: 'bg-[#0D1B2A] border border-[#1E3553] text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
    glass: 'bg-[#111827]/80 backdrop-blur-md border border-[#1E3553] text-[#CBD5E1] shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
    glassDark: 'bg-[#07111F]/80 backdrop-blur-md border border-[#1E3553] text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
    accent: 'bg-teal-950/30 border border-teal-500/30 text-[#CBD5E1]',
    flat: 'bg-[#0D1B2A] border border-[#1E3553] text-[#CBD5E1]',
  };

  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-teal-500/50 hover:-translate-y-0.5' : '';

  return (
    <div
      className={`rounded-xl p-6 ${variants[variant] || variants.default} ${hoverStyles} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

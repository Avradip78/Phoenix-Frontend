import React from 'react';
import { Badge } from './Badge';

export function SectionHeader({
  badge,
  badgeVariant = 'teal',
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  theme = 'dark',  // default dark
  className = '',
  maxWidth = 'max-w-4xl'
}) {
  const isCentered = align === 'center';

  return (
    <div className={`w-full ${isCentered ? 'text-center mx-auto' : 'text-left'} ${maxWidth} ${className}`}>
      {/* BADGE */}
      {badge && (
        <div className="mb-6 md:mb-8 flex items-center justify-start">
          <div className={isCentered ? 'w-full flex justify-center' : ''}>
            <Badge variant={badgeVariant}>
              {badge}
            </Badge>
          </div>
        </div>
      )}

      {/* HEADLINE */}
      {title && (
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 md:mb-7 leading-[1.2] text-white max-w-4xl ${isCentered ? 'mx-auto' : ''}`}>
          {title}
        </h2>
      )}

      {/* SUPPORTING TEXT */}
      {subtitle && (
        <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl ${isCentered ? 'mx-auto' : ''} text-slate-300`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className={cn("h-px bg-primary/20 w-24 mt-8", centered && "mx-auto")} />
    </div>
  );
}

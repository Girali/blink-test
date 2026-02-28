import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { AlertCircle, TrendingDown, Landmark, Receipt, Ban, Users, Settings } from 'lucide-react';

const scenarios = [
  { icon: TrendingDown, text: "Baisse inexpliquée de rentabilité" },
  { icon: AlertCircle, text: "Tensions de trésorerie critiques" },
  { icon: Landmark, text: "Refus ou pression des banques" },
  { icon: Receipt, text: "Dettes fiscales ou sociales" },
  { icon: Ban, text: "Pertes récurrentes et structurelles" },
  { icon: Users, text: "Croissance non maîtrisée" },
  { icon: Settings, text: "Organisation devenue inefficace" },
];

export function WhenToCall() {
  return (
    <section id="expertise" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Quand faire appel à nous" 
          subtitle="Notre intervention est requise lorsque la situation devient réellement critique et nécessite une action stratégique immédiate."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {scenarios.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 border border-white/5 bg-background/50 hover:border-primary/20 transition-all group">
              <item.icon className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors mt-1 shrink-0" />
              <p className="text-lg text-foreground/80 leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export function Engagement() {
  return (
    <section id="engagements" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Notre banger"
              className="mb-8"
            />
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                AUDACIER n’intervient pas comme un conseil extérieur mais comme un partenaire impliqué dans l’issue de la mission. 
                Nous partageons le risque avec nos clients.
              </p>
              <p className="text-foreground font-serif text-xl border-l-2 border-primary pl-6 py-2 italic">
                "Une partie essentielle de la rémunération dépend directement de l’amélioration mesurable de la situation de l’entreprise."
              </p>
              <p>
                Ce modèle exigeant impose une sélection rigoureuse des dossiers. Nous n'acceptons que les missions où notre expertise peut générer un impact réel et quantifiable.
              </p>
            </div>
          </div>
          <div className="relative aspect-square bg-secondary/20 border border-white/5 p-12 flex items-center justify-center">
             <div className="text-center">
                <span className="block text-5xl font-serif mb-4 text-primary">Sélectivité</span>
                <span className="block text-sm uppercase tracking-widest text-muted-foreground">Pilier de notre efficacité</span>
             </div>
             {/* Abstract corner elements */}
             <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/20" />
             <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

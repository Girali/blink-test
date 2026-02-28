import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section className="section-padding bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="À propos" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
            <p>
              AUDACIER réunit des experts de haut niveau spécialisés dans la restructuration d'entreprises. 
              Notre équipe combine une solide expérience financière avec une analyse opérationnelle pragmatique du terrain.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="text-foreground font-serif font-bold text-lg">Expertise financière</h4>
                <p className="text-sm">Maîtrise complète des mécanismes de dettes et de restructuration de passif.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-foreground font-serif font-bold text-lg">Analyse opérationnelle</h4>
                <p className="text-sm">Capacité à intervenir au cœur des processus pour restaurer l'efficacité.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-foreground font-serif font-bold text-lg">Gestion réelle</h4>
                <p className="text-sm">Une approche issue de la pratique concrète de la direction d'entreprise.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-foreground font-serif font-bold text-lg">Pragmatisme</h4>
                <p className="text-sm">Seuls les résultats et la pérennité de l'entreprise guident nos actions.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-[3/4] bg-secondary/40 border border-white/5 flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all">
              <div className="w-24 h-24 bg-white/5 rounded-full mb-4" />
              <span className="block font-serif text-lg text-foreground">Associé</span>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mt-1">Finance & Restructuration</span>
            </div>
            <div className="aspect-[3/4] bg-secondary/40 border border-white/5 flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all">
              <div className="w-24 h-24 bg-white/5 rounded-full mb-4" />
              <span className="block font-serif text-lg text-foreground">Associé</span>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mt-1">Opérations & Stratégie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

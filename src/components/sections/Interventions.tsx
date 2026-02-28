import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

const poles = [
  {
    title: "Gestion de crise et restructuration",
    items: ["Plan de sauvegarde", "Redressement judiciaire", "Mandat ad hoc", "Conciliation"]
  },
  {
    title: "Négociation financière et bancaire",
    items: ["Restructuration de dette", "Levée de fonds d'urgence", "Négociation de lignes de crédit", "Gestion des covenants"]
  },
  {
    title: "Organisation et management",
    items: ["Management de transition", "Audit organisationnel", "Optimisation de la masse salariale", "Gouvernance de crise"]
  },
  {
    title: "Stratégie et repositionnement",
    items: ["Analyse de rentabilité par segment", "Pivot stratégique", "Cessions d'actifs non stratégiques", "Revue de business model"]
  },
  {
    title: "Optimisation opérationnelle",
    items: ["Analyse supply chain", "Réduction des coûts fixes", "Amélioration de la marge brute", "Pilotage du BFR"]
  }
];

export function Interventions() {
  return (
    <section className="section-padding bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Interventions" 
          subtitle="Cinq pôles d'expertise pour couvrir l'ensemble des besoins de restructuration d'une PME."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poles.map((pole, index) => (
            <div key={index} className="p-8 border border-white/5 bg-background/30 hover:bg-background/50 transition-all">
              <h3 className="text-xl font-serif mb-6 text-primary/80">{pole.title}</h3>
              <ul className="space-y-3">
                {pole.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary/30 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

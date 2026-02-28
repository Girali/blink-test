import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

const steps = [
  {
    title: "Diagnostic rapide et identification des urgences",
    description: "Analyse flash de la situation pour identifier les leviers de survie immédiats et les priorités d'action."
  },
  {
    title: "Stabilisation financière et opérationnelle",
    description: "Mise en place de mesures d'urgence pour stopper l'hémorragie de trésorerie et stabiliser l'exploitation."
  },
  {
    title: "Négociation avec créanciers et partenaires",
    description: "Restructuration de la dette, rééchelonnement des passifs et renégociation des conditions avec les partenaires financiers."
  },
  {
    title: "Retour durable à la performance",
    description: "Déploiement du plan de transformation pour rétablir une rentabilité pérenne et une croissance saine."
  }
];

export function Method() {
  return (
    <section id="methode" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Notre méthode" 
          subtitle="Une approche rigoureuse et pragmatique centrée sur les fondamentaux financiers et opérationnels."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative p-10 border border-white/5 hover:border-white/10 transition-colors">
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-2xl mb-4 font-serif">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border-l-2 border-primary/20 bg-secondary/20">
          <p className="text-foreground/70 italic text-lg leading-relaxed">
            "Nous nous concentrons sur les leviers essentiels : analyse BFR, gestion des dettes, optimisation des échéanciers, pricing stratégique, réorganisation structurelle et maîtrise ciblée des coûts."
          </p>
        </div>
      </div>
    </section>
  );
}

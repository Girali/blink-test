import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background texture element */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-primary/60 text-sm uppercase tracking-[0.4em] mb-6 font-medium">
            Unité de retournement d’entreprise
          </span>
          <h1 className="text-6xl md:text-8xl mb-8 leading-[1.1]">
            AUDACIER
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
            AUDACIER intervient auprès des actionnaires et dirigeants confrontés à une dégradation de la performance de leur entreprise. 
            Notre rôle est d’analyser rapidement la situation, stabiliser l’activité, restaurer la trésorerie et rétablir durablement la rentabilité.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#contact" className="austere-button text-center">
              Demander une analyse confidentielle
            </a>
            <a href="#expertise" className="austere-outline text-center">
              Nos domaines d'intervention
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute right-12 md:right-24 bottom-0 w-px h-32 bg-gradient-to-t from-primary/30 to-transparent hidden md:block" />
    </section>
  );
}

import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary/50" />
          <span className="font-serif text-lg tracking-widest font-bold text-primary/50">AUDACIER</span>
        </div>
        <div className="text-muted-foreground text-sm flex gap-8">
          <span>&copy; {new Date().getFullYear()} AUDACIER. Tous droits réservés.</span>
          <a href="#" className="hover:text-primary transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

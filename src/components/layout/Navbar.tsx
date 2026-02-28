import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-serif text-xl tracking-widest font-bold">AUDACIER</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#expertise" className="hover:text-primary transition-colors">Expertise</a>
          <a href="#methode" className="hover:text-primary transition-colors">Méthode</a>
          <a href="#engagements" className="hover:text-primary transition-colors">Engagements</a>
          <a href="#contact" className="austere-button text-xs py-2 px-6">Contact</a>
        </div>
      </div>
    </nav>
  );
}

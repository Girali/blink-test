import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { blink } from '../../lib/blink';
import { toast } from 'react-hot-toast';

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await blink.db.table('analysis_requests').create({
        ...formData,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });
      toast.success('Votre demande a été envoyée avec succès. Nous vous recontacterons sous 24h.');
      setFormData({ name: '', company: '', email: '', phone: '', description: '' });
    } catch (error) {
      console.error(error);
      toast.error('Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Demande d'analyse confidentielle" 
          subtitle="Les échanges sont strictement confidentiels. Nous analysons votre situation avec la plus grande discrétion."
          centered
        />
        
        <form onSubmit={handleSubmit} className="space-y-8 mt-12 bg-secondary/5 p-8 md:p-12 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Nom complet</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-2 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Entreprise</label>
              <input 
                required
                type="text" 
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-2 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Email professionnel</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-2 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Téléphone</label>
              <input 
                required
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-2 focus:border-primary transition-colors outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Description courte de la situation</label>
            <textarea 
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full bg-transparent border border-white/10 p-4 focus:border-primary transition-colors outline-none resize-none"
            />
          </div>
          
          <div className="flex flex-col items-center gap-6 pt-6">
            <button 
              disabled={loading}
              type="submit" 
              className="austere-button w-full md:w-auto"
            >
              {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Engagement de confidentialité absolue
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

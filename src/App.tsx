import React from 'react';
import { blink } from './lib/blink';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhenToCall } from './components/sections/WhenToCall';
import { Method } from './components/sections/Method';
import { Interventions } from './components/sections/Interventions';
import { Engagement } from './components/sections/Engagement';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhenToCall />
        <Method />
        <Interventions />
        <Engagement />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
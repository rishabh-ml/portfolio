import React from 'react';
import { VscHome, VscAccount, VscTools, VscRepo, VscCalendar, VscMail } from 'react-icons/vsc';
import { Analytics } from "@vercel/analytics/react"
import Dock from './components/Dock';
import Hero from './sections/Hero';
import About from './sections/About';
import TechSection from './sections/TechSection';
import Projects from './sections/Projects';
import SplashCursor from './components/SplashCursor';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';

export default function App() {
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <VscAccount size={18} />, label: 'About Me', onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <VscTools size={18} />, label: 'Technologies', onClick: () => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <VscRepo size={18} />, label: 'Projects', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <VscCalendar size={18} />, label: 'Timeline', onClick: () => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <VscMail size={18} />, label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-500">


      {/* Your sections */}
      <Hero />
      <About />
      <TechSection />
      <Projects />
      <Timeline />
      <Contact />

      {/* The Dock pinned at bottom */}
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        // Force it above everything else
        className="!z-50"
      />
      <Analytics />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import Loader from '@/components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />
      
      <div 
        className="flex min-h-screen flex-col bg-[#090909]"
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? 'hidden' : 'visible',
          transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.8s',
        }}
      >
        <CursorGlow />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Research />
          <Publications />
          <Experience />
          <TechStack />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

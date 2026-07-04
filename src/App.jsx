import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import FlagshipProducts from './components/FlagshipProducts';
import InteractiveTechStack from './components/InteractiveTechStack';

const ArchitectureShowcase = lazy(() => import('./components/ArchitectureShowcase'));

function SectionSkeleton() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-4 w-32 bg-bg-secondary rounded" />
            <div className="h-10 w-64 bg-bg-secondary rounded" />
            <div className="h-5 w-96 bg-bg-secondary rounded" />
            <div className="h-64 bg-bg-secondary rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-bg-primary">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent-cyan origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Global background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,212,212,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <FlagshipProducts />
        <Skills />
        <InteractiveTechStack />
        <Projects />
        <Experience />
        <Suspense fallback={<SectionSkeleton />}>
          <ArchitectureShowcase />
        </Suspense>
        <EngineeringPhilosophy />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
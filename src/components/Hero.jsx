import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Zap } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo, stats } from '../data/portfolio';

const ROLES = [
  "AI/ML Engineer",
  "Data Scientist",
  "AI Product Builder",
  "ML Engineer",
];

const PARTICLES = Array.from({ length: 18 }, () => ({
  x:        Math.random() * 100,
  y:        Math.random() * 100,
  size:     Math.random() * 4 + 2,
  duration: Math.random() * 6 + 5,
  delay:    Math.random() * 4,
}));

function Particle({ x, y, size, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent-cyan/20"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y:       [0, -30, 0],
        x:       [0, 10, -5, 0],
        opacity: [0.2, 0.6, 0.2],
        scale:   [1, 1.2, 1],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
        );
      }, isDeleting ? 50 : 80);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* Large decorative text */}
      <div className="absolute right-0 bottom-0 text-[20vw] font-display font-black
                      text-white/[0.015] select-none pointer-events-none leading-none">
        AI
      </div>

      {/* Accent orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,212,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 section-padding pt-32 pb-20">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-accent-cyan/5 border border-accent-cyan/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-xs font-mono text-accent-cyan tracking-wider">
            Actively seeking AI/ML roles — graduating May 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                         text-text-primary leading-[0.95] tracking-tight mb-4">
            Raj Narayan
            <span className="block text-text-secondary/50">
              Singh
            </span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-accent-cyan/50" />
          <span className="font-mono text-accent-cyan text-lg md:text-xl font-medium">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-xl text-text-secondary text-lg md:text-xl leading-relaxed mb-10"
        >
          {personalInfo.tagline}{' '}
          <span className="text-accent-cyan font-medium">
            {personalInfo.subTagline}
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <button onClick={scrollToProjects} className="btn-primary text-sm group">
            <Zap size={15} className="group-hover:rotate-12 transition-transform" />
            View Projects
          </button>
          <a href={personalInfo.resumeUrl} download className="btn-secondary text-sm">
            <ArrowDown size={15} />
            Download Resume
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-border-subtle
                         text-text-muted hover:text-accent-cyan hover:border-border-active transition-all">
              <Github size={16} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-border-subtle
                         text-text-muted hover:text-accent-cyan hover:border-border-active transition-all">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-border-subtle
                         text-text-muted hover:text-accent-cyan hover:border-border-active transition-all">
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="card-base p-4 text-center glow-pulse"
            >
              <div className="font-display font-black text-2xl text-accent-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted font-body leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-text-muted tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent-cyan/50 to-transparent"
        />
      </motion.div>

    </section>
  );
}
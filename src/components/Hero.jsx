import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowDown, Check, ExternalLink } from 'lucide-react';
import { Github, Linkedin, PythonLogo, DockerLogo, PostgresLogo, GitLogo, FastAPILogo, RedisLogo } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

const ROLES = [
  "AI Engineer",
  "Agentic AI Developer",
  "Backend AI Engineer",
  "Machine Learning Engineer",
];

const PARTICLES = Array.from({ length: 12 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

const STACK_ITEMS = [
  { label: 'Groq',     icon: '⚡', color: '#00d4d4' },
  { label: 'Whisper',  icon: '🎤', color: '#00a896' },
  { label: 'FastAPI',  icon: '⚡', color: '#0077b6' },
  { label: 'Redis',    icon: '⚡', color: '#f59e0b' },
  { label: 'PostgreSQL', icon: '🗄️', color: '#6366f1' },
  { label: 'Docker',   icon: '🐳', color: '#8b5cf6' },
  { label: 'Production', icon: '🚀', color: '#00d4d4' },
];

const HERO_STATS = [
  { value: 2,  suffix: '',  label: 'Enterprise AI Platforms', meta: '2 Platforms' },
  { value: 7,  suffix: '+', label: 'Production Systems'                        },
  { value: 7,  suffix: '',  label: 'Docker Services',       meta: '7 Services' },
  { value: 500, suffix: '+', label: 'Business Records'                         },
];

const TECH_LOGOS = [
  { icon: PythonLogo,  label: 'Python'     },
  { icon: FastAPILogo, label: 'FastAPI'    },
  { icon: DockerLogo,  label: 'Docker'     },
  { icon: PostgresLogo,label: 'PostgreSQL' },
  { icon: RedisLogo,   label: 'Redis'      },
  { icon: GitLogo,     label: 'Git'        },
];

function Particle({ x, y, size, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent-cyan/15"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y: [0, -25, 0],
        x: [0, 8, -4, 0],
        opacity: [0.15, 0.4, 0.15],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

function GradientBlob({ position, size, color, duration }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        ...position,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(60px)',
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.15, 0.9, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

function StackCard() {
  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative bg-bg-card/60 backdrop-blur-xl border border-border-subtle rounded-2xl p-6 shadow-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent-cyan/[0.03] to-transparent pointer-events-none" />
        <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-5 text-center">
          Production Stack
        </p>
        <div className="space-y-0">
          {STACK_ITEMS.map((item, i) => (
            <div key={item.label}>
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-bg-secondary/50 border border-border-subtle/50
                              hover:border-accent-cyan/20 transition-colors">
                <span className="flex items-center justify-center w-5 h-5 text-xs">{item.icon}</span>
                <span className="font-mono text-sm font-medium" style={{ color: item.color }}>
                  {item.label}
                </span>
              </div>
              {i < STACK_ITEMS.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="h-3 w-px bg-gradient-to-b from-accent-cyan/30 to-accent-cyan/5" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Tech logos below stack */}
        <div className="mt-5 pt-4 border-t border-border-subtle/50">
          <div className="flex flex-wrap gap-2 justify-center">
            {TECH_LOGOS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1 px-2 py-1 rounded-md
                bg-accent-cyan/5 border border-accent-cyan/10"
                title={label}>
                <Icon size={14} className="text-accent-cyan/70" />
                <span className="text-[9px] font-mono text-accent-cyan/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedStat({ value, suffix, label, meta, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  const displayValue = meta || (count + suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.55 + index * 0.06, duration: 0.4 }}
      className="bg-bg-card/50 border border-border-subtle rounded-xl p-4 text-center
                 hover:border-border-active/50 transition-all"
    >
      <div className="font-display font-black text-2xl text-accent-cyan mb-0.5">
        {displayValue}
      </div>
      <div className="text-[10px] text-text-muted font-mono uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
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
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
        );
      }, isDeleting ? 40 : 70);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient blobs */}
      <GradientBlob
        position={{ top: '10%', left: '-8%' }}
        size="650px"
        color="rgba(0,212,212,0.06)"
        duration={12}
      />
      <GradientBlob
        position={{ bottom: '5%', right: '-5%' }}
        size="550px"
        color="rgba(0,166,150,0.04)"
        duration={15}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* Large decorative text */}
      <div className="absolute right-0 bottom-0 text-[16vw] font-display font-black
                      text-white/[0.01] select-none pointer-events-none leading-none">
        AI
      </div>

      <div className="relative z-10 section-padding pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left column */}
          <div className="min-w-0">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                         bg-emerald-500/5 border border-emerald-500/15 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-400/80 tracking-wider">
                Building Production AI Systems
              </span>
              <span className="w-px h-3 bg-emerald-500/20" />
              <span className="text-[11px] font-mono text-text-muted">
                Available for AI Engineer Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-5"
            >
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary tracking-tight">
                {personalInfo.name}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-px w-6 bg-accent-cyan/40" />
                <span className="font-mono text-xs text-accent-cyan/60 tracking-wider">
                  {displayed}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="ml-0.5"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-8"
            >
              <h1 className="font-display font-black text-[2.5rem] sm:text-[3.25rem] md:text-[4rem]
                             lg:text-[4rem] xl:text-[4.5rem] leading-[1.05] tracking-tight text-text-primary">
                BUILDING
                <br />
                PRODUCTION
                <br />
                <span className="bg-gradient-to-r from-accent-cyan via-accent-teal to-accent-cyan
                                 bg-clip-text text-transparent">
                  AI SYSTEMS.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle — proof-based */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10"
            >
              From AI-powered event photography and enterprise payment recovery to intelligent
              interview automation, I design and deploy enterprise AI products powered by
              Computer Vision, Agentic AI, Large Language Models, and scalable backend architecture.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <button onClick={scrollToProjects} className="btn-primary group text-sm px-8 py-4">
                See My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href={personalInfo.resumeUrl} download className="btn-secondary text-sm px-8 py-4">
                <ArrowDown size={16} />
                Download Resume
              </a>
              <div className="flex items-center gap-2">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border-subtle
                             text-text-muted hover:text-accent-cyan hover:border-border-active transition-all
                             hover:bg-accent-glow">
                  <Github size={17} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border-subtle
                             text-text-muted hover:text-accent-cyan hover:border-border-active transition-all
                             hover:bg-accent-glow">
                  <Linkedin size={17} />
                </a>
              </div>
            </motion.div>

            {/* Deployment badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              {[
                { text: 'Live Applications',    icon: Check },
                { text: 'Production APIs',      icon: Check },
                { text: 'Open Source Projects', icon: Check },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <item.icon size={12} className="text-emerald-400" />
                  <span className="text-xs text-text-muted font-mono">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
            >
              {HERO_STATS.map((stat, i) => (
                <AnimatedStat key={i} {...stat} index={i} />
              ))}
            </motion.div>

          </div>

          {/* Right column — AI Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden lg:flex justify-center"
          >
            <StackCard />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono text-text-muted/40 tracking-widest uppercase">
          Explore My Work
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-accent-cyan/40" />
        </motion.div>
      </motion.div>

    </section>
  );
}

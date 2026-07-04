import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Cpu, Eye, Cloud, ArrowDown, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const BUILD_CATEGORIES = [
  { icon: Brain, title: 'Agentic AI Systems',       desc: 'Multi-step LLM orchestration, LangGraph workflows, and autonomous execution pipelines.' },
  { icon: Eye,   title: 'Computer Vision Systems',  desc: 'Facial recognition, image processing pipelines, and real-time detection with CompreFace.' },
  { icon: Cpu,   title: 'Backend AI Platforms',     desc: 'FastAPI, Node.js, Spring Boot — enterprise-grade APIs with structured AI decision memory.' },
  { icon: Cloud, title: 'Cloud Infrastructure',     desc: 'Docker, GCP, PostgreSQL, Redis — scalable deployments serving production AI workloads.' },
];

const WORKFLOW_STEPS = ['Problem', 'Architecture', 'Backend', 'AI Integration', 'Deployment'];

const HIGHLIGHTS = [
  { label: 'Production AI Systems', value: '7+' },
  { label: 'Industry Internships',   value: '2' },
  { label: 'Live Deployments',      value: '4+' },
  { label: 'Open Source Projects',  value: '6' },
];

const SHIPPED_PROJECTS = [
  { name: 'AI Tutor Screener',    tag: 'Voice AI',    color: '#00d4d4' },
  { name: 'RevenueGuard AI',      tag: 'Agentic AI',  color: '#f59e0b' },
  { name: 'EventLens AI',         tag: 'Full-Stack', color: '#8b5cf6' },
  { name: 'AI Startup Evaluator', tag: 'LLM + FAISS', color: '#00a896' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32">

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-border-active to-transparent" />

      <div className="section-padding">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >

          {/* Section label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
              01 / About
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-accent-cyan/30 to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={fadeInUp} className="section-title mb-6">
            I engineer production AI products
            <span className="block text-accent-cyan">that automate real workflows.</span>
          </motion.h2>

          {/* Personal approach */}
          <motion.p variants={fadeInUp}
            className="text-text-secondary text-lg leading-relaxed max-w-3xl mb-6">
            I enjoy designing production-grade AI platforms where backend engineering,
            cloud infrastructure, and intelligent models work together. From facial
            recognition systems to agentic payment recovery engines, I build software
            that is scalable, maintainable, deployed to production — not just prototypes.
          </motion.p>

          {/* Identity paragraph */}
          <motion.p variants={fadeInUp}
            className="text-text-secondary leading-relaxed max-w-3xl mb-16">
            I design and deploy intelligent products — from LLM-powered interview automation
            and enterprise payment recovery platforms to machine learning systems and
            agentic AI workflows. Every product I engineer is deployed, functional, and
            solving a real business problem.
          </motion.p>

          {/* Grid: What I Build + Workflow + Highlights + Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">

            {/* Left column */}
            <div className="space-y-8">

              {/* What I Build */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                  What I Build
                </h3>
                <div className="space-y-3">
                  {BUILD_CATEGORIES.map((item) => (
                    <div key={item.title}
                      className="card-base card-hover p-4 flex items-start gap-4 group cursor-default">
                      <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20
                                      flex items-center justify-center flex-shrink-0
                                      group-hover:bg-accent-cyan/20 transition-colors">
                        <item.icon size={18} className="text-accent-cyan" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-text-primary text-sm mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Right column */}
            <div className="space-y-8">

              {/* Engineering Workflow */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                  Engineering Workflow
                </h3>
                <div className="card-base p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2">
                    {WORKFLOW_STEPS.map((step, i) => (
                      <div key={step} className="flex items-center gap-0 sm:gap-2 w-full sm:w-auto">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg
                                        bg-accent-cyan/5 border border-accent-cyan/10
                                        text-accent-cyan text-xs font-mono font-medium
                                        flex-1 sm:flex-initial text-center sm:text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60 flex-shrink-0" />
                          {step}
                        </div>
                        {i < WORKFLOW_STEPS.length - 1 && (
                          <ArrowDown size={12} className="text-accent-cyan/30 mx-auto sm:mx-0
                                                          rotate-90 sm:rotate-0 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                  Highlights
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {HIGHLIGHTS.map((item) => (
                    <div key={item.label}
                      className="card-base p-4 text-center hover:border-border-active/50 transition-all">
                      <div className="font-display font-black text-xl text-accent-cyan mb-0.5">
                        {item.value}
                      </div>
                      <div className="text-[10px] text-text-muted font-mono uppercase tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Shipped Projects */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                  Shipped Projects
                </h3>
                <div className="card-base p-5">
                  <div className="space-y-2">
                    {SHIPPED_PROJECTS.map((p) => (
                      <div key={p.name} className="flex items-center gap-3 p-2 rounded-xl
                        bg-bg-secondary/50 border border-border-subtle hover:border-border-active transition-all">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-text-secondary flex-1">{p.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                          style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}10` }}>
                          {p.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp}
            className="text-center p-8 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/10
                       max-w-2xl mx-auto">
            <p className="text-text-secondary text-sm leading-relaxed">
              Currently building enterprise AI products during my{' '}
              <span className="text-accent-cyan font-medium">AI Engineering internship</span> at Hamath OPC
              while actively pursuing full-time{' '}
              <span className="text-accent-cyan font-medium">AI Engineer</span> and{' '}
              <span className="text-accent-cyan font-medium">Machine Learning Engineer</span> roles.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

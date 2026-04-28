import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Rocket, Code2, Brain, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const highlights = [
  {
    icon: Rocket,
    title: "Ship Fast",
    desc: "End-to-end AI systems from concept to production in days. AI Tutor Screener deployed in just 5 days.",
  },
  {
    icon: Brain,
    title: "ML + Agentic AI",
    desc: "From LLM pipelines and RAG systems to agentic workflows — bridging research concepts with production reality.",
  },
  {
    icon: Code2,
    title: "Full-Stack AI",
    desc: "FastAPI backends, Streamlit frontends, vector databases, and cloud deployment — the complete stack.",
  },
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

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Text */}
            <div>
              <motion.h2 variants={fadeInUp} className="section-title mb-6">
                I build AI systems
                <span className="block text-accent-cyan">that actually ship.</span>
              </motion.h2>

              <motion.p variants={fadeInUp}
                className="text-text-secondary text-lg leading-relaxed mb-4">
                  I'm a final-year Computer Science student obsessively focused on 
                  building end-to-end AI products — not just models, but complete 
                  systems with APIs, frontends, and cloud deployments that actually work.
              </motion.p>

              <motion.p variants={fadeInUp}
                className="text-text-secondary leading-relaxed mb-6">
                  I've shipped 5 production AI systems — a voice-based 
                  interview platform, a VC-style startup evaluator, an aircraft predictive 
                  maintenance system, and an agentic lead capture workflow. Each one deployed, 
                  functional, and accessible via a live URL.
              </motion.p>

              {/* Info chips */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 tag">
                  <MapPin size={12} className="text-accent-cyan" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 tag">
                  <Rocket size={12} className="text-accent-cyan" />
                  <span>5 AI Products Shipped</span>
                </div>
                <div className="flex items-center gap-2 tag">
                  <Zap size={12} className="text-accent-cyan" />
                  <span>Open to Work — May 2026</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Highlight cards */}
            <motion.div variants={stagger} className="grid gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="card-base card-hover p-5 flex gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20
                                  flex items-center justify-center flex-shrink-0
                                  group-hover:bg-accent-cyan/20 transition-colors">
                    <item.icon size={18} className="text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
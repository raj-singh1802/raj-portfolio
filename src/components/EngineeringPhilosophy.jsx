import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const principles = [
  { icon: '🎯', title: 'Solve Real Problems',      desc: 'A system that works reliably matters more than one that impresses occasionally.' },
  { icon: '⚡', title: 'Build Reliable Systems',    desc: 'Automation only creates value when the underlying workflow is predictable and tested.' },
  { icon: '🔍', title: 'Keep AI Explainable',      desc: 'Every AI decision should have a traceable audit trail — from input to output.' },
  { icon: '🏗️', title: 'Ship to Production',       desc: 'Scalable, maintainable, and deployed — not demos, not prototypes.' },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function EngineeringPhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 md:py-32">

      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-border-active to-transparent" />

      <div className="section-padding">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >

          {/* Section label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
              07 / Principles
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-accent-cyan/30 to-transparent" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="section-title mb-6">
            Engineering
            <span className="text-accent-cyan"> Principles</span>
          </motion.h2>

          {/* Core statement */}
          <motion.p variants={fadeInUp}
            className="text-text-secondary text-lg leading-relaxed max-w-3xl mb-12">
            I believe AI should solve real business problems, not just generate impressive demos.
            My focus is on building scalable, maintainable, production-ready systems where backend
            engineering, cloud infrastructure, and intelligent models work together to create
            measurable value.
          </motion.p>

          {/* Principles */}
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p) => (
              <motion.div key={p.title} variants={fadeInUp}
                className="card-base card-hover p-5 group">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20
                               flex items-center justify-center text-lg flex-shrink-0
                               group-hover:bg-accent-cyan/20 transition-colors"
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-text-primary text-sm mb-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
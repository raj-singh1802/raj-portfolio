import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ArrowDownRight } from 'lucide-react';
import { experience } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const sectionBase = "p-5 rounded-xl bg-bg-secondary/40 border border-border-subtle/60";

function SectionHeading({ children }) {
  return (
    <h4 className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">
      {children}
    </h4>
  );
}

function AchievementItem({ text }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 mt-1.5 flex-shrink-0" />
      <span className="text-sm text-text-secondary leading-relaxed">{text}</span>
    </div>
  );
}

const YEAR_LABELS = ['2025', '2026'];

function TimelineConnector({ color, isLast, index }) {
  if (isLast) return null;
  return (
    <div className="flex flex-col items-center py-2">
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-border-subtle" />
        <span className="text-[10px] font-mono text-text-muted/40 tracking-widest">
          {YEAR_LABELS[index] || ''}
        </span>
        <div className="h-px w-8 bg-border-subtle" />
      </div>
      <div className="flex flex-col items-center gap-1 mt-1">
        <ArrowDownRight size={14} className="text-text-muted/30" />
        <div className="h-6 w-px bg-gradient-to-b from-border-subtle to-transparent" />
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 md:py-32">

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
              04 / Experience
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-accent-cyan/30 to-transparent" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Engineering
            <span className="text-accent-cyan"> Journey</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-text-secondary max-w-xl mb-14">
            From data analytics to enterprise AI platforms — a career built on shipping
            production systems that solve real business problems.
          </motion.p>

          {/* Resume Highlights */}
          <motion.div variants={fadeInUp}
            className="card-base p-5 mb-8 border-l-2"
            style={{ borderLeftColor: '#00d4d4' }}>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">
              Current Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Enterprise AI Platforms',
                'Agentic AI Systems',
                'Computer Vision',
                'Backend Architecture',
                'Production Deployment',
                'Cloud Infrastructure',
              ].map((item) => (
                <span key={item}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md
                            bg-accent-cyan/5 border border-accent-cyan/10
                            text-accent-cyan/80">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Experience entries */}
          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div
                  className="card-base p-0 overflow-hidden relative group"
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60
                               group-hover:opacity-100 transition-opacity z-10"
                    style={{
                      background: `linear-gradient(90deg, ${job.color}, transparent)`
                    }}
                  />

                  <div className="p-6 md:p-8">

                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start
                                    justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center
                                     text-2xl border border-white/5 flex-shrink-0"
                          style={{ background: `${job.color}15` }}
                        >
                          {job.icon}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-text-primary text-lg">
                            {job.role}
                          </h3>
                          <p className="font-medium mt-0.5" style={{ color: job.color }}>
                            {job.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:text-right">
                        <span className="tag text-xs">{job.period}</span>
                        <span className="flex items-center gap-1 tag text-xs">
                          <MapPin size={10} className="text-accent-cyan" />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    {job.summary && (
                      <p className="text-sm text-text-secondary leading-relaxed mb-6
                                    p-4 rounded-xl bg-bg-secondary/30 border border-border-subtle/50">
                        {job.summary}
                      </p>
                    )}

                    {/* Main content grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">

                      {/* Ownership */}
                      <div className={sectionBase}>
                        <SectionHeading>Ownership</SectionHeading>
                        <div className="space-y-2.5">
                          {job.ownership.map((item, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                style={{ background: job.color }}
                              />
                              <span className="text-sm text-text-secondary leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Products (if any) */}
                      {job.products.length > 0 && (
                        <div className={sectionBase}>
                          <SectionHeading>Products Shipped</SectionHeading>
                          <div className="space-y-3">
                            {job.products.map((p) => (
                              <div key={p.name}
                                className="flex items-start gap-3 p-3 rounded-xl
                                          bg-bg-card/50 border border-border-subtle/50">
                                <span className="text-lg flex-shrink-0 mt-0.5">{p.icon}</span>
                                <div>
                                  <span className="text-sm font-medium text-text-primary block"
                                    style={{ color: p.color }}>
                                    {p.name}
                                  </span>
                                  <span className="text-xs text-text-muted">{p.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Engineering */}
                      <div className={sectionBase}>
                        <SectionHeading>Engineering</SectionHeading>
                        <div className="flex flex-wrap gap-1.5">
                          {job.engineering.map((t) => (
                            <span key={t}
                              className="text-[11px] font-mono px-2 py-1 rounded-md
                                        bg-accent-cyan/5 border border-accent-cyan/10
                                        text-accent-cyan/80">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className={sectionBase}>
                        <SectionHeading>Key Achievements</SectionHeading>
                        <div className="space-y-2.5">
                          {job.achievements.map((a, j) => (
                            <AchievementItem key={j} text={a} />
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Business Impact */}
                    <div className="p-5 rounded-xl bg-accent-cyan/[0.03] border border-accent-cyan/10">
                      <SectionHeading>Business Impact</SectionHeading>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {job.impact.map((item, j) => (
                          <div key={j}
                            className="flex items-center gap-2.5 p-2.5 rounded-lg
                                      bg-bg-secondary/30 border border-border-subtle/40">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 flex-shrink-0" />
                            <span className="text-xs text-text-secondary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Career progression connector */}
                <TimelineConnector color={job.color} isLast={i === experience.length - 1} index={i} />
              </motion.div>
            ))}
          </div>

          {/* Career progression summary */}
          <motion.div variants={fadeInUp}
            className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-accent-cyan/[0.03] to-transparent
                       border border-accent-cyan/10 text-center">
            <p className="text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">
              <span className="text-accent-cyan font-medium">Business Analysis</span>
              {' '}→{' '}
              <span className="text-accent-cyan font-medium">AI Engineering</span>
              {' '}→{' '}
              <span className="text-accent-cyan font-medium">Enterprise AI Platforms</span>
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
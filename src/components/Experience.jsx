import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

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
          className="max-w-6xl mx-auto"
        >

          {/* Section label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
              04 / Experience
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-accent-cyan/30 to-transparent" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="section-title mb-12">
            Work
            <span className="text-accent-cyan"> Experience</span>
          </motion.h2>

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card-base card-hover p-8 relative overflow-hidden group"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60
                             group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, ${job.color}, transparent)`
                  }}
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start
                                justify-between gap-4 mb-5">
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
                    <span className="tag text-xs">
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1 tag text-xs">
                      <MapPin size={10} className="text-accent-cyan" />
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <div className="space-y-2.5 mb-5">
                  {job.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: job.color }}
                      />
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                  {job.tech.map((t) => (
                    <span key={t} className="tag-cyan text-xs">{t}</span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
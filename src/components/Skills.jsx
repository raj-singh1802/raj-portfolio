import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-body text-text-secondary">{name}</span>
        <span className="text-xs font-mono text-text-muted">{level}%</span>
      </div>
      <div className="h-1 bg-bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-teal"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.08,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, icon, items, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-base card-hover p-6 group"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20
                        flex items-center justify-center text-lg
                        group-hover:bg-accent-cyan/20 transition-colors">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-text-primary text-sm tracking-wide uppercase">
          {category}
        </h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-3">
        {items.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="relative py-24 md:py-32">

      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-border-active to-transparent" />

      <div className="section-padding">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="mb-14"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
                02 / Skills
              </span>
              <div className="h-px flex-1 max-w-xs
                              bg-gradient-to-r from-accent-cyan/30 to-transparent" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="section-title">
              Technical
              <span className="text-accent-cyan"> Arsenal</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="mt-4 text-text-secondary max-w-xl">
              From training models to deploying APIs — the full stack of modern AI engineering.
            </motion.p>
          </motion.div>

          {/* Skill cards grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {skills.map((s, i) => (
              <SkillCard key={s.category} {...s} index={i} />
            ))}
          </div>

          {/* Extra tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 card-base"
          >
            <p className="text-xs font-mono text-text-muted mb-4 uppercase tracking-widest">
              Also proficient in
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'TensorFlow','PyTorch','MNE-Python','SHAP','Scikit-learn',
                'Sentence Transformers','gTTS','ReportLab','Joblib',
                'Groq API','LLaMA-3.3','Whisper-v3','Power BI','ICA',
              ].map((tech) => (
                <span
                  key={tech}
                  className="tag text-xs py-1 hover:border-border-active
                             hover:text-text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
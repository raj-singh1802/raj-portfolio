import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { education, personalInfo } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 md:py-32">

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
              04 / Education
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-accent-cyan/30 to-transparent" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="section-title mb-12">
            Academic
            <span className="text-accent-cyan"> Background</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Education card */}
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card-base card-hover p-8 relative overflow-hidden group"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px]
                                bg-gradient-to-r from-accent-cyan to-transparent opacity-60
                                group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20
                                flex items-center justify-center mb-5
                                group-hover:bg-accent-cyan/20 transition-colors">
                  <GraduationCap size={22} className="text-accent-cyan" />
                </div>

                {/* Degree */}
                <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                  {edu.degree}
                </h3>
                <p className="text-accent-cyan font-medium mb-4">{edu.institution}</p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-1.5 tag">
                    <MapPin size={11} className="text-accent-cyan" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 tag">
                    <Calendar size={11} className="text-accent-cyan" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 tag">
                    <Star size={11} className="text-accent-cyan" />
                    <span>GPA {edu.gpa}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {edu.highlights.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60
                                      mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Right side: GPA display + thesis callout */}
            <motion.div variants={fadeInUp} className="space-y-5">

              {/* GPA Card */}
              {/* Shipped Projects Card */}
              <div className="card-base p-6 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, #00d4d4, transparent 70%)'
                    }}
                />
                <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                    Production Deployments
                </p>
                <div className="space-y-3">
                    {[
                        { icon: "🎙️", name: "AI Tutor Screener",    tag: "Voice AI",    color: "#00d4d4" },
                        { icon: "💡", name: "AI Startup Evaluator",  tag: "LLM + FAISS", color: "#00a896" },
                        { icon: "✈️", name: "AeroMind",              tag: "Predictive ML",color: "#0077b6" },
                        { icon: "🕸️", name: "AutoStream Agent",      tag: "Agentic AI",  color: "#6366f1" },
                    ].map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="flex items-center gap-3 p-2.5 rounded-xl
                                       bg-bg-secondary border border-border-subtle
                                       hover:border-border-active transition-all group"
                        >
                            <span className="text-lg">{project.icon}</span>
                            <span className="text-sm text-text-secondary group-hover:text-text-primary
                                             transition-colors flex-1">
                                {project.name}
                            </span>
                            <span
                                className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                                style={{
                                    color: project.color,
                                    borderColor: `${project.color}40`,
                                    background: `${project.color}10`,
                                }}
                            >
                                {project.tag}
                            </span>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-4 pt-3 border-t border-border-subtle flex justify-between items-center">
                    <span className="text-xs text-text-muted font-mono">Total shipped</span>
                    <span className="font-display font-black text-2xl text-accent-cyan">4+</span>
                </div>
              </div>

              {/* Graduation timeline */}
              <div className="card-base p-6">
                <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                  Timeline
                </p>
                <div className="space-y-3">
                  {[
                    { year: '2022', label: 'Joined KIIT University', done: true  },
                    { year: '2024', label: 'Started AI/ML specialization', done: true  },
                    { year: '2025', label: 'Started building production AI systems', done: true  },
                    { year: '2026', label: 'Graduating — May 2026', done: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0
                        ${item.done ? 'bg-accent-cyan' : 'bg-accent-cyan/30 border border-accent-cyan/50'}`}
                      />
                      <span className="font-mono text-xs text-text-muted w-10">
                        {item.year}
                      </span>
                      <span className={`text-sm ${item.done ? 'text-text-secondary' : 'text-accent-cyan'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
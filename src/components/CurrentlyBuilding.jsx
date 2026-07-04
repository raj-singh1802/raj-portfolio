import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    icon: '📸',
    name: 'EventLens AI',
    tag: 'Computer Vision',
    progress: 82,
    color: '#8b5cf6',
    status: 'Face recognition pipeline · Gallery generation · Cloud storage integration',
  },
  {
    icon: '🛡️',
    name: 'RevenueGuard AI',
    tag: 'Agentic AI',
    progress: 71,
    color: '#f59e0b',
    status: 'LLM strategy engine · Multi-agent orchestration · Recovery automation',
  },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function ProgressBar({ value, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function CurrentlyBuilding() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-16 md:py-20">
      <div className="section-padding">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
              Currently Building
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-border-active/30 to-transparent" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div key={p.name} variants={fadeInUp}
                className="card-base p-5 relative overflow-hidden group">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60
                             group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, ${p.color}, transparent)`
                  }}
                />
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-semibold text-text-primary text-sm">
                        {p.name}
                      </h3>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full border"
                        style={{
                          color: p.color,
                          borderColor: `${p.color}40`,
                          background: `${p.color}10`,
                        }}>
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-1">{p.status}</p>
                  </div>
                  <span className="font-mono text-xs font-medium" style={{ color: p.color }}>
                    {p.progress}%
                  </span>
                </div>
                <ProgressBar value={p.progress} color={p.color} delay={0.3 + i * 0.15} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp}
            className="mt-4 text-center">
            <span className="text-[10px] font-mono text-text-muted/40">
              Last updated — July 2026
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
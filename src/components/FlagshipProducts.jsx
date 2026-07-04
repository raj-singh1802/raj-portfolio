import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const products = [
  {
    icon: '📸',
    name: 'EventLens AI',
    tag: 'Computer Vision',
    tagColor: '#8b5cf6',
    status: 'Production MVP',
    statusColor: '#00d4d4',
    description: 'Enterprise event photography platform with facial recognition, selfie search, and personalized gallery generation.',
    capabilities: ['Face Recognition', 'Selfie Search', 'Personalized Gallery', 'Cloud Storage', 'Docker Deployment'],
  },
  {
    icon: '🛡️',
    name: 'RevenueGuard AI',
    tag: 'Agentic AI',
    tagColor: '#f59e0b',
    status: 'Production Ready',
    statusColor: '#10b981',
    description: 'Enterprise Agentic AI payment recovery platform combining rule engines with LLM reasoning across 500+ invoices.',
    capabilities: ['Risk Engine', 'Priority Engine', 'Recommendation Engine', 'PostgreSQL Memory', 'REST APIs'],
  },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function FlagshipProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="flagship" className="relative py-16 md:py-20">
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
            <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
              Flagship Products
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-accent-cyan/30 to-transparent" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {products.map((p, i) => (
              <motion.div key={p.name} variants={fadeInUp}
                className="card-base p-6 relative overflow-hidden group">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60
                             group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, ${p.tagColor}, transparent)`
                  }}
                />

                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-semibold text-text-primary text-sm">
                        {p.name}
                      </h3>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full border"
                        style={{
                          color: p.tagColor,
                          borderColor: `${p.tagColor}40`,
                          background: `${p.tagColor}10`,
                        }}>
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-1.5">{p.description}</p>
                  </div>
                </div>

                {/* Status badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: p.statusColor }} />
                  <span className="text-[10px] font-mono font-medium tracking-wider"
                    style={{ color: p.statusColor }}>
                    {p.status}
                  </span>
                </div>

                {/* Key Capabilities */}
                <div className="pt-3 border-t border-border-subtle/50">
                  <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block mb-2">
                    Key Capabilities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {p.capabilities.map((item) => (
                      <span key={item}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md
                                  bg-accent-cyan/5 border border-accent-cyan/10
                                  text-accent-cyan/70">
                        {item}
                      </span>
                    ))}
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
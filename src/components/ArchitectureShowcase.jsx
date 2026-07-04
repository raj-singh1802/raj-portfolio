import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { architectures } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const NODE_ICONS = {
  'nextjs': '⚛️', 'jwt': '🔐', 'spring': '🍃', 'redis': '⚡',
  'gcs': '☁️', 'compreface': '👁️', 'postgres': '🗄️', 'docker': '🐳', 'gallery': '🖼️',
  'api': '🚪', 'risk': '📊', 'priority': '📋', 'llm': '🧠',
  'recommend': '⚖️', 'memory': '💾', 'notify': '📨', 'recovery': '🔄',
};

const LAYER_LABELS = ['Client', 'Auth & API', 'Services & Storage', 'Data & Infra', 'Output'];

function FlowArrow() {
  return (
    <div className="flex justify-center py-0.5">
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
        <path d="M8 12L0 0H16L8 12Z" fill="rgba(0,212,212,0.15)" />
      </svg>
    </div>
  );
}

function NodeCard({ node, active, onToggle, color }) {
  return (
      <motion.button
        onClick={() => onToggle(node.id)}
        className={`relative w-full rounded-xl border transition-all text-left overflow-hidden cursor-pointer
          ${active
            ? 'border-accent-cyan/40 bg-accent-cyan/[0.06] shadow-lg shadow-accent-cyan/5'
            : 'border-border-subtle bg-bg-secondary/50 hover:border-border-active hover:bg-bg-secondary/80'
          }`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        aria-expanded={active}
        aria-label={`Toggle ${node.label} details`}
      >
        <div className="p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm">{NODE_ICONS[node.id] || '🔧'}</span>
            <span className="text-xs font-mono font-medium text-text-primary truncate">
              {node.label}
            </span>
          </div>
        </div>
        {active && (
          <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
        )}
      </motion.button>
  );
}

function ArchitectureDiagram({ arch, index }) {
  const [activeNode, setActiveNode] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const layers = [...new Set(arch.nodes.map(n => n.layer))].sort();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="card-base overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 md:p-8 pb-4 border-b border-border-subtle/50">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">{arch.icon}</span>
          <div>
            <h3 className="font-display font-bold text-text-primary text-lg">{arch.title}</h3>
            <p className="text-xs text-text-muted">{arch.tagline}</p>
          </div>
        </div>
      </div>

      {/* Architecture diagram */}
      <div className="p-6 md:p-8 pt-6">
        <div className="space-y-2">
          {layers.map((layer, li) => (
            <div key={layer}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[9px] font-mono text-text-muted/50 uppercase tracking-wider w-20 flex-shrink-0">
                  {LAYER_LABELS[layer] || `Layer ${layer}`}
                </span>
                <div className="h-px flex-1 bg-border-subtle/30" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {arch.nodes.filter(n => n.layer === layer).map((node) => (
                  <NodeCard
                    key={node.id}
                    node={node}
                    active={activeNode === node.id}
                    onToggle={(id) => setActiveNode(activeNode === id ? null : id)}
                    color={arch.color}
                  />
                ))}
              </div>
              {li < layers.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>

        {/* Active node detail */}
        <AnimatePresence mode="wait">
          {activeNode && (
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mt-4"
            >
              <div className="p-5 rounded-xl bg-bg-secondary/40 border border-border-subtle/60">
                <div className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">
                    {NODE_ICONS[activeNode] || '🔧'}
                  </span>
                  <div className="min-w-0">
                    <span className="text-sm font-medium text-text-primary block mb-1">
                      {arch.nodes.find(n => n.id === activeNode)?.label}
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {arch.nodes.find(n => n.id === activeNode)?.detail}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ArchitectureShowcase() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="architecture" className="relative py-24 md:py-32">

      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-border-active to-transparent" />

      <div className="section-padding">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >

          {/* Section label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
              06 / Architecture
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-accent-cyan/30 to-transparent" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            System
            <span className="text-accent-cyan"> Architecture</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-text-secondary max-w-xl mb-14">
            Click any component to see how each fits into the system — from client to
            infrastructure.
          </motion.p>

          {/* Architecture diagrams */}
          <div className="space-y-8">
            {architectures.map((arch, i) => (
              <ArchitectureDiagram key={arch.id} arch={arch} index={i} />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stacks = [
  {
    icon: '📸',
    name: 'EventLens AI',
    color: '#8b5cf6',
    layers: [
      { label: 'Frontend',     tech: 'Next.js 16 + Zustand', desc: 'React-based UI with state management, canvas HEIC re-encoding, and responsive gallery' },
      { label: 'Auth',         tech: 'JWT Authentication',  desc: 'Token-based auth securing all API and storage access across the platform' },
      { label: 'Backend',      tech: 'Spring Boot 3.4',     desc: 'Java REST API with multipart upload handling and ImageIO re-encoding pipeline' },
      { label: 'Cache',        tech: 'Redis',               desc: 'In-memory caching for JWT sessions and frequent face search results' },
      { label: 'Storage',      tech: 'Google Cloud Storage',desc: 'Provider-agnostic media storage with signed URL delivery for photos' },
      { label: 'AI',           tech: 'CompreFace',          desc: 'Self-hosted facial recognition with 80% confidence threshold and subject registration' },
      { label: 'Database',     tech: 'PostgreSQL',          desc: 'Relational storage for events, subjects, face embeddings, and gallery data' },
      { label: 'Infra',        tech: 'Docker (7 services)', desc: 'Orchestrated containers: frontend, backend, CompreFace, PostgreSQL, Redis, and more' },
    ],
  },
  {
    icon: '🛡️',
    name: 'RevenueGuard AI',
    color: '#f59e0b',
    layers: [
      { label: 'Gateway',      tech: 'Node.js / Express',   desc: 'API gateway routing to 8 microservices with validation, rate limiting, and webhooks' },
      { label: 'Rules',        tech: 'Risk Engine',         desc: 'Deterministic scoring based on payment history, amount, segment, and overdue duration' },
      { label: 'Scheduling',   tech: 'Priority Engine',     desc: 'Rule-based scheduler ranking recovery actions by risk score and customer value' },
      { label: 'AI',           tech: 'Groq LLM (Llama 3.3)',desc: 'LLM generating personalized recovery strategies with risk summaries and escalation plans' },
      { label: 'Decision',     tech: 'Recommendation Engine', desc: 'Combines LLM output with rule validation for actionable recovery recommendations' },
      { label: 'Memory',       tech: 'PostgreSQL',          desc: 'Audit trail storing every AI decision with timestamps, reasoning, and outcomes' },
      { label: 'Notify',       tech: 'Twilio SMS / Email',  desc: 'Automated customer re-engagement and commitment reminder pipeline' },
      { label: 'Future',       tech: 'LangGraph Agents',    desc: 'Planned multi-agent orchestration for autonomous workflow execution' },
    ],
  },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function TechNode({ node, active, onToggle, color }) {
  return (
    <div>
      <motion.button
        onClick={() => onToggle(node.label)}
        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all border cursor-pointer
          ${active
            ? 'border-accent-cyan/30 bg-accent-cyan/5'
            : 'border-border-subtle bg-bg-secondary/30 hover:border-border-active hover:bg-bg-secondary/60'
          }`}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.99 }}
        aria-expanded={active}
        aria-label={`Toggle ${node.label} details`}
      >
        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
        <div className="flex-1 min-w-0">
          <span className="text-xs font-mono text-text-muted block">{node.label}</span>
          <span className="text-sm font-mono font-medium text-text-primary block truncate">
            {node.tech}
          </span>
        </div>
        <motion.svg
          animate={{ rotate: active ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className="text-text-muted flex-shrink-0"
        >
          <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="ml-4 pl-4 border-l border-accent-cyan/20 py-2">
              <p className="text-xs text-text-secondary leading-relaxed">{node.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InteractiveTechStack() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section id="tech-stack" className="relative py-24 md:py-32">

      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-border-active to-transparent" />

      <div className="section-padding">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
                Tech Stack
              </span>
              <div className="h-px flex-1 max-w-xs
                              bg-gradient-to-r from-accent-cyan/30 to-transparent" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="section-title mb-4">
              Platform
              <span className="text-accent-cyan"> Architecture</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-text-secondary max-w-xl mb-14">
              Click any component to see how each technology fits into the system design.
            </motion.p>
          </motion.div>

          <div className="space-y-10">
            {stacks.map((stack) => (
              <motion.div
                key={stack.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-base p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{stack.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-lg">{stack.name}</h3>
                    <p className="text-xs text-text-muted">Click each layer for details</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {stack.layers.map((node) => (
                    <TechNode
                      key={node.label}
                      node={node}
                      active={activeNode === `${stack.name}-${node.label}`}
                      onToggle={(id) =>
                        setActiveNode(activeNode === `${stack.name}-${id}` ? null : `${stack.name}-${id}`)
                      }
                      color={stack.color}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
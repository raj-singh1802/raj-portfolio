import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, Zap, ChevronRight } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const ALL_FILTERS = ['All', 'Python', 'FastAPI', 'Streamlit', 'LLM', 'ML', 'NLP', 'Deep Learning', 'FAISS', 'LangChain', 'LangGraph'];

function ProjectCard({ project, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const statusColor = project.status === 'Live'
    ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
    : 'text-purple-400 bg-purple-400/10 border-purple-400/20';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="card-base card-hover p-6 cursor-pointer group relative overflow-hidden"
    >
      {/* Colored top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60
                   group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl
                       border border-white/5"
            style={{ background: `${project.color}15` }}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="font-display font-bold text-text-primary text-base leading-tight">
              {project.title}
            </h3>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                              text-[10px] font-mono border mt-1 ${statusColor}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {project.status}
            </span>
          </div>
        </div>

        <ChevronRight
          size={16}
          className="text-text-muted group-hover:text-accent-cyan
                     group-hover:translate-x-1 transition-all mt-1"
        />
      </div>

      {/* Tagline */}
      <p className="text-xs font-mono text-accent-cyan/70 mb-2 leading-relaxed">
        {project.tagline}
      </p>

      {/* Short description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {project.shortDesc}
      </p>

      {/* Metrics row */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {project.metrics.slice(0, 2).map((m, i) => (
          <div key={i} className="bg-bg-secondary rounded-lg p-2.5 border border-border-subtle">
            <div className="font-mono font-bold text-sm" style={{ color: project.color }}>
              {m.value}
            </div>
            <div className="text-[10px] text-text-muted mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="tag text-[10px] py-0.5">{t}</span>
        ))}
        {project.tech.length > 4 && (
          <span className="tag text-[10px] py-0.5">+{project.tech.length - 4}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-3 border-t border-border-subtle">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-text-secondary
                       hover:text-accent-cyan transition-colors"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
        )}
        {project.links.api && (
          <a
            href={project.links.api}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-text-secondary
                       hover:text-accent-cyan transition-colors"
          >
            <Zap size={12} />
            API Docs
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-text-secondary
                       hover:text-accent-cyan transition-colors ml-auto"
          >
            <Github size={12} />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const statusColor = project.status === 'Live'
    ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
    : 'text-purple-400 bg-purple-400/10 border-purple-400/20';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(6,10,15,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-bg-card border border-border-active rounded-2xl
                   w-full max-w-2xl max-h-[85vh] overflow-y-auto"
      >
        {/* Modal top border */}
        <div
          className="h-[3px] rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border border-white/5"
                style={{ background: `${project.color}15` }}
              >
                {project.icon}
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-text-primary">
                  {project.title}
                </h2>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                                  text-xs font-mono border mt-1.5 ${statusColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {project.status}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors
                         w-8 h-8 flex items-center justify-center rounded-lg
                         hover:bg-bg-hover text-xl leading-none"
            >
              ✕
            </button>
          </div>

          {/* Tagline */}
          <p className="font-mono text-sm text-accent-cyan mb-4">{project.tagline}</p>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {project.metrics.map((m, i) => (
              <div key={i} className="bg-bg-secondary rounded-xl p-3 border border-border-subtle text-center">
                <div className="font-mono font-bold text-base" style={{ color: project.color }}>
                  {m.value}
                </div>
                <div className="text-[11px] text-text-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Achievement */}
          <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-2">
              <Zap size={14} className="text-accent-cyan mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-mono text-accent-cyan mb-1 uppercase tracking-wider">
                  Key Achievement
                </p>
                <p className="text-sm text-text-secondary">{project.achievement}</p>
              </div>
            </div>
          </div>

          {/* Full tech stack */}
          <div className="mb-6">
            <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="tag-cyan text-xs">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border-subtle">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                className="btn-primary text-xs py-2">
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
            {project.links.api && (
              <a href={project.links.api} target="_blank" rel="noopener noreferrer"
                className="btn-secondary text-xs py-2">
                <BookOpen size={13} /> API Docs
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                className="btn-secondary text-xs py-2">
                <Github size={13} /> GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tech.includes(activeFilter));

  return (
    <section id="projects" className="relative py-24 md:py-32">

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
            className="mb-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
                03 / Projects
              </span>
              <div className="h-px flex-1 max-w-xs
                              bg-gradient-to-r from-accent-cyan/30 to-transparent" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="section-title">
              Things I've
              <span className="text-accent-cyan"> Built & Shipped</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="mt-4 text-text-secondary max-w-xl">
              Production-ready AI systems with real deployments, real metrics, and real impact.
              Click any card to see full details.
            </motion.p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {ALL_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200
                  ${activeFilter === filter
                    ? 'bg-accent-cyan text-bg-primary font-bold'
                    : 'tag hover:border-border-active hover:text-text-primary'
                  }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 xl:grid-cols-2 gap-5"
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-muted font-mono">
              No projects found for "{activeFilter}"
            </div>
          )}

        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}
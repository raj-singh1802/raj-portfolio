import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, Zap, Layers, Target, TrendingUp, ChevronRight, X, ArrowRight, Lightbulb, Monitor } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects, CATEGORIES } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function ScreenshotPlaceholder({ src, alt, caption, color }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-border-subtle bg-bg-secondary/80 group">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
      ) : (
        <div className="aspect-video flex flex-col items-center justify-center gap-3"
          style={{ background: `linear-gradient(135deg, ${color}08, ${color}03)` }}>
          <Monitor size={32} className="text-accent-cyan/20" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/20" />
          </div>
        </div>
      )}
      {caption && (
        <div className="px-3 py-2 border-t border-border-subtle">
          <p className="text-[10px] text-text-muted font-mono">{caption}</p>
        </div>
      )}
    </div>
  );
}

function FeaturedCard({ project, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="card-base overflow-hidden group cursor-pointer relative"
      onClick={onOpen}
    >
      {/* Colored gradient banner */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44, transparent)` }} />

      <div className="p-8 md:p-10">
        <div className="grid md:grid-cols-5 gap-8 md:gap-10">
          {/* Left: content — 3 cols */}
          <div className="md:col-span-3 space-y-6">

            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border border-white/5"
                  style={{ background: `${project.color}15` }}>
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-text-primary">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                      text-[10px] font-mono border text-emerald-400 bg-emerald-400/10 border-emerald-400/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {project.status}
                    </span>
                    <span className="text-[10px] font-mono text-accent-cyan/60">Featured</span>
                  </div>
                </div>
              </div>
              <ChevronRight size={18}
                className="text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all mt-2 flex-shrink-0" />
            </div>

            {/* Tagline */}
            <p className="font-mono text-sm text-accent-cyan/80">{project.tagline}</p>

            {/* Problem */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Lightbulb size={12} className="text-accent-cyan/60" />
                <span className="text-[10px] font-mono text-accent-cyan/60 uppercase tracking-wider">Problem</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
            </div>

            {/* Architecture flow */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <Layers size={12} className="text-accent-cyan/60" />
                <span className="text-[10px] font-mono text-accent-cyan/60 uppercase tracking-wider">Architecture</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {project.architecture.split('→').map((part, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1.5 rounded-lg text-[11px] font-mono
                      bg-bg-secondary/80 border border-border-subtle text-text-secondary
                      hover:border-accent-cyan/20 transition-colors">
                      {part.trim()}
                    </span>
                    {i < project.architecture.split('→').length - 1 && (
                      <ArrowRight size={11} className="text-accent-cyan/25 flex-shrink-0" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge / Solution pairs */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <Target size={12} className="text-accent-cyan/60" />
                <span className="text-[10px] font-mono text-accent-cyan/60 uppercase tracking-wider">Key Challenges</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.challenges.slice(0, 2).map((c, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-bg-secondary/40 border border-border-subtle/50">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent-cyan/60 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-text-primary font-medium">{c.challenge}</p>
                        <p className="text-[11px] text-text-muted mt-0.5">{c.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics + Business Impact */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2 block">Metrics</span>
                <div className="grid grid-cols-2 gap-2">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="bg-bg-secondary rounded-lg p-2.5 border border-border-subtle text-center">
                      <div className="font-mono font-bold text-sm" style={{ color: project.color }}>{m.value}</div>
                      <div className="text-[10px] text-text-muted mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2 block">Business Impact</span>
                <div className="bg-bg-secondary/50 rounded-xl p-3 border border-border-subtle h-full flex items-center">
                  <div className="flex items-start gap-2">
                    <TrendingUp size={12} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-[11px] text-text-secondary leading-relaxed">{project.businessImpact}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-1">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn-primary text-xs py-2">
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
              {project.links.api && (
                <a href={project.links.api} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn-secondary text-xs py-2">
                  <BookOpen size={13} /> API Docs
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn-secondary text-xs py-2">
                  <Github size={13} /> GitHub
                </a>
              )}
            </div>
          </div>

          {/* Right: screenshots — 2 cols */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Screenshots</span>
            {project.screenshots?.slice(0, 2).map((s, i) => (
              <ScreenshotPlaceholder key={i} {...s} color={project.color} />
            ))}
            {project.screenshots?.length > 2 && (
              <p className="text-[10px] font-mono text-accent-cyan/50 text-center">+{project.screenshots.length - 2} more</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CaseCard({ project, index, onClick }) {
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
      <div className="h-[2px] opacity-60 group-hover:opacity-100 transition-opacity absolute top-0 left-0 right-0"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border border-white/5"
            style={{ background: `${project.color}15` }}>
            {project.icon}
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-text-primary">{project.title}</h3>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border mt-0.5 ${statusColor}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {project.status}
            </span>
          </div>
        </div>
        <ChevronRight size={14}
          className="text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
      </div>

      {/* Problem */}
      <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-3">{project.problem}</p>

      {/* Architecture mini flow */}
      <div className="flex flex-wrap items-center gap-1 mb-3">
        {project.architecture.split('→').slice(0, 3).map((part, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-bg-secondary/50 border border-border-subtle text-text-muted">
              {part.trim()}
            </span>
            {i < Math.min(2, project.architecture.split('→').length - 1) && (
              <ArrowRight size={8} className="text-accent-cyan/20 flex-shrink-0" />
            )}
          </span>
        ))}
      </div>

      {/* Challenge / Solution */}
      {project.challenges?.[0] && (
        <div className="p-2.5 rounded-lg bg-bg-secondary/30 border border-border-subtle/50 mb-3">
          <div className="flex items-start gap-1.5">
            <Target size={10} className="text-accent-cyan/50 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-text-primary font-medium">{project.challenges[0].challenge}</p>
              <p className="text-[9px] text-text-muted mt-0.5">{project.challenges[0].solution}</p>
            </div>
          </div>
        </div>
      )}

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {project.metrics.slice(0, 2).map((m, i) => (
          <div key={i} className="bg-bg-secondary rounded-lg p-2 border border-border-subtle text-center">
            <div className="font-mono font-bold text-xs" style={{ color: project.color }}>{m.value}</div>
            <div className="text-[9px] text-text-muted mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="tag text-[9px] py-0.5">{t}</span>
        ))}
        {project.tech.length > 3 && (
          <span className="tag text-[9px] py-0.5">+{project.tech.length - 3}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-2 pt-2.5 border-t border-border-subtle">
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-[10px] text-text-secondary hover:text-accent-cyan transition-colors">
            <ExternalLink size={10} /> Live
          </a>
        )}
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-[10px] text-text-secondary hover:text-accent-cyan transition-colors ml-auto">
            <Github size={10} /> GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CaseStudyModal({ project, onClose }) {
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
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-bg-card border border-border-active rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto"
      >
        <div className="h-[3px] rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        <div className="p-8">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border border-white/5"
                style={{ background: `${project.color}15` }}>
                {project.icon}
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-text-primary">{project.title}</h2>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border mt-1.5 ${statusColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />{project.status}
                </span>
              </div>
            </div>
            <button onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-bg-hover text-xl leading-none">✕</button>
          </div>

          <div className="space-y-6">
            <p className="font-mono text-sm text-accent-cyan">{project.tagline}</p>

            {/* Problem */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={14} className="text-accent-cyan" />
                <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">The Problem</span>
              </div>
              <p className="text-text-secondary leading-relaxed">{project.problem}</p>
            </div>

            {/* Architecture */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers size={14} className="text-accent-cyan" />
                <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Architecture</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                {project.architecture.split('→').map((part, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1.5 rounded-lg bg-bg-secondary border border-border-subtle text-text-secondary">
                      {part.trim()}
                    </span>
                    {i < project.architecture.split('→').length - 1 && (
                      <ArrowRight size={12} className="text-accent-cyan/40 flex-shrink-0" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target size={14} className="text-accent-cyan" />
                <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">Technical Challenges</span>
              </div>
              <div className="space-y-2">
                {project.challenges.map((c, i) => (
                  <div key={i} className="p-3 rounded-xl bg-bg-secondary/50 border border-border-subtle">
                    <div className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-text-primary font-medium">Challenge: {c.challenge}</p>
                        <div className="flex items-start gap-1.5 mt-1">
                          <ArrowRight size={11} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-text-secondary">Solution: {c.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2 block">Overview</span>
              <p className="text-text-secondary leading-relaxed">{project.description}</p>
            </div>

            {/* Business Impact */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <TrendingUp size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-mono text-emerald-400 mb-1 uppercase tracking-wider">Business Impact</p>
                  <p className="text-sm text-text-secondary">{project.businessImpact}</p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3 block">Metrics</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="bg-bg-secondary rounded-xl p-3 border border-border-subtle text-center">
                    <div className="font-mono font-bold text-base" style={{ color: project.color }}>{m.value}</div>
                    <div className="text-[11px] text-text-muted mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <Zap size={14} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-mono text-accent-cyan mb-1 uppercase tracking-wider">Key Achievement</p>
                  <p className="text-sm text-text-secondary">{project.achievement}</p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            {project.screenshots?.length > 0 && (
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3 block">Screenshots</span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.screenshots.map((s, i) => (
                    <ScreenshotPlaceholder key={i} {...s} color={project.color} />
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3 block">Tech Stack</span>
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
                  className="btn-primary text-xs py-2"><ExternalLink size={13} /> Live Demo</a>
              )}
              {project.links.api && (
                <a href={project.links.api} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2"><BookOpen size={13} /> API Docs</a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2"><Github size={13} /> GitHub</a>
              )}
            </div>
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

  const featured = projects.find((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured && (activeFilter === 'All' || p.category === activeFilter));
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);
  const showFeatured = activeFilter === 'All' || (featured && featured.category === activeFilter);

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
                03 / Case Studies
              </span>
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-accent-cyan/30 to-transparent" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="section-title">
              Production AI
              <span className="text-accent-cyan"> Engineering</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="mt-4 text-text-secondary max-w-xl">
              Real systems with real architecture decisions. Click any project for a full case study.
            </motion.p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200
                  ${activeFilter === cat
                    ? 'bg-accent-cyan text-bg-primary font-bold'
                    : 'tag hover:border-border-active hover:text-text-primary'
                  }`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured Project */}
          {showFeatured && featured && (
            <div className="mb-8">
              <span className="text-[10px] font-mono text-accent-cyan/50 uppercase tracking-widest mb-4 block">
                ⭐ Featured Project
              </span>
              <FeaturedCard project={featured} onOpen={() => setSelectedProject(featured)} />
            </div>
          )}

          {/* Secondary Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {secondary.map((project, i) => (
                <CaseCard
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

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

    </section>
  );
}

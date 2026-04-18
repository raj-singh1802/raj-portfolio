import { motion } from 'framer-motion';
import { Mail, Terminal, Heart } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
];

const socialLinks = [
  { icon: Github,   href: personalInfo.github,           label: 'GitHub'   },
  { icon: Linkedin, href: personalInfo.linkedin,          label: 'LinkedIn' },
  { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email'    },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border-subtle">

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px
                      bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

      <div className="section-padding py-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-10 mb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30
                                flex items-center justify-center">
                  <Terminal size={14} className="text-accent-cyan" />
                </div>
                <span className="font-display font-bold text-text-primary tracking-tight">
                  Raj Narayan Singh<span className="text-accent-cyan"></span>
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                Building end-to-end AI systems that ship to production.
                Open to new opportunities from May 2026.
              </p>
            </div>

            {/* Nav links */}
            <div>
              <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                Navigation
              </p>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-sm text-text-secondary hover:text-accent-cyan
                               transition-colors font-body"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social + Resume */}
            <div>
              <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                Connect
              </p>
              <div className="flex gap-3 mb-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 flex items-center justify-center rounded-xl
                               border border-border-subtle text-text-muted
                               hover:text-accent-cyan hover:border-border-active
                               transition-all"
                  >
                    <item.icon size={16} />
                  </a>
                ))}
              </div>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-secondary text-xs py-2 inline-flex"
              >
                Download Resume
              </a>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row
                          items-center justify-between gap-3">
            <p className="text-xs text-text-muted font-mono">
              © {new Date().getFullYear()} Raj Singh — All rights reserved
            </p>
            <p className="text-xs text-text-muted flex items-center gap-1.5">
              Built with
              <Heart size={11} className="text-accent-cyan fill-accent-cyan" />
              using React + Tailwind + Framer Motion
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
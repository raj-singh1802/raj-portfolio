import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const contactLinks = [
  {
    icon:  Mail,
    label: 'Email',
    value: 'rajsingh180204@gmail.com',   // ← UPDATE
    href:  'mailto:rajsingh180204@gmail.com',
    desc:  'Best way to reach me',
  },
  {
    icon:  Github,
    label: 'GitHub',
    value: 'github.com/raj-singh1802',
    href:  'https://github.com/raj-singh1802',
    desc:  'See my code & projects',
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/raj-singh',
    href:  'https://www.linkedin.com/in/raj-narayan-singh-1324421b7/', // ← UPDATE
    desc:  'Connect professionally',
  },
  {
    icon:  MapPin,
    label: 'Location',
    value: 'Bokaro Steel City, Jharkhand, India',
    href:  null,
    desc:  'Open to remote & relocation',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default mail client with pre-filled message
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">

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
              05 / Contact
            </span>
            <div className="h-px flex-1 max-w-xs
                            bg-gradient-to-r from-accent-cyan/30 to-transparent" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Let's Build
            <span className="text-accent-cyan"> Something</span>
          </motion.h2>

          <motion.p variants={fadeInUp}
            className="text-text-secondary max-w-xl mb-12 text-lg">
            I'm actively looking for Data Analyst, ML Engineer, and AI Engineer roles.
            Open to full-time positions, internships, and interesting collaborations.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left: Contact links */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {contactLinks.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="card-base card-hover p-5 group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20
                                      flex items-center justify-center flex-shrink-0
                                      group-hover:bg-accent-cyan/20 transition-colors">
                        <item.icon size={18} className="text-accent-cyan" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-text-primary font-medium text-sm group-hover:text-accent-cyan
                                      transition-colors">
                          {item.value}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20
                                      flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-accent-cyan" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-text-primary font-medium text-sm">{item.value}</p>
                        <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Contact form */}
            <motion.div variants={fadeInUp}>
              <div className="card-base p-8 relative overflow-hidden">

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px]
                                bg-gradient-to-r from-accent-cyan to-transparent opacity-60" />

                <h3 className="font-display font-bold text-text-primary text-lg mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div>
                    <label className="text-xs font-mono text-text-muted uppercase
                                      tracking-wider block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-bg-secondary border border-border-subtle rounded-xl
                                 px-4 py-3 text-sm text-text-primary placeholder-text-muted
                                 focus:outline-none focus:border-border-active
                                 transition-colors font-body"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-text-muted uppercase
                                      tracking-wider block mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-bg-secondary border border-border-subtle rounded-xl
                                 px-4 py-3 text-sm text-text-primary placeholder-text-muted
                                 focus:outline-none focus:border-border-active
                                 transition-colors font-body"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-text-muted uppercase
                                      tracking-wider block mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="I'd love to discuss an opportunity..."
                      className="w-full bg-bg-secondary border border-border-subtle rounded-xl
                                 px-4 py-3 text-sm text-text-primary placeholder-text-muted
                                 focus:outline-none focus:border-border-active
                                 transition-colors font-body resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary justify-center py-3"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle size={15} />
                        Opening Mail Client...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
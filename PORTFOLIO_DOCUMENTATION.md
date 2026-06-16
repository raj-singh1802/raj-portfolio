# Raj Narayan Singh — Portfolio Documentation

> **Last Updated:** June 2026  
> **Live Site:** [raj-portfolio-bay-eight.vercel.app](https://raj-portfolio-bay-eight.vercel.app)  
> **Repository:** [github.com/raj-singh1802/raj-portfolio](https://github.com/raj-singh1802/raj-portfolio)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Features & Functionality](#4-features--functionality)
5. [Personal Information](#5-personal-information)
6. [Navigation Structure](#6-navigation-structure)
7. [Component Breakdown](#7-component-breakdown)
8. [Skills Data](#8-skills-data)
9. [Projects Portfolio](#9-projects-portfolio)
10. [Experience](#10-experience)
11. [Education](#11-education)
12. [Styling System (Tailwind CSS)](#12-styling-system-tailwind-css)
13. [Configuration Files](#13-configuration-files)
14. [Deployment](#14-deployment)
15. [Customization Guide](#15-customization-guide)

---

## 1. Project Overview

This is a **modern, production-ready developer portfolio** for **Raj Narayan Singh**, an AI/ML Engineer. The portfolio showcases AI/ML projects, skills, professional experience, and education in an interactive, visually rich single-page application.

**Key Highlights:**
- Built as a Single Page Application (SPA) with smooth scroll navigation
- Dark theme with cyan/teal accent color system
- All animations powered by Framer Motion
- Centralized content management via a single data file
- Fully responsive across mobile, tablet, and desktop
- Deployed on Vercel with auto-deploy from GitHub

---

## 2. Tech Stack

| Category | Technology | Version/Details |
|----------|-----------|-----------------|
| **Framework** | React 19 | ^19.2.4 |
| **Build Tool** | Vite 8 | ^8.0.4 |
| **Styling** | Tailwind CSS v3 | ^3.4.19 |
| **Animations** | Framer Motion | ^12.38.0 |
| **Icons** | Lucide React | ^1.8.0 |
| **Fonts** | Google Fonts | Syne, DM Sans, JetBrains Mono |
| **Deployment** | Vercel | Auto-deploys from GitHub |
| **Linting** | ESLint | ^9.39.4 |
| **PostCSS** | PostCSS + Autoprefixer | ^8.5.10 / ^10.5.0 |

**Dependencies (package.json):**
```json
{
  "dependencies": {
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.8.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "postcss": "^8.5.10",
    "tailwindcss": "^3.4.19",
    "vite": "^8.0.4"
  }
}
```

---

## 3. Project Structure

```
raj-portfolio/
├── index.html                  # Entry HTML with SEO meta tags & Google Fonts
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration (React plugin)
├── tailwind.config.js          # Tailwind CSS theme customization
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
├── .gitignore                  # Git ignore rules
├── README.md                   # Project README
│
├── public/
│   ├── resume.pdf              # Downloadable resume file
│   ├── favicon.svg             # Browser favicon
│   └── icons.svg               # SVG icons
│
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Root component with layout & scroll progress
│   ├── App.css                 # (Legacy, not actively used)
│   ├── index.css               # Tailwind directives & custom component classes
│   │
│   ├── data/
│   │   └── portfolio.js        # ALL content data (centralized)
│   │
│   ├── assets/
│   │   ├── vite.svg
│   │   ├── react.svg
│   │   └── hero.png            # Hero section image asset
│   │
│   └── components/
│       ├── Navbar.jsx          # Fixed navigation with active section tracking
│       ├── Hero.jsx            # Landing section with typewriter & particles
│       ├── About.jsx           # About section with highlight cards
│       ├── Skills.jsx          # Animated skill bars by category
│       ├── Projects.jsx        # Filterable project cards + detail modals
│       ├── Experience.jsx      # Work experience timeline
│       ├── Education.jsx       # Education details & timeline
│       ├── Contact.jsx         # Contact links & message form
│       ├── Footer.jsx          # Footer with nav, social links, and branding
│       └── BrandIcons.jsx      # Custom SVG icons for GitHub & LinkedIn
│
└── dist/                       # Production build output
    ├── index.html
    ├── favicon.svg
    ├── icons.svg
    └── assets/
        ├── index-CP7-28mZ.js
        └── index-Da_TjrJa.css
```

---

## 4. Features & Functionality

### 4.1 Interactive Features

| Feature | Description |
|---------|-------------|
| **Scroll Progress Bar** | Fixed bar at the very top showing reading progress |
| **Smooth Navigation** | Clicking nav links smoothly scrolls to sections |
| **Active Section Highlighting** | Navbar automatically highlights current section via IntersectionObserver |
| **Typewriter Animation** | Hero section cycles through roles with typing/deleting effect |
| **Animated Skill Bars** | Skill proficiency bars animate on scroll into view |
| **Project Filtering** | Filter projects by technology tags (Python, FastAPI, LLM, etc.) |
| **Project Detail Modals** | Click any project card to see full details, metrics, tech stack, and links |
| **Contact Form** | Form that opens the user's default mail client with pre-filled message |
| **Floating Particles** | Decorative animated particles in the hero section |
| **Responsive Design** | Fully responsive across mobile, tablet, and desktop breakpoints |
| **Mobile Hamburger Menu** | Mobile-friendly navigation drawer |

### 4.2 Animation System (Framer Motion)

All components use consistent animation variants:
- **fadeInUp**: Elements fade in and slide up from 30px below
- **stagger**: Children animate sequentially with staggered delays (0.08s–0.12s)
- **useInView**: Animations trigger once when elements enter the viewport
- **scrollYProgress**: Powers the scroll progress bar at the top
- **layoutId**: Shared layout animations for the navbar active indicator
- **AnimatePresence**: Smooth mount/unmount transitions for modals and mobile menu

---

## 5. Personal Information

**Source:** `src/data/portfolio.js` — `personalInfo` object

| Field | Value |
|-------|-------|
| **Name** | Raj Narayan Singh |
| **Role** | AI/ML Engineer |
| **Tagline** | "Building end-to-end AI systems that ship to production." |
| **Sub-Tagline** | "From concept to deployed product — in days, not months." |
| **Location** | Bokaro Steel City, Jharkhand, India |
| **Email** | rajsingh180204@gmail.com |
| **GitHub** | [github.com/raj-singh1802](https://github.com/raj-singh1802) |
| **LinkedIn** | [linkedin.com/in/raj-narayan-singh-1324421b7](https://www.linkedin.com/in/raj-narayan-singh-1324421b7/) |
| **Resume URL** | /resume.pdf |
| **University** | KIIT University |
| **Degree** | B.Tech Computer Science |
| **GPA** | 8.23 / 10 |
| **Graduation** | May 2026 |

### Stats Displayed in Hero Section

| Stat | Value |
|------|-------|
| AI Products Shipped | 5+ |
| Internships Completed | 2 |
| Days Fastest Deployment | 5 |
| Technologies Mastered | 10+ |

---

## 6. Navigation Structure

**Source:** `src/components/Navbar.jsx`

The fixed navbar has 6 navigation links:
1. **About** → `#about`
2. **Skills** → `#skills`
3. **Projects** → `#projects`
4. **Experience** → `#experience`
5. **Education** → `#education`
6. **Contact** → `#contact`

**Desktop:** Horizontal nav bar with an animated active indicator (spring-based `layoutId` animation). Includes a "Resume" download button.

**Mobile:** Hamburger menu toggles a vertical drawer with all links and a "Download Resume" button.

**Behavior:**
- Navbar background becomes translucent with blur on scroll (`scrolled` state at >50px scroll)
- Active section is tracked using `IntersectionObserver` with `threshold: 0.4`
- Clicking any link scrolls smoothly to the target section

---

## 7. Component Breakdown

### 7.1 App.jsx (Root Component)

- Sets up the scroll progress bar using `useScroll()` and `useSpring()`
- Renders a global background glow effect
- Wraps all sections in a `<main>` tag with proper z-index layering
- **Note:** There is a duplicate `<Projects />` render on line 48; the second instance is likely a bug

### 7.2 Navbar.jsx

**Props/State:**
- `scrolled` (boolean) — toggles background styling
- `menuOpen` (boolean) — mobile menu toggle
- `activeSection` (string) — currently visible section ID

**Key Features:**
- Logo with Terminal icon and name
- Desktop nav with animated active indicator
- Resume download button
- Mobile hamburger menu with AnimatePresence transitions
- Uses `IntersectionObserver` to track active section

### 7.3 Hero.jsx

**Roles cycled in typewriter:**
1. AI/ML Engineer
2. Agentic AI Engineer
3. Data Analyst
4. AI Product Builder
5. ML Engineer

**Key Features:**
- Animated floating particles (18 particles with random positions, sizes, durations)
- Grid background pattern
- Decorative large "AI" text watermark
- Pulsing accent orb with radial gradient
- Status badge: "AI Engineering Intern @ Hamath · Open to full-time"
- Typewriter effect with typing (80ms) and deleting (50ms) speeds
- CTA buttons: "View Projects", "Download Resume"
- Social links: GitHub, LinkedIn, Email
- Stats grid (4 cards with animated entrance)
- Scroll indicator at the bottom

### 7.4 About.jsx

**Highlight Cards:**
1. **Ship Fast** — "End-to-end AI systems from concept to production in days. AI Tutor Screener deployed in just 5 days."
2. **Agentic AI Engineering** — "Building multi-step execution pipelines, LLM orchestration, and autonomous workflow systems at internship level."
3. **Full-Stack AI** — "FastAPI backends, Streamlit frontends, vector databases, and cloud deployment."

**Info Chips:**
- Location (with MapPin icon)
- Number of AI products shipped
- "Open to Work — May 2026"

### 7.5 Skills.jsx

**Skill Categories (4 columns):**

| Category | Icon | Skills |
|----------|------|--------|
| **AI / ML** | 🤖 | LLMs & NLP (90%), Machine Learning (88%), Deep Learning (82%), Time-Series Analysis (78%), Vector Databases / FAISS (80%), LangGraph / LangChain (82%), Prompt Engineering (85%), Agentic AI / Orchestration (78%) |
| **Engineering** | ⚙️ | Python (92%), FastAPI (85%), Streamlit (90%), REST APIs (88%), Workflow Automation (80%) |
| **Data** | 📊 | SQL (85%), Pandas / NumPy (90%), Plotly / Matplotlib (85%), Power BI / DAX (75%), Excel / EDA (80%) |
| **Deployment** | 🚀 | Streamlit Cloud (90%), Render Cloud (82%), Vercel / Netlify (80%), Groq API / LLM APIs (88%), Joblib / Model Serving (78%) |

**Additional Skills Tags (section footer):**
TensorFlow, PyTorch, Scikit-learn, Sentence Transformers, LangGraph, LangChain, FAISS, Groq API, LLaMA-3.3, Whisper-v3, gTTS, ReportLab, Joblib, Power BI, DAX, Power Query, Prompt Engineering, Agentic AI, Webhook Integration, WhatsApp Cloud API

### 7.6 Projects.jsx

**Filter Options:** All, Python, FastAPI, Streamlit, LLM, ML, NLP, Deep Learning, FAISS, LangChain, LangGraph

**Project Cards:** Each shows:
- Icon + Title + Status badge (Live/Unreleased)
- Tagline (monospace, cyan text)
- Short description
- 2 key metrics
- Tech tags (up to 4 + overflow count)
- Action links: Live Demo, API Docs, GitHub
- Click to open detail modal

**Project Modal** shows:
- Full header with icon, title, status
- Complete description
- All 4 metrics
- Key Achievement highlight
- Full tech stack
- All available links (Live Demo, API Docs, GitHub)

**Note:** There are 4 projects in the data, but they render in a 2-column grid.

### 7.7 Experience.jsx

| Role | Company | Period | Type |
|------|---------|--------|------|
| **AI Engineering Intern** | Hamath OPC Pvt Ltd | May 2026 — Present | Remote |
| **Business Analyst Intern** | Labmentix Pvt Ltd | Jun 2025 — Dec 2025 | Remote |

**AI Engineering Intern — Key Points:**
- Developing AI-powered workflow automation and Agentic AI systems with multi-step execution pipelines using FastAPI and LLM-based architectures
- Building production-oriented conversational AI systems integrating structured execution pipelines, external APIs, and intelligent response handling
- Designing modular backend services for AI orchestration, request validation, and real-time workflow processing
- Exploring Agentic AI concepts including orchestration logic, autonomous workflow execution, and structured output generation
- **Tech:** Python, FastAPI, LangGraph, LLMs, Agentic AI, REST APIs

**Business Analyst Intern — Key Points:**
- Engineered automated Power BI dashboards and KPI reporting pipelines using Python and SQL, reducing manual reporting effort by ~40%
- Performed EDA on multi-domain business datasets, surfacing actionable operational and product insights
- Leveraged Groq API and Generative AI for SQL drafting, EDA documentation, and insight summarization — reducing analytics turnaround by ~30%
- **Tech:** Python, SQL, Power BI, Groq API, EDA, Plotly

### 7.8 Education.jsx

| Detail | Value |
|--------|-------|
| **Degree** | B.Tech — Computer Science & Engineering |
| **Institution** | KIIT University, Bhubaneswar, Odisha |
| **Period** | 2022 — May 2026 |
| **GPA** | 8.23 / 10 |

**Highlights:**
- Focus: Machine Learning, Deep Learning, Data Structures & Algorithms
- Relevant Courses: ML, NLP, DBMS, Algorithms, Statistics

**Right Column Cards:**
1. **Production Deployments list:**
   - AI Tutor Screener (Voice AI)
   - AI Startup Evaluator (LLM + FAISS)
   - AeroMind (Predictive ML)
   - AutoStream Agent (Agentic AI)
   - Total shipped: 4+

2. **Timeline:**
   - 2022: Joined KIIT University
   - 2024: Started AI/ML specialization
   - 2025: Started building production AI systems
   - 2026: Graduated — May 2026

### 7.9 Contact.jsx

**Contact Links:**
1. **Email** — rajsingh180204@gmail.com ("Best way to reach me")
2. **GitHub** — github.com/raj-singh1802 ("See my code & projects")
3. **LinkedIn** — linkedin.com/in/raj-singh ("Connect professionally")
4. **Location** — Bokaro Steel City, Jharkhand, India ("Open to remote & relocation")

**Contact Form:**
- Fields: Name, Email, Message
- On submit, opens default mail client via `mailto:` link with pre-filled subject and body
- Shows "Opening Mail Client..." confirmation for 4 seconds

**Call to Action:** "I'm actively looking for Data Analyst, ML Engineer, and AI Engineer roles. Open to full-time positions, internships, and interesting collaborations."

### 7.10 Footer.jsx

**Sections:**
1. **Brand** — Logo, name, tagline, "Open to new opportunities from May 2026"
2. **Navigation** — 2-column grid of all 6 section links
3. **Connect** — GitHub, LinkedIn, Email icons + Resume download button

**Bottom Bar:**
- Copyright: "© 2026 Raj Singh — All rights reserved"
- Built with: "React + Tailwind + Framer Motion" with heart icon

### 7.11 BrandIcons.jsx

Custom SVG implementations for:
- **GitHub** — Standard GitHub mark icon (24x24 viewBox)
- **LinkedIn** — Standard LinkedIn "in" icon (24x24 viewBox)

Both accept `size`, `className`, and other SVG props.

---

## 8. Skills Data

**Source:** `src/data/portfolio.js` — `skills` array

Full skill breakdown with proficiency levels (0–100%):

### AI / ML
- LLMs & NLP: 90%
- Machine Learning: 88%
- Deep Learning: 82%
- Time-Series Analysis: 78%
- Vector Databases (FAISS): 80%
- LangGraph / LangChain: 82%
- Prompt Engineering: 85%
- Agentic AI / Orchestration: 78%

### Engineering
- Python: 92%
- FastAPI: 85%
- Streamlit: 90%
- REST APIs: 88%
- Workflow Automation: 80%

### Data
- SQL: 85%
- Pandas / NumPy: 90%
- Plotly / Matplotlib: 85%
- Power BI / DAX: 75%
- Excel / EDA: 80%

### Deployment
- Streamlit Cloud: 90%
- Render Cloud: 82%
- Vercel / Netlify: 80%
- Groq API / LLM APIs: 88%
- Joblib / Model Serving: 78%

---

## 9. Projects Portfolio

**Source:** `src/data/portfolio.js` — `projects` array

### Project 1: AI Tutor Screener

| Field | Details |
|-------|---------|
| **Status** | Live 🟢 |
| **Tagline** | End-to-end AI voice interview system — concept to deployment in 5 days |
| **Description** | Production-ready voice-based interview platform that screens tutor candidates automatically. Features real-time speech-to-text (Groq Whisper), adaptive AI questioning (LLaMA-3.1), and structured evaluation across 5 pedagogical dimensions with evidence-based scoring. |
| **Display Tech** | FastAPI, Streamlit, LLM, NLP, Python |
| **Full Tech Stack** | FastAPI, Streamlit, Groq API, LLaMA-3.3-70b, Whisper-v3, gTTS, ReportLab, Plotly |
| **Metrics** | Interview Duration: 8–10 min, Evaluation Time: <15s, Transcription Latency: <2s, Built In: 5 Days |
| **Key Achievement** | Complete voice-first UX with adaptive follow-up questions based on candidate responses |
| **Links** | [Live Demo](https://ai-tutor-screener.streamlit.app), [API Docs](https://ai-tutor-screener-0t51.onrender.com/docs), [GitHub](https://github.com/raj-singh1802/ai-tutor-screener) |

### Project 2: AI Startup Evaluator

| Field | Details |
|-------|---------|
| **Status** | Live 🟢 |
| **Tagline** | VC-style startup evaluation powered by LLMs and vector similarity search |
| **Description** | End-to-end AI platform that simulates venture capital decision-making. Analyzes startup ideas through multi-stage pipeline: industry classification, market potential estimation, AI-driven scoring (0–10), funding probability prediction (0–100%), and FAISS-powered similarity search across 500+ startup database. |
| **Display Tech** | Python, Streamlit, LLM, FAISS, NLP |
| **Full Tech Stack** | Python, Streamlit, Groq API, Sentence Transformers, FAISS, Plotly, Pandas |
| **Metrics** | Startup Database: 500+, Scoring Range: 0–10, Funding Predict: 0–100%, Pipeline Stages: 5-step |
| **Key Achievement** | Fully AI-driven pipeline integrating LLM reasoning with vector similarity search |
| **Links** | [Live Demo](https://ai-startup-evaluator.streamlit.app), [GitHub](https://github.com/raj-singh1802/ai-startup-evaluator) |

### Project 3: Aircraft Engine Predictive Maintenance System

| Field | Details |
|-------|---------|
| **Status** | Live 🟢 |
| **Tagline** | Production ML system predicting aircraft engine failure with time-series analysis |
| **Description** | Full-stack predictive maintenance system estimating Remaining Useful Life (RUL) of aircraft engines using multivariate sensor data. Engineered time-series features (rolling stats, temporal deltas), deployed Random Forest models for RUL prediction and failure risk classification. |
| **Display Tech** | Python, ML, FastAPI, Streamlit |
| **Full Tech Stack** | Python, Scikit-learn, FastAPI, Streamlit, Joblib, Pandas, NumPy, Render |
| **Metrics** | MAE: ~13.7 cycles, RMSE: ~18.8 cycles, Risk Levels: 3 classes, Backend: FastAPI |
| **Key Achievement** | Solved production feature consistency challenges between training and inference pipelines |
| **Links** | [Live Demo](https://aircraft-engine-predictive-maintenance-system.streamlit.app/), [GitHub](https://github.com/raj-singh1802/aircraft-engine-predictive-maintenance) |

### Project 4: AutoStream Agent

| Field | Details |
|-------|---------|
| **Status** | Unreleased 🟣 |
| **Tagline** | LangGraph agentic workflow converting conversations into qualified leads — built as ML internship assignment |
| **Description** | Developed an end-to-end agentic workflow for AutoStream (AI video editing SaaS) using LangGraph and FastAPI. The agent routes conversations via a 5-class intent classifier, retrieves accurate answers from a local FAISS knowledge base, and captures qualified leads through a stateful multi-turn workflow. Features graceful degradation — runs fully on rule-based fallback without any LLM API. WhatsApp webhook integration via Meta Cloud API with session tracking by phone number. |
| **Display Tech** | Python, LangGraph, LLM, FAISS, FastAPI |
| **Full Tech Stack** | Python, LangGraph, LangChain, FastAPI, FAISS, Sentence-Transformers, OpenAI API, REST APIs, WhatsApp Cloud API |
| **Metrics** | Intent Classes: 5-class, Vector Chunks: ~32 chunks, Test Coverage: 18/18 ✓, Fallback Mode: Zero-API |
| **Key Achievement** | Modular LangGraph nodes with conditional routing, stateful multi-turn lead capture, and full fallback mode — no LLM API dependency required |
| **Links** | [GitHub](https://github.com/raj-singh1802/autostream-agent) |

---

## 10. Experience

### AI Engineering Intern — Hamath OPC Pvt Ltd
- **Period:** May 2026 — Present
- **Type:** Remote
- Developing AI-powered workflow automation and Agentic AI systems with multi-step execution pipelines using FastAPI and LLM-based architectures
- Building production-oriented conversational AI systems integrating structured execution pipelines, external APIs, and intelligent response handling
- Designing modular backend services for AI orchestration, request validation, and real-time workflow processing
- Exploring Agentic AI concepts including orchestration logic, autonomous workflow execution, and structured output generation
- **Tech:** Python, FastAPI, LangGraph, LLMs, Agentic AI, REST APIs

### Business Analyst Intern — Labmentix Pvt Ltd
- **Period:** Jun 2025 — Dec 2025
- **Type:** Remote
- Engineered automated Power BI dashboards and KPI reporting pipelines using Python and SQL, reducing manual reporting effort by ~40%
- Performed EDA on multi-domain business datasets, surfacing actionable operational and product insights
- Leveraged Groq API and Generative AI for SQL drafting, EDA documentation, and insight summarization — reducing analytics turnaround by ~30%
- **Tech:** Python, SQL, Power BI, Groq API, EDA, Plotly

---

## 11. Education

| Detail | Value |
|--------|-------|
| **Degree** | B.Tech — Computer Science & Engineering |
| **Institution** | KIIT University |
| **Location** | Bhubaneswar, Odisha |
| **Period** | 2022 — May 2026 |
| **GPA** | 8.23 / 10 |

**Focus Areas:**
- Machine Learning, Deep Learning, Data Structures & Algorithms
- Relevant Courses: ML, NLP, DBMS, Algorithms, Statistics

---

## 12. Styling System (Tailwind CSS)

### Custom Theme (`tailwind.config.js`)

**Fonts:**
- `display`: Syne (headings)
- `body`: DM Sans (body text)
- `mono`: JetBrains Mono (code/monospace elements)

**Color Palette:**

| Token | Hex/RGBA | Usage |
|-------|----------|-------|
| `bg-primary` | `#060a0f` | Main background |
| `bg-secondary` | `#0c1420` | Secondary background |
| `bg-card` | `#0f1a26` | Card backgrounds |
| `bg-hover` | `#142030` | Hover state backgrounds |
| `accent-cyan` | `#00d4d4` | Primary accent (cyan) |
| `accent-teal` | `#00a896` | Secondary accent (teal) |
| `accent-blue` | `#0077b6` | Accent blue |
| `accent-glow` | `rgba(0,212,212,0.15)` | Glow effects |
| `text-primary` | `#e8f4f8` | Main text |
| `text-secondary` | `#8fa8bc` | Secondary text |
| `text-muted` | `#4a6070` | Muted text |
| `border-subtle` | `rgba(0,212,212,0.08)` | Subtle borders |
| `border-active` | `rgba(0,212,212,0.3)` | Active borders |

### Custom CSS Classes (`index.css`)

| Class | Purpose |
|-------|---------|
| `.section-padding` | Consistent horizontal padding (px-6 to px-32 responsive) |
| `.section-title` | Heading style for sections (font-display, bold, 3xl–5xl) |
| `.card-base` | Base card styling (bg-card, border, rounded-2xl) |
| `.card-hover` | Hover state for cards (bright border, lighter bg, shadow) |
| `.btn-primary` | Primary CTA button (cyan bg, dark text, hover lift) |
| `.btn-secondary` | Secondary CTA button (border only, cyan text, hover lift) |
| `.tag` | Default tag/chip (bg-secondary, border, monospace) |
| `.tag-cyan` | Cyan accent tag (glow bg, active border, cyan text) |
| `.grid-bg` | Subtle grid pattern background |
| `.glow-pulse` | Pulsing glow animation (3s cycle) |

### Animations
- `particleFloat`: Floating particle movement (custom keyframes)
- `glowPulse`: Pulsing box-shadow glow effect
- Custom scrollbar styles (thin, cyan-themed)

---

## 13. Configuration Files

### vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()] })
```

### tailwind.config.js
- Content paths: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
- Custom fonts, colors, and background images
- See [Section 12](#12-styling-system-tailwind-css) for full details

### postcss.config.js
```js
export default { plugins: { tailwindcss: {}, autoprefixer: {} } }
```

### index.html
- SEO meta tags (title, description, keywords, author)
- Open Graph tags (og:type, og:title, og:description)
- Twitter card tags
- Google Fonts preconnect & stylesheet links
- Root div (`#root`) and module script entry point

### eslint.config.js
- Standard React + Vite ESLint configuration

---

## 14. Deployment

### Live Site
- **URL:** [raj-portfolio-bay-eight.vercel.app](https://raj-portfolio-bay-eight.vercel.app)
- **Platform:** Vercel
- **Auto-deploy:** Automatic deployments on every push to the main branch

### Build Commands
```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Build Output (`dist/`)
```
dist/
├── index.html
├── favicon.svg
├── icons.svg
└── assets/
    ├── index-CP7-28mZ.js      # Bundled JavaScript
    └── index-Da_TjrJa.css     # Bundled CSS
```

---

## 15. Customization Guide

All portfolio content is centralized in **`src/data/portfolio.js`**. To update any content, edit this single file.

### What You Can Change:

| Data Field | Section Affected |
|------------|-----------------|
| `personalInfo` | Name, role, tagline, location, email, social links, resume URL, education details |
| `stats` | Hero section stat counters |
| `skills` | All skill categories, names, and proficiency levels |
| `projects` | All project cards, descriptions, metrics, tech stacks, links |
| `experience` | Work experience entries, descriptions, tech tags |
| `education` | Education details, highlights |

### To Add Your Resume:
1. Replace `public/resume.pdf` with your own PDF
2. The download link will automatically point to `/resume.pdf`

### To Modify Styling:
- Colors, fonts, spacing: Edit `tailwind.config.js`
- Component-level styles: Edit `src/index.css` custom classes
- Individual component styles: Edit the respective `.jsx` files

### To Update Social Links:
Edit the `personalInfo` object in `src/data/portfolio.js`:
```js
email: "your.email@example.com",
github: "https://github.com/your-username",
linkedin: "https://linkedin.com/in/your-profile",
```

---

## Known Issues / Notes

### Bug in App.jsx
There is a duplicate `<Projects />` component on **line 48** of `src/App.jsx`. The component is rendered twice:
```jsx
<Projects />   {/* line 47 */}
<Projects />   {/* line 48 — duplicate, likely a bug */}
```
This causes the project section's filters and state to be duplicated, which may cause unexpected behavior. The second instance should be removed.

### Inline Email in Contact.jsx
The contact email is hardcoded in `contactLinks` array (line 19) rather than using the `personalInfo.email` reference. If updating the email, both locations must be changed.

### Unused Files
- `src/App.css` — appears to be legacy, not actively imported
- `src/assets/vite.svg` and `src/assets/react.svg` — default Vite/React icons, not used in the portfolio

---

## Appendix: Public Assets

### public/resume.pdf
A downloadable resume file (placeholder — replace with actual resume).

### public/favicon.svg
Browser favicon for the portfolio.

### public/icons.svg
SVG icon sprite (additional icons if needed).

---

*Documentation generated from the portfolio source code at `D:\AI Engineer Projects\5. raj-portfolio\raj-portfolio`*

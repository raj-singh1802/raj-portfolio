// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const personalInfo = {
  name: "Raj Narayan Singh",
  role: "AI Engineer · Agentic AI Developer · Backend Engineer",
  tagline: "Building end-to-end AI systems that ship to production.",
  subTagline: "From concept to deployed product — in days, not months.",
  location: "Bokaro Steel City, Jharkhand, India",
  email: "rajsingh180204@gmail.com",              // ← UPDATE
  github: "https://github.com/raj-singh1802",
  linkedin: "https://www.linkedin.com/in/raj-narayan-singh-1324421b7/", // ← UPDATE
  resumeUrl: "/resume.pdf",
  university: "KIIT University",
  degree: "B.Tech Computer Science",
  gpa: "8.23 / 10",
  graduation: "Graduated May 2026",
};

export const stats = [
  { value: "5+",  label: "AI Products Shipped"    },
  { value: "2",   label: "Internships Completed"  },
  { value: "5",   label: "Days Fastest Deployment"},
  { value: "10+", label: "Technologies Mastered"  },
];

export const skills = [
  {
    category: "AI & LLMs",
    icon: "🤖",
    items: [
      { name: "LLM Integration & Prompt Eng.", level: 90 },
      { name: "Agentic AI & Orchestration",    level: 82 },
      { name: "LangGraph / LangChain",         level: 80 },
      { name: "Machine Learning / NLP",        level: 85 },
      { name: "FAISS / RAG Pipelines",         level: 82 },
    ],
  },
  {
    category: "Backend Engineering",
    icon: "⚙️",
    items: [
      { name: "Python / FastAPI",       level: 92 },
      { name: "Node.js / Express.js",   level: 72 },
      { name: "REST APIs & Webhooks",   level: 88 },
      { name: "PostgreSQL / SQL",       level: 82 },
      { name: "Docker",                 level: 68 },
    ],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    items: [
      { name: "Pandas / NumPy",          level: 90 },
      { name: "Plotly / Matplotlib",     level: 85 },
      { name: "Power BI / DAX",          level: 75 },
      { name: "EDA & Statistical Analysis", level: 80 },
    ],
  },
  {
    category: "Deployment & Tools",
    icon: "🚀",
    items: [
      { name: "Streamlit Cloud",         level: 90 },
      { name: "Render / Vercel",         level: 82 },
      { name: "Groq API / LLM APIs",     level: 88 },
      { name: "Prisma ORM",              level: 72 },
      { name: "Git / GitHub",            level: 88 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Tutor Screener",
    tagline: "End-to-end AI voice interview system — concept to deployment in 5 days",
    shortDesc: "Production-ready voice-based interview platform that screens tutor candidates automatically with adaptive AI questioning.",
    description: "Built a production-ready voice-based interview platform that screens tutor candidates automatically. Features real-time speech-to-text (Groq Whisper), adaptive AI questioning (LLaMA-3.1), and structured evaluation across 5 pedagogical dimensions with evidence-based scoring.",
    problem: "Tutor recruitment agencies screen hundreds of candidates manually — scheduling calls, taking notes, and evaluating communication skills inconsistently. The process is slow, subjective, and doesn't scale.",
    architecture: "Browser → FastAPI backend → Groq Whisper (STT) → LLaMA-3.3-70b (LLM) → gTTS (TTS) → ReportLab (PDF)",
    challenges: [
      "Real-time speech-to-text with <2s latency using Groq Whisper",
      "Adaptive question generation based on previous answers",
      "Multi-dimensional scoring across 5 pedagogical dimensions",
      "End-to-end voice UX with TTS and PDF report generation",
    ],
    tech: ["FastAPI", "Streamlit", "LLM", "NLP", "Python"],
    techStack: ["FastAPI", "Streamlit", "Groq API", "LLaMA-3.3-70b", "Whisper-v3", "gTTS", "ReportLab", "Plotly"],
    metrics: [
      { label: "Interview Duration",    value: "8–10 min" },
      { label: "Evaluation Time",       value: "<15s"     },
      { label: "Transcription Latency", value: "<2s"      },
      { label: "Built In",              value: "5 Days"   },
    ],
    achievement: "Complete voice-first UX with adaptive follow-up questions based on candidate responses",
    links: {
      live:   "https://ai-tutor-screener.streamlit.app",
      api:    "https://ai-tutor-screener-0t51.onrender.com/docs",
      github: "https://github.com/raj-singh1802/ai-tutor-screener",
    },
    color: "#00d4d4",
    icon: "🎙️",
    status: "Live",
  },
  {
    id: 2,
    title: "AI Startup Evaluator",
    tagline: "VC-style startup evaluation powered by LLMs and vector similarity search",
    shortDesc: "End-to-end AI platform simulating venture capital decision-making with LLM scoring and FAISS-powered search.",
    description: "End-to-end AI platform that simulates venture capital decision-making. Analyzes startup ideas through multi-stage pipeline: industry classification, market potential estimation, AI-driven scoring (0–10), funding probability prediction (0–100%), and FAISS-powered similarity search across 500+ startup database.",
    problem: "Startup founders need rapid, unbiased feedback on their ideas, but traditional VC evaluation is slow, expensive, and inaccessible to early-stage founders without connections.",
    architecture: "Browser → Streamlit → Groq API (LLM) → Sentence Transformers → FAISS index → 500+ startup DB → Plotly dashboard",
    challenges: [
      "Multi-stage pipeline with 5 distinct reasoning steps",
      "Integrating LLM scoring with vector similarity search",
      "Building a 500+ startup vector database from scratch",
      "Maintaining consistent scoring across diverse industries",
    ],
    tech: ["Python", "Streamlit", "LLM", "FAISS", "NLP"],
    techStack: ["Python", "Streamlit", "Groq API", "Sentence Transformers", "FAISS", "Plotly", "Pandas"],
    metrics: [
      { label: "Startup Database", value: "500+"   },
      { label: "Scoring Range",    value: "0–10"   },
      { label: "Funding Predict",  value: "0–100%" },
      { label: "Pipeline Stages",  value: "5-step" },
    ],
    achievement: "Fully AI-driven pipeline integrating LLM reasoning with vector similarity search",
    links: {
      live:   "https://ai-startup-evaluator.streamlit.app",
      github: "https://github.com/raj-singh1802/ai-startup-evaluator",
    },
    color: "#00a896",
    icon: "💡",
    status: "Live",
  },
  {
    id: 3,
    title: "Aircraft Engine Predictive Maintenance System",
    tagline: "Production ML system predicting aircraft engine failure with time-series analysis",
    shortDesc: "Full-stack predictive maintenance system benchmarking 5 ML algorithms on NASA CMAPSS dataset — Random Forest achieved R² of 0.87, outperforming baseline by 34%.",
    description: "Full-stack predictive maintenance system estimating Remaining Useful Life (RUL) of aircraft engines using multivariate sensor data. Engineered time-series features (rolling stats, temporal deltas), deployed Random Forest models for RUL prediction and failure risk classification.",
    problem: "Airlines lose millions to unexpected engine failures. Predicting Remaining Useful Life (RUL) from sensor data is critical for proactive maintenance, but requires bridging ML experimentation with a production-ready system.",
    architecture: "NASA CMAPSS data → Feature engineering → Grid Search (5 models) → Random Forest → FastAPI → Streamlit → Render",
    challenges: [
      "Feature consistency between training and inference pipelines",
      "Benchmarking 5 algorithms with cross-validated Grid Search",
      "Time-series feature engineering (rolling stats, temporal deltas)",
      "Deploying ML model behind a FastAPI endpoint with Joblib serialization",
    ],
    tech: ["Python", "ML", "FastAPI", "Streamlit"],
    techStack: ["Python", "Scikit-learn", "FastAPI", "Streamlit", "Joblib", "Pandas", "NumPy", "Render"],
    metrics: [
      { label: "R² Score",         value: "0.87"       },
      { label: "RMSE",             value: "~18 cycles"  },
      { label: "Algorithms Tested",value: "5 models"   },
      { label: "Baseline Beat",    value: "34%"         },
    ],
    achievement: "Benchmarked 5 algorithms with Grid Search tuning — Random Forest achieved R² 0.87, delivering 15–20 cycle advance warnings for proactive maintenance scheduling",
    links: {
      live:   "https://aircraft-engine-predictive-maintenance-system.streamlit.app/",
      // api:    "https://aircraft-engine-api.onrender.com/docs", 
      github: "https://github.com/raj-singh1802/aircraft-engine-predictive-maintenance",
    },
    color: "#0077b6",
    icon: "✈️",
    status: "Live",
  },
  {
    id: 5,
    title: "AutoStream Agent",
    tagline: "LangGraph agentic workflow converting conversations into qualified leads — built as ML internship assignment",
    shortDesc: "Production-grade conversational AI agent with intent classification, RAG pipeline, and multi-turn lead capture for a SaaS product. Fully functional with or without LLM API.",
    description: "Developed an end-to-end agentic workflow for AutoStream (AI video editing SaaS) using LangGraph and FastAPI. The agent routes conversations via a 5-class intent classifier, retrieves accurate answers from a local FAISS knowledge base, and captures qualified leads through a stateful multi-turn workflow. Features graceful degradation — runs fully on rule-based fallback without any LLM API. WhatsApp webhook integration via Meta Cloud API with session tracking by phone number.",
    problem: "AutoStream needed an automated lead qualification system that could handle customer conversations, answer product questions, and capture interested leads — without requiring constant human supervision.",
    architecture: "WhatsApp → Webhook → FastAPI → LangGraph (5-class intent) → FAISS RAG → Stateful lead capture → Response",
    challenges: [
      "Designing a 5-class intent classifier with conditional LangGraph routing",
      "Building a FAISS knowledge base from product documentation",
      "Stateful multi-turn lead capture across WhatsApp sessions",
      "Graceful fallback mode operating with zero LLM API dependency",
    ],
    tech: ["Python", "LangGraph", "LLM", "FAISS", "FastAPI"],
    techStack: ["Python", "LangGraph", "LangChain", "FastAPI", "FAISS", "Sentence-Transformers", "OpenAI API", "REST APIs", "WhatsApp Cloud API"],
    metrics: [
      { label: "Intent Classes",  value: "5-class"    },
      { label: "Vector Chunks",   value: "~32 chunks" },
      { label: "Test Coverage",   value: "18/18 ✓"    },
      { label: "Fallback Mode",   value: "Zero-API"   },
    ],
    achievement: "Modular LangGraph nodes with conditional routing, stateful multi-turn lead capture, and full fallback mode — no LLM API dependency required",
    links: {
      github: "https://github.com/raj-singh1802/autostream-agent", // ← UPDATE
    },
    color: "#6366f1",
    icon: "🕸️",
    // status: "Live",
  },
  {
    id: 6,
    title: "RevenueGuard AI",
    tagline: "Enterprise Agentic AI payment recovery platform with LLM orchestration and rule-based workflow engine",
    shortDesc: "Production-grade AI debt recovery system combining rule-based risk scoring, Groq LLM strategy generation, and autonomous commitment tracking across 500+ customer invoices.",
    description: "Architected an enterprise Agentic AI payment recovery platform using Node.js/Express and PostgreSQL/Prisma. Built 8-service modular backend with Risk Scoring Engine, Priority Engine, Broken Commitment Detection, and AI Recommendation Engine. Integrated Groq LLM (Llama 3.3-70B) for personalized recovery strategy generation — combining deterministic business rules with LLM reasoning. Stored all AI decisions in structured PostgreSQL memory enabling traceable, auditable recovery history per customer. Designing LangGraph-based autonomous multi-agent architecture for future orchestration.",
    problem: "Businesses with 500+ outstanding invoices struggle with manual payment recovery — inconsistent follow-ups, no prioritization, and no audit trail for recovery actions taken.",
    architecture: "Node.js/Express → PostgreSQL/Prisma → 8 microservices (Risk, Priority, Detection, AI, Notification, etc.) → Groq LLM → Redis → Twilio",
    challenges: [
      "Designing 8 microservice architecture with Prisma ORM",
      "Combining deterministic rule engine with Groq LLM reasoning",
      "Building audit trail for all AI decisions in PostgreSQL",
      "Broken commitment detection with automated re-engagement",
    ],
    tech: ["Node.js", "LLM", "Agentic AI", "PostgreSQL"],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Groq API", "LLaMA-3.3-70B", "Redis", "Twilio", "Socket.IO"],
    metrics: [
      { label: "Customer Records", value: "500+"          },
      { label: "Invoice Dataset",  value: "500+"          },
      { label: "Backend Services", value: "8 modules"     },
      { label: "LLM Model",        value: "Llama 3.3-70B" },
    ],
    achievement: "Combined deterministic rule engine with Groq LLM reasoning — generating risk summaries, recovery strategies, and escalation plans per customer with full AI decision auditability",
    links: {
      github: "https://github.com/raj-singh1802/RevenueGuard-AI",
    },
    color: "#f59e0b",
    icon: "🛡️",
    status: "In Dev",
  },
  {
    id: 7,
    title: "EventLens AI",
    tagline: "AI-powered event photography platform matching guests to their photos via facial recognition",
    shortDesc: "Full-stack platform where photographers upload event photos and guests instantly find all their pictures using a selfie — powered by CompreFace facial recognition.",
    description: "Built a full-stack AI event photography platform using Next.js 16 and Spring Boot 3.4 with CompreFace facial recognition. Photographers upload photos which are auto-detected, face-cropped, and registered against subject profiles. Guests take a selfie to instantly retrieve all photos they appear in. Features hybrid fallback mode (direct CompreFace calls when backend unreachable), JWT authentication, Redis caching, and full Docker orchestration across 7 services. Solved Snapchat/HEIC metadata rejection via dual re-encoding pipeline — both frontend (canvas) and backend (ImageIO) re-encode to JPEG 0.95 on white background.",
    problem: "Event photographers take thousands of photos, but guests struggle to find pictures of themselves. Manual sorting doesn't scale, and existing facial recognition tools aren't designed for event workflows.",
    architecture: "Next.js 16 → Spring Boot 3.4 → CompreFace API → PostgreSQL → Redis → Docker (7 services) → JWT Auth",
    challenges: [
      "Dual re-encoding pipeline for Snapchat/HEIC metadata rejection",
      "Hybrid fallback architecture (direct CompreFace when backend is down)",
      "Orchestrating 7 Docker services with JWT + Redis auth",
      "Face cropping and registration pipeline at event scale",
    ],
    tech: ["Docker", "Node.js"],
    techStack: ["Next.js 16", "Spring Boot 3.4", "CompreFace", "PostgreSQL", "Redis", "Docker", "JWT", "Zustand", "Java"],
    metrics: [
      { label: "Docker Services", value: "7 services"  },
      { label: "Match Confidence",value: "80% thresh." },
      { label: "Architecture",    value: "Hybrid"      },
      { label: "Auth",            value: "JWT + Redis"  },
    ],
    achievement: "Solved CompreFace metadata rejection via dual re-encoding pipeline — canvas + ImageIO both strip progressive markers and re-encode to JPEG 0.95 before face recognition",
    links: {
      github: "https://github.com/raj-singh1802/EventLens-AI",
    },
    color: "#8b5cf6",
    icon: "📸",
    status: "In Dev",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "KIIT University",
    location: "Bhubaneswar, Odisha",
    period: "2022 — May 2026",
    gpa: "8.23 / 10",
    highlights: [
      "Focus: Machine Learning, Deep Learning, Data Structures & Algorithms",
      "Relevant Courses: ML, NLP, DBMS, Algorithms, Statistics",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineering Intern",
    company: "Hamath OPC Pvt Ltd",
    period: "May 2026 — Present",
    type: "Remote",
    color: "#00d4d4",
    icon: "🤖",
    points: [
      "Developing AI-powered workflow automation and Agentic AI systems with multi-step execution pipelines using FastAPI and LLM-based architectures.",
      "Building production-oriented conversational AI systems integrating structured execution pipelines, external APIs, and intelligent response handling.",
      "Designing modular backend services for AI orchestration, request validation, and real-time workflow processing.",
      "Exploring Agentic AI concepts including orchestration logic, autonomous workflow execution, and structured output generation.",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "LLMs", "Agentic AI", "REST APIs"],
  },
  {
    role: "Business Analyst Intern",
    company: "Labmentix Pvt Ltd",
    period: "Jun 2025 — Dec 2025",
    type: "Remote",
    color: "#00a896",
    icon: "📊",
    points: [
      "Engineered automated Power BI dashboards and KPI reporting pipelines using Python and SQL, reducing manual reporting effort by ~40%.",
      "Performed EDA on multi-domain business datasets, surfacing actionable operational and product insights.",
      "Leveraged Groq API and Generative AI for SQL drafting, EDA documentation, and insight summarization — reducing analytics turnaround by ~30%.",
    ],
    tech: ["Python", "SQL", "Power BI", "Groq API", "EDA", "Plotly"],
  },
];
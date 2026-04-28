// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const personalInfo = {
  name: "Raj Narayan Singh",
  role: "AI/ML Engineer",
  tagline: "Building end-to-end AI systems that ship to production.",
  subTagline: "From concept to deployed product — in days, not months.",
  location: "Bokaro Steel City, Jharkhand, India",
  email: "rajsingh180204@gmail.com",              // ← UPDATE
  github: "https://github.com/raj-singh1802",
  linkedin: "https://www.linkedin.com/in/raj-narayan-singh-1324421b7/", // ← UPDATE
  resumeUrl: "/resume.pdf",
  university: "KIIT University",
  degree: "B.Tech Computer Science",
  gpa: "8.10 / 10",
  graduation: "May 2026",
};

export const stats = [
  { value: "4+",     label: "AI Products Shipped"     },
  { value: "5 Days", label: "Fastest Deployment"      },
  { value: "3+",     label: "APIs Deployed to Cloud"  },
  { value: "10+",    label: "Technologies Mastered"   },
];

export const skills = [
  {
    category: "AI / ML",
    icon: "🤖",
    items: [
      { name: "LLMs & NLP",              level: 90 },
      { name: "Machine Learning",        level: 88 },
      { name: "Deep Learning",           level: 82 },
      { name: "Time-Series Analysis",    level: 78 },
      { name: "Vector Databases (FAISS)",level: 80 },
      { name: "LangGraph / LangChain",   level: 78 },
    ],
  },
  {
    category: "Engineering",
    icon: "⚙️",
    items: [
      { name: "Python",           level: 92 },
      { name: "FastAPI",          level: 85 },
      { name: "Streamlit",        level: 90 },
      { name: "REST APIs",        level: 88 },
      // { name: "Docker",           level: 65 },
    ],
  },
  {
    category: "Data",
    icon: "📊",
    items: [
      { name: "SQL",              level: 85 },
      { name: "Pandas / NumPy",   level: 90 },
      { name: "Plotly / Matplotlib", level: 85 },
      { name: "Power BI",         level: 75 },
    ],
  },
  {
    category: "Deployment",
    icon: "🚀",
    items: [
      { name: "Streamlit Cloud",  level: 90 },
      { name: "Render Cloud",     level: 82 },
      { name: "Vercel / Netlify", level: 80 },
      { name: "Groq API",         level: 88 },
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
    shortDesc: "Full-stack predictive maintenance system estimating Remaining Useful Life of aircraft engines using multivariate sensor data.",
    description: "Full-stack predictive maintenance system estimating Remaining Useful Life (RUL) of aircraft engines using multivariate sensor data. Engineered time-series features (rolling stats, temporal deltas), deployed Random Forest models for RUL prediction and failure risk classification.",
    tech: ["Python", "ML", "FastAPI", "Streamlit"],
    techStack: ["Python", "Scikit-learn", "FastAPI", "Streamlit", "Joblib", "Pandas", "NumPy", "Render"],
    metrics: [
      { label: "MAE",        value: "~13.7 cycles" },
      { label: "RMSE",       value: "~18.8 cycles" },
      { label: "Risk Levels",value: "3 classes"    },
      { label: "Backend",    value: "FastAPI"       },
    ],
    achievement: "Solved production feature consistency challenges between training and inference pipelines",
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
    status: "Live",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "KIIT University",
    location: "Bhubaneswar, Odisha",
    period: "2022 — May 2026",
    gpa: "8.10 / 10",
    highlights: [
      "Focus: Machine Learning, Deep Learning, Data Structures & Algorithms",
      "Relevant Courses: ML, NLP, DBMS, Algorithms, Statistics",
    ],
  },
];
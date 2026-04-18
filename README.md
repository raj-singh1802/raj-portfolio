# Raj Narayan Singh — AI/ML Engineer Portfolio

🌐 **Live Site:** [raj-portfolio-bay-eight.vercel.app](https://raj-portfolio-bay-eight.vercel.app)

A modern, production-ready developer portfolio showcasing AI/ML projects, skills, and experience. Built with React, Tailwind CSS, and Framer Motion.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Fonts:** Syne + DM Sans + JetBrains Mono (Google Fonts)

---

## ✨ Features

- Smooth scroll navigation with active section highlighting
- Scroll progress bar at the top
- Typewriter role animation in Hero section
- Animated skill bars triggered on scroll
- Project cards with tech stack filtering
- Project detail modals with metrics and links
- Contact form that opens mail client
- Fully responsive — mobile, tablet, desktop
- Dark theme with cyan/teal accent system

---

## 📁 Project Structure

src/
├── components/
│   ├── Navbar.jsx       # Fixed nav with active section tracking
│   ├── Hero.jsx         # Landing section with particles & typewriter
│   ├── About.jsx        # About me with highlight cards
│   ├── Skills.jsx       # Animated skill bars by category
│   ├── Projects.jsx     # Filterable project cards + detail modals
│   ├── Education.jsx    # Education timeline & GPA display
│   ├── Contact.jsx      # Contact links & message form
│   └── Footer.jsx       # Footer with nav & social links
├── data/
│   └── portfolio.js     # All content lives here (edit this file)
├── App.jsx
├── main.jsx
└── index.css

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

Clone the repository
git clone https://github.com/raj-singh1802/raj-portfolio.git

Navigate into the project
cd raj-portfolio

Install dependencies
npm install

Start development server
npm run dev

Open http://localhost:5173 in your browser.

---

## ✏️ Customization

All content is centralized in one file:

src/data/portfolio.js

Edit this file to update:
- Personal info (name, email, location, links)
- Stats (projects shipped, GPA, etc.)
- Skills and proficiency levels
- Projects (title, description, metrics, links)
- Education details

No other files need to be touched for content updates.

### Adding your Resume
Drop your resume PDF into the public/ folder:
public/resume.pdf

---

## 📦 Build for Production

npm run build

Output will be in the dist/ folder.

---

## 🌍 Deployment (Vercel)

1. Push your code to GitHub
2. Go to vercel.com and sign in with GitHub
3. Click Add New Project and import your repo
4. Vercel auto-detects Vite — just click Deploy
5. Your site is live in ~60 seconds

Re-deployments happen automatically on every git push.

---

## 📬 Contact

- **Email:** rajsingh180204@gmail.com
- **GitHub:** github.com/raj-singh1802
- **Location:** Bokaro Steel City, Jharkhand, India

---

## 📄 License

This project is open source and available under the MIT License.

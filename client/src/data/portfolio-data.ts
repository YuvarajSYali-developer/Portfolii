import type { PersonalInfo, Project, WorkExperience, Certification, Skill, Education, Language } from "@/shared/schema";

export const personalInfo: PersonalInfo = {
  name: "Yuvaraj S Yali",
  role: "Full-Stack & Data Engineer",
  tagline: "Building scalable web apps & data pipelines | React • Node • Python • SQL",
  bio: "Detail-oriented and solutions-driven Electronics and Communication Engineering student at Manipal Institute of Technology with hands-on experience in UI/UX design, full-stack web development, and Python-based data structures. Proven ability to lead and execute end-to-end tech projects, including Smart India Hackathon solutions. Currently interning as an SDE and actively building a strong foundation in frontend engineering and data science. Looking to contribute to dynamic, impact-driven teams where technology meets real-world problem-solving.",
  email: "yuvarajyali@gmail.com",
  phone: "+91 8310755424",
  github: "https://github.com/YuvarajSYali-developer",
  linkedin: "https://linkedin.com/in/yuvaraj-s-yali",
  location: "Manipal, Udupi, Karnataka",
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Manipal Institute of Technology",
    period: "2023 – 2027",
    cgpa: "7.5",
  },
];

export const languages: Language[] = [
  { language: "English", proficiency: "Fluent" },
  { language: "Hindi", proficiency: "Fluent" },
  { language: "Kannada", proficiency: "Fluent" },
  { language: "Sanskrit", proficiency: "Intermediate" },
];

export const projects: Project[] = [
  {
    id: "civilinc",
    title: "CivilInc - Smart Civic Infrastructure Navigator",
    description: "Civic-tech platform digitizing urban grievance redressal and inter-department coordination.",
    longDescription: "Designed and developed a civic-tech platform using FastAPI and Vue.js, featuring an asynchronous backend with SQLAlchemy 2.0 to manage complex relational data across 5+ core entities including projects, complaints, and municipal services. Integrated a machine learning service using NumPy and Scikit-learn to generate data-driven governance insights. Improved analytical query performance by implementing a Redis-based caching layer. Engineered a secure authentication system using OAuth2, JWT, and Bcrypt.",
    techStack: ["FastAPI", "Vue.js", "SQLAlchemy", "Redis", "OAuth2", "NumPy", "Scikit-learn"],
    kpi: { value: "5+", label: "Core Entities Managed" }, // Extracted from text
    category: "fullstack",
    featured: true,
    repoUrl: "https://github.com/YuvarajSYali-developer/Civilinc-Full-Stack-Project",
    liveUrl: "https://drive.google.com/drive/folders/1LPaeK9swFhJZr7FNaUfMr3kGaAAohrLu",
  },
  {
    id: "a-vital-pro",
    title: "Animal Health Disease Prediction (A-VITAL PRO)",
    description: "High-precision ML engine for livestock disease detection with immersive 3D visualization.",
    longDescription: "Engineered a diagnostic tool using an XGBoost Classifier trained on 8,000+ clinical records, achieving 99.7% prediction accuracy across 20 distinct livestock diseases. Built a high-performance web app with Three.js and GSAP, featuring a reactive 3D neural core. Implemented a responsive prediction pipeline supporting 7 species with dynamic symptom filtering.",
    techStack: ["Python", "Flask", "XGBoost", "Three.js", "GSAP"],
    kpi: { value: "99.7%", label: "Prediction Accuracy" },
    category: "ml",
    featured: true,
    liveUrl: "https://animal-health-disease-prediction-model.onrender.com/",
  },
  {
    id: "smart-valve",
    title: "Smart Water Valve Control System",
    description: "IoT system with Arduino, Python backend, and Flutter mobile app for smart farm automation.",
    longDescription: "Engineered an end-to-end IoT system to monitor and control a smart water valve using Arduino Uno and a Python backend. Implemented a USB Serial communication protocol achieving 99.9%+ system uptime and sub-100 ms response time. Built a real-time web dashboard using Flask and a cross-platform mobile app with Flutter.",
    techStack: ["Arduino", "Python", "Flask", "Flutter", "Serial Communication"],
    kpi: { value: "99.9%", label: "System Uptime" },
    category: "iot",
    featured: false,
    repoUrl: "https://github.com/YuvarajSYali-developer/SMART_VALVE_SYSTEM",
  },
  {
    id: "chess-analyzer",
    title: "Chess Analyzer Pro",
    description: "Full-stack analysis tool with Lichess & Chess.com integration.",
    longDescription: "Developed a full-stack chess analysis platform using Node.js and Express. Integrated Lichess and Chess.com APIs to fetch and process real-time game data. Built an interactive analytics dashboard using vanilla JavaScript and Chart.js. Engineered a rule-based insights engine to generate personalized recommendations.",
    techStack: ["Node.js", "Express", "Lichess API", "Chess.com API", "JavaScript", "Chart.js"],
    category: "fullstack",
    featured: true,
    liveUrl: "https://chess-analysis-final.onrender.com/",
  },
  {
    id: "quick-byte",
    title: "Quick Byte - Food Delivery App",
    description: "Responsive UI/UX food delivery app design in Figma.",
    longDescription: "Designed a responsive, user-centric food delivery app UI in Figma, optimized for cross-device usability. Built a scalable design system with reusable components, consistent typography, and a unified color palette. Created interactive, high-fidelity prototypes featuring real-world user flows and micro-interactions.",
    techStack: ["Figma", "UI/UX Design", "Prototyping"],
    category: "design",
    featured: false,
    liveUrl: "https://www.figma.com/proto/cnaPBuCmLiWj8oZhv9hD46/FOOD-DELIVERY-APP-UI-LIBRARY?node-id=19-6&t=IUPGKlwaWc4kOWGZ-1&starting-point-node-id=19%3A3",
  },
];

export const skills: Skill[] = [
  // Programming
  { name: "Python", category: "backend", level: 90 }, // PDF puts in Programming
  { name: "JavaScript (ES6+)", category: "frontend", level: 88 },
  { name: "C/C++", category: "backend", level: 75 },

  // Frontend
  { name: "Vue.js (Vuex)", category: "frontend", level: 85 },
  { name: "React.js", category: "frontend", level: 85 },
  { name: "Flutter", category: "frontend", level: 80 },
  { name: "Tailwind CSS", category: "frontend", level: 88 },
  { name: "HTML5/CSS3", category: "frontend", level: 90 },

  // Backend & DB
  { name: "FastAPI", category: "backend", level: 85 },
  { name: "Flask", category: "backend", level: 85 },
  { name: "Node.js", category: "backend", level: 85 },
  { name: "Express.js", category: "backend", level: 82 },
  { name: "SQLAlchemy", category: "databases", level: 80 },
  { name: "SQLite", category: "databases", level: 80 },

  // Machine Learning
  { name: "XGBoost", category: "ml", level: 85 },
  { name: "Scikit-learn", category: "ml", level: 82 },
  { name: "NumPy", category: "ml", level: 85 },
  { name: "Pandas", category: "ml", level: 85 },

  // IoT & Hardware
  { name: "Arduino", category: "iot", level: 80 },
  { name: "Tinkercad", category: "iot", level: 80 },
  { name: "Serial Communication", category: "iot", level: 80 },

  // Tools & Deployment
  { name: "Git & GitHub", category: "tools", level: 88 },
  { name: "Vercel", category: "tools", level: 80 },
  { name: "Render", category: "tools", level: 80 },
  { name: "Heroku", category: "tools", level: 75 },
];

export const workExperience: WorkExperience[] = [
  {
    id: "chatloom",
    role: "Freelance Frontend Developer & UI Designer",
    company: "Chatloom (Freelance Project)",
    duration: "2024 - Present", // PDF doesn't specify dates clearly, but implies recent. Keeping existing range or current.
    description: [
      "Designing and developing frontend components for a real-world project.",
      "Collaborating with the team to refine user experience and interface design.",
      "Implementing best UI/UX practices to enhance usability and performance.",
    ],
  },
  {
    id: "shivamogga",
    role: "Web Development Engineer Intern",
    company: "Shivamogga Smart City Ltd (Govt. of India)",
    duration: "2024",
    description: [
      "Independently conceptualized, designed, and developed CivilInc, a full-stack civic-tech platform.",
      "Implemented an end-to-end grievance redressal system with real-time dashboards.",
      "Officially recognized for alignment with smart city goals and recommended for pilot integration.",
    ],
    endorsed: true,
  },
  {
    id: "building-bharat",
    role: "Policy Research Intern",
    company: "Building Bharat – Political Innovation Startup",
    duration: "2024",
    description: [
      "Supported digital initiatives driving political awareness, citizen engagement, and governance reforms.",
      "Contributed to research tasks focusing on AI-driven voter influence models and public policy evaluation.",
      "Maintained strict confidentiality on organizational operations.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "fastapi",
    name: "FastAPI & Backend Development",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-c98480e7-3c3b-4b32-ab91-693ee4b0217b/",
  },
  {
    id: "google-bi",
    name: "Google Business Intelligence",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/LPVEL7H0LJE6",
  },
  {
    id: "microsoft-ux",
    name: "Microsoft UX Design",
    issuer: "Microsoft",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/LPVEL7H0LJE6",
  },
];

import type { PersonalInfo, Project, Skill, WorkExperience, Certification } from "@shared/schema";

export const personalInfo: PersonalInfo = {
  name: "Yuvaraj S Yali",
  role: "Full-Stack Developer & UI/UX Designer",
  tagline: "Electronics & Communication engineer — UI/UX Designer & Full-Stack Web Dev focused on civic-tech and data-driven apps.",
  bio: "Detail-oriented and solutions-driven ECE student at Manipal Institute of Technology with hands-on experience in UI/UX design, full-stack web development, and Python-based data structures. Proven ability to lead end-to-end tech projects; currently interning as an SDE and building a strong foundation in frontend engineering and data science.",
  email: "yuvarajyali@gmail.com",
  phone: "+91 8310755424",
  github: "https://github.com/YuvarajSYali-developer",
  linkedin: "https://linkedin.com/in/yuvaraj-s-yali",
  location: "Manipal, India",
};

export const projects: Project[] = [
  {
    id: "civilinc",
    title: "CivilInc",
    description: "Full-stack civic-tech platform digitizing urban grievance redressal and inter-department coordination.",
    longDescription: "Designed and developed a full-stack civic-tech platform to digitize urban grievance redressal and improve inter-department coordination. Features include real-time complaint submission, status tracking, admin dashboards with project monitoring, budget tracking, and smart analytics. Enabled predictive planning and data-driven governance with interactive visualizations and department KPIs.",
    techStack: ["React", "Node.js", "Express", "SQLite", "Chart.js", "Tailwind CSS"],
    kpi: "60% faster resolution & full civic record digitization",
    category: "fullstack",
    featured: true,
    repoUrl: "https://github.com/YuvarajSYali-developer/Civilinc-Full-Stack-Project",
  },
  {
    id: "chess-analyzer",
    title: "Chess Analyzer Pro",
    description: "Full-stack analysis tool with third-party API integration for chess players to analyze their games.",
    longDescription: "Developed a full-stack web application using Node.js and Express to provide chess players with in-depth game analysis. Integrated with third-party APIs from Lichess.org and Chess.com to fetch and process real-time game data. Created an interactive and responsive dashboard with vanilla JavaScript and Chart.js to visualize key performance metrics, including accuracy trends and opening statistics. Engineered an 'AI-Insights' feature to generate personalized recommendations.",
    techStack: ["Node.js", "Express", "Chart.js", "Lichess API", "Chess.com API", "JavaScript"],
    category: "fullstack",
    featured: true,
    liveUrl: "https://chess-analysis-final.onrender.com/",
  },
  {
    id: "quick-byte",
    title: "Quick Byte",
    description: "Figma UI/UX food delivery app with comprehensive design system and interactive prototypes.",
    longDescription: "Designed a responsive and user-centric food delivery app UI in Figma, optimized for cross-device usability and visual consistency. Developed a scalable design system with reusable components, consistent typography, and a unified color palette for faster dev handoffs. Built interactive prototypes with real-world user flows, micro-interactions, and smooth transitions to simulate a production-level experience.",
    techStack: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
    category: "design",
    featured: true,
  },
  {
    id: "smart-valve",
    title: "Smart Water Valve Control System",
    description: "IoT system with Arduino, Python backend, and Flutter mobile app for smart farm automation.",
    longDescription: "Engineered an end-to-end IoT system to monitor and control a water valve using an Arduino Uno, featuring a Python backend and cross-platform user interfaces. Developed a reliable communication protocol between the hardware and software using USB Serial, ensuring higher uptime (99.9%+) and faster response times (<100ms). Built a real-time web dashboard with Flask and a responsive frontend, and a cross-platform mobile app with Flutter for remote monitoring, control, and system alerts.",
    techStack: ["Arduino", "Python", "Flask", "Flutter", "IoT", "Tinkercad"],
    kpi: "99.9%+ uptime, <100ms response time",
    category: "iot",
    featured: false,
  },
  {
    id: "ahms",
    title: "AHMS - Animal Health Management System",
    description: "Multi-level health surveillance platform with web dashboards and mobile apps for veterinarians and farmers.",
    longDescription: "Architected a multi-level animal health surveillance system with a central landing page, dedicated web dashboards for state and district-level directors, and mobile applications for veterinarians and farmers. Developed role-specific, real-time dashboards using HTML, CSS, and JavaScript, featuring interactive maps (Leaflet.js) and data visualization (Chart.js) to monitor disease outbreaks, farm compliance, and vaccination coverage. Engineered two distinct mobile applications with offline capabilities, multi-language support, and voice commands.",
    techStack: ["HTML", "CSS", "JavaScript", "Leaflet.js", "Chart.js", "Flutter", "Mobile Dev"],
    category: "fullstack",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Flutter", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Figma", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  
  // Backend
  { name: "FastAPI", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "RESTful API Design", category: "backend" },
  { name: "SQLAlchemy", category: "backend" },
  { name: "Python", category: "backend" },
  
  // Machine Learning
  { name: "Model Deployment", category: "ml" },
  { name: "NumPy", category: "ml" },
  { name: "Pandas", category: "ml" },
  { name: "Data Preprocessing", category: "ml" },
  
  // IoT & Hardware
  { name: "Arduino", category: "iot" },
  { name: "Tinkercad", category: "iot" },
  { name: "Serial Communication", category: "iot" },
  { name: "Smart Automation", category: "iot" },
  
  // Databases
  { name: "SQLite", category: "databases" },
  { name: "ORM (SQLAlchemy)", category: "databases" },
  
  // Tools
  { name: "Git & GitHub", category: "tools" },
  { name: "Chart.js", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Render", category: "tools" },
  { name: "Railway", category: "tools" },
  { name: "Heroku", category: "tools" },
];

export const workExperience: WorkExperience[] = [
  {
    id: "chatloom",
    role: "Freelance Frontend Developer & UI Designer",
    company: "Chatloom (Freelance Project)",
    duration: "2024 - Present",
    description: [
      "Designing and developing frontend components for a real-world project",
      "Collaborating with the team to refine user experience and interface design",
      "Implementing best UI/UX practices to enhance usability and performance",
    ],
  },
  {
    id: "smart-city",
    role: "Web Development Engineer Intern",
    company: "Shivamogga Smart City Ltd (Govt. of India)",
    duration: "2024",
    description: [
      "Independently conceptualized, designed, and developed CivilInc, a full-stack civic-tech platform to streamline urban governance and digital service delivery",
      "Implemented an end-to-end grievance redressal system with cross-departmental coordination and real-time dashboards for municipal performance tracking",
      "Officially recognized by Shivamogga Smart City Ltd for its alignment with smart city goals and recommended for pilot integration into government systems",
    ],
    endorsed: true,
  },
  {
    id: "building-bharat",
    role: "Policy Research Intern",
    company: "Building Bharat – Political Innovation Startup",
    duration: "2024",
    description: [
      "Selected as a Policy Research Intern to support digital initiatives driving political awareness, citizen engagement, and governance reforms",
      "Contributed to research tasks focusing on AI-driven voter influence models, public policy evaluation, and data-driven outreach strategies",
      "Maintained strict confidentiality on organizational operations and policy documents as per non-disclosure requirements",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "fastapi",
    name: "FastAPI & Backend Development",
    issuer: "Udemy",
  },
  {
    id: "google-bi",
    name: "Google Business Intelligence",
    issuer: "Google",
  },
  {
    id: "microsoft-ux",
    name: "Microsoft UX Design",
    issuer: "Microsoft",
  },
];

import type { PersonalInfo, Project, WorkExperience, Certification, Skill } from "@/shared/schema";

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
    technologies: ["React", "Node.js", "Express", "SQLite", "Chart.js", "Tailwind CSS"],
    techStack: ["React", "Node.js", "Express", "SQLite", "Chart.js", "Tailwind CSS"],
    kpi: { value: 60, label: "faster resolution & full civic record digitization" },
    category: "fullstack",
    featured: true,
    githubUrl: "https://github.com/YuvarajSYali-developer/Civilinc-Full-Stack-Project",
    liveUrl: "https://drive.google.com/drive/folders/1LPaeK9swFhJZr7FNaUfMr3kGaAAohrLu",
  },
  {
    id: "chess-analyzer",
    title: "Chess Analyzer Pro",
    description: "Full-stack analysis tool with third-party API integration for chess players to analyze their games.",
    longDescription: "Developed a full-stack web application using Node.js and Express to provide chess players with in-depth game analysis. Integrated with third-party APIs from Lichess.org and Chess.com to fetch and process real-time game data. Created an interactive and responsive dashboard with vanilla JavaScript and Chart.js to visualize key performance metrics, including accuracy trends and opening statistics. Engineered an 'AI-Insights' feature to generate personalized recommendations.",
    technologies: ["Node.js", "Express", "Chart.js", "Lichess API", "Chess.com API", "JavaScript"],
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
    technologies: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
    techStack: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
    category: "design",
    featured: true,
    liveUrl: "https://www.figma.com/proto/cnaPBuCmLiWj8oZhv9hD46/FOOD-DELIVERY-APP-UI-LIBRARY?node-id=19-6&t=IUPGKlwaWc4kOWGZ-1&starting-point-node-id=19%3A3",
  },
  {
    id: "smart-valve",
    title: "Smart Water Valve Control System",
    description: "IoT system with Arduino, Python backend, and Flutter mobile app for smart farm automation.",
    longDescription: "Engineered an end-to-end IoT system to monitor and control a water valve using an Arduino Uno, featuring a Python backend and cross-platform user interfaces. Developed a reliable communication protocol between the hardware and software using USB Serial, ensuring higher uptime (99.9%+) and faster response times (<100ms). Built a real-time web dashboard with Flask and a responsive frontend, and a cross-platform mobile app with Flutter for remote monitoring, control, and system alerts.",
    technologies: ["Arduino", "Python", "Flask", "Flutter", "REST API", "Serial Communication"],
    techStack: ["Arduino", "Python", "Flask", "Flutter", "REST API", "Serial Communication"],
    kpi: { value: 99.9, label: "system uptime & <100ms response time" },
    category: "iot",
    featured: false,
    githubUrl: "https://github.com/yourusername/smart-valve-control",
  },
  {
    id: "ahms",
    title: "AHMS - Animal Health Management System",
    description: "Multi-level health surveillance platform with web dashboards and mobile apps for veterinarians and farmers.",
    longDescription: "Architected a multi-level animal health surveillance system with a central landing page, dedicated web dashboards for state and district-level directors, and mobile applications for veterinarians and farmers. Developed role-specific, real-time dashboards using HTML, CSS, and JavaScript, featuring interactive maps (Leaflet.js) and data visualization (Chart.js) to monitor disease outbreaks, farm compliance, and vaccination coverage. Engineered two distinct mobile applications with offline capabilities, multi-language support, and voice commands.",
    technologies: ["HTML", "CSS", "JavaScript", "Leaflet.js", "Chart.js", "Flutter", "Mobile Dev"],
    techStack: ["HTML", "CSS", "JavaScript", "Leaflet.js", "Chart.js", "Flutter", "Mobile Dev"],
    category: "fullstack",
    featured: false,
    liveUrl: "https://triveniaiotsolution.netlify.app/",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", category: "frontend", level: 90 },
  { name: "CSS3", category: "frontend", level: 85 },
  { name: "JavaScript", category: "frontend", level: 88 },
  { name: "TypeScript", category: "frontend", level: 82 },
  { name: "React", category: "frontend", level: 85 },
  { name: "Next.js", category: "frontend", level: 80 },
  { name: "Tailwind CSS", category: "frontend", level: 88 },
  { name: "Framer Motion", category: "frontend", level: 78 },

  // Backend
  { name: "Node.js", category: "backend", level: 85 },
  { name: "Express", category: "backend", level: 82 },
  { name: "Python", category: "backend", level: 90 },
  { name: "FastAPI", category: "backend", level: 80 },
  { name: "Django", category: "backend", level: 75 },
  { name: "RESTful APIs", category: "backend", level: 88 },
  { name: "GraphQL", category: "backend", level: 78 },

  // Machine Learning
  { name: "NumPy", category: "ml", level: 85 },
  { name: "Pandas", category: "ml", level: 88 },
  { name: "Scikit-learn", category: "ml", level: 82 },
  { name: "TensorFlow", category: "ml", level: 75 },

  // IoT
  { name: "Arduino", category: "iot", level: 80 },
  { name: "Raspberry Pi", category: "iot", level: 78 },
  { name: "MQTT", category: "iot", level: 75 },
  { name: "Embedded C", category: "iot", level: 82 },

  // Databases
  { name: "MongoDB", category: "databases", level: 85 },
  { name: "PostgreSQL", category: "databases", level: 80 },

  // Tools
  { name: "Git", category: "tools", level: 88 },
  { name: "Docker", category: "tools", level: 75 },
  { name: "Figma", category: "tools", level: 80 },
  { name: "Postman", category: "tools", level: 85 },
  { name: "VS Code", category: "tools", level: 90 },
  { name: "Jupyter Notebook", category: "tools", level: 85 },
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

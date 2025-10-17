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
  location: "Manipal, India",};

export const projects: Project[] = [
  {
    id: "civilinc",
    title: "CivilInc",
    description: "Full-stack civic-tech platform digitizing urban grievance redressal and inter-department coordination.",
    longDescription: "Designed and developed a full-stack civic-tech platform to digitize urban grievance redressal and improve inter-department coordination. Features include real-time complaint submission, status tracking, admin dashboards with project monitoring, budget tracking, and smart analytics.",
    techStack: ["React", "Node.js", "Express", "SQLite", "Chart.js", "Tailwind CSS"],
    kpi: "60% faster resolution & full civic record digitization",
    category: "fullstack",
    featured: true,
    repoUrl: "https://github.com/YuvarajSYali-developer/Civilinc-Full-Stack-Project",
    liveUrl: "https://drive.google.com/drive/folders/1LPaeK9swFhJZr7FNaUfMr3kGaAAohrLu",
  },
  // ... (other projects remain the same)
];

export const certifications: Certification[] = [
  {
    id: "fastapi",
    name: "FastAPI & Backend Development",
    issuer: "Udemy",
    issueDate: "2023",
    credentialUrl: "https://www.udemy.com/certificate/UC-c98480e7-3c3b-4b32-ab91-693ee4b0217b/",
  },
  {
    id: "google-bi",
    name: "Google Business Intelligence Professional Certificate",
    issuer: "Coursera",
    issueDate: "2023",
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/LPVEL7H0LJE6",
  },
  {
    id: "microsoft-ux",
    name: "Microsoft UX Design Professional Certificate",
    issuer: "Coursera",
    issueDate: "2023",
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/543D2KLM2068",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: "policy-research-intern",
    role: "Policy Research Intern",
    company: "Smart City Belagavi",
    duration: "Jun 2023 - Aug 2023",
    description: "Conducted research on urban development policies and smart city initiatives.",
    certificateUrl: "https://certificate.givemycertificate.com/c/ebdb7715-2269-4fad-84c7-70b3fb8377d3",
  },
  {
    id: "web-dev-intern",
    role: "Web Development Engineer Intern",
    company: "Chatloom",
    duration: "2023",
    description: "Worked on developing and maintaining web applications using modern technologies.",
    certificateUrl: "https://drive.google.com/file/d/1_28rq6eoFWUHlDwS8AmkTDlStxT-Z_ig/view?usp=sharing",
  },
  // ... (other experiences)
];

// Export all the updated data
export default {
  personalInfo,
  projects,
  certifications,
  workExperiences,
  // ... (other exports)
};

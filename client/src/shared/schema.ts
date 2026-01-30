import { z } from "zod";

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Project data type
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  kpi?: {
    value: string | number;
    label: string;
  };
  category: "web" | "iot" | "design" | "fullstack" | "ml";
  featured: boolean;
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
}

// Skill data type
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ml" | "iot" | "databases" | "tools";
  level?: number;
  icon?: string;
}

// Work experience type
export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  endorsed?: boolean;
}

// Education type
export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
}

// Language type
export interface Language {
  language: string;
  proficiency: "Fluent" | "Native" | "Intermediate" | "Basic";
}

// Certification type
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  icon?: string;
  link?: string;
}

// Personal info
export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}

// Export TimelineItem alias for compatibility
export type TimelineItem = WorkExperience;

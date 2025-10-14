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
  kpi?: string;
  category: "web" | "iot" | "design" | "fullstack";
  featured: boolean;
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
}

// Skill data type
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ml" | "iot" | "databases" | "tools";
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

// Certification type
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  icon?: string;
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

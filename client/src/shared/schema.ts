export type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ml' | 'iot' | 'databases' | 'tools';
};

export type PersonalInfo = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date?: string; // Made optional for backward compatibility
  issueDate?: string; // Alias for date
  credentialUrl?: string;
};

export type WorkExperience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string | string[];
  endorsed?: boolean;
  icon?: React.ReactNode;
  certificateUrl?: string; // Added for backward compatibility
};

// Project type with all possible properties
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  repoUrl?: string; // Alias for githubUrl
  imageUrl?: string;
  category?: string;
  kpi?: string | { value: string | number; label: string };
  featured?: boolean;
};

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message should be at least 10 characters long')
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Export all types
export type TimelineItem = WorkExperience;

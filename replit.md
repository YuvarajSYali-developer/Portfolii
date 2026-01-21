# Portfolio Website - Yuvaraj S Yali

## Overview

A modern, production-ready portfolio website showcasing professional work, projects, and skills. Built with React, TypeScript, Tailwind CSS, and Express.js, this application serves as a comprehensive professional portfolio with SEO optimization, accessibility features, and analytics integration. The site features a clean, developer-focused design inspired by Linear, Vercel, and Stripe aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool for fast development and optimized production builds
- Client-side routing via Wouter (lightweight alternative to React Router)

**Design System**
- Tailwind CSS with custom configuration for consistent styling
- shadcn/ui component library (Radix UI primitives) for accessible, pre-styled components
- Custom design tokens following a reference-based approach (Linear/Vercel/Stripe aesthetics)
- Dark/light theme support via context provider with localStorage persistence
- Custom CSS variables for theme colors defined in `index.css`

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod validation for form handling
- Context API for theme state

**Component Architecture**
- Reusable UI components in `client/src/components/ui/` (shadcn/ui)
- Feature components: `Navbar`, `Footer`, `ProjectCard`, `SkillPill`, `Timeline`, `AnimatedBackground`
- Page components following route structure in `client/src/pages/`
- Separation of concerns: presentational vs. container components

**Advanced Animations & Visual Effects**
- **Interactive Canvas Background**: Custom-built animated background using HTML5 Canvas with:
  - Network particle system with dynamic node connections
  - Chess piece icons (♔ ♕ ♖ ♗ ♘ ♙) representing strategic thinking
  - Circuit board elements (⚡ ⊕ ⊗ ◈ ◉ ⬡) reflecting ECE engineering background
  - Cursor-interactive animations with attraction forces and connection lines
  - Pulsing node effects and gradient glows
  - Circuit board grid overlay
  - Performance-optimized with requestAnimationFrame
- **Scroll-Triggered Animations**: Framer Motion `whileInView` animations with:
  - Staggered card reveals with 0.25s delay
  - Scale, fade, and slide-in effects for different section types
  - Filter-based re-animations on the Projects page
  - Natural easing curves for smooth visual transitions

### Backend Architecture

**Server Framework**
- Express.js server handling API routes and serving static assets
- Custom middleware for request logging and error handling
- Vite middleware integration in development mode for HMR

**API Design**
- RESTful endpoint: `/api/contact` for contact form submissions
- Zod schema validation for request payloads
- Centralized error handling with appropriate HTTP status codes

**Development vs Production**
- Development: Vite dev server with hot module replacement
- Production: Pre-built static assets served by Express

### Data Storage

**Current Implementation**
- In-memory storage using Map data structures (see `server/storage.ts`)
- TypeScript interfaces for data models in `shared/schema.ts`

**Database Configuration**
- Drizzle ORM configured with PostgreSQL dialect
- Schema definitions in `shared/schema.ts`
- Migration configuration via `drizzle.config.ts`
- Note: Database is configured but not actively used; contact form logs to console

**Data Models**
- ContactForm: name, email, subject, message
- Project: comprehensive project metadata with tech stack and KPIs
- Skill: categorized technical skills
- WorkExperience: professional timeline entries
- Certification: professional certifications

### SEO & Analytics

**SEO Optimization**
- Meta tags in `index.html` for title, description
- Open Graph tags for social media sharing
- JSON-LD schema markup for structured data (Person schema)
- Semantic HTML with proper heading hierarchy

**Analytics Integration**
- Google Analytics 4 via gtag.js
- Custom hooks for page view tracking (`use-analytics.tsx`)
- Event tracking utility functions
- Environment variable configuration via `VITE_GA_MEASUREMENT_ID`

### Deployment & Build

**Build Process**
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server to `dist/index.js`
- Single build command produces production-ready assets

**Deployment Platform**
- Configured for Vercel deployment via `vercel.json`
- API route rewrites to serverless function pattern
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)

### Accessibility

**Compliance Measures**
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Focus management in modals and overlays
- Color contrast following WCAG guidelines

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown, select, toast, etc.)
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel component for image galleries
- **Framer Motion**: Production-ready animation library for scroll-triggered effects and page transitions

### Form & Validation
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority (CVA)**: Component variant management
- **clsx & tailwind-merge**: Conditional className utilities
- **cmdk**: Command palette component

### Backend & Database
- **Express.js**: Web application framework
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Analytics
- **Google Analytics 4**: Web analytics via custom implementation in `lib/analytics.ts`

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Fast build tool with HMR
- **esbuild**: Fast JavaScript bundler for backend build
- **tsx**: TypeScript execution for Node.js

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code navigation in Replit
- **@replit/vite-plugin-dev-banner**: Development mode indicator

### Date & Time
- **date-fns**: Date utility library for formatting and manipulation
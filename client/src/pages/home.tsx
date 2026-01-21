import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { SEOSchema } from "@/components/seo-schema";
import { ArrowRight, Code, Palette, Rocket, Award } from "lucide-react";
import { personalInfo, projects } from "@/data/portfolio-data";
import { useLocation } from "wouter";
import profilePhoto from "@/assets/profile-photo.png";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/animated-background";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const statsCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

export default function Home() {
  const [, setLocation] = useLocation();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <SEOSchema />
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 pt-16 z-10 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-8">
            {/* 1. Header Group: Photo & Name */}
            <div className="flex flex-col items-center mb-8 animate-in fade-in zoom-in duration-1000">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500/30 shadow-2xl"
                />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2">
                {personalInfo.name}
              </h1>
            </div>

            {/* 2. Identity Group: Role & Tagline */}
            <div className="space-y-6 relative z-20 max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-2xl md:text-4xl font-bold text-primary tracking-tight">
                  {personalInfo.role}
                </h2>
                <p className="text-lg md:text-2xl text-white/90 font-light text-center leading-relaxed">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Divider */}
              <div className="w-16 h-1 bg-white/10 rounded-full mx-auto" />

              {/* 3. Value Group: Impact Statement */}
              <p className="text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                I design and build production-ready web apps and data systems with real-world use cases.
              </p>

              {/* 5. Action Group: Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base font-semibold min-w-[160px]"
                  onClick={() => setLocation("/projects")}
                  data-testid="button-view-projects"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-base font-medium border-white/10 hover:bg-white/5 min-w-[160px]"
                  onClick={() => setLocation("/resume")}
                  data-testid="button-download-resume"
                >
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Stats - Compact Glass Design */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-16 mb-32 px-4"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Projects Card */}
              <motion.div variants={statsCardVariants}>
                <div className="relative group p-5 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden hover:border-purple-500/50 hover:bg-black/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center">
                    <div className="p-3 rounded-full bg-purple-500/10 mb-3 group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-500/20">
                      <Rocket className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-purple-100 transition-colors">5+</div>
                    <div className="text-xs font-medium text-purple-200/60 uppercase tracking-widest text-center">Deployed Projects</div>
                  </div>
                </div>
              </motion.div>

              {/* Certifications Card */}
              <motion.div variants={statsCardVariants}>
                <div className="relative group p-5 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden hover:border-amber-500/50 hover:bg-black/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center">
                    <div className="p-3 rounded-full bg-amber-500/10 mb-3 group-hover:scale-110 transition-transform duration-500 group-hover:bg-amber-500/20">
                      <Award className="h-6 w-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-amber-100 transition-colors">3</div>
                    <div className="text-xs font-medium text-amber-200/60 uppercase tracking-widest text-center">Certifications</div>
                  </div>
                </div>
              </motion.div>

              {/* Internships Card */}
              <motion.div variants={statsCardVariants}>
                <div className="relative group p-5 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden hover:border-cyan-500/50 hover:bg-black/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center">
                    <div className="p-3 rounded-full bg-cyan-500/10 mb-3 group-hover:scale-110 transition-transform duration-500 group-hover:bg-cyan-500/20">
                      <Code className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-cyan-100 transition-colors">3</div>
                    <div className="text-xs font-medium text-cyan-200/60 uppercase tracking-widest text-center">Internships Completed</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-card relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions in civic-tech, full-stack development, and UI/UX design
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={projectCardVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" className="neon-border" onClick={() => setLocation("/projects")} data-testid="button-all-projects">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-20 md:py-32 px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Technical Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full-stack expertise spanning frontend, backend, IoT, and design
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={skillCardVariants}>
              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">Frontend & Design</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    React, Vue, Flutter, Figma - crafting beautiful, responsive user experiences
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={skillCardVariants}>
              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-chart-2/10">
                      <Code className="h-6 w-6 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">Backend & APIs</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    FastAPI, Flask, Node.js - building robust, scalable server-side solutions
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={skillCardVariants}>
              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-chart-5/10">
                      <Rocket className="h-6 w-6 text-chart-5" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">IoT & Innovation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Arduino, Python, Smart Automation - engineering connected systems
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => setLocation("/about")} data-testid="button-view-skills">
              View All Skills
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Endorsement Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-card relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2">
                      Government Recognition
                    </h3>
                    <p className="text-muted-foreground">
                      CivilInc platform officially endorsed by <span className="text-primary font-medium">Shivamogga Smart City Ltd (Govt. of India)</span> for its alignment with smart city goals and recommended for pilot integration into government systems.
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Achieved <span className="text-primary font-medium">60% faster resolution</span> in grievance handling and enabled full civic record digitization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open to collaborating on innovative projects that make a real-world impact
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => setLocation("/contact")} data-testid="button-get-in-touch">
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" onClick={() => setLocation("/resume")} data-testid="button-download-resume">
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

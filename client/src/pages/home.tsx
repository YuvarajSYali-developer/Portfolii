import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { SEOSchema } from "@/components/seo-schema";
import { ArrowRight, Code, Palette, Rocket, Award } from "lucide-react";
import { personalInfo, projects } from "@/data/portfolio-data";
import { useLocation } from "wouter";
import profilePhoto from "@/assets/profile-photo.png";
import { motion } from "framer-motion";

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
    <div className="min-h-screen">
      <SEOSchema />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center mb-6 animate-in fade-in zoom-in duration-1000">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-2 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src={profilePhoto} 
                  alt={personalInfo.name}
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                {personalInfo.role}
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                {personalInfo.tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button size="lg" onClick={() => setLocation("/projects")} data-testid="button-view-projects">
                View Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => setLocation("/contact")} data-testid="button-contact">
                Get in Touch
              </Button>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mt-12"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={statsCardVariants}>
                <Card className="hover-elevate transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-2">
                      <Rocket className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">5+</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={statsCardVariants}>
                <Card className="hover-elevate transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-2">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">3</p>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={statsCardVariants}>
                <Card className="hover-elevate transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-2">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">3</p>
                    <p className="text-sm text-muted-foreground">Active Internships</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-card">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
            <Button variant="outline" onClick={() => setLocation("/projects")} data-testid="button-all-projects">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-20 md:py-32 px-6 md:px-8">
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
      <section className="py-20 md:py-32 px-6 md:px-8 bg-card">
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
      <section className="py-20 md:py-32 px-6 md:px-8">
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

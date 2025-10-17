import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";
import { motion, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);

  // Spring values for smooth animations
  const springConfig = { stiffness: 300, damping: 20 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, { stiffness: 300, damping: 10 });
  
  // Transform values for the gradient
  const gradientX = useSpring(0, { stiffness: 100, damping: 20 });
  const gradientY = useSpring(0, { stiffness: 100, damping: 20 });
  const gradientTransform = useMotionTemplate`translate(${gradientX}px, ${gradientY}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRect) return;
    
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    // Calculate rotation based on mouse position (reduced rotation for subtlety)
    const rotateYValue = ((x - centerX) / 20) * 0.5;
    const rotateXValue = ((centerY - y) / 20) * 0.5;
    
    // Update springs
    rotateY.set(rotateYValue);
    rotateX.set(rotateXValue);
    
    // Update gradient position
    gradientX.set((x / cardRect.width) * 100 - 50);
    gradientY.set((y / cardRect.height) * 100 - 50);
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.02);
    if (cardRef.current) {
      setCardRect(cardRef.current.getBoundingClientRect());
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    scale.set(1);
    // Reset rotation
    rotateX.set(0);
    rotateY.set(0);
    // Reset gradient
    gradientX.set(0);
    gradientY.set(0);
  };

  // Glow effect based on mouse position
  const glowStyle = {
    background: `radial-gradient(
      600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
      rgba(var(--primary) / 0.1), 
      transparent 40%
    )`,
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      data-cursor="link"
    >
      {/* Animated background glow */}
      <motion.div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          ...glowStyle,
          transform: gradientTransform,
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="h-full"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
      >
        <Card className={cn(
          "h-full flex flex-col border-2 bg-background/70 backdrop-blur-sm",
          "transition-all duration-300 overflow-visible relative",
          "group-hover:shadow-2xl group-hover:shadow-primary/10",
          "border-border/50 group-hover:border-primary/30"
        )}>
          {/* Shimmer overlay */}
          <div className={cn(
            "absolute inset-0 rounded-xl overflow-hidden pointer-events-none",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",
            "before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-1000",
            "before:animate-[shimmer_2s_infinite]"
          )} />
          
          <CardHeader className="relative z-10 pb-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-xl md:text-2xl font-heading mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                {project.kpi && (
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">
                      {project.kpi}
                    </span>
                  </div>
                )}
              </div>
              <Badge 
                variant="secondary" 
                className="text-xs uppercase font-semibold relative z-10"
              >
                {project.category}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col relative z-10">
            <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:text-foreground/80 transition-colors">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              {project.techStack.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ 
                    y: -2,
                    scale: 1.05,
                    transition: { type: 'spring', stiffness: 400, damping: 10 }
                  }}
                >
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-mono text-xs cursor-default",
                      "bg-background/80 backdrop-blur-sm",
                      "transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    )}
                    data-testid={`badge-tech-${tech.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.repoUrl && (
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ 
                    y: -2,
                    transition: { type: 'spring', stiffness: 400, damping: 10 }
                  }}
                  data-testid={`link-repo-${project.id}`}
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    <span className="relative">Repository</span>
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
                  </Button>
                </motion.a>
              )}
              
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ 
                    y: -2,
                    transition: { type: 'spring', stiffness: 400, damping: 10 }
                  }}
                  data-testid={`link-live-${project.id}`}
                >
                  <Button 
                    size="sm" 
                    className="group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    <span className="relative">Live Demo</span>
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
                  </Button>
                </motion.a>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}


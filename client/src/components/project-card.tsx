import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award } from "lucide-react";
import { motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

// Define the Project type with all possible properties
type Project = {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  repoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  kpi?: string | { value: string | number; label: string };
};

interface ProjectCardProps {
  project: Project;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);
  
  // Update card dimensions on mount and resize
  useEffect(() => {
    const updateCardRect = () => {
      if (cardRef.current) {
        setCardRect(cardRef.current.getBoundingClientRect());
      }
    };
    
    updateCardRect();
    window.addEventListener('resize', updateCardRect);
    return () => window.removeEventListener('resize', updateCardRect);
  }, []);

  // Spring values for smooth animations
  const springConfig = useMemo(() => ({
    stiffness: 300,
    damping: 20
  }), []);
  
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, { stiffness: 300, damping: 10 });
  
  // Transform values for the gradient
  const gradientX = useSpring(0, { stiffness: 100, damping: 20 });
  const gradientY = useSpring(0, { stiffness: 100, damping: 20 });

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRect) return;
    
    const { left, top, width, height } = cardRect;
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate rotation values (reduced for subtle effect)
    const centerX = width / 2;
    const centerY = height / 2;
    const rotateXValue = ((y - centerY) / 20) * -1; // Invert for natural feel
    const rotateYValue = (x - centerX) / 20;
    
    // Batch spring updates
    rotateY.set(rotateYValue);
    rotateX.set(rotateXValue);
    gradientX.set((x / width) * 100 - 50);
    gradientY.set((y / height) * 100 - 50);
  };

  const handleMouseEnter = () => {
    scale.set(1.02);
    if (cardRef.current) {
      setCardRect(cardRef.current.getBoundingClientRect());
    }
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    gradientX.set(0);
    gradientY.set(0);
  };

  // Memoize glow style to prevent unnecessary recalculations
  const glowStyle = useMemo(() => ({
    background: `radial-gradient(
      600px circle at 50% 50%, 
      rgba(var(--primary) / 0.1), 
      transparent 40%
    )`,
    transform: `translateX(${gradientX.get()}px) translateY(${gradientY.get()}px)`,
  }), [gradientX, gradientY]);

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
      data-testid="project-card"
    >
      {/* Animated background glow */}
      <motion.div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={glowStyle}
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
                      {typeof project.kpi === 'object' 
                        ? `${project.kpi.value} ${project.kpi.label}`
                        : project.kpi
                      }
                    </span>
                  </div>
                )}
              </div>
              {project.category && (
                <Badge 
                  variant="secondary" 
                  className="text-xs uppercase font-semibold relative z-10"
                >
                  {project.category}
                </Badge>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col relative z-10">
            <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:text-foreground/80 transition-colors">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              {project.technologies?.map((tech: string) => (
                <Badge 
                  key={tech} 
                  variant="outline"
                  className="text-xs font-mono px-2 py-0.5 hover:bg-primary/10 transition-colors"
                  data-testid={`badge-tech-${tech.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2 mt-2">
              {(project.repoUrl || project.githubUrl) && (
                <motion.a
                  href={project.repoUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  whileHover={{ x: 2 }}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>View Code <span className="sr-only">for {project.title}</span></span>
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  whileHover={{ x: 2 }}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>Live Demo <span className="sr-only">of {project.title}</span></span>
                </motion.a>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover-elevate transition-all duration-300 hover:-translate-y-2 overflow-visible relative border-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      <CardHeader className="space-y-0 pb-4 relative z-10">
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
          <Badge variant="secondary" className="text-xs uppercase font-semibold">
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="font-mono text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              data-testid={`badge-tech-${tech.toLowerCase().replace(/\s/g, "-")}`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-repo-${project.id}`}
            >
              <Button variant="outline" size="sm" className="group/btn">
                <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                Repository
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-live-${project.id}`}
            >
              <Button variant="outline" size="sm" className="group/btn">
                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

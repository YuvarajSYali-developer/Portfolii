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
    <Card className="hover-elevate transition-all duration-300 hover:-translate-y-1 overflow-visible">
      <CardHeader className="space-y-0 pb-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl md:text-2xl font-heading mb-2">
              {project.title}
            </CardTitle>
            {project.kpi && (
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {project.kpi}
                </span>
              </div>
            )}
          </div>
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="font-mono text-xs"
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
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
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
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

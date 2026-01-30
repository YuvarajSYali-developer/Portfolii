import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/shared/schema";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-[#111113] border-white/10 hover:border-primary/50 transition-colors duration-300 overflow-hidden group">
        <CardHeader className="p-6">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </CardTitle>
              {project.kpi && (
                <p className="text-xs font-medium text-emerald-400">
                  {typeof project.kpi === 'object' ? `${project.kpi.value} ${project.kpi.label}` : project.kpi}
                </p>
              )}
            </div>
            {project.category && (
              <Badge variant="outline" className="border-white/10 text-muted-foreground text-[10px] uppercase tracking-wider">
                {project.category}
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0 flex-1 flex flex-col">
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto space-y-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack?.slice(0, 4).map((tech) => (
                <div
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-medium text-muted-foreground"
                >
                  {tech}
                </div>
              ))}
              {project.techStack && project.techStack.length > 4 && (
                <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-medium text-muted-foreground">
                  +{project.techStack.length - 4}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-2 transition-colors"
                >
                  Live Demo
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";

type FilterCategory = "all" | "web" | "iot" | "design" | "fullstack";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filters: { label: string; value: FilterCategory }[] = [
    { label: "All", value: "all" },
    { label: "Full-Stack", value: "fullstack" },
    { label: "IoT", value: "iot" },
    { label: "Design", value: "design" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning civic-tech, full-stack applications, IoT systems, and UI/UX design
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              data-testid={`filter-${filter.value}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

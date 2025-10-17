import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/shared/schema";

interface SkillPillProps {
  skill: Skill;
}

const categoryColors = {
  frontend: "bg-primary/10 text-primary border-primary/20",
  backend: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  ml: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  iot: "bg-destructive/10 text-destructive border-destructive/20",
  databases: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  tools: "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20",
};

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <Badge
      variant="outline"
      className={`${categoryColors[skill.category as keyof typeof categoryColors]} font-medium transition-all hover:scale-105`}
      data-testid={`skill-${skill.name.toLowerCase().replace(/\s/g, "-")}`}
    >
      {skill.name}
    </Badge>
  );
}

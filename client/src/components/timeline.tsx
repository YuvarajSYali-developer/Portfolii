import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import type { WorkExperience } from "@shared/schema";

interface TimelineProps {
  experiences: WorkExperience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex items-start gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

            {/* Content */}
            <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl font-heading mb-1">
                        {exp.role}
                      </CardTitle>
                      <p className="text-sm font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    {exp.endorsed && (
                      <Badge variant="default" className="gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Endorsed
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {exp.duration}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillPill } from "@/components/skill-pill";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills, certifications } from "@/data/portfolio-data";
import { MapPin, GraduationCap, Award } from "lucide-react";

export default function About() {
  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    ml: skills.filter((s) => s.category === "ml"),
    iot: skills.filter((s) => s.category === "iot"),
    databases: skills.filter((s) => s.category === "databases"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
        </div>

        {/* Education & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="hover-elevate transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Education</h3>
                  <p className="text-foreground font-medium">Bachelor of Technology</p>
                  <p className="text-sm text-muted-foreground">Electronics & Communication Engineering</p>
                  <p className="text-sm text-muted-foreground">Manipal Institute of Technology (2023-2027)</p>
                  <p className="text-sm text-muted-foreground mt-1">CGPA: 7.5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-chart-2/10">
                  <MapPin className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Location</h3>
                  <p className="text-foreground font-medium">{personalInfo.location}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Open to remote opportunities and collaborations worldwide
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-center">
            Technical Skills
          </h2>

          <div className="space-y-8">
            {/* Frontend Development */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.frontend.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Development */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.backend.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Machine Learning */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Machine Learning & Data Science</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.ml.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* IoT & Hardware */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">IoT & Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.iot.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.databases.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Deployment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Tools & Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.tools.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-center">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold mb-1" data-testid={`cert-${cert.id}`}>
                        {cert.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {cert.issuer}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-16">
          <Card className="bg-card/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-heading font-semibold mb-4 text-center">
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-sm">English (Fluent)</Badge>
                <Badge variant="outline" className="text-sm">Kannada (Fluent)</Badge>
                <Badge variant="outline" className="text-sm">Hindi (Fluent)</Badge>
                <Badge variant="outline" className="text-sm">Sanskrit (Intermediate)</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

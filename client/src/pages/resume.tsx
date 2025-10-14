import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import { Download } from "lucide-react";
import { workExperience } from "@/data/portfolio-data";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Yuvaraj_S_Yali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Resume
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey and experience
          </p>
          <Button size="lg" onClick={handleDownload} data-testid="button-download-resume">
            <Download className="h-5 w-5 mr-2" />
            Download PDF Resume
          </Button>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-12 text-center">
            Work Experience
          </h2>
          <Timeline experiences={workExperience} />
        </div>
      </div>
    </div>
  );
}

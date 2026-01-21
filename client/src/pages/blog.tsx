import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights on technology, design, and innovation
          </p>
        </div>

        {/* Coming Soon */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                Coming Soon
              </h2>
              <p className="text-muted-foreground">
                I'm currently working on creating valuable content about full-stack development, 
                UI/UX design, and civic-tech innovations. Stay tuned for upcoming articles!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

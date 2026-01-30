import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Building innovative solutions at the intersection of technology and design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-home"
              >
                Home
              </a>
              <a
                href="/projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-projects"
              >
                Projects
              </a>
              <a
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-about"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-contact"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-github"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone className="h-4 w-4" />
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

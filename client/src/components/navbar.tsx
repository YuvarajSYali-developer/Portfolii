import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const navigate = (href: string) => {
    setLocation(href);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-lg bg-background/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-xl font-heading font-bold text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors cursor-pointer"
            data-testid="link-home-logo"
          >
            {personalInfo.name.split(" ")[0]}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Theme toggle + Mobile menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navigate(link.href)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 text-left ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

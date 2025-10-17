import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { BackToTop } from "@/components/back-to-top";
import { NetworkBackground } from "@/components/network-background";
import { CustomCursor } from "@/components/custom-cursor";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Resume from "@/pages/resume";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

function Router() {
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/">
        <PageTransition>
          <Home />
        </PageTransition>
      </Route>
      <Route path="/about">
        <PageTransition>
          <About />
        </PageTransition>
      </Route>
      <Route path="/projects">
        <PageTransition>
          <Projects />
        </PageTransition>
      </Route>
      <Route path="/resume">
        <PageTransition>
          <Resume />
        </PageTransition>
      </Route>
      <Route path="/blog">
        <PageTransition>
          <Blog />
        </PageTransition>
      </Route>
      <Route path="/contact">
        <PageTransition>
          <Contact />
        </PageTransition>
      </Route>
      <Route>
        <PageTransition>
          <NotFound />
        </PageTransition>
      </Route>
    </Switch>
  );
}

function App() {
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <div className="flex flex-col min-h-screen relative overflow-x-hidden">
            <NetworkBackground />
            <CustomCursor />
            <Navbar />
            <main className="flex-1 relative z-10">
              <Router />
            </main>
            <Footer />
            <BackToTop />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

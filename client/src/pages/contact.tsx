import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.reset();

      // Also open mailto as a fallback for immediate contact
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
      window.location.href = mailtoLink;
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                              data-testid="input-subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or idea..."
                              className="min-h-[150px] resize-none"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <Phone className="h-5 w-5 text-chart-2" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-chart-5/10">
                    <MapPin className="h-5 w-5 text-chart-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all"
                  data-testid="link-github"
                >
                  <Github className="h-5 w-5 text-foreground" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5 text-foreground" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

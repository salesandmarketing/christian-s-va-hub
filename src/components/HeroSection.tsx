import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Briefcase className="h-4 w-4" />
          Sales & Marketing Virtual Assistant
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
          Hi, I'm{" "}
          <span className="text-gradient">Christian Espinosa</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A dedicated Virtual Assistant from the Philippines, ready to help you with lead generation, CRM management, social media, and email marketing — so you can focus on growing your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base">
            <a href="#contact">Hire Me</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <a href="#about">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

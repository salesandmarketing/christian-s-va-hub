import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
    {/* Dynamic background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-subtle rounded-full px-5 py-2 text-sm font-medium mb-8 border border-primary/20"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-foreground">Sales & Marketing Virtual Assistant</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-heading">
          Hi, I'm{" "}
          <span className="text-gradient">Christian</span>
          <br />
          <span className="text-gradient">Espinosa</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          A dedicated Virtual Assistant from the Philippines, ready to help you with lead generation, CRM management, social media, and email marketing — so you can focus on growing your business.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="text-base bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow px-8">
            <a href="#contact">
              <Briefcase className="mr-2 h-4 w-4" />
              Hire Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base border-primary/30 hover:bg-primary/5 px-8">
            <a href="#about">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

import { MapPin, Clock, DollarSign } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Passionate about helping businesses grow through strategic sales and marketing support.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Photo placeholder */}
          <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center border border-border">
            <span className="text-6xl">👨‍💼</span>
          </div>

          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              I'm an aspiring Sales & Marketing Virtual Assistant based in the Philippines. Drawing from the comprehensive <strong>Sales & Marketing VA Guide 2026</strong>, I've built a foundation in CRM administration, email marketing, lead generation, social media management, and branding support.
            </p>
            <p className="text-foreground leading-relaxed">
              My goal is to provide reliable, detail-oriented virtual assistance that helps small businesses and entrepreneurs scale their marketing efforts without the overhead of a full-time hire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Philippines</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-accent" />
                <span>Full-time Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-accent" />
                <span>$15–25/hr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Database, Share2, Mail, Palette, ClipboardCheck, TrendingUp, FileSpreadsheet } from "lucide-react";

const services = [
  { icon: Search, title: "Lead Research & List Building", desc: "Identify and compile targeted prospect lists using LinkedIn, Apollo, and other research tools." },
  { icon: Database, title: "CRM Administration", desc: "Manage your HubSpot CRM — data entry, pipeline updates, contact organization, and reporting." },
  { icon: Share2, title: "Social Media Management", desc: "Schedule posts, manage content calendars, and track engagement across platforms." },
  { icon: Mail, title: "Email Campaign Setup", desc: "Create and manage email campaigns in Mailchimp — templates, sequences, and list segmentation." },
  { icon: Palette, title: "Basic Graphic Design", desc: "Design social media graphics, presentations, and marketing materials using Canva." },
  { icon: ClipboardCheck, title: "Branding Audit Assistance", desc: "Audit brand consistency across channels and document brand guidelines." },
  { icon: TrendingUp, title: "SEO & Content Support", desc: "Keyword research, content briefs, on-page optimization, and blog post support." },
  { icon: FileSpreadsheet, title: "Data Entry & Reporting", desc: "Organize data, create spreadsheets, and compile performance reports." },
];

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Beginner-level services I'm ready to deliver with dedication and a willingness to learn.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s) => (
          <Card key={s.title} className="hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <s.icon className="h-8 w-8 text-accent mb-3" />
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

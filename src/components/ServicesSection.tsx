import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Database, Share2, Mail, Palette, ClipboardCheck, TrendingUp, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";

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
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">What I Do</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3">Services</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Beginner-level services I'm ready to deliver with dedication and a willingness to learn.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="group h-full glass shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-transparent">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-base font-heading">{s.title}</CardTitle>
                <CardDescription className="text-sm">{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

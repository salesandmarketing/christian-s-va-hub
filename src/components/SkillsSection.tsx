import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  { name: "CRM Tools (HubSpot)", level: 70 },
  { name: "Email Marketing (Mailchimp)", level: 65 },
  { name: "Social Media Management", level: 75 },
  { name: "Graphic Design (Canva)", level: 70 },
  { name: "Lead Generation & Qualification", level: 65 },
  { name: "SEO Basics", level: 60 },
  { name: "Time Management", level: 80 },
];

const tools = ["HubSpot", "Mailchimp", "Canva", "Slack", "Zoom", "Trello", "Google Workspace", "LinkedIn", "Apollo", "WordPress"];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle -z-10" />
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">Expertise</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3">Skills</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Key competencies developed through study and hands-on practice.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-5 mb-16">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-semibold font-heading">{s.name}</span>
              <span className="text-muted-foreground font-medium">{s.level}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="h-full bg-gradient-primary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-lg font-bold font-heading mb-6">Tools & Platforms</h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
          {tools.map((t) => (
            <Badge key={t} variant="secondary" className="text-sm px-4 py-2 rounded-xl font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              {t}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

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
  <section id="skills" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Key competencies developed through study and hands-on practice.
      </p>

      <div className="max-w-3xl mx-auto space-y-6 mb-12">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1.5 text-sm">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground">{s.level}%</span>
            </div>
            <Progress value={s.level} className="h-2.5" />
          </div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Tools & Platforms</h3>
        <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
          {tools.map((t) => (
            <Badge key={t} variant="secondary" className="text-sm px-3 py-1">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;

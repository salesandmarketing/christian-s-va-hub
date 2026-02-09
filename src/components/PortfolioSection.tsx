import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Lead Magnet Checklist",
    desc: "Designed a downloadable \"10-Step Lead Generation Checklist\" for small business owners, outlining proven strategies from prospecting to qualification.",
    tools: ["Canva", "Google Docs", "HubSpot"],
  },
  {
    title: "Mock Branding Audit Report",
    desc: "Conducted a full brand consistency audit across social media, website, and email for a hypothetical e-commerce brand, with actionable recommendations.",
    tools: ["Google Slides", "Canva", "Notion"],
  },
  {
    title: "Sample Email Campaign",
    desc: "Created a 5-email welcome sequence for a SaaS product launch, including subject lines, copy, and A/B testing strategy.",
    tools: ["Mailchimp", "Canva", "Google Docs"],
  },
  {
    title: "Social Media Content Calendar",
    desc: "Built a 30-day content calendar with post ideas, hashtag strategy, and optimal posting times for a fitness brand.",
    tools: ["Trello", "Canva", "Google Sheets"],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Portfolio</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Hypothetical projects showcasing the skills and strategies I've learned.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p) => (
          <Card key={p.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;

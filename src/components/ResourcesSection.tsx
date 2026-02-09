import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const resources = [
  {
    title: "Getting Started as a Sales & Marketing VA",
    excerpt: "The VA industry is booming. Learn about the key responsibilities, from lead generation to CRM management, and how to position yourself as a valuable asset.",
    full: "Virtual assistants specializing in sales and marketing are in high demand. Start by mastering foundational tools like HubSpot and Mailchimp, build a portfolio of sample work, and position yourself on platforms like Upwork and LinkedIn. Focus on delivering value through organization, reliability, and a willingness to learn."
  },
  {
    title: "Essential Tools Every VA Needs",
    excerpt: "From CRM platforms to design tools, discover the must-have software stack for a modern Sales & Marketing VA.",
    full: "Your core toolkit should include: HubSpot or Salesforce for CRM, Mailchimp for email marketing, Canva for design, Trello or Asana for project management, Google Workspace for collaboration, and Slack or Zoom for communication. Mastering even the free tiers of these tools gives you a competitive edge."
  },
  {
    title: "Lead Generation 101",
    excerpt: "Learn the fundamentals of finding, qualifying, and nurturing leads using research tools and proven frameworks.",
    full: "Effective lead generation starts with defining your Ideal Customer Profile (ICP). Use LinkedIn Sales Navigator and Apollo for prospecting, qualify leads with the BANT framework (Budget, Authority, Need, Timeline), and nurture them through personalized email sequences and valuable content."
  },
  {
    title: "Digital Marketing Basics for VAs",
    excerpt: "SEO, content strategy, paid ads, and email campaigns — the key digital marketing skills every VA should develop.",
    full: "Focus on on-page SEO basics like keyword research and meta tags. Learn to create content calendars and write engaging social media copy. Understand the fundamentals of Google Ads and Facebook Ads manager. Email marketing remains one of the highest-ROI channels — master segmentation and A/B testing."
  },
  {
    title: "Remote Work Pro Tips",
    excerpt: "Time management, communication, and productivity hacks for thriving as a remote virtual assistant.",
    full: "Set clear working hours and communicate them to clients. Use time-blocking techniques and tools like Toggl for tracking. Over-communicate progress through daily or weekly check-ins. Create a dedicated workspace, minimize distractions, and invest in reliable internet and equipment."
  },
];

const ResourcesSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Resources</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Key insights from the Sales & Marketing VA Guide 2026.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {resources.map((r) => (
            <Card key={r.title} className="border-border">
              <CardHeader className="cursor-pointer" onClick={() => setExpanded(expanded === r.title ? null : r.title)}>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-base">{r.title}</CardTitle>
                    <CardDescription className="mt-1">{r.excerpt}</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    {expanded === r.title ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
              </CardHeader>
              {expanded === r.title && (
                <CardContent className="pt-0 animate-fade-in">
                  <p className="text-sm text-foreground leading-relaxed">{r.full}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

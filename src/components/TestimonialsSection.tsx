import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Jane D.", role: "Startup Founder", text: "Christian was thorough, responsive, and genuinely eager to help. He tackled our CRM cleanup with impressive attention to detail." },
  { name: "Mark S.", role: "E-commerce Owner", text: "Great communication and a proactive approach. Christian delivered our social media calendar ahead of schedule." },
  { name: "Lisa R.", role: "Marketing Manager", text: "Reliable and quick to learn. I'd recommend Christian for any team looking for dedicated VA support." },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        What clients have to say (placeholder — ready for real feedback).
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-border">
            <CardContent className="pt-6">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

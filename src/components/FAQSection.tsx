import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What exactly does a Sales & Marketing VA do?",
    a: "I handle tasks like lead research, CRM management, social media scheduling, email campaigns, and basic graphic design — essentially the day-to-day marketing and sales support that frees you to focus on strategy and growth.",
  },
  {
    q: "What are your working hours and time zone?",
    a: "I'm based in the Philippines (GMT+8) and available full-time. I'm flexible with scheduling and can overlap with US, UK, or Australian business hours as needed.",
  },
  {
    q: "What tools and platforms do you use?",
    a: "I'm proficient in HubSpot, Mailchimp, Canva, Trello, Google Workspace, Slack, Zoom, LinkedIn Sales Navigator, Apollo, and WordPress, among others.",
  },
  {
    q: "How do we communicate and track progress?",
    a: "I provide regular updates via your preferred channel — Slack, email, or project management tools like Trello or Asana. I'm a strong believer in over-communicating to keep everything transparent.",
  },
  {
    q: "What is your rate?",
    a: "My rate ranges from $15–$25/hr depending on the scope and complexity of the work. I'm open to hourly, part-time, or full-time arrangements.",
  },
  {
    q: "Can I start with a trial period?",
    a: "Absolutely! I'm happy to start with a short trial project or a one-week engagement so you can evaluate my work before committing to a longer-term arrangement.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle -z-10" />
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">Questions</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Common questions about working with me as your virtual assistant.
        </p>
      </motion.div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <AccordionItem value={`faq-${i}`} className="glass shadow-card rounded-xl border-transparent px-6 overflow-hidden">
                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Brain, Database, Sparkles, ShieldCheck } from "lucide-react";

const strengths = [
  {
    title: "AI Product Engineering",
    text: "Building multimodal SaaS products with Gemini, ATS workflows, image generation, and polished user journeys.",
    icon: Brain,
  },
  {
    title: "RAG & Document Intelligence",
    text: "Designing grounded AI systems with chunking, retrieval, context control, and hallucination-safe question answering.",
    icon: Database,
  },
  {
    title: "Premium Frontend UX",
    text: "Crafting modern, conversion-focused interfaces with strong storytelling, visual hierarchy, and SaaS-grade polish.",
    icon: Sparkles,
  },
  {
    title: "Secure Backend Systems",
    text: "Developing JWT auth, scalable APIs, file pipelines, MongoDB persistence, and production-grade error handling.",
    icon: ShieldCheck,
  },
];

export const StrengthsSection = () => {
  return (
    <section className="py-16 lg:py-24" id="strengths">
      <div className="container">
        <SectionHeader
          eyebrow="What I Build Best"
          title="Engineering Strengths"
          description="A focused snapshot of the systems, product workflows, and user experiences I build best."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-20">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3">
                    <Icon className="size-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
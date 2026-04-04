import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import creatdivPreview from "../assets/images/creatdiv-preview.png";
import healthCheckAiPreview from "../assets/images/health-check-ai.png";
import chattyPreview from "../assets/images/chatty-preview.png";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

type PortfolioProject = {
  company: string;
  year: string;
  title: string;
  stack: string;
  results: { title: string }[];
  link: string;
  image: StaticImageData;
};

const portfolioProjects: PortfolioProject[] = [
  {
    company: "Personal Project",
    year: "2026",
    title: "Creatdiv",
    stack: "Next.js • MERN • Gemini • MongoDB • Tailwind",
    results: [
      {
        title:
          "Built a multi-modal AI SaaS platform for ATS optimization, AI content workflows, and image generation",
      },
      {
        title:
          "Designed premium UX flows with persistent history vaults and downloadable outputs",
      },
      {
        title:
          "Implemented JWT authentication, secure APIs, and scalable MongoDB persistence",
      },
      {
        title:
          "Optimized Gemini prompt pipelines and response formatting for high-quality AI outputs",
      },
    ],
    link: "https://cms-genrator.vercel.app/",
    image: creatdivPreview,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "Health Check AI",
    stack: "Next.js • Gemini • RAG • TypeScript • Tailwind",
    results: [
      {
        title:
          "Built a medical RAG pipeline for document-based health report question answering",
      },
      {
        title:
          "Implemented sentence-aware chunking and top-k retrieval for grounded responses",
      },
      {
        title:
          "Reduced hallucinations using strict context-only Gemini prompting",
      },
      {
        title:
          "Designed patient-friendly AI explanations for lab reports and clinical summaries",
      },
    ],
    link: "healthcheck-ai-rag-lite.vercel.app",
    image: healthCheckAiPreview,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Chatty",
    stack: "MERN • Socket.io • JWT • Cloudinary",
    results: [
      { title: "Real-time chat responses with Socket.io" },
      { title: "Image sharing and media integration" },
      { title: "JWT-based authentication and route protection" },
      { title: "Message history and notification workflows" },
    ],
    link: "fullstack-chat-app-mauve.vercel.app/",
    image: chattyPreview,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="A curated showcase of AI systems, SaaS products, and full-stack engineering work."
        />

        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="sticky top-16 px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 md:text-base">
                    {project.stack}
                  </p>

                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />

                  <ul className="mt-4 flex flex-col gap-4">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm text-white/70 md:text-base"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

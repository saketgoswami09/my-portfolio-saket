import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import darkSaasLandingPagew from "@/assets/images/darkSaasLandingPagew.png";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "personal project",
    year: "2024",
    title: "Ai Chat Bot",
    results: [
      { title: "Realtime chat Response" },
      { title: "image searach" },
      { title: "" },
    ],
    link: "https://startling-sawine-5ed66c.netlify.app/",
    image: darkSaasLandingPage,
  },
 { company: "personal project",
  year: "2024",
  title: "chatty",
  results: [
    { title: "Realtime chat Response" },
    { title: "image searach" },
    { title: "" },
  ],
  link: "https://fullstack-chat-app-2-ynz0.onrender.com",
  image: darkSaasLandingPagew,
}

];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects" >
      <div className="container">
        <SectionHeader 
        eyebrow="Real-World-Results"
        title="Featured Projects"
        description="see how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt20 ">
          {portfolioProjects.map((project,projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{ top: `calc(64px + ${projectIndex * 40}px)`}}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r
        from-emerald-300 to-sky-400 inline-flex font-bold tracking-widest uppercase
         text-sm text-transparent bg-clip-text
        "
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 ">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full md: rounded-xl 
                font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6
                "
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                    
                  </a>
                </div>
                <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0  lg:mt-0 
                  lg:absolute lg:h-full
                  lg:w-auto lg:max-w-none
                  "
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

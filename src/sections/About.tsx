'use client';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTML5 from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TailwindIcon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import MapImag from "@/assets/images/map.png";
import mysmile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTML5,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },

  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "50%",
  },

  {
    title: "Cooking",
    emoji: "🍳",
    left: "10%",
    top: "35%",
  },

  {
    title: "Chess",
    emoji: "♟️",
    left: "35%",
    top: "45%",
  },

  {
    title: "Video Editing",
    emoji: "🎞️",
    left: "70%",
    top: "45%",
  },

  {
    title: "Painting",
    emoji: "🖌️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Traveling",
    emoji: "🚗",
    left: "45%",
    top: "70%",
  },
];
export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My Life"
          description="Learn more About who I am, what I do, what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 p-0 col-span-3  ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my prespective "
                className="px-6 pt-6"
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="book-cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 p-0 col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore Technolgies and tool i use to craft exceptional digitak
                experinces."
                className="px-6 pt-6"
              />
              <ToolBoxItems items={toolBoxItems} className="mt-6 " itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <Card className="h-[320px] p-0 flex flex-col ">
            <CardHeader
              title="Beyond The Code"
              description="Explore my Interests and hobbies beyond the degital realm."
              className="px-6 py-6"
            />

            <div className="relative flex-1" ref={constrainRef}>
              {hobbies.map((hobby) => (
                
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 py-1.5 rounded-full absolute"
                  style={{ left: hobby.left, top: hobby.top }}
                  drag
                  dragConstraints={constrainRef}
                  
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative">
            <Image
              src={MapImag}
              alt="map"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded-full after:content-[] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
            <div className="absolute inset-0 -z-20 rounded-full  animate-ping [animation-duration:2s] bg-gradient-to-r from-emerald-300 to-sky-400   "></div>
            <div className="absolute inset-0 -z-20  rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 "></div>
              <Image src={mysmile} alt="memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

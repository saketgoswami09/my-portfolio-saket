"use client"; // Necessary for using hooks in Next.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin

export const Header = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-item");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        if (targetId) {
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            gsap.to(window, {
              scrollTo: { y: targetSection, offsetY: 60 }, // Smooth scroll with offset
              duration: 1.2,
              ease: "power2.inOut",
            });
          }
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {}); // Cleanup
      });
    };
  }, []);

  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 dark:bg-gray-800/70 backdrop-blur">
        <a href="#hero" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="mailto:saketgirigoswami4141@gmail.com"
          className="nav-item bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

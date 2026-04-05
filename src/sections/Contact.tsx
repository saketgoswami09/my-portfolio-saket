import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Download } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left">
          {/* Background grain */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="mt-2 max-w-xl text-sm md:text-base">
                Ready to bring your next project to life? Let&apos;s discuss how
                I can help you achieve your goals.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Contact button */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=saketgirigoswami4141@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>

              {/* Resume button */}
              <a
                href="https://drive.google.com/file/d/1Vb1nJsaWkAd3fQmRwreqPt2iHpHOVjOS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-gray-900 bg-white px-6 text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
              >
                <span className="font-semibold">Resume</span>
                <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

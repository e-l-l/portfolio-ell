"use client";

import { useState } from "react";
import ExperienceSection from "@/components/portfolio-sections/ExperienceSection";
import ProjectsSection from "@/components/portfolio-sections/ProjectsSection";
import SkillsSection from "@/components/portfolio-sections/SkillsSection";
import EducationSection from "@/components/portfolio-sections/EducationSection";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [introCompleted, setIntroCompleted] = useState(false);

  // Handle intro completion
  const handleIntroComplete = () => {
    setIntroCompleted(true);
  };

  // Create a CSS class for the main content
  const mainContentClass = `transition-opacity duration-2000 ${
    introCompleted ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      {!introCompleted && <Intro onComplete={handleIntroComplete} />}

      <div className={mainContentClass}>
        {/* Hero Section */}
        <section
          id="hero"
          className="flex flex-col items-center justify-center min-h-screen p-4 relative"
        >
          <Hero />

          <div className="absolute bottom-0 animate-[bounce_3s_infinite] flex flex-col items-center">
            <div className="text-zinc-400 text-sm">Scroll Down</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </section>

        {/* Portfolio Sections */}
        <div className="max-w-6xl mx-auto px-4">
          {/* Chat-based Portfolio Sections */}
          <div id="experiences">
            <ExperienceSection />
          </div>

          <div id="skills">
            <SkillsSection />
          </div>

          <div id="projects">
            <ProjectsSection />
          </div>

          <div id="education">
            <EducationSection />
          </div>
        </div>

        {/* Footer with Contact Section */}
        <Footer />
      </div>
    </>
  );
}

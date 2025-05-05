"use client";

import ChatInput from "@/components/ChatInput";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ParticleSphereWrapper from "@/components/ParticleSphereWrapper";
import ExperienceSection from "@/components/portfolio-sections/ExperienceSection";
import ProjectsSection from "@/components/portfolio-sections/ProjectsSection";
import SkillsSection from "@/components/portfolio-sections/SkillsSection";
import EducationSection from "@/components/portfolio-sections/EducationSection";

export default function Home() {
  return (
    <>
      {/* Background Particle Sphere */}
      <ParticleSphereWrapper />

      <div className="relative">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
              Prathmesh Ghatol
            </h1>
            <p className="text-zinc-400 mt-2 text-lg">
              AI/ML Software Developer and Data Enthusiast
            </p>
          </div>

          {/* Chat Input Section */}
          <ChatInput minHeight="120px" />

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full mt-4">
            {[
              {
                title: "Experiences",
                description: "Professional work history",
                href: "#experiences",
              },
              {
                title: "Projects",
                description: "Personal & team projects",
                href: "#projects",
              },
              {
                title: "Skills",
                description: "Skills and technologies",
                href: "#skills",
              },
              {
                title: "Education",
                description: "Academic background",
                href: "#education",
              },
            ].map((feature, index) => (
              <a
                key={index}
                href={feature.href}
                className="block transition-transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(
                    feature.href.substring(1)
                  );
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Card className="border-zinc-800/50 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white/90">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400/80">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>

          <div className="absolute bottom-10 animate-bounce">
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

          <div id="projects">
            <ProjectsSection />
          </div>

          <div id="skills">
            <SkillsSection />
          </div>

          <div id="education">
            <EducationSection />
          </div>

          {/* Footer */}
          <footer className="py-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-500">
              © 2023 Prathmesh Ghatol. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

"use client";

import ChatSection from "./ChatSection";

// Use a fixed reference date for all messages
const BASE_DATE = "2025-05-15T10:00:00Z";

export default function SkillsSection() {
  const messages = [
    {
      id: 1,
      content: "What skills and technologies do you have?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 20
      ).toISOString(),
    },
    {
      id: 2,
      content: (
        <div className="space-y-4">
          <p>I have a diverse set of skills across several domains:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "Java",
                  "C++",
                  "SQL",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium mb-2">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "PyTorch",
                  "TensorFlow",
                  "Node.js",
                  "Express",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 19
      ).toISOString(),
    },
    {
      id: 3,
      content: "What are your strengths in machine learning?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 18
      ).toISOString(),
    },
    {
      id: 4,
      content: (
        <div className="space-y-3">
          <p>My strengths in machine learning include:</p>

          <div className="space-y-3">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium mb-2">Machine Learning</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Deep Learning",
                  "Computer Vision",
                  "NLP",
                  "Reinforcement Learning",
                  "Data Mining",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium mb-2">Data Science</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Analysis",
                  "Statistical Modeling",
                  "Data Visualization",
                  "Feature Engineering",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm mt-2">
            I specialize in applying these techniques to solve real-world
            problems, particularly in computer vision and natural language
            processing domains.
          </p>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 17
      ).toISOString(),
    },
    {
      id: 5,
      content: "What about your web development skills?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 16
      ).toISOString(),
    },
    {
      id: 6,
      content: (
        <div className="space-y-3">
          <p>In web development, I'm proficient with:</p>

          <div className="bg-zinc-800/70 rounded-lg p-3">
            <h4 className="font-medium mb-2">Web Development</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML/CSS",
                "REST APIs",
                "GraphQL",
                "Responsive Design",
                "Authentication",
                "State Management",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-800/70 rounded-lg p-3">
            <h4 className="font-medium mb-2">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Git",
                "Docker",
                "AWS",
                "Google Cloud",
                "Kubernetes",
                "CI/CD",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm mt-2">
            I enjoy building full-stack applications with modern frameworks and
            have experience deploying and scaling web services in cloud
            environments.
          </p>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 15
      ).toISOString(),
    },
  ];

  return <ChatSection title="Skills" messages={messages} />;
}

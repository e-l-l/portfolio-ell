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
          <p>I have experience across a variety of technologies:</p>

          <div className="space-y-3 mt-3">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "HTML/CSS",
                  "JavaScript",
                  "TypeScript",
                  "SQL",
                  "C++",
                  "Dart",
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
              <h4 className="font-medium mb-2">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "React Native",
                  "Next.js",
                  "Flutter",
                  "FastAPI",
                  "Streamlit",
                  "LangGraph",
                  "LangChain",
                  "Figma Plugins",
                  "OpenAI",
                  "Anthropic",
                  "Gemini",
                  "Deepseek",
                ].map((tool, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {tool}
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
  ];

  return <ChatSection title="Skills" messages={messages} />;
}

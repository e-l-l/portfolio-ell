"use client";

import ChatSection from "./ChatSection";

// Use a fixed reference date for all messages
const BASE_DATE = "2025-05-15T10:00:00Z";

export default function ProjectsSection() {
  const messages = [
    {
      id: 1,
      content: "What projects have you worked on?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 15
      ).toISOString(),
    },
    {
      id: 2,
      content: (
        <div className="space-y-4">
          <p>
            I've worked on several impactful projects. Here are a few
            highlights:
          </p>

          <div className="space-y-4 mt-3">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium">
                Lumen – Digital Transparency for Supply Chains
              </h4>
              <p className="mt-1 text-sm">
                Built a Web3 product to manage decentralized carbon emissions
                for supply chains. Won Based India 2025 Hackathon.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js", "Wagmi"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium">Car Crash & Price Prediction</h4>
              <p className="mt-1 text-sm">
                Developed a deep learning pipeline to classify car crash
                severity and estimate repair costs.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Python", "TensorFlow"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium">Customer Support Chatbot</h4>
              <p className="mt-1 text-sm">
                Built an LLM-powered chatbot that responds to support queries
                using document embeddings.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Python", "HuggingFace"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium">Attendance Management System</h4>
              <p className="mt-1 text-sm">
                Created a fully automated system that tracks attendance,
                improving accuracy and saving 1+ teacher-hour daily.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js", "Node.js"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 14
      ).toISOString(),
    },
  ];

  return <ChatSection title="Projects" messages={messages} />;
}

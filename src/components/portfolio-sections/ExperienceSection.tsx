"use client";

import ChatSection from "./ChatSection";

// Use a fixed reference date for all messages
const BASE_DATE = "2025-05-15T10:00:00Z";

export default function ExperienceSection() {
  const messages = [
    {
      id: 1,
      content: "Can you tell me about your work experience?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 10
      ).toISOString(),
    },
    {
      id: 2,
      content: (
        <div className="space-y-4">
          <p>Absolutely! Here's a snapshot of my professional experience:</p>

          <div className="space-y-3 mt-3">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">
                    Founding AI/ML & Software Engineer
                  </h4>
                  <p className="text-xs text-zinc-400">Niti AI</p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  Aug 2023 - Present
                </span>
              </div>
              <p className="mt-2 text-sm">
                Built scalable AI systems that increased CTR and delivered
                production-grade ML modules. Created ultra-light SDKs and
                optimized AI pipelines for 5× faster execution.
              </p>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Data Analyst Intern</h4>
                  <p className="text-xs text-zinc-400">Think360 AI</p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  Jun 2023 - Aug 2023
                </span>
              </div>
              <p className="mt-2 text-sm">
                Built LLM-based chatbots, Power BI dashboards, and fraud
                detection systems to improve SEO.
              </p>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Data Analyst Intern</h4>
                  <p className="text-xs text-zinc-400">GetWYLD</p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  Nov 2022 - Dec 2022
                </span>
              </div>
              <p className="mt-2 text-sm">
                Automated dashboards for performance insights and managed data
                across multiple pipelines.
              </p>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Software Engineer Intern</h4>
                  <p className="text-xs text-zinc-400">BinaryDots Fretbox</p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  Aug 2022 - Nov 2022
                </span>
              </div>
              <p className="mt-2 text-sm">
                Developed Flutter modules and fixed major issues to improve UX
                and application stability.
              </p>
            </div>
          </div>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 9
      ).toISOString(),
    },
    {
      id: 3,
      content: "What were your main responsibilities at Niti AI?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 8
      ).toISOString(),
    },
    {
      id: 4,
      content: (
        <div>
          <p>At Niti AI, my core responsibilities include:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>
              Designing and deploying machine learning models that improved CTR
              by up to 1%
            </li>
            <li>
              Building platform-agnostic SDKs that integrate in under 5 minutes
            </li>
            <li>
              Delivering production-ready AI modules for high-traffic user
              environments
            </li>
            <li>
              Optimizing workflows for speed and scalability—up to 5×
              performance boosts
            </li>
            <li>
              Collaborating with cross-functional teams to turn business
              problems into ML-driven solutions
            </li>
          </ul>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 7
      ).toISOString(),
    },
  ];

  return <ChatSection title="Experience" messages={messages} />;
}

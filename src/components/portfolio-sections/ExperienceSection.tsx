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
                Boosted CTR by up to 1% using AI-driven RAG and recommendation
                systems, generating 60K+ monthly clicks. Built platform-agnostic
                SDKs (React, React Native, Flutter, Android) enabling
                integrations in under 5 minutes. Developed a no-code UI editor
                and orchestrated AI workflows using LangGraph and Next.js.
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
                Built LLM-powered chatbots for support and SQL generation.
                Developed interactive HR dashboards using Power BI and built
                fraud detection systems to flag malicious apps, enhancing client
                SEO.
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
                Automated reporting dashboards enabling one-click performance
                overviews for business stakeholders.
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
                Enhanced app UX and stability by developing Flutter modules and
                resolving critical bugs that prevented startup failures.
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
              Designing AI-driven RAG and recommendation systems that boosted
              CTR by up to 1%, generating 60K+ monthly clicks
            </li>
            <li>
              Building super-slim platform-agnostic SDKs (React, React Native,
              Flutter, Android) enabling integrations in under 5 minutes
            </li>
            <li>
              Developing a no-code UI editor with drag-and-drop and inline
              editing capabilities
            </li>
            <li>
              Orchestrating AI workflows using LangGraph, FastAPI, and Next.js
              with human-in-the-loop logic
            </li>
            <li>
              Designing a resilient LLM orchestration system that intelligently
              routes requests across models (OpenAI, Anthropic, Gemini) for
              optimal availability
            </li>
            <li>
              Creating Growth Agents to auto-select and deploy effective growth
              experiences tailored to business goals
            </li>
            <li>
              Building GenUI: a system that generates frontend & backend
              end-to-end user journeys from a single prompt
            </li>
            <li>
              Developing Figma plugins and an HTML parser to convert designs
              into editable UI blocks on-platform
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

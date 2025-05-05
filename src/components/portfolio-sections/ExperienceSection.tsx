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
          <p>Sure! Here's a summary of my professional experience:</p>

          <div className="space-y-3 mt-3">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">AI Software Engineer</h4>
                  <p className="text-xs text-zinc-400">Tech Solutions Inc.</p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  2022 - Present
                </span>
              </div>
              <p className="mt-2 text-sm">
                Developed machine learning models for computer vision
                applications. Implemented deep learning architectures using
                PyTorch and TensorFlow.
              </p>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Data Scientist</h4>
                  <p className="text-xs text-zinc-400">Data Insights Corp</p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  2020 - 2022
                </span>
              </div>
              <p className="mt-2 text-sm">
                Performed data analysis and built predictive models. Created
                data visualizations and dashboards to communicate insights.
              </p>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Software Developer Intern</h4>
                  <p className="text-xs text-zinc-400">Web Innovations</p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  2019 - 2020
                </span>
              </div>
              <p className="mt-2 text-sm">
                Contributed to full-stack web applications using React and
                Node.js. Implemented responsive UI components and RESTful APIs.
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
      content: "What were your main responsibilities at Tech Solutions?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 8
      ).toISOString(),
    },
    {
      id: 4,
      content: (
        <div>
          <p>At Tech Solutions Inc., my main responsibilities include:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>
              Designing and implementing deep learning models for image
              classification and object detection
            </li>
            <li>
              Optimizing model performance and deploying to production
              environments
            </li>
            <li>
              Collaborating with cross-functional teams to integrate AI
              solutions into existing products
            </li>
            <li>
              Mentoring junior developers and leading technical discussions
            </li>
            <li>
              Staying current with the latest research and technologies in AI/ML
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

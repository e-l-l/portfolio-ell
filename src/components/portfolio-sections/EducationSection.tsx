"use client";

import ChatSection from "./ChatSection";

// Use a fixed reference date for all messages
const BASE_DATE = "2025-05-15T10:00:00Z";

export default function EducationSection() {
  const messages = [
    {
      id: 1,
      content: "Tell me about your educational background.",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 25
      ).toISOString(),
    },
    {
      id: 2,
      content: (
        <div className="space-y-4">
          <p>
            I completed my undergraduate studies with a strong focus on
            technology and data:
          </p>

          <div className="space-y-4 mt-2">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-xs text-zinc-400">
                    University of Mumbai (D.J. Sanghvi College of Engineering)
                  </p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  Aug 2020 – May 2024
                </span>
              </div>
              <p className="mt-2 text-sm">
                Graduated with a CGPA of <strong>9.1</strong> and a Minor in{" "}
                <strong>Data Science</strong>.
              </p>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Minor in Data Science</h4>
                  <p className="text-xs text-zinc-400">
                    University of Mumbai (D.J. Sanghvi College of Engineering)
                  </p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  Aug 2022 – May 2024
                </span>
              </div>
              <p className="mt-2 text-sm">
                Specialized in machine learning, data mining, and statistical
                analysis.
              </p>
            </div>
          </div>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 24
      ).toISOString(),
    },
    {
      id: 3,
      content: "Did you do any notable coursework or specializations?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 23
      ).toISOString(),
    },
    {
      id: 4,
      content: (
        <div className="space-y-3">
          <p>Yes, my degree covered both foundational and advanced topics:</p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
            <li>Data Structures</li>
            <li>Web Development</li>
            <li>Algorithms</li>
            <li>Computer Networks</li>
            <li>Statistics</li>
            <li>Database Management Systems (DBMS)</li>
            <li>Artificial Intelligence</li>
            <li>Soft Computing</li>
            <li>Data Science (Minor Degree Focus)</li>
          </ul>
          <p className="text-sm mt-2">
            These subjects gave me a solid technical foundation and enabled me
            to apply AI and data-driven solutions to real-world problems.
          </p>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 22
      ).toISOString(),
    },
  ];

  return <ChatSection title="Education" messages={messages} />;
}

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
            I've pursued a strong foundation in computer science through my
            education:
          </p>

          <div className="space-y-4 mt-2">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">
                    Master of Science in Computer Science
                  </h4>
                  <p className="text-xs text-zinc-400">
                    University of Technology
                  </p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  2018 - 2020
                </span>
              </div>
              <p className="mt-2 text-sm">
                Specialized in Artificial Intelligence and Machine Learning.
                Thesis on deep learning applications in computer vision.
              </p>
            </div>

            <div className="bg-zinc-800/70 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">
                    Bachelor of Engineering in Computer Science
                  </h4>
                  <p className="text-xs text-zinc-400">Engineering Institute</p>
                </div>
                <span className="text-xs border border-zinc-700 rounded px-2 py-1">
                  2014 - 2018
                </span>
              </div>
              <p className="mt-2 text-sm">
                Graduated with honors. Completed several projects in software
                development and data analysis.
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
      content: "What was your Master's thesis about?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 23
      ).toISOString(),
    },
    {
      id: 4,
      content: (
        <div className="space-y-3">
          <p>
            My Master's thesis was titled "Advanced Neural Networks for
            Real-time Object Detection in Dynamic Environments."
          </p>
          <p className="text-sm">
            The research focused on improving object detection algorithms for
            use in autonomous vehicles and robotics. Specifically, I:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
            <li>
              Developed a modified YOLO architecture with attention mechanisms
            </li>
            <li>
              Achieved 15% improvement in detection accuracy while maintaining
              real-time performance
            </li>
            <li>
              Created a novel data augmentation pipeline for enhancing training
              with limited data
            </li>
            <li>
              Implemented the system on embedded hardware for edge deployment
            </li>
            <li>
              Validated results through extensive testing in various lighting
              and weather conditions
            </li>
          </ul>
          <p className="text-sm mt-2">
            The thesis received recognition from the department and portions
            were later published in an international conference on computer
            vision.
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

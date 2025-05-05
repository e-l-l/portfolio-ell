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
          <p>I've worked on several projects. Here are some highlights:</p>

          <div className="space-y-4 mt-3">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium">AI Image Generator</h4>
              <p className="mt-1 text-sm">
                A deep learning model that generates realistic images from text
                descriptions using GANs.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Python", "PyTorch", "React", "Flask"].map((tech, i) => (
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
              <h4 className="font-medium">Smart Data Dashboard</h4>
              <p className="mt-1 text-sm">
                Interactive data visualization platform with real-time analytics
                and customizable widgets.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js", "D3.js", "TypeScript", "MongoDB"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  )
                )}
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
    {
      id: 3,
      content: "Can you tell me more about the AI Image Generator?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 13
      ).toISOString(),
    },
    {
      id: 4,
      content: (
        <div className="space-y-3">
          <p>
            The AI Image Generator is one of my most ambitious projects. Here
            are more details:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
            <li>
              Implemented a Generative Adversarial Network (GAN) architecture
              for high-quality image synthesis
            </li>
            <li>
              Trained the model on a dataset of over 100,000 images across
              multiple categories
            </li>
            <li>
              Built a React-based frontend that allows users to input text
              descriptions
            </li>
            <li>
              Developed a Flask API that processes requests and returns
              generated images
            </li>
            <li>
              Deployed the solution on AWS using Docker containers and CI/CD
              pipelines
            </li>
          </ul>
          <p className="mt-2 text-sm">
            The project received recognition at a local AI hackathon and is now
            being used by designers for rapid prototyping.
          </p>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 12
      ).toISOString(),
    },
    {
      id: 5,
      content: "Do you have any other notable projects?",
      sender: "user" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 11
      ).toISOString(),
    },
    {
      id: 6,
      content: (
        <div className="space-y-4">
          <p>Yes, I have a couple more projects worth mentioning:</p>

          <div className="space-y-4 mt-3">
            <div className="bg-zinc-800/70 rounded-lg p-3">
              <h4 className="font-medium">Natural Language Processor</h4>
              <p className="mt-1 text-sm">
                Built a system that understands and generates human language
                using transformer models.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Python", "TensorFlow", "BERT", "FastAPI"].map((tech, i) => (
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
              <h4 className="font-medium">Stock Market Predictor</h4>
              <p className="mt-1 text-sm">
                Machine learning algorithm that predicts stock price movements
                based on historical data.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Python", "Scikit-learn", "Pandas", "Plotly"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <p className="text-sm">
            Each of these projects incorporated best practices in software
            development, including thorough testing, documentation, and version
            control.
          </p>
        </div>
      ),
      sender: "ai" as const,
      timestamp: new Date(
        new Date(BASE_DATE).getTime() - 1000 * 60 * 10
      ).toISOString(),
    },
  ];

  return <ChatSection title="Projects" messages={messages} />;
}

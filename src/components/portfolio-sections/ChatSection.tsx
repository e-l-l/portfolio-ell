"use client";

import { ReactNode, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  content: ReactNode;
  sender: "user" | "ai";
  timestamp: string;
}

interface ChatSectionProps {
  title: string;
  messages: Message[];
}

export default function ChatSection({ title, messages }: ChatSectionProps) {
  // Use client-side only rendering for time formatting
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        {title}
      </h2>
      <div className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 border border-zinc-800/50">
        {/* Chat header */}
        <div className="border-b border-zinc-800 pb-4 mb-6">
          <h3 className="text-xl font-semibold text-white/90">{title} Chat</h3>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-xl ${
                  message.sender === "user"
                    ? "bg-zinc-800 text-white rounded-tr-none"
                    : "titanium-gradient text-white rounded-tl-none"
                }`}
              >
                <div className="text-sm">{message.content}</div>
                <span className="text-xs text-zinc-400 block mt-2">
                  {isClient
                    ? new Date(message.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "00:00"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

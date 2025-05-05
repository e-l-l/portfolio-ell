"use client";

import { ReactNode, useEffect, useState } from "react";
import { StreamingTitle } from "@/components/ui/text-stream";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import SimpleType from "@/components/ui/simple-type";

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
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show messages with delay
  useEffect(() => {
    if (inView) {
      // Show messages one by one
      const showMessagesWithDelay = async () => {
        for (let i = 0; i < messages.length; i++) {
          // Wait before showing each message
          await new Promise((resolve) =>
            setTimeout(resolve, i === 0 ? 800 : 1000)
          );

          // Add this message to visible list
          setVisibleMessages((prev) => [...prev, messages[i].id]);
        }
      };

      showMessagesWithDelay();
    }
  }, [inView, messages]);

  return (
    <section className="py-16" ref={sectionRef}>
      <div className="bg-zinc-900/50 backdrop-blur-xs rounded-xl p-6 border border-zinc-800/50">
        {/* Chat header */}
        <div className="border-b border-zinc-800 pb-4 mb-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {inView ? (
              <SimpleType text={title} speed={40} delay={300} />
            ) : (
              title
            )}
          </h2>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.sender === "user" ? "justify-end" : "justify-start",
                visibleMessages.includes(message.id)
                  ? "opacity-100"
                  : "opacity-0",
                "transition-opacity duration-500"
              )}
              style={{
                transitionDelay: "300ms",
              }}
            >
              <div
                className={`max-w-[85%] p-4 rounded-xl ${
                  message.sender === "user"
                    ? "bg-zinc-800 text-white rounded-tr-none"
                    : "titanium-gradient text-white rounded-tl-none"
                }`}
              >
                <div className="text-sm">
                  {typeof message.content === "string" &&
                  visibleMessages.includes(message.id) ? (
                    <SimpleType text={message.content} speed={30} delay={300} />
                  ) : (
                    message.content
                  )}
                </div>
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

"use client";

import { useState } from "react";
import ChatInput from "@/components/ChatInput";

// Mock message data
const initialMessages = [
  {
    id: 1,
    content: "Hello! How can I help you today?",
    sender: "ai",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: message,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        content:
          "I'm just a demo AI assistant. This is a placeholder response to simulate a conversation. In a real application, this would connect to an actual AI backend.",
        sender: "ai",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl min-h-screen pt-8 pb-8">
      <div className="glass-effect rounded-2xl p-4 min-h-[calc(100vh-100px)] flex flex-col">
        {/* Chat header */}
        <div className="border-b border-zinc-800 pb-4 mb-4">
          <h1 className="text-2xl font-bold">New Chat</h1>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto py-4 px-2">
          {messages.length === 0 ? (
            <div className="text-center text-zinc-500 py-10">
              Start a new conversation
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-xl ${
                    message.sender === "user"
                      ? "bg-zinc-800 text-white rounded-tr-none"
                      : "titanium-gradient text-white rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs text-zinc-400 block mt-2">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input */}
        <div className="mt-auto pt-4">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

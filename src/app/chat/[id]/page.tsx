"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ChatInput from "@/components/ChatInput";

// Mock chat data based on ID
const getChatById = (id: string) => {
  const chats = {
    "1": {
      title: "Website Development",
      messages: [
        {
          id: 1,
          content: "How do I create a responsive layout?",
          sender: "user",
          timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
        },
        {
          id: 2,
          content:
            "Responsive layouts can be created using CSS flexbox, grid, or media queries. Which approach are you most interested in learning about?",
          sender: "ai",
          timestamp: new Date(Date.now() - 1000 * 60 * 9).toISOString(),
        },
        {
          id: 3,
          content: "I'd like to learn about CSS grid.",
          sender: "user",
          timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
        },
        {
          id: 4,
          content:
            "CSS Grid is a powerful 2-dimensional layout system. Here's how to get started...",
          sender: "ai",
          timestamp: new Date(Date.now() - 1000 * 60 * 7).toISOString(),
        },
      ],
    },
    "2": {
      title: "React Hooks",
      messages: [
        {
          id: 1,
          content: "Explain useEffect dependencies",
          sender: "user",
          timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
        },
        {
          id: 2,
          content:
            "The dependency array in useEffect determines when the effect should run. If you provide an empty array [], the effect runs only once after the initial render.",
          sender: "ai",
          timestamp: new Date(Date.now() - 1000 * 60 * 24).toISOString(),
        },
      ],
    },
    "3": {
      title: "CSS Grid tutorial",
      messages: [
        {
          id: 1,
          content: "Can you help with grid templates?",
          sender: "user",
          timestamp: new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 2
          ).toISOString(),
        },
        {
          id: 2,
          content:
            "Certainly! Grid templates allow you to define the structure of your grid layout. Here's how to use grid-template-columns and grid-template-rows...",
          sender: "ai",
          timestamp: new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 60
          ).toISOString(),
        },
      ],
    },
    "4": {
      title: "API Integration",
      messages: [
        {
          id: 1,
          content: "Best practices for REST APIs?",
          sender: "user",
          timestamp: new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 5
          ).toISOString(),
        },
        {
          id: 2,
          content:
            "When designing REST APIs, consider these best practices: 1. Use nouns instead of verbs in endpoints...",
          sender: "ai",
          timestamp: new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 5 + 1000 * 60
          ).toISOString(),
        },
      ],
    },
    "5": {
      title: "Performance optimization",
      messages: [
        {
          id: 1,
          content: "How to improve load times",
          sender: "user",
          timestamp: new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 7
          ).toISOString(),
        },
        {
          id: 2,
          content:
            "To improve website load times, you can: 1. Optimize images 2. Implement lazy loading 3. Minimize HTTP requests...",
          sender: "ai",
          timestamp: new Date(
            Date.now() - 1000 * 60 * 60 * 24 * 7 + 1000 * 60
          ).toISOString(),
        },
      ],
    },
  };

  return (
    chats[id as keyof typeof chats] || { title: "Chat Not Found", messages: [] }
  );
};

export default function ChatPage() {
  const params = useParams();
  const id = params.id as string;
  const [chat, setChat] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const chatData = getChatById(id);
    setChat(chatData);
    setMessages(chatData.messages);
  }, [id]);

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
          "This is a continuation of our previous conversation. I'm a demo AI assistant responding to your message.",
        sender: "ai",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  if (!chat) return <div className="container mx-auto p-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 max-w-5xl min-h-screen pt-8 pb-8">
      <div className="glass-effect rounded-2xl p-4 min-h-[calc(100vh-100px)] flex flex-col">
        {/* Chat header */}
        <div className="border-b border-zinc-800 pb-4 mb-4">
          <h1 className="text-2xl font-bold">{chat.title}</h1>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto py-4 px-2">
          {messages.length === 0 ? (
            <div className="text-center text-zinc-500 py-10">
              No messages in this conversation
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

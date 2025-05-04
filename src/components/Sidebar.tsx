"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MessageSquare,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Mock chat history data
const chatHistory = [
  {
    id: 1,
    title: "Website Development",
    preview: "How do I create a responsive layout?",
    timestamp: "2h ago",
  },
  {
    id: 2,
    title: "React Hooks",
    preview: "Explain useEffect dependencies",
    timestamp: "Yesterday",
  },
  {
    id: 3,
    title: "CSS Grid tutorial",
    preview: "Can you help with grid templates?",
    timestamp: "2d ago",
  },
  {
    id: 4,
    title: "API Integration",
    preview: "Best practices for REST APIs",
    timestamp: "5d ago",
  },
  {
    id: 5,
    title: "Performance optimization",
    preview: "How to improve load times",
    timestamp: "1w ago",
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-40 rounded-md bg-zinc-900/50 backdrop-blur-lg text-gray-400 lg:hidden border-zinc-800"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-zinc-900/95 backdrop-blur-md border-zinc-800 p-0"
        >
          <div className="flex flex-col h-full">
            {/* New chat button */}
            <div className="p-4">
              <Button
                asChild
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white"
              >
                <Link
                  href="/chat"
                  className="flex items-center justify-center gap-2"
                >
                  <PlusIcon size={18} />
                  New Chat
                </Link>
              </Button>
            </div>

            {/* Chat history */}
            <div className="flex-1 overflow-y-auto px-3">
              <h2 className="text-xs uppercase text-zinc-500 font-semibold px-2 py-2">
                Chat History
              </h2>
              <div className="space-y-1">
                {chatHistory.map((chat) => (
                  <Link
                    key={chat.id}
                    href={`/chat/${chat.id}`}
                    className="flex flex-col gap-1 p-3 hover:bg-zinc-800/50 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-zinc-300 truncate">
                        {chat.title}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {chat.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 truncate">
                      {chat.preview}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Collapse/Expand button (desktop only) */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 z-40 rounded-md bg-zinc-900/50 backdrop-blur-lg text-gray-400 hidden lg:flex border-zinc-800"
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{ left: isCollapsed ? "16px" : "240px" }}
      >
        {isCollapsed ? (
          <ChevronRightIcon size={18} />
        ) : (
          <ChevronLeftIcon size={18} />
        )}
      </Button>

      {/* Sidebar for desktop - collapsible */}
      <div
        className={`fixed inset-y-0 left-0 z-30 bg-zinc-900/90 backdrop-blur-md border-r border-zinc-800 transition-all duration-300 hidden lg:flex lg:flex-col ${
          isCollapsed ? "w-16" : "w-72"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* New chat button */}
          <div className="p-4">
            <Button
              asChild
              variant="outline"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
            >
              <Link
                href="/chat"
                className={`flex items-center ${
                  isCollapsed ? "justify-center" : "justify-start gap-2"
                }`}
              >
                <PlusIcon size={18} />
                {!isCollapsed && <span>New Chat</span>}
              </Link>
            </Button>
          </div>

          {/* Chat history */}
          {!isCollapsed && (
            <div className="flex-1 overflow-y-auto px-3">
              <h2 className="text-xs uppercase text-zinc-500 font-semibold px-2 py-2">
                Chat History
              </h2>
              <div className="space-y-1">
                {chatHistory.map((chat) => (
                  <Link
                    key={chat.id}
                    href={`/chat/${chat.id}`}
                    className="flex flex-col gap-1 p-3 hover:bg-zinc-800/50 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-zinc-300 truncate">
                        {chat.title}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {chat.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 truncate">
                      {chat.preview}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Collapsed chat icons */}
          {isCollapsed && (
            <div className="flex-1 overflow-y-auto px-2 py-4">
              <div className="space-y-3 flex flex-col items-center">
                {chatHistory.map((chat) => (
                  <Avatar
                    key={chat.id}
                    className="cursor-pointer hover:ring-2 hover:ring-zinc-600"
                    title={chat.title}
                  >
                    <AvatarFallback className="bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-400">
                      <MessageSquare size={16} />
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

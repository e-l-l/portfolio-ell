"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  Menu,
  Home,
  GripVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// Resume sections data
const resumeSections = [
  {
    id: 1,
    title: "Experience",
    preview: "My professional work history",
  },
  {
    id: 2,
    title: "Skills",
    preview: "Technical and soft skills",
  },
  {
    id: 3,
    title: "Projects",
    preview: "Showcase of my work",
  },
  {
    id: 4,
    title: "Education",
    preview: "Academic background",
  },
  {
    id: 5,
    title: "About Me",
    preview: "Personal introduction",
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [draggablePosition, setDraggablePosition] = useState<number>(100);
  const dragRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  // Handle dragging
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current && dragRef.current) {
        // Calculate new vertical position constrained to viewport
        const newY = Math.max(
          50, // Minimum position from top
          Math.min(
            e.clientY,
            window.innerHeight - 50 // Maximum position from bottom
          )
        );
        setDraggablePosition(newY);
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const dragElement = dragRef.current;
    if (dragElement) {
      dragElement.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (dragElement) {
        dragElement.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const toggleSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile toggle */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-40 rounded-md bg-zinc-900/50 backdrop-blur-sm text-gray-400 lg:hidden border-zinc-800"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-zinc-900/95 backdrop-blur-xs border-zinc-800 p-0"
        >
          <div className="flex flex-col h-full">
            {/* Home link */}
            <div className="p-4">
              <Button
                asChild
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white mb-2"
              >
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2"
                >
                  <Home size={18} />
                  Home
                </Link>
              </Button>

              {/* New chat button */}
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

            {/* Resume sections */}
            <div className="flex-1 overflow-y-auto px-3">
              <h2 className="text-xs uppercase text-zinc-500 font-semibold px-2 py-2">
                Recent Chats
              </h2>
              <div className="space-y-1">
                {resumeSections.map((section) => (
                  <Link
                    key={section.id}
                    href={`/chat/${section.id}`}
                    className="flex flex-col gap-1 p-3 hover:bg-zinc-800/50 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-zinc-300 truncate">
                        {section.title}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 truncate">
                      {section.preview}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sidebar toggle with draggable handle (desktop only) */}
      <div
        className="fixed z-50 hidden lg:flex flex-col items-center"
        style={{
          top: `${draggablePosition}px`,
          left: isCollapsed ? "0" : "288px",
          transition: "left 0.3s ease",
        }}
      >
        <div className="flex flex-col items-center rounded-r-md bg-zinc-900/95 backdrop-blur-xs border-r border-t border-b border-zinc-800">
          {/* Separate drag handle */}
          <div
            ref={dragRef}
            className="w-full h-8 flex items-center justify-center rounded-tr-md hover:bg-zinc-800/50 cursor-move p-1"
          >
            <GripVertical size={14} className="text-zinc-500" />
          </div>

          {/* Clear divider */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-br-md rounded-bl-none rounded-tl-none rounded-tr-none text-gray-400 hover:bg-zinc-800"
            onClick={toggleSidebar}
          >
            {isCollapsed ? (
              <ChevronRightIcon size={16} />
            ) : (
              <ChevronLeftIcon size={16} />
            )}
          </Button>
        </div>
      </div>

      {/* Sidebar for desktop - collapsible */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 bg-zinc-900/50 backdrop-blur-xs border-r border-zinc-800 transition-all duration-300 hidden lg:flex lg:flex-col",
          isCollapsed ? "-translate-x-full" : "translate-x-0 w-72"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Home link and New chat button */}
          <div className="p-4">
            <Button
              asChild
              variant="outline"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 mb-2"
            >
              <Link href="/" className="flex items-center justify-start gap-2">
                <Home size={18} />
                <span>Home</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
            >
              <Link
                href="/chat"
                className="flex items-center justify-start gap-2"
              >
                <PlusIcon size={18} />
                <span>New Chat</span>
              </Link>
            </Button>
          </div>

          {/* Resume sections */}
          <div className="flex-1 overflow-y-auto px-3">
            <h2 className="text-xs uppercase text-zinc-500 font-semibold px-2 py-2">
              Recent Chats
            </h2>
            <div className="space-y-1">
              {resumeSections.map((section) => (
                <Link
                  key={section.id}
                  href={`/chat/${section.id}`}
                  className="flex flex-col gap-1 p-3 hover:bg-zinc-800/50 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-zinc-300 truncate">
                      {section.title}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 truncate">
                    {section.preview}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

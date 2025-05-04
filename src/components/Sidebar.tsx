"use client";

import Link from "next/link";
import { useState } from "react";
import { HomeIcon, MessageSquare, UserIcon, SettingsIcon } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Chat", href: "/chat", icon: MessageSquare },
  { name: "Profile", href: "/profile", icon: UserIcon },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
];

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        className="fixed top-4 left-4 z-40 rounded-md p-2 bg-black/20 backdrop-blur-lg text-gray-400 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        {isMobileOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-30 lg:hidden bg-black/50 backdrop-blur-sm ${
          isMobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="fixed inset-y-0 left-0 w-64 bg-zinc-900/95 backdrop-blur-md border-r border-zinc-800">
          <nav className="flex flex-col h-full pt-20 pb-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-6 py-4 text-sm text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:flex lg:w-20 lg:flex-col border-r border-zinc-800 bg-zinc-900/80 backdrop-blur-md">
        <nav className="flex flex-col items-center mt-10 space-y-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col items-center px-2 py-3 text-zinc-400 hover:bg-zinc-800/50 hover:text-white rounded-md transition-colors"
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

"use client";

import React from "react";
import ChatInput from "@/components/ChatInput";
import FeatureCards from "@/components/FeatureCards";
import { AlertTriangle } from "lucide-react";

export default function Hero() {
  return (
    <div className="max-w-[1200px] w-full px-4">
      <div className="text-center mb-8">
        <h1
          className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight`}
        >
          Prathmesh Ghatol
        </h1>

        <p className={`text-xl mt-2 text-zinc-300`}>
          AI, Software Developer and Data Enthusiast
        </p>
      </div>

      {/* Chat Input */}
      <div className="mb-6">
        {/* Commented out for now
        <ChatInput minHeight="120px" />
        */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative flex items-center justify-center p-6 bg-zinc-900/70 backdrop-blur-[2px] border border-zinc-700 rounded-md">
            <div className="flex items-center space-x-3">
              <AlertTriangle size={18} className="text-zinc-500" />
              <code className="text-lg font-medium text-zinc-400 tracking-widest font-mono">
                WORK IN PROGRESS
              </code>
              <AlertTriangle size={18} className="text-zinc-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div>
        <FeatureCards />
      </div>
    </div>
  );
}

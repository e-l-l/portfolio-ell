"use client";

import React from "react";
import ChatInput from "@/components/ChatInput";
import FeatureCards from "@/components/FeatureCards";

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
        <ChatInput minHeight="120px" />
      </div>

      {/* Feature Cards */}
      <div>
        <FeatureCards />
      </div>
    </div>
  );
}

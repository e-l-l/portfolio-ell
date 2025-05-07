"use client";

import React from "react";
import ChatInput from "@/components/ChatInput";
import FeatureCards from "@/components/FeatureCards";

interface HeroProps {
  titleRef?: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef?: React.RefObject<HTMLParagraphElement | null>;
  chatInputRef?: React.RefObject<HTMLDivElement | null>;
  cardsContainerRef?: React.RefObject<HTMLDivElement | null>;
  onCardClick?: (href: string, index: number) => void;
  itemClassName?: string;
}

export default function Hero({
  titleRef,
  subtitleRef,
  chatInputRef,
  cardsContainerRef,
  onCardClick,
  itemClassName = "",
}: HeroProps) {
  return (
    <div className="max-w-[1200px] w-full px-4">
      <div className="text-center mb-8">
        <h1
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight ${
            titleRef ? "opacity-0" : ""
          }`}
        >
          Prathmesh Ghatol
        </h1>

        <p
          ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
          className={`text-xl mt-2 text-zinc-300 ${
            subtitleRef ? "opacity-0 mb-8" : "mb-6"
          }`}
        >
          AI, Software Developer and Data Enthusiast
        </p>
      </div>

      {/* Chat Input */}
      <div
        ref={chatInputRef as React.RefObject<HTMLDivElement>}
        className={chatInputRef ? "opacity-0 mb-6" : "mb-6"}
      >
        <ChatInput minHeight="120px" />
      </div>

      {/* Feature Cards */}
      <div ref={cardsContainerRef as React.RefObject<HTMLDivElement>}>
        <FeatureCards onCardClick={onCardClick} itemClassName={itemClassName} />
      </div>
    </div>
  );
}

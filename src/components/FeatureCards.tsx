"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export interface FeatureCard {
  title: string;
  description: string;
  href: string;
}

interface FeatureCardsProps {
  cards?: FeatureCard[];
  className?: string;
  onCardClick?: (href: string, index: number) => void;
  cardClassName?: string;
  itemClassName?: string;
}

export const defaultFeatureCards: FeatureCard[] = [
  {
    title: "Experiences",
    description: "Professional work history",
    href: "#experiences",
  },
  {
    title: "Projects",
    description: "Personal & team projects",
    href: "#projects",
  },
  {
    title: "Skills",
    description: "Skills and technologies",
    href: "#skills",
  },
  {
    title: "Education",
    description: "Academic background",
    href: "#education",
  },
];

export default function FeatureCards({
  cards = defaultFeatureCards,
  className = "",
  onCardClick,
  cardClassName = "",
  itemClassName = "",
}: FeatureCardsProps) {
  const handleCardClick = (
    e: React.MouseEvent,
    href: string,
    index: number
  ) => {
    e.preventDefault();

    if (onCardClick) {
      onCardClick(href, index);
    } else {
      // Default behavior to scroll to the target element
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full ${className}`}
    >
      {cards.map((card, index) => (
        <a
          key={index}
          href={card.href}
          className={`block transition-transform hover:-translate-y-1 ${itemClassName}`}
          onClick={(e) => handleCardClick(e, card.href, index)}
        >
          <Card
            className={`border-zinc-800/50 backdrop-blur-xs bg-white/5 hover:bg-white/10 transition-colors h-full ${cardClassName}`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-white/90">{card.title}</CardTitle>
              <CardDescription className="text-zinc-400/80">
                {card.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </a>
      ))}
    </div>
  );
}

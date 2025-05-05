"use client";

import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TextStreamProps {
  children: ReactNode;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export function TextStream({
  children,
  delay = 0,
  speed = 30,
  className = "",
  showCursor = true,
}: TextStreamProps) {
  // Basic states for the component
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [originalText, setOriginalText] = useState("");

  // Set up intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Extract the text content on first render
  useEffect(() => {
    // Extract text content from children
    let content = "";
    if (typeof children === "string") {
      content = children;
    } else if (
      typeof children === "object" &&
      children &&
      "props" in children
    ) {
      const childrenWithProps = children as any;
      if (typeof childrenWithProps.props.children === "string") {
        content = childrenWithProps.props.children;
      }
    }

    if (content) {
      setOriginalText(content);
    } else {
      // Fallback for non-text content
      setOriginalText("Text content unavailable");
      setIsComplete(true);
    }
  }, [children]);

  // Handle animation when element comes into view
  useEffect(() => {
    if (!inView || !originalText || isComplete) return;

    // Initial delay before starting animation
    const startTimeout = setTimeout(() => {
      // Start empty
      setText("");

      let i = 0;
      // Set up interval to add one character at a time
      const typingInterval = setInterval(() => {
        if (i < originalText.length) {
          setText((prev) => prev + originalText.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, 1000 / speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [inView, originalText, delay, speed, isComplete]);

  return (
    <span
      ref={ref}
      className={cn(
        className,
        showCursor && inView && !isComplete ? "text-cursor" : ""
      )}
    >
      {inView ? text || "" : originalText}
    </span>
  );
}

// Component for streaming a title with typewriter effect
export function StreamingTitle({
  children,
  delay = 0,
  speed = 20,
  className = "",
}: TextStreamProps) {
  return (
    <TextStream delay={delay} speed={speed} className={className}>
      {children}
    </TextStream>
  );
}

// Component for streaming content in chat messages
export function StreamingContent({
  children,
  delay = 0,
  speed = 40,
  className = "",
  showCursor = true,
}: TextStreamProps) {
  return (
    <TextStream
      delay={delay}
      speed={speed}
      className={className}
      showCursor={showCursor}
    >
      {children}
    </TextStream>
  );
}

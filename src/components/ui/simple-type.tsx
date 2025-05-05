"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

// Ultra-simple typewriter effect component
export default function SimpleType({
  text,
  speed = 100,
  delay = 0,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const charIndexRef = useRef(0);

  useEffect(() => {
    // Reset for new text
    setDisplayText("");
    charIndexRef.current = 0;
    setIsComplete(false);
    setShowCursor(true);

    // Wait for the specified delay
    const delayTimer = setTimeout(() => {
      // Start the typing animation
      const typeTimer = setInterval(() => {
        if (charIndexRef.current < text.length) {
          // Build the text one character at a time
          const nextCharacter = text.charAt(charIndexRef.current);
          setDisplayText((current) => current + nextCharacter);
          charIndexRef.current++;
        } else {
          clearInterval(typeTimer);
          setIsComplete(true);

          // Stop blinking cursor after completion
          setTimeout(() => setShowCursor(false), 1500);
        }
      }, speed);

      return () => clearInterval(typeTimer);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [text, speed, delay]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-blink">|</span>}
    </span>
  );
}

// Add this to globals.css:
// @keyframes blink { 50% { opacity: 0; } }
// .animate-blink { animation: blink 1s step-start infinite; }

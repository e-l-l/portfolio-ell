"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ParticleCloud } from "./ParticleSphere";
import GridBackground from "./GridBackground";

interface AnimationProps {
  onComplete: () => void;
}

function IntroAnimation({ onComplete }: AnimationProps) {
  const { camera } = useThree();

  useEffect(() => {
    // Initial camera position
    camera.position.set(5, 0, 0);
    camera.lookAt(0, 0, 0);

    const tl = gsap.timeline();

    // Multiple camera animation steps with more variety and transitions

    // Step 1: Rise from below
    tl.to(camera.position, {
      x: 0,
      y: -2,
      z: 6,
      duration: 3,
      ease: "power2.out",
    });

    // Step 2: Circle around left
    tl.to(camera.position, {
      x: -4,
      y: 1,
      z: 4,
      duration: 3.5,
      ease: "power1.inOut",
    });

    // Step 3: Move up and right
    tl.to(camera.position, {
      x: 3,
      y: 3,
      z: 5,
      duration: 2,
      ease: "sine.inOut",
    });

    // Step 4: Drop down and move toward center
    tl.to(camera.position, {
      x: 1,
      y: 0,
      z: 7,
      duration: 2.5,
      ease: "power3.inOut",
    });

    // Step 5: Spiral around
    tl.to(camera.position, {
      x: -2,
      y: -1,
      z: 6,
      duration: 3,
      ease: "power1.inOut",
    });

    // Step 6: Final position approach
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 8,
      duration: 5,
      ease: "power2.inOut",
    });

    // Add a repeating subtle movement to keep animation going indefinitely
    tl.to(
      camera.position,
      {
        x: 0.5,
        y: 0.3,
        z: 8.2,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1, // Infinite repeat
        yoyo: true, // Go back and forth
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, [camera, onComplete]);

  useFrame(() => {
    // Make sure camera is always looking at the center
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ParticleCloud count={3000} size={0.04} />
    </>
  );
}

const TypingText = ({
  text,
  delay = 0,
  onComplete,
}: {
  text: string;
  delay?: number;
  onComplete?: () => void;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start typing after delay
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      let index = 0;

      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) {
            // Ensure there's a visible delay before moving to the next line
            setTimeout(onComplete, 300);
          }
        }
      }, 25); // Slightly faster typing

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, onComplete]);

  // Don't render anything until we've started typing
  if (!hasStarted) return null;

  return (
    <div className="font-mono" style={{ fontFamily: "var(--font-geist-mono)" }}>
      {displayText}
      {!isComplete && (
        <span className="inline-block w-2 h-4 bg-white/90 ml-0.5 opacity-100">
          |
        </span>
      )}
    </div>
  );
};

const TerminalText = ({ onComplete }: { onComplete: () => void }) => {
  const [lineToDisplay, setLineToDisplay] = useState(0);
  const [allLinesComplete, setAllLinesComplete] = useState(false);
  const [countdownValue, setCountdownValue] = useState<number | null>(null);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Add CSS for scanline
  useEffect(() => {
    // Add CSS for scanline only
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scanline {
        0% { transform: translateY(-100%) }
        50%, 100% { transform: translateY(100%) }
      }
      .scanline {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent);
        opacity: 0.5;
        pointer-events: none;
        animation: scanline 4s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const terminalLines = [
    "> [⚠️ WARNING] For the best experience, make sure you have hardware acceleration ON",
    "> Initializing neural pathways...",
    "> Name: Prathmesh Ghatol",
    "> Identity: AI, Software Developer & Data Enthusiast",
    "> System Traits: Loves solving real-world problems with code 🧩",
    "> Core Modules: Tech, Gaming, Coding, Socializing, Learning New Things 🚀",
    "> Fun Fact: Has a sixth sense for debugging at 2 AM 🌙💻",
    "> Loading Portfolio... ✅",
  ];

  const handleLineComplete = () => {
    // Set typing state to prevent flashing
    setIsTyping(false);

    // Store the completed line
    setCompletedLines((prev) => [...prev, terminalLines[lineToDisplay]]);

    // Small delay before starting the next line to prevent flashing
    setTimeout(() => {
      if (lineToDisplay < terminalLines.length - 1) {
        setLineToDisplay((prev) => prev + 1);
        setIsTyping(true);
      } else {
        // Only set all lines complete after the last line is fully typed
        setAllLinesComplete(true);
      }
    }, 100);
  };

  // Auto-scroll when new lines appear
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [completedLines, countdownValue]);

  // Start the countdown after all lines are complete
  useEffect(() => {
    if (allLinesComplete && countdownValue === null) {
      // Start the countdown at 5
      setCountdownValue(5);
    }
  }, [allLinesComplete, countdownValue]);

  // Handle the countdown once it starts
  useEffect(() => {
    if (countdownValue !== null && countdownValue > 0) {
      const timer = setTimeout(() => {
        setCountdownValue((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdownValue === 0) {
      // Countdown finished, trigger completion after a brief pause
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdownValue, onComplete]);

  // Get the countdown display text
  const getCountdownText = () => {
    if (countdownValue === null) return "";
    if (countdownValue === 0) return "> System ready. Launching now...";
    return `> System ready. Launching in ${countdownValue}...`;
  };

  return (
    <div className="w-[800px]">
      <div className="w-full backdrop-blur-xs bg-black/10 rounded-lg border border-white/10 shadow-2xl overflow-hidden">
        {/* Terminal window header */}
        <div className="h-8 flex items-center px-4 bg-black/40 border-b border-white/10">
          <div className="flex space-x-2 items-center">
            <div className="w-3 h-3 rounded-full bg-white/40"></div>
            <div className="w-3 h-3 rounded-full bg-white/40"></div>
            <div className="w-3 h-3 rounded-full bg-white/40"></div>
          </div>
          <div className="mx-auto text-white/80 text-xs font-semibold tracking-wider">
            INITIALIZING SYSTEM
          </div>
        </div>

        {/* Terminal content */}
        <div
          ref={containerRef}
          className="w-full p-5 h-[50vh] max-h-[400px] overflow-auto text-white text-sm md:text-base flex flex-col space-y-2 font-geist-mono relative"
          style={{
            fontFamily: "var(--font-geist-mono)",
            scrollBehavior: "smooth",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(10,10,20,0.3))",
          }}
        >
          <div className="scanline"></div>

          {/* Display completed lines */}
          {completedLines.map((line, index) => (
            <div
              key={`complete-${index}`}
              className={`font-mono ${index === 0 ? "text-yellow-500" : ""}`}
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {line}
            </div>
          ))}

          {/* Current typing line */}
          {!allLinesComplete && isTyping && (
            <div className={lineToDisplay === 0 ? "text-yellow-500" : ""}>
              <TypingText
                text={terminalLines[lineToDisplay]}
                delay={50}
                onComplete={handleLineComplete}
              />
            </div>
          )}

          {/* Final countdown display */}
          {countdownValue !== null && (
            <div
              className="mt-4 font-mono text-green-400"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {getCountdownText()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Intro({ onComplete }: AnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnimationComplete = () => {
    // Prevent multiple calls
    if (isTransitioning) return;
    setIsTransitioning(true);

    console.log("Animation complete - transitioning to main content");

    // Fade out everything smoothly
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          onComplete();
        },
      });
    } else {
      onComplete();
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-background">
      <Canvas camera={{ position: [5, 0, 0], fov: 40 }}>
        <IntroAnimation onComplete={() => {}} />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-foreground">
        <GridBackground />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <TerminalText onComplete={handleAnimationComplete} />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ParticleCloud } from "./ParticleSphere";
import Hero from "@/components/Hero";
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

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 800);
      },
    });

    // Camera animation sequence
    tl.to(camera.position, {
      x: 0,
      y: 3,
      z: 5,
      duration: 3,
      ease: "power2.inOut",
    });

    tl.to(
      camera.position,
      {
        x: -3,
        y: 1,
        z: 4,
        duration: 2.5,
        ease: "power1.inOut",
      },
      "-=0.5"
    );

    // Final camera position matching the main page view
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 8,
      duration: 3,
      ease: "power1.inOut",
    });

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

export default function Intro({ onComplete }: AnimationProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const chatInputRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in text elements
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 2, ease: "back.out(1.7)", delay: 1 }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 2, ease: "back.out(1.7)", delay: 2 }
      );
    }

    // Animate in the ChatInput
    if (chatInputRef.current) {
      gsap.fromTo(
        chatInputRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 3 }
      );
    }

    // Animate in the cards
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll("a");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          delay: 3.5,
        }
      );
    }
  }, []);

  const handleAnimationComplete = () => {
    // Fade out everything smoothly
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete,
      });
    }
  };

  const handleCardClick = (href: string) => {
    handleAnimationComplete();
    // Allow time for the transition to complete before scrolling
    setTimeout(() => {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 800);
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-background">
      <Canvas camera={{ position: [5, 0, 0], fov: 40 }}>
        <IntroAnimation onComplete={handleAnimationComplete} />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-foreground">
        <GridBackground />
        <Hero
          titleRef={titleRef}
          subtitleRef={subtitleRef}
          chatInputRef={chatInputRef}
          cardsContainerRef={cardsContainerRef}
          onCardClick={handleCardClick}
          itemClassName="opacity-0"
        />
      </div>
    </div>
  );
}

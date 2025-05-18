"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageSquareText } from "lucide-react";

export function ContactButton() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="relative group"
      >
        <div className="absolute -top-12 left-1 -translate-x-1/2 bg-zinc-900/40 backdrop-blur-sm text-zinc-300 px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm border border-zinc-800/30">
          Contact Me
          <div className="absolute -bottom-1 right-1/5 -translate-x-1/2 w-2 h-2 bg-zinc-900/40 rotate-45 border-r border-b border-zinc-800/30"></div>
        </div>
        <Button
          onClick={scrollToContact}
          variant="default"
          className="h-14 w-14 p-0 rounded-full glass-effect border border-zinc-800/80 shadow-lg hover:shadow-purple-500/10 hover:border-zinc-700/80 hover:scale-105 transition-all flex items-center justify-center"
        >
          <MessageSquareText className="h-5 w-5 text-white" />
        </Button>
      </motion.div>
    </div>
  );
}

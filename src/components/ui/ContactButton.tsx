"use client";

import { useState } from "react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquareText } from "lucide-react";

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
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
              variant="default"
              className="h-14 w-14 p-0 rounded-full glass-effect border border-zinc-800/80 shadow-lg hover:shadow-purple-500/10 hover:border-zinc-700/80 hover:scale-105 transition-all flex items-center justify-center"
            >
              <MessageSquareText className="h-5 w-5 text-white" />
            </Button>
          </motion.div>
        </SheetTrigger>

        <SheetContent
          side="bottom"
          className="w-full sm:w-96 sm:max-w-md mx-auto rounded-t-xl border border-zinc-800 glass-effect pt-6 pb-8 sm:bottom-20 sm:right-6 sm:left-auto sm:rounded-xl"
        >
          <VisuallyHidden>
            <SheetTitle>Contact Me</SheetTitle>
          </VisuallyHidden>
          <AnimatePresence>
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                  Let's Connect!
                </h3>
                <p className="text-zinc-400 mt-2">I'd love to hear from you</p>
              </motion.div>

              <motion.div
                className="grid gap-4 px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.a
                  href="https://github.com/e-l-l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/70 hover:bg-zinc-800/70 hover:border-zinc-700/80 transition-all shadow-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-zinc-800 p-2.5 rounded-lg">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-xs text-zinc-400">github.com/e-l-l</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/prathmeshghatol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/70 hover:bg-zinc-800/70 hover:border-zinc-700/80 transition-all shadow-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-zinc-800 p-2.5 rounded-lg">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-xs text-zinc-400">
                      linkedin.com/in/prathmeshghatol
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:pratham1986@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/70 hover:bg-zinc-800/70 hover:border-zinc-700/80 transition-all shadow-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-zinc-800 p-2.5 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-xs text-zinc-400">
                      pratham1986@gmail.com
                    </p>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </SheetContent>
      </Sheet>
    </div>
  );
}

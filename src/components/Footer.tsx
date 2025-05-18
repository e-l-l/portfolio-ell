"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <>
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
          </motion.div>

          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.a
                href="https://github.com/e-l-l"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/70 hover:bg-zinc-800/70 hover:border-zinc-700/80 transition-all shadow-sm"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="bg-zinc-800 p-2.5 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">GitHub</div>
                  <div className="text-sm text-zinc-400">github.com/e-l-l</div>
                </div>
                <div className="text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/prathmeshghatol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/70 hover:bg-zinc-800/70 hover:border-zinc-700/80 transition-all shadow-sm"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="bg-zinc-800 p-2.5 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">LinkedIn</div>
                  <div className="text-sm text-zinc-400">
                    linkedin.com/in/prathmeshghatol
                  </div>
                </div>
                <div className="text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </motion.a>

              <motion.a
                href="mailto:pratham1986@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/70 hover:bg-zinc-800/70 hover:border-zinc-700/80 transition-all shadow-sm"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="bg-zinc-800 p-2.5 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">Email</div>
                  <div className="text-sm text-zinc-400">
                    pratham1986@gmail.com
                  </div>
                </div>
                <div className="text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-zinc-800 text-center">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-500">
            © 2025 Prathmesh Ghatol. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </>
  );
}

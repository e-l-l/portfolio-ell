"use client";

import { useState } from "react";
import { SendIcon } from "lucide-react";

export default function ChatInput({
  onSend,
}: {
  onSend?: (message: string) => void;
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && onSend) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900/70 backdrop-blur-sm px-4 py-3 pr-12 resize-none h-[56px] focus:outline-none focus:ring-2 focus:ring-zinc-600 placeholder-zinc-500 text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button
          type="submit"
          className="absolute right-3 p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
          disabled={!input.trim()}
        >
          <SendIcon size={18} />
        </button>
      </div>
    </form>
  );
}

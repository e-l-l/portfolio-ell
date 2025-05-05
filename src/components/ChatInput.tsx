"use client";

import { useState, useRef, useEffect } from "react";
import { SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ChatInput({
  onSend,
  minHeight = "15px",
}: {
  onSend?: (message: string) => void;
  minHeight?: string;
}) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && onSend) {
      onSend(input);
      setInput("");
      if (textareaRef.current) {
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className={`resize-none pr-12 bg-zinc-900/70 backdrop-blur-[2px] border-zinc-700 text-white placeholder:text-zinc-500`}
          style={{ minHeight }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="absolute right-2 h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
          disabled={!input.trim()}
        >
          <SendIcon size={18} />
        </Button>
      </div>
    </form>
  );
}

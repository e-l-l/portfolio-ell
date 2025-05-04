"use client";

import { useState } from "react";
import { SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="pr-12 bg-zinc-900/70 backdrop-blur-sm border-zinc-700 text-white placeholder:text-zinc-500"
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

"use client";

import ChatInput from "@/components/ChatInput";

export default function ChatPage() {
  return (
    <div className="container mx-auto pt-8 px-4 max-w-5xl min-h-screen">
      <div className="flex flex-col h-[calc(100vh-100px)]">
        <div className="flex-1 space-y-4 overflow-y-auto py-8">
          <div className="text-center text-zinc-500">
            Start a new conversation
          </div>
        </div>
        <div className="sticky bottom-4">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

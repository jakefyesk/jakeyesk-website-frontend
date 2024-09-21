"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm an AI assistant. How can I help you today?",
      sender: "ai",
    },
    {
      text: "Hi there! I'm interested in learning more about AI.",
      sender: "user",
    },
    {
      text: "That's great! AI is a fascinating field. What specific area are you most curious about?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-4 flex-grow overflow-auto rounded-lg bg-white p-4 shadow-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block rounded-lg p-2 ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mr-2 flex-grow rounded border p-2"
          placeholder="Type your message..."
        />
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          <Send />
        </button>
      </form>
    </div>
  );
}

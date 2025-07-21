"use client";

import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdSend } from "react-icons/io";

const ChatInput = () => {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      console.log("Mengirim pesan:", input);
      setInput("");
    }
  };

  return (
    <div className="fixed sm:relative bottom-20 sm:bottom-0">
      <div
        className="bg-hitam/80 rounded-2xl 
                   w-full max-w-lg lg:max-w-2xl 
                   mx-auto p-4 text-sm mt-6 "
      >
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Tulis sesuatu..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="w-full px-3 py-2 text-base rounded-lg bg-abu text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-300"
          />
          <button
            onClick={handleSendMessage}
            className="text-white cursor-pointer ml-3 transition duration-300 transform hover:scale-110 disabled:opacity-50 disabled:scale-100"
            disabled={!input.trim()}
          >
            <IoMdSend className="w-6 h-6" />
          </button>
        </div>
        <button className="text-gray-400 mt-3 ml-1 hover:text-white">
          <GrAdd className="sm:w-5 sm:h-5 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;

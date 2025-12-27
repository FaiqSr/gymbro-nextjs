"use client";

import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaPlus, FaMicrophone } from "react-icons/fa6";
import { motion } from "framer-motion";

interface ChatInputBoxProps {
  onSendMessage?: (message: string) => void;
  placeholder?: string;
}

export default function ChatInputBox({
  onSendMessage,
  placeholder = "Tulis pertanyaanmu di sini...",
}: ChatInputBoxProps) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage?.(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={`bg-gradient-to-br from-slate-800/85 to-slate-900/85 border-2 rounded-2xl p-3 md:p-4 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          isFocused
            ? "border-red-500 shadow-red-500/30"
            : "border-slate-700 hover:border-slate-600"
        }`}
      >
        <div className="flex items-end gap-2 md:gap-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300 hover:bg-slate-700/50 rounded-lg flex-shrink-0">
              <FaPlus size={18} />
            </button>
          </motion.div>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 text-sm md:text-base"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim()}
            className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 disabled:from-gray-600 disabled:to-gray-600 text-white rounded-lg transition-all duration-300 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-500/30 flex-shrink-0"
          >
            <motion.div
              animate={input.trim() ? { scale: 1 } : { scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <IoMdSend className="text-lg md:text-xl cursor-pointer" />
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          className="flex items-center justify-between px-1 mt-2 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
              <FaPlus className="w-3 h-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium hidden sm:inline">
                Mulai Obrolan Baru
              </span>
            </button>
          </motion.div>
          <span className="text-gray-500 hidden sm:inline">
            Tekan{" "}
            <kbd className="px-2 py-1 bg-slate-700/50 rounded text-gray-400 text-xs font-semibold">
              Enter
            </kbd>{" "}
            untuk kirim
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

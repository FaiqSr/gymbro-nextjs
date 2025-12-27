import { ChatMessage } from "@/types/chatbot";
import { motion } from "framer-motion";
import { IoMdCheckmark } from "react-icons/io";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations/variants";

interface ChatMessageItemProps {
  message: ChatMessage;
}

export default function ChatMessageItem({ message }: ChatMessageItemProps) {
  const isUser = message.type === "user";

  return (
    <motion.div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 px-4`}
      variants={isUser ? slideInFromRight : slideInFromLeft}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl transition-all duration-300 ${
          isUser
            ? "bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-br-none shadow-lg shadow-red-500/20"
            : "bg-slate-800 text-gray-200 rounded-bl-none border border-slate-700"
        }`}
        whileHover={{ scale: 1.02 }}
      >
        <motion.p
          className="text-sm lg:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {message.content}
        </motion.p>
        <motion.div
          className="flex items-center justify-end gap-2 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-xs opacity-70">
            {message.timestamp.toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          {isUser && (
            <motion.div
              animate={{ scale: [0, 1] }}
              transition={{ duration: 0.3 }}
            >
              <IoMdCheckmark className="text-xs opacity-70" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

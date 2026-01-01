import { ChatSuggestion } from "@/types/chatbot";
import { motion } from "framer-motion";
import { hoverScale } from "@/lib/animations/variants";

interface ChatSuggestionCardProps {
  suggestion: ChatSuggestion;
  onClick?: () => void;
}

export default function ChatSuggestionCard({
  suggestion,
  onClick,
}: ChatSuggestionCardProps) {
  const Icon = suggestion.icon;

  return (
    <motion.button
      onClick={onClick}
      {...hoverScale}
      className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 border border-slate-700 hover:border-red-500/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl w-full sm:w-[280px] h-40 cursor-pointer`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${suggestion.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>

      <div className="relative z-10 flex flex-col h-full justify-between text-left">
        <motion.div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${suggestion.color} flex items-center justify-center shadow-lg`}
          whileHover={{ scale: 1.1 }}
        >
          <Icon className="text-white text-xl" />
        </motion.div>

        <div>
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
            {suggestion.title}
          </h3>
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
            {suggestion.description}
          </p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-600"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, originX: 0 }}
      ></motion.div>
    </motion.button>
  );
}

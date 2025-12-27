import { ChatSuggestion } from "@/types/chatbot";
import ChatSuggestionCard from "./ChatSuggestionCard";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations/variants";

interface ChatSuggestionsGridProps {
  suggestions: ChatSuggestion[];
  onSelectSuggestion?: (suggestion: ChatSuggestion) => void;
}

export default function ChatSuggestionsGrid({
  suggestions,
  onSelectSuggestion,
}: ChatSuggestionsGridProps) {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto px-4 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {suggestions.map((suggestion) => (
          <motion.div key={suggestion.id} variants={itemVariants}>
            <ChatSuggestionCard
              suggestion={suggestion}
              onClick={() => onSelectSuggestion?.(suggestion)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

import { ChatMessage } from "@/types/chatbot";
import ChatMessageItem from "./ChatMessageItem";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations/variants";

interface ChatMessagesContainerProps {
  messages: ChatMessage[];
}

export default function ChatMessagesContainer({
  messages,
}: ChatMessagesContainerProps) {
  return (
    <motion.div
      className="w-full max-w-3xl mx-auto flex flex-col space-y-3 py-4 px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {messages.map((message) => (
        <motion.div key={message.id} variants={itemVariants}>
          <ChatMessageItem message={message} />
        </motion.div>
      ))}
    </motion.div>
  );
}

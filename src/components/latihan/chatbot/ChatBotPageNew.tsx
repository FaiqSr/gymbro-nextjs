"use client";

import { useState, useRef, useEffect } from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import ChatWelcomeHeader from "./ChatWelcomeHeader";
import ChatSuggestionsGrid from "./ChatSuggestionsGrid";
import ChatInputBox from "./ChatInputBox";
import ChatMessagesContainer from "./ChatMessagesContainer";
import ChatBotAside from "./ChatBotAside";
import { chatSuggestions } from "@/constant/chatbot";
import { ChatMessage, ChatSuggestion } from "@/types/chatbot";
import { fadeIn, slideInFromBottom } from "@/lib/animations/variants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ChatbotPage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowSuggestions(false);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content:
          "Terima kasih atas pertanyaanmu! 🙏 Saat ini saya masih dalam pengembangan. Tim kami sedang bekerja untuk memberikan jawaban yang lebih akurat dan personal. Coba tanya sesuatu yang lain!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleSelectSuggestion = (suggestion: ChatSuggestion) => {
    handleSendMessage(suggestion.title);
  };

  return (
    <>
      <motion.section
        className={`flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black w-full ${poppins.className}`}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="fixed inset-0 pointer-events-none opacity-5 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto flex flex-col pt-8 pb-32 px-4">
            <ChatWelcomeHeader
              title="Berikan pertanyaan!"
              subtitle="Tanya apa saja tentang fitness, nutrisi, dan gaya hidup sehat!"
            />

            {messages.length === 0 ? (
              <ChatSuggestionsGrid
                suggestions={chatSuggestions}
                onSelectSuggestion={handleSelectSuggestion}
              />
            ) : (
              <ChatMessagesContainer messages={messages} />
            )}

            <div ref={messagesEndRef} className="h-2" />
          </div>
        </div>

        <motion.div
          className="fixed bottom-0 left-64 right-0 t-4 pb-6 z-40"
          initial="hidden"
          animate="visible"
          variants={slideInFromBottom}
        >
          <ChatInputBox
            onSendMessage={handleSendMessage}
            placeholder="Tanya apa saja tentang latihan, nutrisi, atau kesehatan..."
          />
        </motion.div>
      </motion.section>

      <ChatBotAside />
    </>
  );
};

export default ChatbotPage;

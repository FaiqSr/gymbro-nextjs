import ChatBotAside from "@/components/latihan/chatbot/ChatBotAside";
import ChatHeader from "@/components/latihan/chatbot/ChatHeader";
import ChatInput from "@/components/latihan/chatbot/ChatInput";
import ChatSuggestions from "@/components/latihan/chatbot/ChatSuggestions";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ChatbotUIPage = () => {
  return (
    <>
      <section
        className={`flex min-h-screen dark:bg-gradient-to-br dark:from-red-700 dark:via-black dark:to-red-700 w-full ${poppins.className}`}
      >
        <div className="flex flex-col w-full justify-center items-center p-4">
          <ChatHeader />
          <ChatSuggestions />
          <ChatInput />
        </div>
      </section>
      <ChatBotAside />
    </>
  );
};

export default ChatbotUIPage;

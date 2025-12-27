import { IconType } from "react-icons";

export interface ChatSuggestion {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

export interface ChatMessage {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

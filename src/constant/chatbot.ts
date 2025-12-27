import { ChatSuggestion } from "@/types/chatbot";
import {
  FaDumbbell,
  FaApple,
  FaBed,
  FaHeartPulse,
  FaFire,
  FaBook,
} from "react-icons/fa6";

export const chatSuggestions: ChatSuggestion[] = [
  {
    id: "program",
    title: "Program Latihan",
    description: "Buat jadwal latihan untuk pemula",
    icon: FaDumbbell,
    color: "from-red-600 to-red-700",
  },
  {
    id: "nutrition",
    title: "Nutrisi & Diet",
    description: "Rekomendasi makanan sehat untuk fitness",
    icon: FaApple,
    color: "from-green-600 to-green-700",
  },
  {
    id: "rest",
    title: "Istirahat & Recovery",
    description: "Pentingnya istirahat untuk otot",
    icon: FaBed,
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "health",
    title: "Kesehatan Umum",
    description: "Tips kesehatan dan wellness",
    icon: FaHeartPulse,
    color: "from-pink-600 to-pink-700",
  },
  {
    id: "calories",
    title: "Perhitungan Kalori",
    description: "Kalkulasi kebutuhan kalori harian",
    icon: FaFire,
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "tips",
    title: "Tips & Trik Latihan",
    description: "Teknik latihan yang efektif",
    icon: FaBook,
    color: "from-purple-600 to-purple-700",
  },
];

export const suggestions = [
  { title: "Program Latihan", description: "Buat jadwal latihan untuk pemula" },
  { title: "Nutrisi", description: "Rekomendasi makanan setelah olahraga" },
  { title: "Istirahat", description: "Pentingnya istirahat untuk otot" },
];

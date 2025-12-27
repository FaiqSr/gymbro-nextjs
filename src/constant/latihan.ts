import { FaDumbbell, FaFire, FaHeartPulse, FaRing, FaY } from "react-icons/fa6";
import { Exercise, RecentWorkouts, Stats } from "@/types/latihan";

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Push Up",
    icon: FaDumbbell,
    color: "from-red-600 to-red-700",
    bgColor: "bg-red-600/20",
    description: "Latihan kekuatan atas tubuh",
  },
  {
    id: 2,
    name: "Squat",
    icon: FaRing,
    color: "from-orange-600 to-orange-700",
    bgColor: "bg-orange-600/20",
    description: "Latihan kekuatan bawah tubuh",
  },
  {
    id: 3,
    name: "Plank",
    icon: FaDumbbell,
    color: "from-yellow-600 to-yellow-700",
    bgColor: "bg-yellow-600/20",
    description: "Latihan core balance",
  },
  {
    id: 4,
    name: "Yoga",
    icon: FaY,
    color: "from-purple-600 to-purple-700",
    bgColor: "bg-purple-600/20",
    description: "Latihan fleksibilitas",
  },
];

export const stats: Stats[] = [
  {
    label: "Kalori Terbakar",
    value: "450 kcal",
    icon: FaFire,
    color: "text-red-500",
  },
  {
    label: "Detak Jantung Avg",
    value: "125 bpm",
    icon: FaHeartPulse,
    color: "text-pink-500",
  },
  {
    label: "Total Latihan",
    value: "24 sesi",
    icon: FaDumbbell,
    color: "text-orange-500",
  },
];

export const recentWorkouts: RecentWorkouts[] = [
  { name: "Push Up", duration: "15 min", intensity: "Sedang" },
  { name: "Squat", duration: "20 min", intensity: "Tinggi" },
  { name: "Plank Hold", duration: "10 min", intensity: "Sedang" },
];

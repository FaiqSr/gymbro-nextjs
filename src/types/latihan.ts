import { IconType } from "react-icons";

export interface Exercise {
  id: number;
  name: string;
  icon: IconType;
  color: string;
  bgColor: string;
  description: string;
}

export interface Stats {
  label: string;
  value: string;
  icon: IconType;
  color: string;
}

export interface RecentWorkouts {
  name: string;
  duration: string;
  intensity: string;
}

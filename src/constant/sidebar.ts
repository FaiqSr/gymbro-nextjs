import {
  MdFitnessCenter,
  MdChat,
  MdCalculate,
  MdAccountCircle,
} from "react-icons/md";
import { IconType } from "react-icons";

export interface NavItem {
  href: string;
  icon: IconType;
  label: string;
}

export const mainNavItems: NavItem[] = [
  { href: "/latihan", icon: MdFitnessCenter, label: "Latihan" },
  { href: "/chatbot", icon: MdChat, label: "Chatbot" },
  { href: "/kalkulator", icon: MdCalculate, label: "Kalkulator" },
  { href: "/profile", icon: MdAccountCircle, label: "Profile" },
];

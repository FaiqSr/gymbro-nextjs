"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdFitnessCenter,
  MdChat,
  MdCalculate,
  MdAccountCircle,
} from "react-icons/md";

const NavBar = () => {
  const pathname = usePathname();

  // Daftar menu untuk kemudahan mapping dan pengelolaan
  const navItems = [
    { href: "/latihan", icon: MdFitnessCenter, label: "Latihan" },
    { href: "/chatbot", icon: MdChat, label: "Chatbot" },
    { href: "/kalkulator", icon: MdCalculate, label: "Kalkulator" },
    { href: "/profile", icon: MdAccountCircle, label: "Profil" },
  ];

  const getLinkClass = (path: string) => {
    // Mengecek apakah path saat ini adalah path link atau sub-pathnya
    const isActive = pathname === path || pathname.startsWith(`${path}/`);

    // Kelas untuk ikon dan teks
    const baseClass =
      "flex flex-col items-center gap-1 transition-all duration-300 ease-in-out";
    const activeClass =
      "text-red-500 scale-110 drop-shadow-[0_0_4px_rgba(239,68,68,0.7)]";
    const inactiveClass = "text-gray-400 hover:text-white";

    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    // Menggunakan backdrop-blur untuk efek glassmorphism yang serasi dengan tema chatbot
    <section className="flex lg:hidden fixed w-full justify-center bottom-0 border-t border-white/10 bg-black/50 backdrop-blur-lg z-50">
      <nav className="w-full">
        <ul className="flex justify-around items-center py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={getLinkClass(item.href)}>
                <item.icon size={28} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;

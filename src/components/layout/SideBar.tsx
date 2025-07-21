"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdFitnessCenter,
  MdChat,
  MdCalculate,
  MdAccountCircle,
} from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const mainNavItems = [
  { href: "/latihan", icon: MdFitnessCenter, label: "Latihan" },
  { href: "/chatbot", icon: MdChat, label: "Chatbot" },
  { href: "/kalkulator", icon: MdCalculate, label: "Kalkulator" },
];

const SideBar = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string, isProfile = false) => {
    const isActive = pathname.startsWith(path);

    const baseClasses = `flex items-center gap-4 w-full p-3 transition-all duration-300 hover:bg-white/10 hover:text-white rounded-lg`;

    const activeClasses = `bg-white/10 text-white font-semibold rounded-lg`;

    const inactiveClasses = `text-gray-400`;

    const profileClasses = isProfile ? "flex-col rounded-full" : "rounded-lg";

    return `${baseClasses} ${profileClasses} ${
      isActive ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <aside
      className={`min-w-64 max-w-64 hidden lg:flex flex-col min-h-screen p-4 border-r border-white/10 bg-merahhitam fixed top-0 left-0`}
    >
      <div className="py-4 mb-4">
        <Link
          href={`/`}
          className="flex justify-center hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src={`/images/Group.png`}
            width={140}
            height={200}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between h-full">
        <nav className={`w-full ${poppins.className}`}>
          <ul className="flex flex-col gap-3 text-lg">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={getLinkClass(item.href)}>
                  <item.icon
                    size={24}
                    className={
                      pathname.startsWith(item.href) ? "text-red-400" : ""
                    }
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 items-center py-2">
          <Link href="/profile" className={getLinkClass("/profile", true)}>
            <MdAccountCircle
              size={50}
              className={pathname.startsWith("/profile") ? "text-red-400" : ""}
            />
            <span className="text-sm">Profil</span>
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-4 w-full p-3 rounded-xl text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            <AiOutlineLogout size={24} />
            <span>Keluar</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

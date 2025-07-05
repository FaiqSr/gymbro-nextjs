"use client"; // Tambahkan ini di baris paling atas file

import Link from "next/link";
import React from "react";
import {
  MdFitnessCenter,
  MdChat,
  MdCalculate,
  MdAccountCircle,
} from "react-icons/md";
import { Concert_One } from "next/font/google";
import { usePathname } from "next/navigation";

const concertOne = Concert_One({ weight: "400" });

const SideBar = () => {
  const pathname = usePathname();

  const getBorderColor = (path: string) => {
    return pathname === path
      ? "border-2 rounded-xl pl-2 pr-10 py-2 border-blue-500 text-blue-400"
      : "border-white";
  };

  return (
    <aside
      className={`min-w-64 max-w-64 hidden lg:flex flex-col gap-10 items-center min-h-svh px-5 border-r-2 border-slate-500`}
    >
      <section>
        <nav className={`py-5`}>
          <Link href={`/`} className={`font-bold text-3xl`}>
            gymbro
          </Link>
        </nav>
      </section>
      <section className="w-full">
        <nav>
          <ul
            className={`flex flex-col gap-4 font-bold text-xl ${concertOne.className}`}
          >
            <li
              className={`${getBorderColor(
                "/"
              )} pl-2 pr-10 py-3 hover:cursor-pointer`}
            >
              <Link href={`/`} className={`flex gap-2 items-center`}>
                <MdFitnessCenter size={20} /> LATIHAN
              </Link>
            </li>
            <li
              className={`${getBorderColor(
                "/chatbot"
              )} pl-2 pr-10 py-3 hover:cursor-pointer`}
            >
              <Link href={`/chatbot`} className={`flex gap-2 items-center`}>
                <MdChat size={20} /> CHATBOT
              </Link>
            </li>
            <li
              className={`${getBorderColor(
                "/kalkulator"
              )} pl-2 pr-10 py-3 hover:cursor-pointer`}
            >
              <Link href={`/kalkulator`} className={`flex gap-2 items-center`}>
                <MdCalculate size={20} /> KALKULATOR
              </Link>
            </li>
            <li
              className={`${getBorderColor(
                "/profile"
              )} pl-2 pr-10 py-3 hover:cursor-pointer`}
            >
              <Link href={`/profile`} className={`flex gap-2 items-center`}>
                <MdAccountCircle size={20} /> PROFILE
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default SideBar;

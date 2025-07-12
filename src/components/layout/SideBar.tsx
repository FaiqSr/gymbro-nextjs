"use client"; // Tambahkan ini di baris paling atas file

import Link from "next/link";
import React from "react";
import { MdFitnessCenter, MdChat, MdCalculate, MdAccountCircle } from "react-icons/md";
import { Concert_One } from "next/font/google";
import { usePathname } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { profile } from "console";
import path from "path";

const concertOne = Concert_One({ weight: "400" });

const SideBar = () => {
  const pathname = usePathname();

  const getBorderColor = (path: string) => {
    return pathname === path ? "rounded-md bg-abu/20 pl-2 pr-10 py-2 shadow-xl/40 border-1 dark:shadow-coklat dark:text-white" : "border-white";
  };

  const borderColorprofile = (path: string) => {
    return pathname === path ? "rounded-full bg-abu/20  shadow-xl/40 border-1 dark:shadow-coklat dark:text-white" : "border-white";
  };

  return (
    <aside className={`min-w-64 max-w-64 hidden lg:flex flex-col gap-2 items-center min-h-svh px-5 border-r-2 border-red-900  bg-[url(/Ellipse.png)] bg-no-repeat bg-top-left dark:bg-merahhitam`}>
      <section>
        <nav>
          <Link href={`/`}>
            <img src="/Group.png" alt="Logo" className="pr-4" width={140} height={200} />
          </Link>
        </nav>
      </section>
      <section className="w-full">
        <nav className="">
          <ul className={`flex flex-col gap-5 font-semibold text-lg dark:text-white ${concertOne.className}`}>
            <li className={`${getBorderColor("/latihan")} pl-2 pr-10 py-3 hover:cursor-pointer `}>
              <Link href={`/latihan`} className={`flex gap-4 items-center `}>
                <MdFitnessCenter size={24} className="dark:text-coklat" /> LATIHAN
              </Link>
            </li>
            <li className={`${getBorderColor("/chatbot")} pl-2 pr-10 py-3 hover:cursor-pointer`}>
              <Link href={`/chatbot`} className={`flex gap-4 items-center`}>
                <MdChat size={24} className="dark:text-coklat" /> CHATBOT
              </Link>
            </li>
            <li className={`${getBorderColor("/kalkulator")} pl-2 pr-10 py-3 hover:cursor-pointer`}>
              <Link href={`/kalkulator`} className={`flex gap-4 items-center`}>
                <MdCalculate size={24} className="dark:text-coklat " /> KALKULATOR
              </Link>
            </li>
            <li className={`${borderColorprofile("/profile")} flex flex-col items-center hover:cursor-pointer`}>
              <Link href={`/profile`} className={``}>
                <MdAccountCircle size={65} className="dark:text-coklat" /> PROFILE
              </Link>
            </li>
            <li className="pl-2 pr-10 mt-28 hover:cursor-pointer active:bg-orange-900 active:rounded-2xl">
              <Link href={`/login`} className={`flex gap-4 items-center`}>
                <AiOutlineLogout size={24} className="dark:text-coklat" /> LOGOUT
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default SideBar;

"use client";

import Link from "next/link";
import React from "react";
import { MdFitnessCenter, MdChat, MdCalculate, MdAccountCircle } from "react-icons/md";
import { usePathname } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const SideBar = () => {
  const pathname = usePathname();

  const getBorderColor = (path: string) => {
    return pathname === path ? "rounded-3xl bg-abu/20 pl-2 pr-10 py-2 shadow-xl/40 border-1 dark:shadow-coklat dark:text-white" : "border-white";
  };

  const borderColorprofile = (path: string) => {
    return pathname === path ? "rounded-full bg-abu/20 shadow-xl/40 border-1 dark:shadow-coklat dark:text-white" : "border-white";
  };

  return (
    <aside className={`min-w-64 max-w-64 hidden fixed lg:flex flex-col gap-2 items-center min-h-svh px-5 border-r-2 border-red-900 bg-[url(/Ellipse.png)] bg-no-repeat bg-top-left dark:bg-merahhitam transition-all duration-300`}>
      <section>
        <nav>
          <Link href={`/`} className="hover:opacity-80 transition-opacity duration-200">
            <Image src="/Group.png" width={140} height={200} alt="Logo" />
          </Link>
        </nav>
      </section>
      <section className={`w-full`}>
        <nav className="">
          <ul className={`flex flex-col gap-5 font-medium text-lg dark:text-white ${poppins.className}`}>
            <li className={`${getBorderColor("/latihan")} pl-2 pr-10 py-3 hover:cursor-pointer transition-all duration-300 hover:bg-abu/10 hover:rounded-3xl hover:shadow-md hover:dark:shadow-coklat/30`}>
              <Link href={`/latihan`} className={`flex gap-4 items-center`}>
                <MdFitnessCenter size={24} className="dark:text-coklat transition-colors duration-200 hover:scale-105" />
                <span className="hover:translate-x-1 transition-transform duration-200">Latihan</span>
              </Link>
            </li>

            <li className={`${getBorderColor("/chatbot")} pl-2 pr-10 py-3 hover:cursor-pointer transition-duration-300 hover:bg-abu/10 hover:rounded-3xl hover:shadow-md hover:dark:shadow-coklat/30`}>
              <Link href={`/chatbot`} className={`flex gap-4 items-center`}>
                <MdChat size={24} className="dark:text-coklat transition-colors duration-200 hover:scale-105" />
                <span className="hover:translate-x-1 transition-transform duration-200">Chatbot</span>
              </Link>
            </li>

            <li className={`${getBorderColor("/kalkulator")} pl-2 pr-10 py-3 hover:cursor-pointer transition-duration-300 hover:bg-abu/10 hover:rounded-3xl hover:shadow-md hover:dark:shadow-coklat/30`}>
              <Link href={`/kalkulator`} className={`flex gap-4 items-center`}>
                <MdCalculate size={24} className="dark:text-coklat transition-colors duration-200 hover:scale-105" />
                <span className="hover:translate-x-1 transition-transform duration-200">Kalkulator</span>
              </Link>
            </li>

            <li className={`${borderColorprofile("/profile")} flex flex-col items-center hover:cursor-pointer transition-all duration-300 hover:bg-abu/10 hover:rounded-full hover:shadow-md hover:dark:shadow-coklat 30 p-2`}>
              <Link href={`/profile`} className="flex flex-col items-center">
                <MdAccountCircle size={65} className="dark:text-coklat transition-colors duration-200 hover:scale-105" />
                <span className="mt-1 hover:translate-y-1 transition-transform duration-200">Profil</span>
              </Link>
            </li>

            <li className={`mt-28  hover:cursor-pointer items-center rounded-2xl transition-all pl-2 pr-10 py-2 duration-300 hover:bg-abu/10 hover:shadow-md hover:dark:shadow-coklat/30`}>
              <Link href={`/login`} className={`flex gap-4 pt-1`}>
                <AiOutlineLogout size={24} className="dark:text-coklat transition-colors duration-200 hover:scale-105" />
                <span className="hover:translate-x-1 transition-transform duration-200">Keluar</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default SideBar;

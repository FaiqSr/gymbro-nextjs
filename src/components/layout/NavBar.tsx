"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";
import { MdFitnessCenter, MdChat, MdCalculate, MdAccountCircle } from "react-icons/md";

const NavBar = () => {
  const param = usePathname();

  function checkRequest(path: string) {
    return path == param ? "border-2 rounded-xl border-blue-500 text-blue-400 transition-colors duration-300 ease-in-out" : "dark:text-slate-500 transition-colors duration-300 ease-in-out";
  }

  return (
    <>
      <section className="flex lg:hidden fixed w-full justify-center bottom-0 border-t-2 border-slate-500 px-3 py-4">
        <nav className="w-full">
          <ul className="flex justify-around">
            <li className={`${checkRequest("/latihan")} flex items-center p-2`}>
              <Link href={`/latihan`}>
                <MdFitnessCenter size={50} />
              </Link>
            </li>
            <li className={`${checkRequest("/chatbot")} flex items-center p-2`}>
              <Link href={`/chatbot`}>
                <MdChat size={50} />
              </Link>
            </li>
            <li className={`${checkRequest("/kalkulator")} flex items-center p-2`}>
              <Link href={`/kalkulator`}>
                <MdCalculate size={50} />
              </Link>
            </li>
            <li className={`${checkRequest("/profile")} flex items-center p-2`}>
              <Link href={`/profile`}>
                <MdAccountCircle size={50} />
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default NavBar;

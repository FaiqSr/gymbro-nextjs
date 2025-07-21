"use client";
import { FaBars } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { PiNotePencil } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import React, { useState, useEffect } from "react";

const ChatBotAside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const MenuItems = () => (
    <>
      <div className="flex my-3 transition-transform duration-300 hover:scale-105 cursor-pointer items-center w-full">
        <PiNotePencil size={24} />{" "}
        <span className="pl-3 font-semibold text-lg">Obrolan Baru</span>
      </div>
      <div className="flex my-3 transition-transform duration-300 hover:scale-105 cursor-pointer items-center w-full">
        <VscHistory size={24} />{" "}
        <span className="pl-3 font-semibold text-lg">Riwayat</span>
      </div>
    </>
  );

  return (
    <aside className="fixed top-0 right-0 h-screen z-20">
      <div className={`absolute top-4 right-4 ${isOpen ? "hidden" : "block"}`}>
        <button
          onClick={toggleSidebar}
          className="text-white p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
        >
          <FaBars size={24} />
        </button>
      </div>

      <div
        className={`text-white bg-chatbotsidebar backdrop-blur-xl h-full transform transition-all duration-300 ease-in-out flex flex-col
                  ${isOpen ? "w-72 p-4" : "w-0 p-0 overflow-hidden"}`}
      >
        <div className="flex justify-between items-center mb-10">
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white"
          >
            <IoMdExit size={30} />
          </button>
          <button className="border py-2 px-4 bg-gray-500/20 rounded-full text-sm cursor-pointer transition-transform duration-300 hover:scale-105 active:bg-gray-200/20">
            Daftar
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Cari riwayat..."
            className="p-2 rounded-full shadow-lg border-none focus:outline-none focus:ring-2 focus:ring-slate-300 bg-gray-500/20 w-full"
          />
          <MenuItems />
        </div>
      </div>
    </aside>
  );
};

export default ChatBotAside;

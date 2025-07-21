"use client";
import { FaBars } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { PiNotePencil } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import { MdContentPasteSearch } from "react-icons/md";
import React, { useState, useEffect } from "react";

const ChatBotAside = () => {
  const [isSidebarRightOpen, setIsSidebarRightOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarRightOpen(!isSidebarRightOpen);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <section className="fixed right-0 h-screen">
        <aside
          className={`text-white lg:bg-chatbotsidebar  transform transition-all overflow-auto lg:relative overflow-y-auto duration-300 ease-in-out overflow-x-hidden z-10 ${
            isSidebarRightOpen ? "h-full p-4 backdrop-blur-2xl w-[320px] xl:w-[292px] lg:w-[242px]" : "w-16 lg:w-[100px] h-full  bg-transparent"
          }`}
        >
          {isSidebarRightOpen ? (
            <>
              <div className="flex">
                <IoMdExit size={30} onClick={toggleSidebar} className="text-gray-400 absolute top-6 left-4 cursor-pointer" />
                <button className="border-1 py-2 bg-gray-500/20 rounded-3xl w-[130px] absolute right-5 cursor-pointer transition-transform duration-300 hover:scale-105 active:bg-gray-200/20">Daftar</button>
              </div>

              <div className="flex flex-wrap gap-3 mt-20">
                <div className="mr-6 my-3">
                  <input type="text" placeholder="cari" className="p-2 rounded-2xl shadow-2xl border-2 border-none focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-300 bg-gray-500/20 w-[254px] lg:w-[331px] " />
                </div>
                <div className="flex my-3 lg:ml-2 ml-5 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <PiNotePencil size={30} /> <span className="pl-3 font-semibold text-lg lg:text-lg xl:text-xl">Obrolan Baru</span>
                </div>
                <div className="flex my-3 lg:ml-2 ml-6 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <VscHistory size={30} /> <span className="pl-3 font-semibold text-lg lg:text-lg xl:text-xl">Riwayat</span>
                </div>
              </div>
            </>
          ) : (
            <div className=" flex flex-col ml-6">
              <FaBars size={30} className="text-gray-400 cursor-pointer my-5 transition-transform duration-300 hover:scale-105" onClick={toggleSidebar} />
              <MdContentPasteSearch size={30} className="text-gray-400 lg:block hidden cursor-pointer my-5 transition-transform duration-300 hover:scale-105" onClick={toggleSidebar} />
              <PiNotePencil size={30} className="text-gray-400 lg:block hidden cursor-pointer my-5 transition-transform duration-300 hover:scale-105" onClick={toggleSidebar} />
              <VscHistory size={30} className="text-gray-400 lg:block hidden cursor-pointer my-5 transition-transform duration-300 hover:scale-105" onClick={toggleSidebar} />
            </div>
          )}
        </aside>
      </section>
    </>
  );
};

export default ChatBotAside;

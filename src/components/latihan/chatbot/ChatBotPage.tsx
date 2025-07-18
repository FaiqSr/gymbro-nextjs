"use client";
import React, { useState, useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { PiNotePencil } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import { MdContentPasteSearch } from "react-icons/md";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const ChatBotPage = () => {
  const [isSidebarRightOpen, setIsSidebarRightOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarRightOpen(!isSidebarRightOpen);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <section className={`flex min-h-screen dark:bg-gradient-to-br dark:from-red-700 dark:via-black  dark:to-red-700 w-full ${poppins.className}`}>
      <div className={`text-center pt-6  lg:ml-64 relative ${isSidebarRightOpen ? "lg:max-w-4xl block max-w-fit" : "lg:w-[896px]"} mx-auto`}>
        <div className="mb-5 mt-2">
          <Image src="/logo.png" alt="logo" className="mx-auto" width={155} height={500} />
          <h1 className="text-4xl font-bold text-red-500 drop-shadow-[0_0_6px_rgba(255,100,100,0.8)]">Selamat Datang</h1>
          <p className="py-3 font-semibold">Tanyakan apa saja mengenai latihan Gym sekarang!</p>
        </div>
        <div className="flex flex-nowrap gap-4 px-8 justify-center">
          <div className="bg-stone-900 lg:w-2xs lg:h-44 lg:rounded-3xl"></div>
          <div className="bg-stone-900 lg:w-2xs lg:h-44 lg:rounded-3xl"></div>
          <div className="bg-stone-900 lg:w-2xs lg:h-44 lg:rounded-3xl"></div>
        </div>
        <div className="bg-hitam lg:pb-16 lg:pt-10 rounded-4xl flex lg:max-w-3xl p-5 mx-auto text-sm mt-10 lg:relative lg:px-12">
          <input type="text" placeholder="Tulis sesuatu..." className="w-full lg:px-4 p-2 lg:py-2 rounded-lg bg-abu text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-300" />
          <button className="lg:absolute lg:bottom-5 lg:left-10 text-white cursor-pointer ml-3 transition duration-300 transform hover:scale-110 ">
            <GrAdd size={27} />
          </button>
        </div>
      </div>
      <aside
        className={`text-white lg:bg-chatbotsidebar flex-shrink-0 transform transition-all fixed    right-0 overflow-auto lg:relative  overflow-y-auto duration-300 ease-in-out overflow-x-hidden z-10 ${
          isSidebarRightOpen ? "lg:w-[213px] w-[400px] h-full p-4 backdrop-blur-2xl" : "w-16 h-full ml-36 p-2 bg-transparent"
        }`}
      >
        {isSidebarRightOpen ? (
          <>
            <div className="flex">
              <IoMdExit size={24} onClick={toggleSidebar} className="text-gray-400 absolute top-6 left-4 cursor-pointer" />
              <button className="border-1 py-2 bg-gray-500/20 rounded-3xl w-[130] absolute right-5 cursor-pointer transition-transform duration-300 hover:scale-105 active:bg-gray-200/20">Sign In</button>
            </div>

            <div className="flex flex-wrap mt-20">
              <div className="mr-6 my-3">
                <input type="text" placeholder="cari" className="p-2 rounded-2xl shadow-2xl border-2 border-none focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-300 bg-gray-500/20 lg:w-44 w-80" />
              </div>
              <div className="flex my-3 lg:ml-2 ml-5 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <PiNotePencil size={24} /> <span className="pl-3 font-semibold text-lg ">Obrolan Baru</span>
              </div>
              <div className="flex my-3 lg:ml-2 ml-6 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <VscHistory size={24} /> <span className="pl-3 font-semibold text-lg ">Riwayat</span>
              </div>
            </div>
          </>
        ) : (
          <div className=" flex flex-col ml-3">
            <FaBars size={24} className="text-gray-400 cursor-pointer my-5 transition-transform duration-300 hover:scale-105" onClick={toggleSidebar} />
            <MdContentPasteSearch size={24} className="text-gray-400 lg:block hidden cursor-pointer my-5 transition-transform duration-300 hover:scale-105" onClick={toggleSidebar} />
            <PiNotePencil size={24} className="text-gray-400 lg:block hidden cursor-pointer my-5 transition-transform duration-300 hover:scale-105" onClick={toggleSidebar} />
            <VscHistory size={24} className="text-gray-400 lg:block hidden cursor-pointer my-5 transition-transform duration-300 hover:scale-105" onClick={toggleSidebar} />
          </div>
        )}
      </aside>
    </section>
  );
};

export default ChatBotPage;

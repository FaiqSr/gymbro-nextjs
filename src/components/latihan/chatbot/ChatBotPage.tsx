"use client";
import { GrAdd } from "react-icons/gr";
import Image from "next/image";
import { IoMdSend } from "react-icons/io";
import { Poppins } from "next/font/google";
import ChatBotAside from "./ChatBotAside";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const ChatBotPage = () => {
  return (
    <>
      <section className={`flex min-h-screen dark:bg-gradient-to-br dark:from-red-700 dark:via-black  dark:to-red-700 w-full ${poppins.className}`}>
        <div className={`h-auto sm:my-auto my-42 mx-auto lg:w-auto block lg:ml-72 xl:mx-auto w-full `}>
          <div className="mb-5 mt-2 w-full mx-auto text-center">
            <Image src="/logo.png" alt="logo" className="mx-auto" width={155} height={500} />
            <h1 className="lg:text-4xl font-bold text-red-500 drop-shadow-[0_0_6px_rgba(255,100,100,0.2)] xl:text-4xl sm:text-5xl text-3xl">Selamat Datang</h1>
            <p className="pt-3 px-7 font-semibold lg:text-[18px] xl:text-[18px] sm:text-lg text-[14px]">Tanya apa saja tentang GYM!</p>
          </div>
          <div className="flex flex-nowrap gap-4 justify-center mx-auto">
            <div className="bg-stone-900 xl:w-3xs xl:h-44 rounded-3xl lg:w-[194px] lg:h-34"></div>
            <div className="bg-stone-900 xl:w-3xs xl:h-44 rounded-3xl lg:w-[194px] lg:h-34"></div>
            <div className="bg-stone-900 xl:w-3xs xl:h-44 rounded-3xl lg:w-[194px] lg:h-34"></div>
          </div>
          <div className="bg-hitam rounded-4xl w-[320px] xl:w-[754px] lg:w-[580px] sm:w-[449px] mx-auto px-5 sm:pt-8 pt-6 sm:pb-5 pb-4 text-sm mt-6">
            <div className="flex">
              <input
                type="text"
                placeholder="Tulis sesuatu..."
                className="w-full lg:px-4 p-1 lg:py-2 sm:text-lg text-sm rounded-lg bg-abu lg:text-xl text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-300 lg:placeholder:text-lg"
              />
              <button className=" text-white cursor-pointer ml-3 transition duration-300 transform hover:scale-110 ">
                <IoMdSend className="w-6 h-6 " />
              </button>
            </div>
            <GrAdd className="lg:mt-4 mt-3 ml-2 sm:w-6 sm:h-6 w-6 h-4" />
          </div>
        </div>
      </section>
      <ChatBotAside />
    </>
  );
};

export default ChatBotPage;

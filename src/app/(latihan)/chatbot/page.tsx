import MainBackground from "@/components/ui/MainBackground";
import React from "react";
import { GrAdd } from "react-icons/gr";

const page = () => {
  return (
    <>
      <section className="flex justify-center bg-gradient-to-br from-red-700 via-black to-red-700">
        <div className="text-center  max-w-4xl w-full ">
          <div className="mb-5">
            <img src="/logo.png" alt="logo" className="mx-auto" width={155} />
            <h1 className="text-4xl font-bold text-red-500 drop-shadow-[0_0_6px_rgba(255,100,100,0.8)]">Selamat Datang</h1>
            <p className="py-3 font-semibold">Tanyakan apa saja mengenai latihan Gym sekarang!</p>
          </div>
          <div className="flex flex-nowrap gap-4 px-8">
            <div className="bg-stone-900 w-2xs h-44 rounded-3xl"></div>
            <div className="bg-stone-900 w-2xs h-44 rounded-3xl"></div>
            <div className="bg-stone-900 w-2xs h-44 rounded-3xl"></div>
          </div>
          <div className="bg-black pb-16 pt-10 rounded-4xl max-w-3xl mx-auto mt-10 relative px-12">
            <input type="text" placeholder="Tulis sesuatu..." className="w-full px-4 py-2 rounded-lg bg-abu text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-300" />
            <button className="absolute bottom-5 left-14 cursor-pointer transition duration-300 transform hover:scale-110 ">
              <GrAdd size={27} />
            </button>
          </div>
        </div>
        <aside className=" bg-black w-[213px] text-white rounded-l-2xl ">
          <input type="text" placeholder="cari" className="" />
        </aside>
      </section>
    </>
  );
};

export default page;

"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import KalkulatorPageBMI from "./KalkulatorPageBMI";
import KalkulatorPageIDAI from "./KalkulatorPageIDAI";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const KalkulatorContainer = () => {
  const [kalkulator, setKalkulator] = useState(true);

  return (
    <>
      <section className={`w-full dark:bg-gradient-to-br dark:from-black dark:via-red-700 dark:to-black ${poppins.className}`}>
        <div className="my-6 md:my-8 lg:my-12 mx-4 lg:mx-15 lg:ml-20 xl:ml-80">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] text-red-600 font-semibold">Kalkulator</h1>
          <p className="text-sm md:text-base lg:text-[20px] font-semibold text-abu mt-1 md:mt-2">Perhitungan perkiraan badan ideal dan tinggi badan anak</p>
        </div>

        <div className="flex flex-col w-full max-w-[970px] lg:ml-20 xl:ml-72 h-auto min-h-[500px] md:min-h-[600px] lg:h-[740px] bg-black/70 rounded-xl lg:rounded-3xl mx-auto my-6 md:my-8 lg:my-15 px-4 md:px-6 lg:px-8 pt-4 pb-6 md:pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center my-4 md:my-5 gap-2 md:gap-4">
            <button
              onClick={() => setKalkulator(true)}
              className={`w-full md:w-[300px] lg:w-[460px] h-12 md:h-[48px] bg-black/30 text-center rounded-3xl transition-all duration-200 ease-in-out hover:bg-abutua/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-abutua active:bg-abutua cursor-pointer ${
                !kalkulator ? "bg-black/30 " : " ring-2"
              }`}
            >
              Kalkulator BMI
            </button>
            <button
              onClick={() => setKalkulator(false)}
              className={`w-full md:w-[300px] lg:w-[460px] h-12 md:h-[48px] bg-black/30 text-center rounded-3xl transition-all duration-200 ease-in-out hover:bg-abutua/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-abutua active:bg-abutua cursor-pointer ${
                kalkulator ? "bg-black/30" : "ring-2"
              }`}
            >
              Kalkulator IDAI
            </button>
          </div>
          <div className="flex-1">
            <KalkulatorPageBMI className={`${kalkulator ? "block" : "hidden"}`} />
            <KalkulatorPageIDAI className={`${kalkulator ? "hidden" : "block"}`} />
          </div>
        </div>
      </section>
    </>
  );
};

export default KalkulatorContainer;

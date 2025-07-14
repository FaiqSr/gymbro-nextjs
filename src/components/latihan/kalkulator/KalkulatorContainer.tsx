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
      <section className={`w-full dark:bg-gradient-to-br dark:from-black dark:via-red-700 dark:to-black ${poppins} `}>
        <div className="my-8 md:my-12 mx-4 lg:ml-80 md:mx-15">
          <h1 className="text-2xl md:text-[32px] text-red-600 font-semibold">Kalkulator</h1>
          <p className="text-base md:text-[20px] font-semibold text-abu mt-1 md:mt-2">Perhitungan perkiraan badan ideal dan tinggi badan anak</p>
        </div>

        <div className="flex flex-col lg:ml-72 w-[970px] h-[740px] bg-black/70 rounded-xl md:rounded-3xl mx-4 md:mx-8 my-8 md:my-15 px-4 md:px-5 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center my-4 md:my-5 gap-2 md:gap-4">
            <button
              onClick={() => setKalkulator(false)}
              className={`w-full md:w-[460px] h-12 md:h-[48px]  bg-black/30 text-center rounded-3xl transition-all duration-200 ease-in-out hover:bg-abutua/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-abutua active:bg-abutua cursor-pointer`}
            >
              Kalkulator BMI
            </button>
            <button
              onClick={() => setKalkulator(true)}
              className="w-full md:w-[460px] h-12 md:h-[48px]  bg-black/30 text-center rounded-3xl cursor-pointer transition-all duration-200 ease-in-out hover:bg-abutua hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-abutua"
            >
              Kalkulator IDAI
            </button>
          </div>
          <KalkulatorPageBMI className={`${kalkulator ? "hidden" : "block"}`} />
          <KalkulatorPageIDAI className={`${kalkulator ? "block" : "hidden"}`} />
        </div>
      </section>
    </>
  );
};

export default KalkulatorContainer;

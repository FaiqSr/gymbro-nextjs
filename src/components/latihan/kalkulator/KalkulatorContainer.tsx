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
      <section className={`w-full dark:bg-gradient-to-br min-h-screen dark:from-black dark:via-red-700 dark:to-black ${poppins.className}`}>
        <div className="sm:w-[720px] max-w-fit sm:mx-auto lg:max-w-fit xl:w-full lg:mx-96 xl:mx-72">
          <div className="my-6  w-full mx-auto mt-10">
            <h1 className="text-[32px] lg:text-4xl text-red-600 font-semibold mx-auto pl-3 lg:text-left text-center">Kalkulator</h1>
            <p className="md:text-[19px]  lg:text-lg text-base  font-semibold text-abu mt-1 mx-auto pl-3 lg:text-left text-center">Perhitungan perkiraan badan ideal dan tinggi badan </p>
          </div>

          <div className="flex flex-col w-full p-5 xl:w-[999px] xl:h-[820px] lg:h-auto bg-black/70 rounded-3xl mt-14 mb-28">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center my-4 lg:mx-auto lg:w-[580px] xl:w-full">
              <button
                onClick={() => setKalkulator(true)}
                className={`w-full text-lg h-12 mt-4 bg-black/30 text-center rounded-3xl transition-all duration-200 ease-in-out hover:bg-abutua/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-abutua active:bg-abutua cursor-pointer ${
                  !kalkulator ? "bg-black/30 " : " ring-2"
                }`}
              >
                Kalkulator BMI
              </button>
              <button
                onClick={() => setKalkulator(false)}
                className={`w-full  h-12 mt-4  text-lg  bg-black/30 text-center rounded-3xl transition-all duration-200 ease-in-out hover:bg-abutua/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-abutua active:bg-abutua cursor-pointer ${
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
        </div>
      </section>
    </>
  );
};

export default KalkulatorContainer;

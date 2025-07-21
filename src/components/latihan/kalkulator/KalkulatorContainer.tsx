"use client";
import React, { useState } from "react";
import KalkulatorPageBMI from "./KalkulatorPageBMI";
import KalkulatorPageIDAI from "./KalkulatorPageIDAI";

const KalkulatorContainer = () => {
  const [kalkulator, setKalkulator] = useState(true);

  return (
    <div className="w-full bg-black/70 rounded-3xl p-6 sm:p-8 mb-20 shadow-md">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <button
          onClick={() => setKalkulator(true)}
          className={`w-full sm:w-1/2 h-12 text-lg bg-black/30 rounded-3xl transition-all duration-200 ease-in-out hover:bg-abutua/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
            kalkulator ? "ring-2" : ""
          }`}
        >
          Kalkulator BMI
        </button>
        <button
          onClick={() => setKalkulator(false)}
          className={`w-full sm:w-1/2 h-12 text-lg bg-black/30 rounded-3xl transition-all duration-200 ease-in-out hover:bg-abutua/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
            !kalkulator ? "ring-2" : ""
          }`}
        >
          Kalkulator IDAI
        </button>
      </div>

      <div className="max-h-[700px] overflow-y-auto px-1">
        {kalkulator ? (
          <KalkulatorPageBMI className="block" />
        ) : (
          <KalkulatorPageIDAI className="block" />
        )}
      </div>
    </div>
  );
};

export default KalkulatorContainer;

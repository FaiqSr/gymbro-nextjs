"use client";
import React, { useState } from "react";
import GenderPicker, { Gender } from "./GenderPicker";
import { FaMale, FaFemale } from "react-icons/fa";

const KalkulatorPageIDAI = ({ className }: { className: string }) => {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState<string>("");
  const [fatherHeight, setFatherHeight] = useState<string>("");
  const [motherHeight, setMotherHeight] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [predictedHeight, setPredictedHeight] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculateIDAI = () => {
    const fatherHeightNum = parseFloat(fatherHeight);
    const motherHeightNum = parseFloat(motherHeight);

    if (
      isNaN(fatherHeightNum) ||
      isNaN(motherHeightNum) ||
      fatherHeightNum <= 0 ||
      motherHeightNum <= 0
    ) {
      setError("Mohon masukkan tinggi badan Ayah dan Ibu yang valid.");
      setPredictedHeight(null);
      setShowResult(false);
      return;
    }
    setError("");

    let targetHeight;
    if (gender === "male") {
      targetHeight = (motherHeightNum + 13 + fatherHeightNum) / 2;
    } else {
      targetHeight = (fatherHeightNum - 13 + motherHeightNum) / 2;
    }

    const min = targetHeight - 8.5;
    const max = targetHeight + 8.5;

    setPredictedHeight({ min, max });
    setShowResult(true);
  };

  const ParentHeightVisualizer = () => {
    if (!showResult || !fatherHeight || !motherHeight) return null;
    const fatherH = parseFloat(fatherHeight);
    const motherH = parseFloat(motherHeight);
    const maxHeight = Math.max(fatherH, motherH, 180);
    const scaleFactor = 250 / maxHeight;

    return (
      <div className="w-full flex justify-center items-end gap-6 mt-6 h-[300px]">
        <div className="flex flex-col items-center">
          <div
            style={{ height: `${fatherH * scaleFactor}px` }}
            className="w-20 bg-blue-500/70 rounded-t-lg flex flex-col justify-between items-center p-2"
          >
            <p className="text-white font-bold">{fatherH} cm</p>
            <FaMale size={60} className="text-white" />
          </div>
          <p className="text-white mt-2 font-semibold">Ayah</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            style={{ height: `${motherH * scaleFactor}px` }}
            className="w-20 bg-pink-500/70 rounded-t-lg flex flex-col justify-between items-center p-2"
          >
            <p className="text-white font-bold">{motherH} cm</p>
            <FaFemale size={55} className="text-white" />
          </div>
          <p className="text-white mt-2 font-semibold">Ibu</p>
        </div>
      </div>
    );
  };

  const ResultDisplay = () => (
    <div className="w-full text-center">
      {error && <p className="text-red-500 text-lg mb-4">{error}</p>}
      <ParentHeightVisualizer />
      {predictedHeight && showResult ? (
        <div className="text-white p-4 mt-4">
          <h2 className="text-xl font-semibold mb-2">
            Potensi Tinggi Genetik Anak
          </h2>
          <p className="text-lg">
            Perkiraan tinggi akhir anak Anda adalah antara:
          </p>
          <p className="text-4xl font-bold text-teal-400 my-2">
            {predictedHeight.min.toFixed(1)} cm -{" "}
            {predictedHeight.max.toFixed(1)} cm
          </p>
        </div>
      ) : (
        !error && (
          <p className="text-abu-abu mt-20">Hasil akan ditampilkan di sini.</p>
        )
      )}
    </div>
  );

  return (
    <div
      className={`flex flex-col xl:flex-row gap-4 px-3 w-full bg-abutua rounded-3xl ${className}`}
    >
      <div className="xl:block hidden w-full lg:w-[580px] h-auto xl:h-[628px] my-4 mx-auto bg-black/30 rounded-2xl p-4 flex items-center justify-center">
        <ResultDisplay />
      </div>

      <div className="border-none my-4 lg:w-[620px] h-auto lg:h-[628px] px-4 mx-auto">
        <div className="text-center my-4">
          <h1 className="text-[28px] font-semibold">IDAI</h1>
          <p className="text-sm text-abu-abu">
            Ingin tahu tinggi badan genetik Anda? Masukkan tinggi ayah dan ibu
            untuk prediksi tinggi anak berdasarkan IDAI.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <GenderPicker selectedGender={gender} onGenderChange={setGender} />

          <div className="w-full max-w-full lg:max-w-[460px] lg:mt-4 mt-3">
            <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">
              Umur Anak
            </h2>
            <input
              type="number"
              placeholder="Tahun"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-white placeholder:text-right text-black rounded-3xl w-full h-[33px] lg:h-[39px] px-4 lg:text-lg text-[15px]"
            />
          </div>

          <div className="flex flex-col w-full max-w-full lg:max-w-[460px] gap-2">
            <div className="mt-3 lg:mt-4">
              <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">
                Tinggi Ayah (cm)
              </h2>
              <input
                type="number"
                placeholder="cm"
                value={fatherHeight}
                onChange={(e) => setFatherHeight(e.target.value)}
                className="bg-white placeholder:text-right text-black rounded-3xl w-full h-[33px] lg:h-[39px] px-4 lg:text-lg text-[15px]"
              />
            </div>
            <div className="mt-3 lg:mt-4">
              <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">
                Tinggi Ibu (cm)
              </h2>
              <input
                type="number"
                placeholder="cm"
                value={motherHeight}
                onChange={(e) => setMotherHeight(e.target.value)}
                className="bg-white placeholder:text-right text-black rounded-3xl w-full h-[33px] lg:h-[39px] px-4 lg:text-lg text-[15px]"
              />
            </div>
          </div>

          <div className="h-[38px] my-8 w-full lg:max-w-[460px]">
            <button
              onClick={handleCalculateIDAI}
              className="bg-submit/70 px-7 rounded-4xl w-full h-full transition duration-300 hover:bg-submit hover:scale-105 text-[16px]"
            >
              HITUNG
            </button>
          </div>
        </div>
      </div>

      <div className="xl:hidden block w-full lg:w-[580px] h-[558px] my-4 mx-auto bg-black/30 rounded-2xl p-4 flex items-center justify-center">
        <ResultDisplay />
      </div>
    </div>
  );
};

export default KalkulatorPageIDAI;

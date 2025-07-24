"use client";
import React, { useState } from "react";
import GenderPicker, { Gender } from "./GenderPicker";
import GaugeComponent from "react-gauge-component";

const KalkulatorPageBMI = ({ className }: { className: string }) => {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmiResult, setBmiResult] = useState<{
    value: number;
    category: string;
  } | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (
      isNaN(weightNum) ||
      isNaN(heightNum) ||
      weightNum <= 0 ||
      heightNum <= 0
    ) {
      setError("Mohon masukkan berat dan tinggi badan yang valid.");
      setBmiResult(null);
      return;
    }
    setError("");

    const heightInMeters = heightNum / 100;
    const bmi = weightNum / (heightInMeters * heightInMeters);

    let category = "";
    if (bmi < 18.5) category = "Berat Badan Kurang";
    else if (bmi >= 18.5 && bmi < 25) category = "Berat Badan Normal";
    else if (bmi >= 25 && bmi < 30) category = "Berat Badan Berlebih";
    else category = "Obesitas";

    setBmiResult({ value: bmi, category });
  };

  const renderResultArea = () => {
    if (error) {
      return <p className="text-red-500 text-lg">{error}</p>;
    }

    if (bmiResult) {
      return (
        <div className="text-white w-full max-w-sm flex flex-col items-center">
          <GaugeComponent
            type="semicircle"
            arc={{
              colorArray: ["#5BE1E6", "#4CEF52", "#F5CD19", "#EA4228"],
              padding: 0.02,
              subArcs: [
                { limit: 18.5 },
                { limit: 25 },
                { limit: 30 },
                { limit: 40 },
              ],
            }}
            pointer={{
              type: "arrow",
              animationDelay: 10,
            }}
            labels={{
              valueLabel: {
                formatTextValue: (value) => value.toFixed(1),
                style: {
                  fontSize: "50px",
                  fill: "#fff",
                  textShadow: "0",
                },
              },
              tickLabels: {
                type: "outer",
                ticks: [
                  { value: 15 },
                  { value: 18.5 },
                  { value: 25 },
                  { value: 30 },
                  { value: 35 },
                ],
              },
            }}
            value={bmiResult.value}
            minValue={10}
            maxValue={40}
          />
          <h2 className="text-2xl font-medium mt-4">{bmiResult.category}</h2>
        </div>
      );
    }

    // Placeholder Gauge
    return (
      <div className="text-white w-full max-w-sm flex flex-col items-center opacity-60">
        <GaugeComponent
          type="semicircle"
          arc={{
            colorArray: ["#888"],
            padding: 0.02,
            subArcs: [{ limit: 40 }],
          }}
          pointer={{
            type: "arrow",
            color: "#888",
          }}
          labels={{
            valueLabel: {
              formatTextValue: () => "--",
              style: {
                fontSize: "50px",
                fill: "#fff",
                textShadow: "0",
              },
            },
            tickLabels: {
              type: "outer",
              ticks: [
                { value: 15 },
                { value: 18.5 },
                { value: 25 },
                { value: 30 },
                { value: 35 },
              ],
            },
          }}
          value={10}
          minValue={10}
          maxValue={40}
        />
        <h2 className="text-xl font-medium mt-4 text-abu-abu">
          Hasil akan ditampilkan di sini
        </h2>
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col xl:flex-row gap-4 px-3 w-full bg-abutua rounded-3xl ${className}`}
    >
      <div className="border-none my-4 lg:w-[620px] h-auto lg:h-[628px] px-4 mx-auto">
        <div className="text-center my-4">
          <h1 className="text-[28px] font-semibold">BMI</h1>
          <p className="text-sm text-abu-abu">
            Ingin tahu apakah berat badan Anda ideal? Masukkan tinggi dan berat
            badan untuk cek BMI
          </p>
        </div>

        <div className="flex flex-col items-center">
          <GenderPicker selectedGender={gender} onGenderChange={setGender} />

          <div className="w-full max-w-full lg:max-w-[460px] lg:mt-4 mt-3">
            <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">
              Umur
            </h2>
            <input
              type="number"
              name="umur"
              placeholder="Tahun"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-white placeholder:text-right text-black rounded-3xl w-full h-[33px] lg:h-[39px] px-4 lg:text-lg text-[15px]"
            />
          </div>

          <div className="flex flex-col w-full max-w-full lg:max-w-[460px] gap-2">
            <div className="mt-3 lg:mt-4">
              <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">
                Berat (kg)
              </h2>
              <input
                type="number"
                placeholder="Kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-white placeholder:text-right text-black rounded-3xl w-full h-[33px] lg:h-[39px] px-4 lg:text-lg text-[15px]"
              />
            </div>
            <div className="mt-3 lg:mt-4">
              <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">
                Tinggi (cm)
              </h2>
              <input
                type="number"
                placeholder="cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bg-white placeholder:text-right text-black rounded-3xl w-full h-[33px] lg:h-[39px] px-4 lg:text-lg text-[15px]"
              />
            </div>
          </div>

          <div className="h-[38px] my-8 w-full lg:max-w-[460px]">
            <button
              onClick={handleCalculateBMI}
              className="bg-submit/70 px-7 rounded-4xl w-full h-full transition duration-300 hover:bg-submit hover:scale-105 text-[16px]"
            >
              HITUNG
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[580px] h-[548px] xl:h-[628px] my-4 mx-auto bg-black/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
        {renderResultArea()}
      </div>
    </div>
  );
};

export default KalkulatorPageBMI;

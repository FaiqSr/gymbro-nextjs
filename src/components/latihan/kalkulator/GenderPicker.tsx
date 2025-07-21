"use client";
import { IoMdMale, IoMdFemale } from "react-icons/io";

export type Gender = "male" | "female";

interface GenderPickerProps {
  selectedGender: Gender;
  onGenderChange: (gender: Gender) => void;
}

const GenderPicker = ({
  selectedGender,
  onGenderChange,
}: GenderPickerProps) => {
  const activeClass = "bg-teal-500/70";
  const inactiveClass = "hover:bg-gray-200";

  return (
    <div className="w-full max-w-full lg:max-w-[460px] border-none">
      <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">
        Jenis Kelamin
      </h2>
      <div className="flex bg-white rounded-3xl w-full h-[33px] lg:h-[39px] p-1">
        <div
          onClick={() => onGenderChange("male")}
          className={`cursor-pointer rounded-3xl w-1/2 flex justify-center items-center transition-colors ${
            selectedGender === "male" ? activeClass : inactiveClass
          }`}
        >
          <button className="text-sm font-semibold flex gap-2 items-center">
            <IoMdMale size={25} className="text-iconMale" />
            <span className="text-abutua lg:text-xl text-[15px]">Pria</span>
          </button>
        </div>
        <div
          onClick={() => onGenderChange("female")}
          className={`cursor-pointer rounded-3xl w-1/2 flex justify-center items-center transition-colors ${
            selectedGender === "female" ? activeClass : inactiveClass
          }`}
        >
          <button className="text-sm font-semibold flex gap-2 items-center">
            <IoMdFemale size={25} className="text-iconFemale" />
            <span className="text-abutua lg:text-xl text-[15px]">Wanita</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenderPicker;

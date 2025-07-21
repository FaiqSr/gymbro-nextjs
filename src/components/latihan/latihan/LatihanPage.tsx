import { Poppins } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMale } from "react-icons/io";
import Image from "next/image";
import LatihanMulaiPage from "./LatihanMulaiPage";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const LatihanPage = () => {
  return (
    <>
      <section
        className={`w-full dark:bg-[url(/images/gymBg.png)] bg-no-repeat ${poppins.className}`}
      >
        <div className="flex">
          <div className="my-6 md:my-8 lg:my-12 mx-4 lg:mx-15 lg:ml-20 xl:ml-80">
            <h1 className="text-2xl md:text-3xl lg:text-[32px] text-red-600 font-semibold">
              Dashboard Latihan
            </h1>
            <div className="flex gap-16">
              <p className="text-sm md:text-base lg:text-[20px] font-semibold text-abu mt-1 md:mt-2">
                Halo ganteng! Latihan bareng Gymbro yuk
              </p>
              <p className="font-semibold mt-3">15 Juli 2025</p>
            </div>
            <div className=" flex flex-col gap-7">
              <div className="w-[618px] h-[52px] bg-black/10  border rounded-3xl backdrop-blur-2xl pt-3 px-4 mt-5">
                <span>Notifikasi pesan nutrisi atau pengingat minum</span>
                <IoIosArrowDown
                  size={30}
                  className="bg-black/50 rounded-2xl cursor-pointer float-right"
                />
              </div>
              <div className="w-[618px] h-[419px] bg-black/10  border rounded-3xl backdrop-blur-2xl pt-3 px-4 mt-5 ">
                GRAFIK
              </div>
            </div>
          </div>

          <div className="w-[436px] h-[704px] flex flex-col dark:bg-merahhitam">
            <div className="flex mt-10 gap-7 mx-2">
              <div className="flex border-1 py-2 px-5 rounded-4xl w-[150px] h-[55px] bg-ungu">
                <div className="relative  pr-2">
                  <Image
                    src={`/images/Polygon.png`}
                    width={150}
                    height={100}
                    alt="Logo"
                  />
                  <IoMdMale
                    size={28}
                    className="font-bold text-oren z-20 bottom-0 left-5 absolute"
                  />
                </div>
                <span className="text-ungutua font-semibold mt-2">Pria</span>
              </div>
              <button className="border-1 py-2 bg-gray-500/20 rounded-4xl w-[150px] h-[55px] cursor-pointer transition-transform duration-300 hover:scale-105 active:bg-gray-200/20">
                Daftar
              </button>
            </div>
            <div className="w-[328px] h-[429px] bg-black ml-3 mt-9">
              Kalender
            </div>
          </div>
        </div>
        <LatihanMulaiPage />
      </section>
    </>
  );
};

export default LatihanPage;

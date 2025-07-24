"use client";
import React from "react";
import { Inter, Protest_Strike} from "next/font/google";
import { FaRobot, FaCalculator, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

const inter = Inter({subsets: ["latin"], weight: ["400", "500", "600", "700"]});
const protestStrike = Protest_Strike({ subsets: ["latin"], weight: "400" });

const Features = () => {
    return (
        <section id="Fitur" className="relative h-[1150px] md:h-[1260px] w-screen bg-[#160506] flex flex-col items-center justify-center md:pt-[100px] border border-[#160506] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/shadow.svg')] bg-cover bg-center bg-no-repeat" />
            <div className="relative flex flex-col items-center px-4">
                <p className={`${inter.className} pt-10 bg-gradient-to-b from-[#6c0e0c] to-[#FD181B] bg-clip-text text-transparent text-[16px] md:text-[20px] font-semibold text-center`}> Fitur GymBro</p>
                <p className={`${protestStrike.className} pb-5 text-[50px] text-[#FFFFFF] leading-[70px]`} style={{ filter: "drop-shadow(-4px 2px 1px rgba(158,16,17,1))" }}>Kenapa pakai <span className="text-[70px] text-[#FF6C6E]">GymBro</span>?</p>
                <p className="text-[18px] md:text-[25px] text-[#FFFFFF] font-regular">Bagaimana kerja sistem GymBro dimulai?</p>
            </div>
            <div className="mt-10 md:mt-20 flex flex-row w-[350px] md:w-[1320px] h-[400px] md:h-[530px] mx-auto justify-center">
                <div className="flex w-[585px] h-full md:mt-20">
                    <div className="flex flex-col gap-10">
                        <div className="relative p-3 md:pl-10 md:pt-6 md:pr-10 md:pb-6 backdrop-blur-md shadow-md bg-gradient-to-r from-[#32050A] via-[#C33739] to-[#32050A] w-full h-[180px] rounded-[10px] overflow-visible">
                            <FaRobot className="absolute -top-9 -right-1 md:-top-18 md:-right-8 text-[#917A36] text-[50px] md:text-[120px] rotate-[-20deg] opacity-80 z-20" />
                            <p className="font-semibold text-[14px] md:text-[25px] bg-gradient-to-r from-[#FF6C6E] to-[#FD181B] bg-clip-text text-transparent">Asisten Virtual GymBro</p>
                            <p className="text-[10px] md:text-[18px] pt-1.5 font-medium text-[#ECECEC]">Asisten virtual 24/7 yang siap menjawab pertanyaan, memberi rekomendasi latihan, dan menyesuaikan program sesuai progress dan nutrition assistant.</p>
                        </div>
                        <div className="relative p-3 md:pl-10 md:pt-6 md:pr-10 md:pb-6 backdrop-blur-md shadow-md bg-gradient-to-r from-[#32050A] via-[#C33739] to-[#32050A] w-full h-[180px] rounded-[10px] overflow-visible">
                            <FaCalculator className="absolute -top-7 -right-1 md:-top-18 md:-right-8 text-[#917A36] text-[50px] md:text-[120px] rotate-[-20deg] opacity-80 z-20" />
                            <p className="font-semibold text-[14px] md:text-[25px] bg-gradient-to-r from-[#FF6C6E] to-[#FD181B] bg-clip-text text-transparent">Kalkulator</p>
                            <p className="text-[10px] md:text-[18px] pt-1.5 font-medium text-[#ECECEC]">Cek kondisi  ideal dan sehat tubuhmu dengan BMI kalkulator dan prediksi ideal genetik tinggi badan dirimu berdasarkan tinggi orang tua.</p>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center flex w-[150px] h-full gap-10">
                    <div className="relative h-[395px] w-[30px] bg-[#D9D9D9]/10 rounded-full p-2 ml-2">
                        <div className="relative left-[28%] bg-[#860305] w-[8px] rounded-full h-[365px] border-2 border-[#FF6C6E]/50">
                            <div className="absolute left-[50.2%] top-[98%] -translate-x-[50%] w-6 h-6 bg-[#860305] rounded-full"></div>
                            <div className="absolute left-[50.2%] top-[65%] -translate-x-[50%] w-6 h-6 bg-[#860305] rounded-full"></div>
                            <div className="absolute left-[50.2%] top-[30%] -translate-x-[50%] w-6 h-6 bg-[#860305] rounded-full"></div>
                            <div className="absolute left-[50.2%] top-[-1%] -translate-x-[50%] w-6 h-6 bg-[#860305] rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[585px] h-full">
                    <div className="flex flex-col gap-10">
                        <div className="relative p-3 md:pl-10 md:pt-6 md:pr-10 md:pb-6 backdrop-blur-md shadow-md bg-gradient-to-r from-[#32050A] via-[#C33739] to-[#32050A] w-full h-[180px] rounded-[10px] overflow-visible">
                            <FaCalendarAlt className="absolute -top-10 -right-1 md:-top-18 md:-right-8 text-[#917A36] text-[50px] md:text-[120px] rotate-[20deg] opacity-80 z-20" />
                            <p className="font-semibold text-[14px] md:text-[25px] bg-gradient-to-r from-[#FF6C6E] to-[#FD181B] bg-clip-text text-transparent">Penjadwalan Gym Otomatis</p>
                            <p className="text-[10px] md:text-[18px] pt-1.5 font-medium text-[#ECECEC]">Buat jadwal latihan otomatis berdasarkan gender, target latihan, dan metode split (upper-lower dan body split).</p>
                        </div>
                        <div className="relative p-3 md:pl-10 md:pt-6 md:pr-10 md:pb-6 backdrop-blur-md shadow-md bg-gradient-to-r from-[#32050A] via-[#C33739] to-[#32050A] w-full h-[180px] rounded-[10px] overflow-visible">
                            <FaChartLine className="absolute -top-8 -right-1 md:-top-18 md:-right-8 text-[#917A36] text-[50px] md:text-[120px] rotate-[20deg] opacity-80 z-20" />
                            <p className="font-semibold text-[14px] md:text-[25px] bg-gradient-to-r from-[#FF6C6E] to-[#FD181B] bg-clip-text text-transparent">Progress Tracker</p>
                            <p className="text-[10px] md:text-[18px] pt-1.5 font-medium text-[#ECECEC]">Pantau kemajuanmu dalam grafik (repetisi, beban, intensitas, dan frekuensi) semua dalam satu dashboard interaktif.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 md:mt-40 w-full md:w-[1320px] h-[200px] mx-auto flex items-center justify-center">
                <div className="flex flex-row gap-5 h-[220px] items-center overflow-x-auto flex-nowrap w-full px-4 scroll-smooth md:overflow-visible md:flex-wrap md:w-[1320px] md:px-0">
                    <div className="relative flex flex-col justify-center items-start min-w-[260px] w-[280px] h-[200px] bg-gradient-to-br to-white/10 rounded-[20px] border border-[#D9D9D9]/10 p-8">
                        <div className="text-[28px] font-bold text-white">01.</div>
                        <div className="max-w-full w-[280px] h-[13px] bg-[#D9D9D9]/10 rounded-full p-1 mt-4 mb-4 ml-0 sm:ml-2 self-start">
                            <div className="bg-[#9E1011] h-[5px] rounded-full"></div>
                        </div>                        
                        <p className="text-[#D9D9D9] text-left text-[23px] sm:text-[25px] font-semibold">Daftarkan Akun</p>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <MdOutlineDoubleArrow className="text-[#FFFFFF] text-[25px] mt-8 hidden md:block" />
                    </div>
                    <div className="relative flex flex-col justify-center items-start min-w-[260px] w-[280px] h-[200px] bg-gradient-to-br to-white/10 rounded-[20px] border border-[#D9D9D9]/10 p-8">
                        <div className="text-[28px] font-bold text-white">02.</div>
                        <div className="max-w-full w-[280px] h-[13px] bg-[#D9D9D9]/10 rounded-full p-1 mt-4 mb-4 ml-0 sm:ml-2 self-start">
                            <div className="bg-[#9E1011] h-[5px] rounded-full"></div>
                        </div> 
                        <p className="text-[#D9D9D9] text-left text-[23px] sm:text-[25px] font-semibold">Masuk ke Akun</p>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <MdOutlineDoubleArrow className="text-[#FFFFFF] text-[25px] mt-8 hidden md:block" />
                    </div>
                    <div className="relative flex flex-col justify-center items-start min-w-[260px] w-[280px] h-[200px] bg-gradient-to-br to-white/10 rounded-[20px] border border-[#D9D9D9]/10 p-8">
                        <div className="text-[28px] font-bold text-white">03.</div>
                        <div className="max-w-full w-[280px] h-[13px] bg-[#D9D9D9]/10 rounded-full p-1 mt-4 mb-4 ml-0 sm:ml-2 self-start">
                            <div className="bg-[#9E1011] h-[5px] rounded-full"></div>
                        </div> 
                        <p className="text-[#D9D9D9] text-left text-[23px] sm:text-[25px] font-semibold">Pilih Rencana</p>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <MdOutlineDoubleArrow className="text-[#FFFFFF] text-[25px] mt-8 hidden md:block" />
                    </div>
                    <div className="relative flex flex-col justify-center items-start min-w-[260px] w-[280px] h-[200px] bg-gradient-to-br to-white/10 rounded-[20px] border border-[#D9D9D9]/10 p-8">
                        <div className="text-[28px] font-bold text-white">04.</div>
                        <div className="max-w-full w-[280px] h-[13px] bg-[#D9D9D9]/10 rounded-full p-1 mt-4 mb-4 ml-0 sm:ml-2 self-start">
                            <div className="bg-[#9E1011] h-[5px] rounded-full"></div>
                        </div> 
                        <p className="text-[#D9D9D9] text-left text-[23px] sm:text-[25px] font-semibold">Latihan Dimulai</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Features;

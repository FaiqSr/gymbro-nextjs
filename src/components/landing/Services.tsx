"use client"
import React from "react";
import { Protest_Strike} from "next/font/google";

const protestStrike = Protest_Strike({ subsets: ["latin"], weight: "400" });

const Services = () => {
    return (
        <section id="Layanan" className="relative min-h-screen w-full bg-[#160506] flex flex-col items-center justify-center border border-[#160506] overflow-hidden pb-40 bg-[url('/images/orang.png')] bg-opacity-50 bg-no-repeat bg-[left_-210px_bottom_-400px]">
            <div className="ml-0 md:ml-20 w-full md:w-[1320px] h-[1200px] md:h-[500px] flex flex-col px-2">
                <p className={`${protestStrike.className} bg-gradient-to-r from-[#FD181B] to-[#3c0807] bg-clip-text text-transparent font-bold text-[40px] sm:text-[50px] md:text-[70px] text-center md:text-left pt-20 md:pt-0`}>Our Services</p>
                <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] mb-8 md:mb-12 text-center md:text-left">Rasakan kebugaran level baru lewat layanan yang dipersonalisasi dengan AI</p>
                <div className="flex flex-col md:flex-row gap-5 w-full md:w-[1320px] h-auto md:h-[1100px]">
                    <div className="w-full md:w-[240px] bg-gradient-to-l from-[#FD181B]/30 to-[#400807]/60 p-6 rounded-xl text-white hover:scale-115 transition-all mb-4 md:mb-0">
                        <p className="font-bold text-[18px] md:text-[20px] bg-gradient-to-r from-[#FD181B] to-[#FF6C6E] bg-clip-text text-transparent mb-2">Penjadwalan Latihan Gym</p>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">Jadwal latihan otomatis berdasarkan gender, target, dan metode latihan dengan otomatisasi AI.</p>
                        <button className="bg-[#D9D9D9] text-[#846162] font-semibold w-full md:w-[200px] h-[45px] md:h-[50px] rounded-lg mt-6">Coba Sekarang {'>>'}</button>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <div className="bg-gradient-to-b from-[#FD181B]/30 to-[#400807]/60 p-6 rounded-xl text-white hover:scale-115 transition-all flex flex-col h-full w-full md:w-[340px] mb-4 md:mb-0">
                                <p className="font-bold text-[18px] md:text-[20px] bg-gradient-to-t from-[#FD181B] to-[#FF6C6E] bg-clip-text text-transparent mb-2">Kalkulator BMI</p>
                                <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">Cek ukuran ideal tubuhmu dengan BMI kalkulator.</p>
                                <button className="bg-[#D9D9D9] text-[#846162] font-semibold w-full md:w-[200px] h-[45px] md:h-[50px] rounded-lg mt-4">Coba Sekarang {'>>'}</button>
                            </div>
                            <div className="bg-gradient-to-b from-[#FD181B]/30 to-[#400807]/60 p-6 rounded-xl text-white hover:scale-115 transition-all flex flex-col h-full w-full md:w-[340px]">
                                <p className="font-bold text-[18px] md:text-xl bg-gradient-to-t from-[#FD181B] to-[#FF6C6E] bg-clip-text text-transparent mb-2">Kalkulator IDAI</p>
                                <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">Cek prediksi ukuran tinggi badan genetikmu dan keturunanmu.</p>
                                <button className="bg-[#D9D9D9] text-[#846162] font-semibold w-full md:w-[200px] h-[45px] md:h-[50px] rounded-lg mt-4">Coba Sekarang {'>>'}</button>
                            </div>
                        </div>
                        <div className="bg-gradient-to-t from-[#FD181B]/30 to-[#400807]/60 p-6 rounded-xl text-white hover:scale-115 transition-all flex flex-col h-full w-full md:w-[705px]">
                            <p className="font-bold text-[18px] md:text-[20px] bg-gradient-to-b from-[#FD181B] to-[#FF6C6E] bg-clip-text text-transparent mb-2">Progres Latihan</p>
                            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">Pantau progres tiap minggu melalui grafik interaktif</p>
                            <button className="bg-[#D9D9D9] text-[#846162] font-semibold w-full md:w-[200px] h-[45px] md:h-[50px] rounded-lg mt-4">Coba Sekarang {'>>'}</button>
                        </div>
                    </div>
                    <div className="w-full md:w-[240px] bg-gradient-to-r from-[#FD181B]/30 to-[#400807]/60 p-6 rounded-xl text-white hover:scale-115 transition-all flex flex-col h-full mt-4 md:mt-0">
                        <p className="font-bold text-[18px] md:text-[20px] bg-gradient-to-l from-[#FD181B] to-[#FF6C6E] bg-clip-text text-transparent mb-2">ChatBot by GymBot</p>
                        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">Tanyakan apa saja mengenai gymmu atau nutrisi yang kamu butuhkan</p>
                        <button className="bg-[#D9D9D9] text-[#846162] font-semibold w-full md:w-[200px] h-[45px] md:h-[50px] rounded-lg mt-6">Coba Sekarang {'>>'}</button>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Services;

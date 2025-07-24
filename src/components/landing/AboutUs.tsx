"use client";
import React from "react";
import { Inter, Protest_Strike} from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({subsets: ["latin"], weight: ["400", "500", "600", "700"]});
const protestStrike = Protest_Strike({ subsets: ["latin"], weight: "400" })

const AboutUs = () => {
  return (
    <section id="Tentang" className="relative w-full h-[900px] md:h-screen bg-gradient-to-b from-[#500b0d] to-[#160506] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute -left-65 top-[35%] w-[500px] md:w-[1050px] md:h-[600px] bg-[#670b0e]/40 rounded-full blur-[10px] z-0" />
      <div className="absolute -left-45 top-[25%] md:w-[1100px] md:h-[580px] bg-[#670b0e]/30 rounded-full blur-[5px] z-0" />
      <div className="absolute -right-65 top-[30%] md:w-[1050px] md:h-[600px] bg-[#670b0e]/40 rounded-full blur-[10px] z-0" />
      <div className="absolute -right-45 top-[20%] md:w-[1100px] md:h-[580px] bg-[#670b0e]/30 rounded-full blur-[5px] z-0" />
      <div className="pt-10 md:pt-0 flex flex-col md:flex-row justify-center items-center w-[340px] md:w-[1320px] h-[900px] md:h-[700px]">
        <div className="relative flex flex-col justify-center items-center w-[350px] md:w-full max-w-[720px] h-[350px] md:h-[630px] sm:bg-white/2 rounded-[20px] sm:shadow-2xl sm:drop-shadow-[4px_2px_6px_rgba(255,255,255,1)] sm:border sm:border-[#D9D9D9]/20 p-10 md:pl-15 md:pr-15 md:pb-15 md:mx-auto">
            <div className="flex mt-3 sm:mt-5 justify-center md:justify-center">
                <div className=" relative flex flex-col justify-start w-[310px] h-[150px] md:w-[630px] md:h-[360px] bg-white/2 rounded-[20px] shadow-sm drop-shadow-[0px_1px_1px_rgba(255,255,255,0.35)] border border-[#D9D9D9]/10 p-10 md:pl-15 md:pr-15 md:pb-15">
                  <video/>
                </div>
            </div>
            <div className="flex flex-row gap-8 sm:gap-15 md:gap-18 mt-8 md:mt-10 w-full justify-center md:justify-center">
                <div className="relative z-10 flex flex-col justify-start w-[60px] h-[60px] md:w-[153px] md:h-[156px] bg-gradient-to-b to-[#FFFFFF]/2 rounded-[20px] shadow-lg drop-shadow-[0px_1px_1px_rgba(255,255,255,0.35)] border border-[#D9D9D9]/20 p-10 md:pl-15 md:pr-15 md:pb-15"></div>
                <div className="relative z-10 flex flex-col justify-start w-[60px] h-[60px] md:w-[153px] md:h-[156px] bg-gradient-to-b to-[#FFFFFF]/5 rounded-[20px] shadow-lg drop-shadow-[0px_1px_1px_rgba(255,255,255,0.35)] border border-[#D9D9D9]/20 p-10 md:pl-15 md:pr-15 md:pb-15"></div>
                <div className="relative z-10 flex flex-col justify-start w-[60px] h-[60px] md:w-[153px] md:h-[156px] bg-gradient-to-b to-[#FFFFFF]/10 rounded-[20px] shadow-lg drop-shadow-[0px_1px_1px_rgba(255,255,255,0.35)] border border-[#D9D9D9]/20 p-10 md:pl-15 md:pr-15 md:pb-15"></div>
            </div>
        </div>
        <div className="relative w-[340px] h-[700px] md:w-[600px] md:h-[630px] flex flex-col pt-2 md:pl-10 md:pr-10 md:pt-5">
            <motion.p className={`${inter.className} w-full pb-2 bg-gradient-to-b from-[#6c0e0c] to-[#FD181B] bg-clip-text text-transparent text-[16px] md:text-[20px] font-semibold text-center md:text-left`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>Tentang Kami</motion.p>
            <motion.p className={`${protestStrike.className} pb-5 md:pb-8 text-[40px] md:text-[70px] text-[#FFFFFF] leading-[50px] md:leading-[65px] text-center md:text-left`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} viewport={{ once: true }}> Pilih targetmu! 
              <motion.a className="text-[60px] md:text-[80px]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}> Kami</motion.a> bantu capai dengan 
              <motion.a className="text-[60px] md:text-[80px]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} viewport={{ once: true }}>AI</motion.a>
            </motion.p>
            <motion.p className="font-regular text-[18px] md:text-[23px] text-[#FFFFFF] leading-[25px] md:leading-[35px] text-center md:text-left" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}viewport={{ once: true }}> 
              GymBro menghadirkan pengalaman gym yang pintar, personal, dan efisien  memadukan kekuatan AI. Latihan bukan lagi sekadar rutinitas, tetapi ini tentang strategi, data, dan akurasi. Dengan chatbot cerdas, sistem kami menyusun jadwal latihan otomatis berdasarkan gender, tujuan, dan metode latihanmu, agar setiap gerakan punya arti.
            </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

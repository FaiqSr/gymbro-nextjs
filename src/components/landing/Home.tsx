"use client";
import React, { useEffect, useRef } from "react";
import { Protest_Strike, Bebas_Neue } from "next/font/google";
import { FaPlay, FaRobot } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GiMuscleFat, GiMuscleUp } from "react-icons/gi";
import { MdTimer3Select } from "react-icons/md";
import AboutUs from "./AboutUs";
import NavLanding from "./navlanding/NavLanding";
import Features from "./Features";
import ContactUs from "./ContactUs";
import Services from "./Services"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


const protestStrike = Protest_Strike({ subsets: ["latin"], weight: "400" })
const bebas = Bebas_Neue({subsets: ["latin"], weight: "400",});

const Home = () => {
  const router = useRouter()
  const fiturRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768 && fiturRef.current) {
      const scrollContainer = fiturRef.current;
      let frame: number;
      const speed = 1;
      if (scrollContainer.children.length === 5) {
        scrollContainer.innerHTML += scrollContainer.innerHTML;
      }
      function animate() {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth/2) {
          scrollContainer.scrollLeft = 0;
        } else {scrollContainer.scrollLeft+=speed;}
        frame = requestAnimationFrame(animate);
      }
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 -z-10 bg-[url('/bg/bg4.jpg')] bg-cover bg-center bg-no-repeat" />
      <NavLanding />
      <section id="Beranda" className="flex flex-col items-center justify-center pt-[100px] w-full min-h-screen bg-black/90 bg-gradient-to-b from-[#00000]/50 to-[#620e10]">
        <div className="relative w-full max-w-[1320px] h-auto flex flex-col md:flex-row gap-6 md:gap-10 mt-auto px-4 md:px-0">
          <div className="w-full md:w-[710px] h-auto md:h-[530px]">
            <motion.p  className={`${protestStrike.className} text-[40px] sm:text-[60px] md:text-[80px] text-[#ECECEC] leading-tight md:leading-[85px] drop-shadow-[1px_3px_2px_rgba(0,0,0,0.4)]`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
              <motion.a className="bg-gradient-to-bl from-[#6c0e0c] to-[#FD181B] bg-clip-text text-transparent text-[48px] sm:text-[64px] md:text-[110px]" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}> GymBro</motion.a> sesuai
              <motion.a className="bg-gradient-to-tr from-[#6c0e0c] to-[#FD181B] bg-clip-text text-transparent" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} viewport={{ once: true }}> target?</motion.a> Biar kami yang 
              <motion.a className="bg-[#FD181B] bg-clip-text text-transparent" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>atur</motion.a> 
              jalannya
            </motion.p>
            <motion.div className="max-w-full sm:max-w-[600px] h-[18px] bg-[#D9D9D9]/10 rounded-full p-1 mt-4 mb-4 ml-0 sm:ml-2 self-start" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} viewport={{ once: true }}>
              <div className="bg-[#9E1011] h-[8px] rounded-full"></div>
            </motion.div>
            <motion.p className="w-full md:w-[630px] text-[#FFFFFF] font-medium text-[16px] sm:text-[20px] md:text-[25px] leading-[24px] sm:leading-[30px] md:leading-[35px]" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>
              Pilih tujuanmu, dan biarkan sistem kami membuatkan program latihan gym yang cocok. Praktis, personal, tanpa pelatih.
            </motion.p>
            <motion.div className="flex flex-row items-start sm:items-center gap-2 sm:gap-4 mt-7" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} viewport={{ once: true }}>
              <div className="flex flex-col w-[280px] sm:w-auto">
                <motion.button type="button" onClick={() => router.push("/login")} className="w-[280px] sm:w-[400px] h-[60px] sm:h-[80px] rounded-[50px] border-3 border-[#D9D9D9]/70 text-[#FFFFFF] text-[16px] sm:text-[27px] flex items-center justify-between px-4 font-semibold transition-transform duration-300 active:scale-105 active:bg-[#978e48] active:border-[#D7FD00]" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>Mulai Latihan
                  <a className="w-[90px] sm:w-[120px] h-[40px] sm:h-[50px] rounded-[50px] bg-[#8B8B8B] ml-1 sm:ml-5 flex justify-center items-center text-[#FFFFFF] text-[16px] sm:text-[22px] active:bg-[#FFFFFF] active:text-[#8B8B8B]">More...</a>
                </motion.button>
              </div>
              <motion.button className="sm:ml-5 w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] flex justify-center items-center rounded-full bg-[#9E1011]" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>
                <FaPlay className="w-6 sm:w-10 h-6 sm:h-10" color="#FFFFFF"/>
              </motion.button>
            </motion.div>
          </div>
          <motion.div className="w-full md:w-[600px] h-auto md:h-[530px] flex items-center justify-center" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>
            <motion.div className="w-full max-w-[400px] md:max-w-full object-cover transition hover:scale-115" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}viewport={{ once: true }}>
              <Image src="/images/icon.png" alt="icon" width={1000} height={1000} style={{WebkitMaskImage: "linear-gradient(135deg, #7b61ff 0%, #d97f3b 60%, rgba(255,255,255,0.1) 100%)", maskImage: "linear-gradient(135deg, #7b61ff 0%, #d97f3b 60%, rgba(255,255,255,0.1) 100%)"}}/>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="border border-[#541919] bg-[#242424]/20 w-full h-auto min-h-[80px] md:h-[119px] flex flex-col justify-center mt-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>
          <div ref={fiturRef} className="flex flex-row md:flex-row overflow-x-auto md:overflow-x-visible gap-2 md:gap-3 w-full md:w-[1620px] px-2 md:pl-17 md:pr-17 whitespace-nowrap scrollbar-thin scrollbar-thumb-[#541919]/60 scrollbar-track-transparent mx-auto">
            <motion.p className={`${bebas.className} flex w-full md:w-[310px] h-[60px] md:h-[100px] justify-center items-center text-center text-[#8B8B8B] text-[18px] sm:text-[22px] md:text-[28px] tracking-wide gap-2 m-2`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}> <CgGym className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#6c0e0c]"/> Kekuatan</motion.p>
            <motion.p className={`${bebas.className} flex w-full md:w-[310px] h-[60px] md:h-[100px] justify-center items-center text-center text-[#8B8B8B] text-[18px] sm:text-[22px] md:text-[28px] tracking-wide gap-2 m-2`} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} viewport={{ once: true }}> <GiMuscleUp className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#6c0e0c]"/> Otot</motion.p>
            <motion.p className={`${bebas.className} flex w-full md:w-[290px] h-[60px] md:h-[100px] justify-center items-center text-center text-[#8B8B8B] text-[18px] sm:text-[22px] md:text-[28px] tracking-wide gap-3 m-2`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}> <GiMuscleFat className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#6c0e0c]"/> Berat</motion.p>
            <motion.p className={`${bebas.className} flex w-full md:w-[220px] h-[60px] md:h-[100px] justify-center items-center text-center text-[#8B8B8B] text-[18px] sm:text-[22px] md:text-[28px] tracking-wide gap-3 m-2`} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} viewport={{ once: true }}> <FaRobot className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#6c0e0c]"/> GymBot</motion.p>
            <motion.p className={`${bebas.className} flex w-full md:w-[300px] h-[60px] md:h-[100px] justify-center items-center text-center text-[#8B8B8B] text-[18px] sm:text-[22px] md:text-[28px] tracking-wide gap-3 m-2`} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }} viewport={{ once: true }}> <MdTimer3Select className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#6c0e0c]"/> Waktu</motion.p>
          </div>
        </motion.div>
      </section>
      <AboutUs />
      <Features />
      <Services />
      <ContactUs />
      <footer className="w-full h-full bg-[#110B0B]">
        <div className="w-full max-w-[1320px] h-full mx-auto gap-8 flex flex-col md:flex-row px-4 md:px-0">
          <div className="w-full md:w-[800px] h-full mb-6 md:mb-0">
            <div className="text-red-600 text-xl md:text-2xl font-bold mb-2 flex items-center gap-1">
              <Image src="/logo.svg" alt="logo" className="w-16 h-16 md:w-35 md:h-35" width={100} height={100} />
            </div>
            <p className="text-[16px] md:text-[18px] text-[#8B8B8B]"> GymBro adalah partner terbaik kamu dalam mencapai gaya hidup sehat. Temukan program latihan, tips nutrisi, dan panduan kebugaran yang bisa langsung kamu terapkan.</p>
          </div>
          <div className="w-full md:w-[250px] h-full p-0 md:p-10 mb-6 md:mb-0">
            <p className="text-[#FFFFFF] font-semibold text-[16px] md:text-[18px] mb-3">Tautan Cepat</p>
            <ul className="space-y-2 text-[16px] md:text-[18px]">
              <li><a href="#Beranda" className="text-[#8B8B8B] hover:underline">Beranda</a></li>
              <li><a href="#Tentang" className="text-[#8B8B8B] hover:underline">Tentang</a></li>
              <li><a href="#Fitur" className="text-[#8B8B8B] hover:underline">Fitur</a></li>
              <li><a href="#Layanan" className="text-[#8B8B8B] hover:underline">Layanan</a></li>
              <li><a href="#Kontak" className="text-[#8B8B8B] hover:underline">Kontak</a></li>
            </ul>
          </div>
          <div className="w-full md:w-[250px] h-full p-0 md:p-10">
            <p className="text-[#FFFFFF] font-semibold text-[16px] md:text-[18px] mb-3">Kami</p>
            <ul className="space-y-2 text-[16px] md:text-[18px]">
              <li><a className="text-[#8B8B8B]">+62 211-511-345</a></li>
              <li><a className=" text-[#8B8B8B]">gymbro@gmail.com</a> </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 p-4 md:p-10 border-t border-[#8B8B8B]/20 text-center text-[14px] md:text-[18px] text-[#8B8B8B]">
          <p className="text-[#FFFFFF]">Hak Cipta</p>
          <span className="block mt-1">© 2025 GymBro. Seluruh hak cipta dilindungi.</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
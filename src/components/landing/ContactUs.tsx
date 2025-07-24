"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <section id="Kontak" className="relative min-h-screen w-full bg-gradient-to-b from-[#200707] to-[#0B0B0B] flex flex-col items-center justify-center pt-[40px] px-2 sm:px-4 overflow-hidden">
            <div className="absolute left-170 -top-[40%] w-[600px] h-[600px] bg-[#FF6C6E]/30 rounded-full blur-[100px]" />
            <div className="absolute left-40 top-[80%] w-[1600px] h-[700px] bg-[#6e0509] rounded-full blur-[200px]" />
            <motion.div className="relative flex flex-col items-center max-w-[1250px] w-full mb-5" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
                <div className="flex flex-col items-center max-w-[1300px] w-full">                    
                    <motion.div className="flex justify-center items-center gap-2" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} viewport={{ once: true }}>
                        <motion.p className="text-[32px] sm:text-[40px] font-bold text-[#FFFFFF] flex items-center" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>Kerja Sama</motion.p>
                        <Image src="/logo.svg" alt="logo" className="self-center w-20 h-20 sm:w-35 sm:h-35 mb-3" width={80} height={80} />
                    </motion.div>
                    <motion.form className="space-y-6 text-white w-full" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>
                        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full">
                            <div className="flex-1 w-full">
                                <label className="text-[18px] sm:text-[23px] text-[#FFFFFF] font-medium block mb-1 ">Nama</label>
                                <input className="w-full md:w-[600px] p-3 rounded-lg bg-[#5c0d0e]/30 border border-[#FD181B]/30 text-[16px] sm:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#FD181B]" type="text" placeholder="Nama" />
                            </div>
                            <div className="flex-1 w-full">
                                <label className="text-[18px] sm:text-[23px] text-[#FFFFFF] font-medium block mb-1">Tujuan</label>
                                <input className="w-full md:w-[600px] p-3 rounded-lg bg-[#5c0d0e]/30 border border-[#FD181B]/30 text-[16px] sm:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#FD181B]" type="text" placeholder="Tujuan" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full">
                            <div className="flex-1 w-full">
                                <label className="text-[18px] sm:text-[23px] text-[#FFFFFF] font-medium block mb-1">Email</label>
                                <input className="w-full md:w-[600px] p-3 rounded-lg bg-[#5c0d0e]/30 border border-[#FD181B]/30 text-[16px] sm:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#FD181B]" type="email" placeholder="Email" />
                            </div>
                            <div className="flex-1 w-full">
                                <label className="text-[18px] sm:text-[23px] text-[#FFFFFF] font-medium block mb-1">Nomor Telepon (opsional)</label>
                                <input className="w-full md:w-[600px] p-3 rounded-lg bg-[#5c0d0e]/30 border border-[#FD181B]/30 text-[16px] sm:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#FD181B]" type="text" placeholder="Nomor Telepon" />
                            </div>
                        </div>
                        <div>
                            <label className="text-[18px] sm:text-[23px] text-[#FFFFFF] font-medium block mb-1">Deskripsi Pesan</label>
                            <textarea className="w-full h-[180px] sm:h-[275px] p-3 rounded-lg bg-[#5c0d0e]/30 border border-[#FD181B]/30 text-[16px] sm:text-[20px] focus:outline-none focus:ring-2 focus:ring-[#FD181B] resize-none" rows={6} placeholder="Deskripsikan pesan kamu..."></textarea>
                        </div>
                        <div className="text-right">
                            <motion.button type="submit" className="w-[140px] sm:w-[180px] md:w-[240px] h-[48px] sm:h-[62px] md:h-[78px] py-2 bg-white text-[#860505] text-[18px] sm:text-[25px] font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-200" style={{ filter: "drop-shadow(2px 3px 2px rgba(158,16,17,1))" }} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} viewport={{ once: true }}>
                                Kirim Pesan
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};
export default ContactUs;
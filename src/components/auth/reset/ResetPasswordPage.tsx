"use client";
import React, { useState, FormEvent } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== konfirmasiPassword) {
      setError("Password dan konfirmasi password tidak sama!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className={`${poppins.className} h-screen w-screen flex items-center justify-center bg-[url('/bg/bg2.png')] bg-cover bg-center relative`}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-0"></div>
      <form onSubmit={handleSubmit} className="relative max-w-md w-full mx-auto flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" className="mb-6" width={120} height={120} />
        <div className="relative [340px] sm:w-[400px] md:w-[700px] bg-gradient-to-b to-[#D9D9D9]/50 bg-opacity-40 rounded-[20px] inner-shadow-lg p-10 md:pl-15 md:pr-15 md:pb-15 border-1 border-[#D9D9D9]/85">
          <h2 className="text-[28px] md:text-[40px] font-bold text-center bg-gradient-to-b from-[#781918] to-[#ab5e23] bg-clip-text text-transparent">Ganti Kata Sandi</h2>
          <h3 className="text-sm md:text-[20px] mx-auto font-reguler text-gray-300 text-center">Masukkan kata sandi baru untuk akunmu</h3>
          <div className="mt-5 md:mt-10">
            <label className="text-[#FFFFFF] text-[16px] md:text-[23px] font-semibold mb-1 block">Password Baru</label>
            <input type="password" name="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password baru" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white" required/>
          </div>
          <div className="mt-3 md:mt-5">
            <label className="text-[#FFFFFF] text-[16px] md:text-[23px] font-semibold mb-1 block">Konfirmasi Kata Sandi</label>
            <input type="password" name="konfirmasiPassword" value={konfirmasiPassword} onChange={e => setKonfirmasiPassword(e.target.value)} placeholder="Konfirmasi password" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white" required/>
          </div>
          {error && (<p className="mt-4 text-[14px] md:text-[23px] w-fit px-4 mx-auto text-center bg-red-500/20 rounded-[20px] text-red-600">{error}</p>)}
          {submitted && (<p className="mt-4 text-[14px] md:text-[23px] w-fit px-4 mx-auto text-center bg-[#D9D9D9]/10 rounded-[20px] text-[#D7FD00]">Password berhasil direset! Silakan login kembali.</p>)}
        </div>
        <div className="mt-8">
          <button type="submit" className="w-[180px] md:w-[240px] h-[62px] md:h-[78px] py-2 mx-auto block rounded-md text-[18px] md:text-[25px] font-bold bg-[#D7FD00] text-[#860305] transition duration-200 active:scale-95 active:bg-opacity-80 active:bg-[#860305] active:text-[#D7FD00]">Kirim</button>
          <p className="mt-3 text-center text-[#FFFFFF] text-[13px] sm:text-[15px] md:text-[23px]">Sudah ingat kata sandi? <Link href={"/login"} className="text-[#D7FD00] duration-200 active:scale-95 active:bg-opacity-80 active:text-[#bfc200]">Kembali</Link></p>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
"use client";
import React, { useState, FormEvent } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const LoginPage = () => {
  const [userOrEmail, setUserOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Login data berhasil");
    router.push("/latihan");
  };

  return (
    <div className={`${poppins.className} h-screen w-screen flex items-center justify-center bg-[url('/bg/bg2.png')] bg-cover bg-center relative`}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-0"></div>
      <form onSubmit={handleSubmit} className="relative max-w-md w-full mx-auto flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" className="mb-5" width={120} height={120}/>
        <div className="relative w-[340px] sm:w-[400px] md:w-[700px] bg-gradient-to-b to-[#D9D9D9]/50 bg-opacity-40 rounded-[20px] inner-shadow-lg p-10 md:pl-15 md:pr-15 md:pb-15 border-1 border-[#D9D9D9]/85">
          <h2 className="text-[28px] md:text-[40px] font-bold text-center bg-gradient-to-b from-[#781918] to-[#ab5e23] bg-clip-text text-transparent">Masuk</h2>
          <h3 className="text-sm md:text-[20px] mx-auto font-reguler text-gray-300 text-center">Masuk ke akun <a className="text-[#ab5e23] font-semibold">GymbroMu!</a></h3>
          <div className="mt-5 md:mt-10">
            <label className="text-[#FFFFFF] text-[16px] md:text-[23px] font-semibold mb-1 block">Username/Email</label>
            <input type="text" name="userOrEmail" value={userOrEmail} onChange={(e) => setUserOrEmail(e.target.value)} placeholder="Username atau Email" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white" required/>
          </div>
          <div className="mt-3 md:mt-5">
            <label className="text-[#FFFFFF] text-[16px] md:text-[23px] font-semibold mb-1 block">Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white" required/>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex w-full mt-3 justify-start text-[#FFFFFF]">
              <input type="checkbox" name="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="w-4 h-4 md:w-6 md:h-6 md:ml-2 md:mt-1" required/>
              <span className="text-sm sm:text-[15px] md:text-[23px] text-left ml-2 ">Ingat saya!</span>
            </div>
            <div className="flex w-full justify-end mt-3">
              <Link href={"/reset"} className="text-sm md:text-[23px] text-right text-[#D7FD00] duration-200 active:scale-95 active:bg-opacity-80 active:text-[#bfc200]">Ganti Kata Sandi</Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="w-[180px] md:w-[240px] h-[62px] md:h-[78px] py-2 mx-auto block rounded-md text-[18px] md:text-[25px] font-bold bg-[#D7FD00] text-[#860305] transition duration-200 active:scale-95 active:bg-opacity-80 active:bg-[#860305] active:text-[#D7FD00]">Masuk</button>
          <p className="mt-3 text-center text-[#FFFFFF] text-[13px] sm:text-[15px] md:text-[23px]">Belum punya akun? <Link href={"/register"} className="text-[#D7FD00] duration-200 active:scale-95 active:bg-opacity-80 active:text-[#bfc200]">Daftar</Link></p>
        </div>
      </form>     
    </div>
  );
};

export default LoginPage;
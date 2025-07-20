"use client";
import React, { useState, FormEvent } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const RegisterPage = () => {
  const router = useRouter();
  const [namaDepan, setNamaDepan] = useState('');
  const [namaBelakang, setNamaBelakang] = useState('');
  const [username, setUsername] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [email, setEmail] = useState('');
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setkonfirmasiPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showKonfirmasiPassword, setShowKonfirmasiPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password !== konfirmasiPassword) {
      alert("Password tidak sama!");
      return}
    if (!namaDepan || !namaBelakang || !username || !tanggalLahir || !email || !berat || !tinggi || !password || !konfirmasiPassword || !agree) {
      alert("Semua harus diisi dan disetujuai!"); 
      return}
    alert("Akunmu berhasil dibuat!");
    router.push("/pilihan");
  };

  return (
    <div className={`${poppins.className} min-h-screen min-w-screen flex items-center justify-center bg-[url('/bg/bg1.png')] bg-cover bg-center relative`}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-0"></div>
      <form onSubmit={handleSubmit} className="relative max-w-md w-full mx-auto flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={120} height={120} className="mb-2 sm:mb-5"/>
        <div className="relative w-[350px] sm:w-[500px] md:w-[900px] bg-gradient-to-b from-[#D9D9D9]/50 bg-opacity-40 rounded-[20px] inner-shadow-lg p-9 md:pl-15 md:pr-15 md:pb-15 border-1 border-[#D9D9D9]/85">
          <h2 className="text-[22px] sm:text-[25px] md:text-[40px] font-bold text-center bg-gradient-to-b to-[#781918] from-[#ab5e23] bg-clip-text text-transparent">Registrasi</h2>
          <h3 className="text-[11px] md:text-[20px] mx-auto font-reguler text-gray-300 text-center">Isi form ini untuk membuat akun <a className="text-[#781918] font-semibold">GymbroMu!</a></h3>
          
          <div className="flex gap-4 mt-2 md:mt-4">
            <div className="flex-1">
              <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Nama Depan</label>
              <input type="text" name="namaDepan" value={namaDepan} onChange={(e) => setNamaDepan(e.target.value)} placeholder="Nama Depan" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
            </div>
            <div className="flex-1">
              <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Nama Belakang</label>
              <input type="text" name="namaBelakang" value={namaBelakang} onChange={(e) => setNamaBelakang(e.target.value)} placeholder="Nama Belakang" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
            </div>
          </div>
          <div className="flex gap-4 mt-2 sm:mt-3">
            <div className="flex-1">
              <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Username</label>
              <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
            </div>
            <div className="flex-1">
              <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Tanggal Lahir</label>
              <input type="date" name="tanggalLahir" value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} placeholder="Tanggal Lahir" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
            </div>
          </div>
          <div className="mt-2 sm:mt-3">
            <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
          </div>

          <div className="flex gap-4 mt-2 sm:mt-3">
            <div className="flex-1">
              <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Berat</label>
              <input type="number" name="berat"min={0} value={berat} onChange={(e) => setBerat((e.target.value))} placeholder="Kg" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
            </div>
            <div className="flex-1">
              <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Tinggi</label>
              <input type="number" name="tinggi" min={0} value={tinggi} onChange={(e) => setTinggi((e.target.value))} placeholder="Cm" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
            </div>
          </div>

          <div className="flex gap-4 mt-2 sm:mt-3">
            <div className="flex-1 relative">
              <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Kata Sandi</label>
              <input type={showPassword ? "text" : "password"} name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Kata Sandi" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
              <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-1 top-7.5 sm:right-2 sm:top-8 md:right-4 md:top-13 text-lg text-[#781918] focus:outline-none" tabIndex={-1} aria-label={showPassword? "Sembunyikan password" : "Lihat password"}>
                {showPassword? <FaEyeSlash/>:<FaEye/>}
              </button>
            </div>
            <div className="flex-1 relative">
              <label className="text-[#FFFFFF] text-[13px] sm:text-[16px] md:text-[23px] font-semibold mb-1 block">Konfirmasi Sandi</label>
              <input type={showKonfirmasiPassword?"text":"password"} name="konfirmasiPassword" value={konfirmasiPassword} onChange={(e) => setkonfirmasiPassword(e.target.value)} placeholder="Konfirmasi Sandi" className="w-full h-[30px] md:h-[50px] px-3 py-2 rounded-[20px] md:rounded-[40px] text-gray-800 bg-[#D9D9D9]/80 border border-[#D9D9D9]/70 text-[11px] sm:text-[13px] md:text-[20px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"/>
              <button type="button" onClick={() => setShowKonfirmasiPassword((prev) => !prev)} className="absolute right-1 top-7.5 sm:right-2 sm:top-8 md:right-4 md:top-13 text-lg text-[#781918] focus:outline-none" tabIndex={-1} aria-label={showKonfirmasiPassword? "Sembunyikan konfirmasi password" : "Lihat konfirmasi password"}>
                {showKonfirmasiPassword? <FaEyeSlash/>:<FaEye/>}</button>
            </div>
          </div>
          <div className="flex mt-3 sm:mt-5 items-center text-[#FFFFFF]">
            <input type="checkbox" name="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="w-4 h-4 md:w-6 md:h-6 md:ml-2 md:mt-1"/>
            <span className="text-sm sm:text-[15px] md:text-[23px] text-left ml-2">Seluruh informasi telah sesuai</span>
          </div>
        </div>
        
        <div className="mt-7 md:mt-7">
          <button type="submit" className="w-[180px] md:w-[240px] h-[62px] md:h-[78px] py-2 mx-auto block rounded-md text-[18px] md:text-[25px] font-bold bg-[#D7FD00] text-[#860305] transition duration-200 active:scale-95 active:bg-opacity-80 active:bg-[#860305] active:text-[#D7FD00]">Daftar</button>
          <p className="mt-3 text-center text-[#FFFFFF] text-[13px] sm:text-[15px] md:text-[23px]">Sudah punya akun? <Link href={"/login"} className="text-[#D7FD00] duration-200 active:scale-95 active:bg-opacity-80 active:text-[#bfc200]">Masuk</Link></p>
        </div>
      </form>     
    </div>
  );
};

export default RegisterPage;
"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { TbGenderMale, TbGenderFemale } from "react-icons/tb";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const PilihanPage = () => {
  const [current, setCurrent] = useState(1);
  const router = useRouter();

  const Next = (e: React.FormEvent) => {
    e.preventDefault();
    if (current < 3) {
      setCurrent(current + 1);
    } else if (current === 3) {
      router.push("/login");
    }
  };
  const Prev = (e: React.FormEvent) => {
    e.preventDefault();
    if (current>1) setCurrent(current-1)};

  return (
    <div className={`${poppins.className} fixed inset-0 w-screen h-screen flex items-center justify-center bg-[url('/bg/bg3.png')] bg-cover bg-center`}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-0"></div>
      <div className="relative w-full mx-auto flex flex-col items-center justify-center">
        <div className="relative w-[340px] sm:w-[600px] md:w-[800px] min-h-[500px] bg-gradient-to-br from-[#D9D9D9]/2 to-[#000000]/2 bg-opacity-40 rounded-[20px] inner-shadow-lg p-10 border-2 border-[#ffffff]/10 shadow-[inset_50px_-20px_80px_5px_rgba(255,255,255,0.2)]">
          
          <div className="max-w-[300px] sm:max-w-[750px] h-[20px] mx-auto bg-[#D9D9D9]/10 rounded-full p-1">
            <div className="bg-[#9E1011] h-[10px] rounded-full" style={{ width:current===1 ? "30%" :current=== 2 ? "65%" : "100%" }}></div>
          </div>

          {current === 1 && (
            <form className="flex flex-col items-center" onSubmit={Next}>
              <Image src="/logo.svg" alt="logo" className="mb-1" width={120} height={120}/>
              <div className="flex gap-20 sm:gap-30 md:gap-50">
                <div className="flex flex-col items-center w-full">
                  <Image src="/images/pria.png" alt="pria" width={160} height={160}/>
                  <p className="text-[16px] md:text-[25px] font-bold text-center text-[#164a64]">Pria</p>
                </div>
                <div className="flex flex-col items-center w-full">
                  <Image src="/images/wanita.png" alt="wanita" width={160} height={160}/>
                  <p className="text-[16px] md:text-[25px] font-bold text-center text-[#860305]">Wanita</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <p className="font-semibold text-[13px] md:text-[23px] w w-full text-center mx-auto max-w-[270px] sm:max-w-[600px] text-[#FFFFFF]">Pilihlah jenis olahraga yang kamu latih berdasarkan jenis kelaminmu?</p>
                <div className="flex gap-10 sm:gap-50 md:gap-80 mt-3 justify-center">
                  <button type="button" className="flex flex-col items-center transition duration-150 active:scale-95">
                    <div className="bg-[#D9D9D9] rounded-[200px] flex items-center justify-center w-[80px] sm:w-[100px] h-[60px] sm:h-[70px] shadow-md relative mt-3 active:bg-[#D9D9D9]/60">
                      <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-[#181E2D] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"></div>
                      <div className="absolute left-[50%] top-[60%] -translate-x-[50%] -translate-y-[50%]">
                        <TbGenderMale size={30} color="#D97F3B"/>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="flex flex-col items-center transition duration-200 active:scale-95">
                    <div className="bg-[#D9D9D9] rounded-[200px] flex items-center justify-center w-[80px] sm:w-[100px] h-[60px] sm:h-[70px] shadow-md relative mt-3 active:bg-[#D9D9D9]/60 ">
                    <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-[#181E2D] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"></div>
                    <div className="absolute left-[50%] top-[55%] -translate-x-[50%] -translate-y-[50%]">
                        <TbGenderFemale size={30} color="#7B61FF"/>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          )}

          {current===2 && (
            <form className="flex flex-col items-center" onSubmit={Next}>
              <Image src="/logo.svg" alt="logo" className="mb-1" width={120} height={120}/>
              <div className="flex flex-col items-center justify-center mt-3">
                <p className="font-semibold text-[11px] sm:text-[16px] md:text-[23px] w-full text-center mx-auto max-w-[270px] sm:max-w-[600px] text-[#FFFFFF]">Sebelum berlatih tentukan tujuan latihanmu!</p>                
                <p className="font-semibold text-[14px] sm:text-[16px] md:text-[23px] w-full text-center mx-auto max-w-[270px] sm:max-w-[600px] text-[#FFFFFF]">Pilih salah satu dari ketiga pilihan ini?</p>                
                <div className="flex gap-8 sm:gap-15 md:gap-30 mt-10 sm:mt-5">
                  <div className="flex flex-col items-center w-full">
                      <Image src="/images/strength.svg" alt="kekuatan" width={200} height={200}/>
                      <p className="md:pt-3 text-[14px] md:text-[25px] font-bold text-center text-[#F07D5A]">Kekuatan</p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                      <Image src="/images/bulking.svg" alt="naik" width={200} height={200}/>
                      <p className="md:pt-3 text-[14px] md:text-[25px] font-bold text-center text-[#F07D5A]">Kenaikan</p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                      <Image src="/images/cutting.svg" alt="turun" width={200} height={200}/>
                      <p className="md:pt-3 text-[14px] md:text-[25px] font-bold text-center text-[#F07D5A]">Penurunan</p>
                  </div>
                </div>
                <div className="flex gap-10 sm:gap-33 md:gap-50 mt-5 sm:mt-12 md:mb-4 justify-center">
                  <div className="flex flex-col items-center w-full">
                    <button type="button" className="bg-[#D9D9D9] rounded-[100px] flex items-center justify-center w-[50px] sm:w-[65px] md:w-[80px] h-[50px] sm:h-[65px] md:h-[70px] shadow-md relative text-[#9E1011] text-[20px] font-bold transition duration-200 active:scale-95  active:bg-[#F07D5A]/80 active:text-[#D9D9D9]">1</button>
                  </div>
                  <div className="flex-1 flex-col items-center w-full">
                      <button type="button" className="bg-[#D9D9D9] rounded-[100px] flex items-center justify-center w-[50px] sm:w-[65px] md:w-[80px] h-[50px] sm:h-[65px] md:h-[70px]  shadow-md relative text-[#9E1011] text-[20px] font-bold transition duration-200 active:scale-95 active:bg-[#F07D5A]/80 active:text-[#D9D9D9]">2</button>
                  </div>
                  <div className="flex-1 flex-col items-center w-full">
                      <button type="button" className="bg-[#D9D9D9] rounded-[100px] flex items-center justify-center w-[50px] sm:w-[65px] md:w-[80px] h-[50px] sm:h-[65px] md:h-[70px] shadow-md relative text-[#9E1011] text-[20px] font-bold transition duration-200 active:scale-95 active:bg-[#F07D5A]/80 active:text-[#D9D9D9]">3</button>
                  </div>
                </div>
              </div>
            </form>
          )}

          {current===3 && (
            <form className="flex flex-col items-center">
              <Image src="/logo.svg" alt="logo" className="mb-1" width={120} height={120}/>
              <div className="flex flex-col items-center justify-center mt-3">
                <p className="font-semibold text-[14px] sm:text-[16px] md:text-[23px] w-full text-center mx-auto max-w-[270px] sm:max-w-[600px] text-[#FFFFFF]">Pilih metode latihan yang ingin kamu gunakan untuk membantu tujuan sesuai kemampuanmu!</p>     
                <div className="flex gap-2 sm:gap-10 mt-10 md:mt-18 md:mb-10 justify-center">
                  <div className="flex flex-col items-center w-full">
                      <button type="button" className="bg-gradient-to-br from-[#D9D9D9]/20 to-[#000000]/5 drop-shadow-[0_-1px_20px_rgba(187,155,255,0.15)] rounded-[20px] flex flex-col items-center justify-center w-[120px] sm:w-[200px] md:w-[280px] h-[180px] sm:h-[150px] md:h-[230px] shadow-md relative text-[#9E1011] font-bold transition duration-150 active:scale-95 active:bg-[#bdbdbd]/60">
                          <h2 className="text-l sm:text-2xl md:text-4xl pt-3 font-bold bg-gradient-to-b from-[#666666] to-[#D9D9D9] bg-clip-text text-transparent">Full Body</h2>
                          <p className="text-xs sm:text-[25px] text-[#be1313]">Split</p>
                          <div className="bg-[#D9D9D9] rounded-[100px] flex items-center mr-15 sm:mr-30 md:mr-40 justify-center w-[30px] md:w-[50px] h-[30px] md:h-[70px] shadow-md relative text-[#9E1011] text-[20px] font-bold mt-4 sm:mt-2">
                              <MdKeyboardDoubleArrowDown />
                          </div>
                      </button>
                  </div>
                  <div className="flex flex-col items-center w-full">
                      <button type="button" className="bg-gradient-to-br from-[#D9D9D9]/10 to-[#000000]/5 drop-shadow-[0_-1px_20px_rgba(187,155,255,0.15)] rounded-[20px] flex flex-col items-center justify-center w-[120px] sm:w-[200px] md:w-[280px] h-[180px] sm:h-[150px] md:h-[230px] shadow-md relative text-[#9E1011] font-bold transition duration-150 active:scale-95 active:bg-[#bdbdbd]/60">
                          <h2 className="text-l sm:text-2xl md:text-4xl pt-3 font-bold bg-gradient-to-b to-[#666666] from-[#D9D9D9] bg-clip-text text-transparent">Upper-Lower</h2>
                          <p className="text-xs sm:text-[25px] text-[#be1313]">Split</p>
                          <div className="bg-[#D9D9D9] rounded-[100px] flex items-center ml-15 sm:ml-30 md:ml-40 justify-center w-[30px] md:w-[50px] h-[30px] md:h-[70px] shadow-md relative text-[#9E1011] text-[20px] font-bold mt-4 sm:mt-2">
                              <MdKeyboardDoubleArrowDown />
                          </div>
                      </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="flex gap-25 sm:gap-50 md:gap-160 mt-3"> 
          <div className="flex w-full justify-start mt-4 sm:mt-15">
            {current > 1 ? (
              <button onClick={Prev} className="w-[120px] sm:w-[180px] md:w-[240px] h-[50px] sm:h-[62px] md:h-[78px] py-2 mx-auto block rounded-md text-[14px] sm:text-[18px] md:text-[25px] font-bold bg-[#D9D9D9] text-[#917A36] transition duration-150 active:scale-95 active:bg-opacity-40 active:bg-[#bfc200]">Sebelumnya</button>) : (
              <div className="w-[120px] sm:w-[180px] h-[50px] sm:h-[62px]" />)}
          </div>
          <div className="flex w-full justify-end mt-4 sm:mt-15">
            {current <= 3 ? (
              <button onClick={Next} className="w-[120px] sm:w-[180px] md:w-[240px] h-[50px] sm:h-[62px] md:h-[78px] py-2 mx-auto block rounded-md text-[14px] sm:text-[18px] md:text-[25px] font-bold bg-[#D9D9D9] text-[#917A36] transition duration-150 active:scale-95 active:bg-opacity-40 active:bg-[#bfc200]">Selanjutnya</button>) : (
              <div className="w-[120px] sm:w-[180px] h-[50px] sm:h-[62px]" />)}
          </div>
        </div>
      </div>
    </div>
  )
};
export default PilihanPage;
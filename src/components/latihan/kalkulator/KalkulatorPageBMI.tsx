import { IoIosFemale, IoIosMale } from "react-icons/io";
const KalkulatorPageBMI = ({ className }: { className: string }) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-center items-center w-full gap-4 md:gap-8 ${className}`}>
      <div className="mx-0 md:mx-4 border-none rounded-2xl my-4 md:my-5 bg-abutua w-full lg:w-1/2">
        <div className="text-center my-4 px-2">
          <h1 className="text-2xl md:text-[32px] font-semibold">BMI</h1>
          <p className="text-sm md:text-[16px] mx-2 md:mx-4 text-abu-abu">Ingin tahu apakah berat badan Anda ideal? Masukkan tinggi dan berat badan untuk cek BMI</p>
        </div>

        <div className="flex flex-col justify-center my-4 md:my-6 items-center px-4">
          <div className="w-full max-w-[340px]">
            <h2 className="text-lg md:text-[20px] text-white font-semibold mb-3">Jenis Kelamin</h2>
            <div className="flex relative bg-white rounded-3xl w-full max-w-[340px] h-12 md:h-[48px]">
              <div className="absolute left-2 top-1 hover:bg-teal-500/70 rounded-3xl w-[165px] h-[40px] py-2">
                <button className="cursor-pointer text-sm md:text-[16px] font-semibold flex px-10 items-center gap-1">
                  <IoIosMale size={20} className="text-iconMale" />
                  <span className="text-abutua">Pria</span>
                </button>
              </div>
              <div className="absolute right-2 rounded-3xl hover:bg-teal-500/70 w-[165px] h-[40px]  py-2 top-1">
                <button className="cursor-pointer text-sm md:text-[16px] font-semibold flex items-center px-10 gap-1">
                  <IoIosFemale size={20} className="text-iconFemale" />
                  <span className="text-abutua">Wanita</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[340px] mt-4">
            <h2 className="text-lg md:text-[20px] text-white font-semibold mb-3">Umur</h2>
            <input type="text" name="umur" placeholder="Tahun" className="bg-white placeholder:text-right placeholder:mr-2 md:placeholder:mr-5 text-black rounded-3xl w-full h-12 md:h-[48px] px-4" />
          </div>
          <div className="flex flex-col sm:flex-row w-full max-w-[340px] gap-2 mt-4">
            <div className="w-full sm:w-1/2">
              <h2 className="text-lg md:text-[20px] text-white font-semibold mb-3">Berat(kg)</h2>
              <input type="text" placeholder="Kg" className="bg-white placeholder:text-right text-black rounded-3xl w-full h-12 md:h-[48px] px-4" />
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-lg md:text-[20px] text-white font-semibold mb-3">Tinggi(cm)</h2>
              <input type="text" placeholder="cm" className="bg-white placeholder:text-right text-black rounded-3xl w-full h-12 md:h-[48px] px-4" />
            </div>
          </div>
          <div className="w-full max-w-[180px] h-14 md:h-[62px] mt-4 md:mt-7">
            <button className="bg-submit/70 px-6 md:px-10 py-2 md:py-4 rounded-4xl w-full h-full transition- duration-300 ease-in-out hover:bg-submit hover:scale-105 cursor-pointer text-sm md:text-base">HITUNG</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-64 md:h-auto bg-black/30 rounded-2xl p-4 flex items-center justify-center">
        <p className="text-white">GRAFIK</p>
      </div>
    </div>
  );
};

export default KalkulatorPageBMI;

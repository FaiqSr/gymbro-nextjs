import { IoMdMale, IoMdFemale } from "react-icons/io";

const KalkulatorPageIDAI = ({ className }: { className: string }) => {
  return (
    <div className={`flex flex-col xl:flex-row gap-4 w-full bg-abutua px-3 rounded-3xl  ${className}`}>
      <div className="xl:block hidden w-full lg:w-[580px] h-[558px] xl:h-[628px] my-4 mx-auto bg-black/30 rounded-2xl p-4 ">
        <p className="text-white">GRAFIK</p>
      </div>
      <div className="border-none rounded-2xl my-4 lg:w-[620px] lg:h-[628px] max-w-full mx-auto h-[558px]  px-4">
        <div className="text-center my-4 px-2 lg:px-6">
          <h1 className="text-[28px] font-semibold lg:text-3xl">BMI</h1>
          <p className="text-sm lg:text-[15px] sm:text-[16px] lg:text-center text-abu-abu">Ingin tahu berapa tinggi badan genetik anda? Masukkan tinggi orangtua di kalkulator IDAI!</p>
        </div>

        <div className="flex flex-col justify-center my-4 items-center">
          <div className="w-full max-w-full lg:max-w-[460px] border-none">
            <h2 className="text-sm  text-white font-semibold mb-3 lg:text-[18px]">Jenis Kelamin</h2>
            <div className="flex  bg-white rounded-3xl w-full h-[33px] lg:w-full lg:h-[39px]">
              <div className=" cursor-pointer hover:bg-teal-500/70 rounded-3xl  pt-1 lg:py-2 w-1/2 lg:pl-3">
                <button className="cursor-pointer text-sm  font-semibold flex gap-2 pl-6 items-center">
                  <IoMdMale size={25} className="text-iconMale" />
                  <span className="text-abutua lg:text-xl text-[15px]">Pria</span>
                </button>
              </div>
              <div className=" cursor-pointer rounded-3xl hover:bg-teal-500/70 pt-1 lg:py-2 w-1/2">
                <button className="cursor-pointer text-sm  font-semibold flex gap-2 items-center pl-6 lg:pl-3">
                  <IoMdFemale size={25} className="text-iconFemale" />
                  <span className="text-abutua lg:text-xl text-lg text-[15px]">Wanita</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full lg:max-w-[460px]  lg:mt-4 mt-3">
            <h2 className="text-sm  text-white font-semibold mb-3 lg:text-[18px]">Umur</h2>
            <input type="number" name="umur" placeholder="Tahun" className="bg-white placeholder:text-right  text-black rounded-3xl w-full h-[33px] lg:h-[39px] lg:w-full px-4 lg:text-lg text-[15px]" />
          </div>
          <div className="flex flex-col  w-full max-w-full xl:flex-col lg:max-w-[460px] gap-2 ">
            <div className="w-full mt-3 lg:mt-4">
              <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">Ayah(Cm)</h2>
              <input type="number" placeholder="cm" className="text-sm   bg-white placeholder:text-right  text-black rounded-3xl w-full h-[33px] lg:w-full lg:h-[39px] px-4 lg:text-lg text-[15px]" />
            </div>
            <div className="w-full mt-3 lg:mt-4">
              <h2 className="text-sm text-white font-semibold mb-3 lg:text-[18px]">Ibu(cm)</h2>
              <input type="number" placeholder="cm" className="bg-white  text-sm placeholder:text-right text-black rounded-3xl w-full h-[33px] lg:w-full lg:h-[39px]  px-4 lg:text-lg text-[15px]" />
            </div>
          </div>
          <div className=" h-[38px] my-8 max-w-full w-full lg:max-w-[460px] lg:mt-10">
            <button className="bg-submit/70 px-7 rounded-4xl lg:w-full h-full transition-duration-300 ease-in-out hover:bg-submit hover:scale-105 cursor-pointer  text-[16px] w-full">HITUNG</button>
          </div>
        </div>
      </div>
      <div className="xl:hidden block w-full lg:w-[580px] h-[558px] xl:h-[628px] my-4 mx-auto bg-black/30 rounded-2xl p-4 ">
        <p className="text-white">GRAFIK</p>
      </div>
    </div>
  );
};

export default KalkulatorPageIDAI;

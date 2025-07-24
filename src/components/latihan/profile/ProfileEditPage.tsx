import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const ProfileEditPage = ({ onCancel }: { onCancel: () => void }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-0 max-w-[999px] lg:ml-20 xl:ml-72 h-auto min-h-[500px] md:min-h-[600px] lg:h-[742px] bg-black/60 rounded-xl lg:rounded-3xl mx-auto my-6 md:my-5 lg:my-8 px-4 md:px-6 lg:px-8 pt-4 pb-6 md:pt-6 mb-36">
        <div className="flex flex-col gap-4 md:gap-6 p-5 xl:mt-5 md:p-5 lg:rounded-r-none rounded-3xl w-full lg:w-1/2 bg-abu-abu/25">
          <h1 className="font-semibold text-2xl md:text-[32px] text-center">Nama Lengkap</h1>
          <div className="mx-auto">
            <Image src="" width={240} height={240} alt="Random Image" className="rounded-full border-4 md:border-5 border-coklat w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80" />
          </div>
          <h2 className="font-semibold text-lg md:text-[20px] lg:pl-3">Upload Foto</h2>
          <div className="w-full flex gap-4">
            <div className="w-3/4 h-[30px] bg-black/50 rounded-3xl"></div>
            <button className="w-1/4">
              <IoIosArrowDown size={30} className="bg-black/50 rounded-2xl cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="lg:rounded-l-none rounded-3xl xl:mt-5 w-full lg:w-1/2 bg-abu-abu/25">
          <div className="flex flex-col p-4 md:p-6 gap-3 md:gap-4">
            <div className="flex justify-between items-center mb-2 md:mb-4">
              <h1 className="text-lg md:text-[20px] font-semibold">Informasi Pribadi</h1>
              <button className="text-coklat font-semibold text-[16px] hover:underline cursor-pointer" onClick={onCancel}>
                Batal
              </button>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="w-full">
                <h2 className="font-semibold text-sm md:text-[15px] text-abu mb-1">Nama Depan</h2>
                <input type="text" className="w-full bg-black/50 rounded-xl md:rounded-2xl py-2 px-3 text-sm md:text-base" />
              </div>
              <div className="w-full">
                <h2 className="font-semibold text-sm md:text-[15px] text-abu mb-1">Nama Belakang</h2>
                <input type="text" className="w-full bg-black/50 rounded-xl md:rounded-2xl py-2 px-3 text-sm md:text-base" />
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="w-full">
                <h2 className="font-semibold text-sm md:text-[15px] text-abu mb-1">Tanggal Lahir</h2>
                <div className="flex gap-2 md:gap-3">
                  <input type="text" placeholder="DD" className="w-full bg-black/50 rounded-xl placeholder:text-sm  md:rounded-2xl py-2 px-3 text-sm md:text-base" />
                  <input type="text" placeholder="MM" className="w-full bg-black/50 rounded-xl placeholder:text-sm md:rounded-2xl py-2 px-3 text-sm md:text-base" />
                  <input type="text" placeholder="YYYY" className="w-full bg-black/50 rounded-xl md:rounded-2xl py-2 px-3  placeholder:text-sm text-sm md:text-base" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="font-semibold text-sm md:text-[15px] text-abu mb-1">Email</h2>
              <input type="email" className="bg-black/50 rounded-xl md:rounded-2xl w-full py-2 px-3 text-sm md:text-base" />
            </div>

            <div className="w-full">
              <h2 className="font-semibold text-sm md:text-[15px] text-abu mb-1">Nama Pengguna</h2>
              <input type="text" className="bg-black/50 rounded-xl md:rounded-2xl w-full py-2 px-3 text-sm md:text-base" />
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="w-full md:w-1/2">
                <h2 className="font-semibold text-sm md:text-[15px] text-abu mb-1">Jenis Kelamin</h2>
                <select className="bg-black/50 rounded-xl md:rounded-2xl w-full py-2 px-3 text-sm md:text-base">
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 flex gap-2 md:gap-3">
                <div className="w-1/2">
                  <h2 className="font-semibold text-sm md:text-[15px] text-abu mb-1">Berat (kg)</h2>
                  <input type="number" className="bg-black/50 rounded-xl md:rounded-2xl w-full py-2 px-3 text-sm md:text-base" />
                </div>
                <div className="w-1/2">
                  <h2 className="font-semibold text-sm md:text-[15px] text-abu mb-1">Tinggi (cm)</h2>
                  <input type="number" className="bg-black/50 rounded-xl md:rounded-2xl w-full py-2 px-3 text-sm md:text-base" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-5 py-4 md:px-6 mb-4 flex justify-end lg:mt-10">
            <button className="rounded-xl md:rounded-2xl py-2 border px-9 hover:ring-2 hover:ring-white hover:transition-transform hover:scale-x-105 hover:duration-300 text-slate-900 bg-abu cursor-pointer hover:text-abutua font-semibold text-sm md:text-base">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditPage;

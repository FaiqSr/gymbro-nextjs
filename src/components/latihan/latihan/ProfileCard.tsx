import { IoMdMale, IoMdFemale } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Profil Anda</h3>

      <div className="space-y-3">
        <button className="w-full group flex items-center gap-4 p-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30">
          <div className="text-2xl text-white">
            <IoMdMale />
          </div>
          <span className="text-white font-semibold flex-1 text-left">
            Pria
          </span>
          <IoIosArrowForward className="text-white group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="w-full group flex items-center gap-4 p-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all duration-300">
          <div className="text-2xl text-gray-400">
            <IoMdFemale />
          </div>
          <span className="text-gray-300 font-semibold flex-1 text-left">
            Wanita
          </span>
          <IoIosArrowForward className="text-gray-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

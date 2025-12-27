import { IoIosArrowDown } from "react-icons/io";

export default function NotificationCard() {
  return (
    <div className="group bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-6 hover:border-red-500/70 transition-all duration-300 backdrop-blur-xl cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-gray-200 font-semibold">Notifikasi Penting</p>
          </div>
          <p className="text-gray-400 text-sm">
            Jangan lupa minum air dan istirahat yang cukup selama latihan
          </p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition-all duration-300 group-hover:scale-110">
          <IoIosArrowDown size={20} />
        </button>
      </div>
    </div>
  );
}

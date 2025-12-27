import { IoIosArrowForward } from "react-icons/io";

export default function TrainerCTA() {
  return (
    <div className="mt-16 p-8 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 rounded-2xl border border-red-500/30 text-center backdrop-blur-xl group">
      <h3 className="text-2xl font-bold text-white mb-3">
        Butuh Bantuan Memilih Program?
      </h3>
      <p className="text-gray-300 mb-6">
        Konsultasikan dengan trainer profesional kami untuk program yang lebih
        personal
      </p>
      <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 inline-flex items-center gap-2 group/btn">
        <span>Chat dengan Trainer</span>
        <IoIosArrowForward className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

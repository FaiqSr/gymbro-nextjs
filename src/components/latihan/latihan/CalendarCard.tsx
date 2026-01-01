export default function CalendarCard() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Jadwal Latihan</h3>

      <div className="bg-slate-700/50 rounded-xl p-4 mb-4">
        <p className="text-sm text-gray-400 mb-3">Desember 2025</p>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, idx) => {
            const day = idx - 3;
            const isCurrentDay = day === 28;
            return (
              <button
                key={idx}
                className={`aspect-square rounded-lg font-semibold text-sm transition-all ${
                  day > 0 && day <= 31
                    ? isCurrentDay
                      ? "bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-500/30"
                      : "text-gray-400 hover:bg-slate-600 hover:text-white"
                    : "text-transparent"
                }`}
              >
                {day > 0 && day <= 31 ? day : ""}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          <span>Hari ini</span>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30">
          Lihat Jadwal Lengkap
        </button>
      </div>
    </div>
  );
}

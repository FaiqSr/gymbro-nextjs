interface ActivityChartProps {
  weekData: number[];
}

export default function ActivityChart({ weekData }: ActivityChartProps) {
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Aktivitas Minggu Ini
        </h3>
        <p className="text-gray-400 text-sm">
          Grafik progres latihan harian Anda
        </p>
      </div>

      <div className="flex items-end justify-between h-48 gap-2 mb-4">
        {weekData.map((height, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-gradient-to-t from-red-600 to-orange-500 rounded-t-lg transition-all duration-300 hover:from-red-500 hover:to-orange-400 cursor-pointer"
              style={{ height: `${height}px` }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{days[idx]}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-400 pt-4 border-t border-slate-700">
        <span>Total Latihan: 24 jam</span>
        <span className="text-green-400">↑ 15% dari minggu lalu</span>
      </div>
    </div>
  );
}

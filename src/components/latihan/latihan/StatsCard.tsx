import { IoIosArrowForward } from "react-icons/io";
import { Stats } from "@/types/latihan";

interface StatsCardProps {
  stats: Stats[];
}

export default function StatsCard({ stats }: StatsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`${stat.color} text-2xl p-3 bg-slate-700/50 rounded-xl group-hover:scale-110 transition-transform`}
              >
                <Icon />
              </div>
              <IoIosArrowForward className="text-gray-500 group-hover:text-red-500 transition-colors" />
            </div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-white text-2xl font-bold">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}

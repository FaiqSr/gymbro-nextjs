import { RecentWorkouts } from "@/types/latihan";
import { FaDumbbell } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

interface RecentWorkoutsProps {
  workouts: RecentWorkouts[];
}

export default function RecentWorkoutsCard({ workouts }: RecentWorkoutsProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Latihan Terakhir</h3>
      <div className="space-y-3">
        {workouts.map((workout, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/60 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaDumbbell className="text-white text-lg" />
              </div>
              <div>
                <p className="text-white font-semibold">{workout.name}</p>
                <p className="text-gray-400 text-sm">{workout.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  workout.intensity === "Tinggi"
                    ? "bg-red-500/30 text-red-300"
                    : "bg-orange-500/30 text-orange-300"
                }`}
              >
                {workout.intensity}
              </span>
              <IoIosArrowForward className="text-gray-400 group-hover:text-red-500 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

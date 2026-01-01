import { IoIosArrowForward } from "react-icons/io";
import { Exercise } from "@/types/latihan";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const Icon = exercise.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/30 border border-slate-700 hover:border-red-500/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${exercise.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
      <div className="relative z-10">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exercise.color} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}
        >
          <Icon className="text-white text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
          {exercise.name}
        </h3>
        <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors">
          {exercise.description}
        </p>
        <button className="flex items-center gap-2 text-red-500 font-semibold group-hover:gap-4 transition-all duration-300 hover:text-red-400">
          <span>Mulai</span>
          <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}

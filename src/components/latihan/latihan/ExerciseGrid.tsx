import { Exercise } from "@/types/latihan";
import ExerciseCard from "./ExerciseCard";

interface ExerciseGridProps {
  exercises: Exercise[];
}

export default function ExerciseGrid({ exercises }: ExerciseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

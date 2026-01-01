import { exercises } from "@/constant/latihan";
import SectionHeader from "./SectionHeader";
import ExerciseGrid from "./ExerciseGrid";
import TrainerCTA from "./TrainerCTA";

const LatihanMulaiPage = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-black via-slate-950 to-black py-16">
        <div className="px-4 lg:px-8 xl:px-12">
          <SectionHeader />
          <ExerciseGrid exercises={exercises} />
          <TrainerCTA />
        </div>
      </section>
    </>
  );
};

export default LatihanMulaiPage;

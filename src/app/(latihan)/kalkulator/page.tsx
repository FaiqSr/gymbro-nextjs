import KalkulatorContainer from "@/components/latihan/kalkulator/KalkulatorContainer";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const page = () => {
  return (
    <>
      <section
        className={`w-full min-h-screen dark:bg-gradient-to-br dark:from-black dark:via-red-700 dark:to-black ${poppins.className}`}
      >
        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center lg:text-left mb-8">
            <h1 className="text-3xl sm:text-4xl text-red-600 font-semibold">
              Kalkulator
            </h1>
            <p className="text-base sm:text-lg text-abu font-medium mt-1">
              Perhitungan perkiraan badan ideal dan tinggi badan
            </p>
          </div>

          <KalkulatorContainer />
        </div>
      </section>
    </>
  );
};

export default page;

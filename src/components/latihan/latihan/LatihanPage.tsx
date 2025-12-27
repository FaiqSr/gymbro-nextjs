import { Poppins } from "next/font/google";
import LatihanMulaiPage from "./LatihanMulaiPage";
import LatihanHeader from "./LatihanHeader";
import StatsCard from "./StatsCard";
import NotificationCard from "./NotificationCard";
import ActivityChart from "./ActivityChart";
import RecentWorkoutsCard from "./RecentWorkoutsCard";
import ProfileCard from "./ProfileCard";
import CalendarCard from "./CalendarCard";
import { stats, recentWorkouts } from "@/constant/latihan";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LatihanPage = () => {
  const weekActivityData = [65, 85, 72, 90, 78, 88, 95];

  return (
    <>
      <section
        className={`w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black ${poppins.className}`}
      >
        <div className="relative overflow-hidden pt-8 pb-12">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
          </div>

          <div className="relative px-4 lg:px-8 xl:px-12">
            <LatihanHeader
              title="Dashboard"
              subtitle="Halo ganteng! Mari tingkatkan kebugaran mu hari ini"
              date="28 Des 2025"
            />
            <StatsCard stats={stats} />
          </div>
        </div>

        <div className="px-4 lg:px-8 xl:px-12 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <NotificationCard />
              <ActivityChart weekData={weekActivityData} />
              <RecentWorkoutsCard workouts={recentWorkouts} />
            </div>

            <div className="space-y-6">
              <ProfileCard />
              <CalendarCard />
            </div>
          </div>
        </div>

        <LatihanMulaiPage />
      </section>
    </>
  );
};

export default LatihanPage;

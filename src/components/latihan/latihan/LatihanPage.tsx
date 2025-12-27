"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import LatihanMulaiPage from "./LatihanMulaiPage";
import LatihanHeader from "./LatihanHeader";
import StatsCard from "./StatsCard";
import NotificationCard from "./NotificationCard";
import ActivityChart from "./ActivityChart";
import RecentWorkoutsCard from "./RecentWorkoutsCard";
import ProfileCard from "./ProfileCard";
import CalendarCard from "./CalendarCard";
import { stats, recentWorkouts } from "@/constant/latihan";
import {
  fadeIn,
  containerVariants,
  itemVariants,
} from "@/lib/animations/variants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LatihanPage = () => {
  const weekActivityData = [65, 85, 72, 90, 78, 88, 95];

  return (
    <>
      <motion.section
        className={`w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black ${poppins.className}`}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="relative overflow-hidden pt-8 pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
          </div>

          <motion.div
            className="relative px-4 lg:px-8 xl:px-12"
            variants={itemVariants}
          >
            <LatihanHeader
              title="Dashboard"
              subtitle="Halo ganteng! Mari tingkatkan kebugaran mu hari ini"
              date="28 Des 2025"
            />
            <StatsCard stats={stats} />
          </motion.div>
        </motion.div>

        <motion.div
          className="px-4 lg:px-8 xl:px-12 pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2 space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <NotificationCard />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ActivityChart weekData={weekActivityData} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <RecentWorkoutsCard workouts={recentWorkouts} />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <ProfileCard />
              </motion.div>
              <motion.div variants={itemVariants}>
                <CalendarCard />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <LatihanMulaiPage />
      </motion.section>
    </>
  );
};

export default LatihanPage;

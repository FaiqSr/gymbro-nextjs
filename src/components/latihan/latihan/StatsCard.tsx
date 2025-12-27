"use client";

import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Stats } from "@/types/latihan";
import {
  containerVariants,
  itemVariants,
  hoverScale,
} from "@/lib/animations/variants";

interface StatsCardProps {
  stats: Stats[];
}

export default function StatsCard({ stats }: StatsCardProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={idx}
            variants={itemVariants}
            {...hoverScale}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className={`${stat.color} text-2xl p-3 bg-slate-700/50 rounded-xl`}
                whileHover={{ scale: 1.1 }}
              >
                <Icon />
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <IoIosArrowForward className="text-gray-500 group-hover:text-red-500 transition-colors" />
              </motion.div>
            </div>
            <motion.p
              className="text-gray-400 text-sm mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {stat.label}
            </motion.p>
            <motion.p
              className="text-white text-2xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {stat.value}
            </motion.p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

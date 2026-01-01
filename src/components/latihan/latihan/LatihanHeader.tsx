"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations/variants";

interface HeaderProps {
  title: string;
  subtitle: string;
  date: string;
}

export default function LatihanHeader({ title, subtitle, date }: HeaderProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8"
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {title} <span className="text-red-500">Latihan</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
      <motion.div
        className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-xl px-6 py-3 rounded-full border border-slate-700"
        variants={slideInFromRight}
        initial="hidden"
        animate="visible"
      >
        <span className="text-gray-300 font-medium">Hari ini:</span>
        <motion.span
          className="text-white font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {date}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

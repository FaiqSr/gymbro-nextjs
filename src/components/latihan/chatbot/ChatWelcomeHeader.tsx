"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromBottom } from "@/lib/animations/variants";

interface ChatWelcomeHeaderProps {
  title: string;
  subtitle: string;
}

export default function ChatWelcomeHeader({
  title,
  subtitle,
}: ChatWelcomeHeaderProps) {
  return (
    <motion.div
      className="mb-8 mt-4 w-full mx-auto text-center max-w-2xl"
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-6 flex justify-center"></div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r py-2 from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg md:text-xl px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}

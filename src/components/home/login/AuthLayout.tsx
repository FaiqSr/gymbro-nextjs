"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { fadeIn, slideInFromBottom } from "@/lib/animations/variants";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-8 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="w-full max-w-md relative z-10"
        variants={slideInFromBottom}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src="/images/Logo.png"
            width={180}
            height={90}
            alt="Logo"
            className="drop-shadow-lg"
          />
        </motion.div>

        {children}
      </motion.div>
    </motion.div>
  );
}

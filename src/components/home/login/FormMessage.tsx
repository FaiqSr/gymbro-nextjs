"use client";

import { motion } from "framer-motion";
import React from "react";

interface FormMessageProps {
  message: string;
  type: "error" | "success";
}

export default function FormMessage({ message, type }: FormMessageProps) {
  const isError = type === "error";

  return (
    <motion.div
      className={`px-4 py-3 rounded-xl mb-6 text-sm border ${
        isError
          ? "bg-red-500/20 border-red-500/50 text-red-300"
          : "bg-green-500/20 border-green-500/50 text-green-300"
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p>{message}</p>
    </motion.div>
  );
}

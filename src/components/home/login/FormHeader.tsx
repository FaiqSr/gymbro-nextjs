"use client";

import { motion } from "framer-motion";
import React from "react";

interface FormHeaderProps {
  title: string;
  subtitle: string;
}

export default function FormHeader({ title, subtitle }: FormHeaderProps) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import React from "react";

interface FormSubmitButtonProps {
  isLoading: boolean;
  text: string;
  loadingText: string;
  icon?: React.ReactNode;
}

export default function FormSubmitButton({
  isLoading,
  text,
  loadingText,
  icon,
}: FormSubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-3 rounded-xl transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mb-6"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
    >
      {isLoading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
          {loadingText}
        </>
      ) : (
        <>
          {text}
          {icon && (
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {icon}
            </motion.div>
          )}
        </>
      )}
    </motion.button>
  );
}

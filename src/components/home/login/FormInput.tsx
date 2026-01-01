"use client";

import { motion } from "framer-motion";
import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  delay?: number;
  showToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  icon?: React.ReactNode;
}

export default function FormInput({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  delay = 0,
  showToggle = false,
  showPassword = false,
  onTogglePassword,
  icon,
}: FormInputProps) {
  return (
    <motion.div
      className={showToggle ? "mb-5" : "mb-6"}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <label
        htmlFor={id}
        className="block text-gray-300 font-semibold mb-3 text-sm"
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={showToggle ? (showPassword ? "text" : "password") : type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300"
        />

        {showToggle && icon && (
          <motion.button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

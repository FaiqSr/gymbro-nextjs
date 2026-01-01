"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface FormFooterProps {
  question: string;
  linkText: string;
  linkHref: string;
  termsText?: string;
}

export default function FormFooter({
  question,
  linkText,
  linkHref,
  termsText,
}: FormFooterProps) {
  return (
    <>
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-400 text-sm">
          {question}{" "}
          <Link
            href={linkHref}
            className="text-red-500 hover:text-red-400 font-semibold transition-colors"
          >
            {linkText}
          </Link>
        </p>
      </motion.div>

      {termsText && (
        <motion.p
          className="text-center text-gray-500 text-xs mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          {termsText}{" "}
          <Link href="#" className="text-red-500 hover:underline">
            Syarat & Ketentuan
          </Link>
        </motion.p>
      )}
    </>
  );
}

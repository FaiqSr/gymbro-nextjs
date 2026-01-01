"use client";
import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

import AuthLayout from "./AuthLayout";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormMessage from "./FormMessage";
import FormSubmitButton from "./FormSubmitButton";
import FormFooter from "./FormFooter";

import { LOGIN_CONFIG, FORM_FIELDS, ROUTES } from "@/constant/auth";

const LoginForm: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  return (
    <AuthLayout>
      <motion.form
        className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FormHeader
          title={LOGIN_CONFIG.title}
          subtitle={LOGIN_CONFIG.subtitle}
        />

        {error && <FormMessage message={error} type="error" />}

        <FormInput
          id="usernameOrEmail"
          label={FORM_FIELDS.login[0].label}
          type={FORM_FIELDS.login[0].type}
          placeholder={FORM_FIELDS.login[0].placeholder}
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          required
          delay={FORM_FIELDS.login[0].delay}
        />

        <FormInput
          id="password"
          label={FORM_FIELDS.login[1].label}
          type={FORM_FIELDS.login[1].type}
          placeholder={FORM_FIELDS.login[1].placeholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          delay={FORM_FIELDS.login[1].delay}
          showToggle={FORM_FIELDS.login[1].hasToggle}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          icon={showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        />

        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              id="ingat"
              name="ingat"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-slate-600 bg-slate-700/50 cursor-pointer accent-red-500"
            />
            <label
              htmlFor="ingat"
              className="ml-2 text-gray-400 text-sm cursor-pointer"
            >
              Ingat saya
            </label>
          </div>
          <a
            href={ROUTES.resetPassword}
            className="text-red-500 hover:text-red-400 text-sm font-semibold transition-colors"
          >
            Lupa password?
          </a>
        </motion.div>

        <FormSubmitButton
          isLoading={isLoading}
          text={LOGIN_CONFIG.submitText}
          loadingText={LOGIN_CONFIG.loadingText}
          icon={<IoIosArrowForward size={20} />}
        />

        <motion.div
          className="my-6 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-700"></div>
          <p className="text-gray-500 text-xs">atau</p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-700"></div>
        </motion.div>

        <FormFooter
          question="Belum punya akun?"
          linkText="Daftar sekarang"
          linkHref={ROUTES.register}
          termsText="Dengan masuk, Anda setuju dengan"
        />
      </motion.form>
    </AuthLayout>
  );
};

export default LoginForm;

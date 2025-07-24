"use client";
import Link from "next/link";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ApiError {
  message: string;
}

const LoginForm: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/user/login", {
        usernameOrEmail,
        password,
      });

      const { token } = response.data.data;
      console.log("Login berhasil! Token:", token);

      localStorage.setItem("authToken", token);
      router.push("/latihan");
    } catch (err) {
      let errorMessage =
        "Login gagal. Periksa kembali username dan password Anda.";

      if (axios.isAxiosError(err)) {
        const serverError = err.response?.data as ApiError;
        if (serverError?.message) {
          errorMessage = serverError.message;
        }
      }

      console.error("Login gagal:", err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <section>
        <Image src="/images/Logo.png" width={200} height={100} alt="Logo" />
      </section>

      <section className="border-2 w-96 h-fit px-10 text-center bg-white/50 rounded-lg py-4 pb-8 border-white">
        <h1 className="text-2xl font-bold pt-2 pb-5">Sign In</h1>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg relative mt-4 text-start">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <div className="flex flex-col text-start py-3">
          <label
            htmlFor="usernameOrEmail"
            className="mb-2 text-white font-semibold"
          >
            Username or Email
          </label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={usernameOrEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsernameOrEmail(e.target.value)
            }
            className="bg-slate-200 rounded-lg px-2 py-1"
            required
          />
        </div>

        <div className="flex flex-col text-start py-3">
          <label htmlFor="password" className="my-2 text-white font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="bg-slate-200 rounded-lg px-2 py-2"
            required
          />
        </div>

        <div className="text-end py-2">
          <p className="font-semibold">
            Lupa password?{" "}
            <Link href={"/reset"} className="text-kuning">
              reset
            </Link>
          </p>
        </div>

        <div className="text-start">
          <input
            type="checkbox"
            id="ingat"
            name="ingat"
            checked={rememberMe}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRememberMe(e.target.checked)
            }
          />
          <label htmlFor="ingat" className="ml-2">
            Ingat saya?
          </label>
        </div>
      </section>

      <section className="mt-5">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-kuning px-5 py-2 rounded-lg w-40 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </section>

      <section className="mt-5">
        <p className="text-white font-semibold">
          Belum punya akun?{" "}
          <Link href={`/register`} className="text-kuning">
            Daftar
          </Link>
        </p>
      </section>
    </form>
  );
};

export default LoginForm;

"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="fixed bottom-35 lg:bottom-5 right-2 border-2 rounded-full p-2 hover:cursor-pointer z-50">
      {theme === "dark" ? <CiLight size={30} /> : <CiDark size={30} />}
    </button>
  );
}

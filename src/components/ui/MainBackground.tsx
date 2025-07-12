"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const MainBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-[url(/images/gymBg.png)]" : "bg-white"
      } bg-no-repeat w-full `}
    ></div>
  );
};

export default MainBackground;

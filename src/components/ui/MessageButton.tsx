"use client";
import React, { useEffect, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";

const MessageButton = () => {
  const [mount, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mount) return null;

  return (
    <button
      onClick={() => console.log("hehe")}
      className="fixed bottom-10 right-20 p-2 border rounded-full hover:cursor-pointer"
    >
      <FiMessageCircle />
    </button>
  );
};

export default MessageButton;

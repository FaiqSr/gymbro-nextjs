"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ApiImageProfile = {
  data: string;
};

const ImageProfile = () => {
  const [datas, setImageUrl] = useState<string>();
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch("http://localhost:3001/api/");
      const data: ApiImageProfile = await response.json();
      setImageUrl(data.data);
    };
    fetching();
  });
  return <Image src={datas as string} alt="test" width={300} height={300} className="rounded-full"></Image>;
};

export default ImageProfile;

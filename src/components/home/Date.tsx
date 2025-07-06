"use client";
import React, { useEffect, useState } from "react";

const Date = () => {
  const [data, setData] = useState("");
  console.log(data);

  useEffect(() => {
    console.log("kocak");
  }, [data]);

  return (
    <>
      <header className="mx-auto">
        <div className="container pl-8">
          <h1>JADWAL FOR UPPER and LOWER</h1>
          <data className="flex flex-wrap">
            <div className="px-2">
              <h2>SENIN</h2>
              <li>Bench Press</li>
              <li>Lat Pulldown</li>
              <li>Incline Press</li>
              <li>Cable Rowing</li>
            </div>
            <div className="px-2">
              <h2>SELASA</h2>
              <li>Squat</li>
              <li>Bulgarian Squat</li>
              <li>RDL</li>
              <li>Abs</li>
            </div>
            <div className="">
              <h2>RABU</h2>
              <li>REST DAY</li>
            </div>
          </data>
        </div>
      </header>
      <button onClick={() => setData("kocaksa")} className="cursor-pointer">
        test
      </button>
    </>
  );
};

export default Date;

"use client";
import ProfileEditPage from "./ProfileEditPage";
import ProfilePage from "./ProfilePage";
import { useState } from "react";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const ProfileContainer = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <section className={`w-full h-full dark:bg-gradient-to-br dark:from-black dark:via-red-950 dark:to-black ${poppins.className}`}>
        <div className="my-6 md:my-8 lg:my-12 mx-4 lg:mx-15 lg:ml-20 xl:ml-80">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] text-red-600 font-semibold">Profil Akun</h1>
          <p className="text-sm md:text-base lg:text-[20px] font-semibold text-abu mt-1 md:mt-2">Lihat detail informasi akun Anda disini </p>
        </div>

        {isEditing ? <ProfileEditPage onCancel={() => setIsEditing(false)} /> : <ProfilePage onEdit={() => setIsEditing(true)} />}
      </section>
    </>
  );
};

export default ProfileContainer;

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

interface ProfilePageProps {
  onEdit: () => void;
}

export type UserData = {
  username: string;
  firstName: string;
  lastName?: string | null;
  email: string;
  token: string | null;
  foto: string | null;
  gender: "p" | "l" | null;
  birthDate: string | null;
  weight: number | null;
  height: number | null;
};

const ProfilePage = ({ onEdit }: ProfilePageProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          setError("Otorisasi gagal. Silakan login kembali.");
          setLoading(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };

        const response = await axios.get<{ data: UserData }>(
          "/api/user",
          config
        );

        setUser(response.data.data);
      } catch (err) {
        console.error("Gagal memuat data pengguna:", err);
        setError(
          "Tidak dapat memuat informasi profil. Silakan coba lagi nanti."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const [year, month, day] = user.birthDate
    ? user.birthDate.split("-")
    : ["-", "-", "-"];

  return (
    <>
      <div className="flex flex-col xl:flex-row w-full gap-2 max-w-[999px] lg:w-[678px] xl:w-[999px] lg:mx-80 xl:ml-[276px] h-auto min-h-[500px] md:min-h-[600px] lg:h-auto bg-black/60 rounded-xl lg:rounded-3xl mx-auto p-5 mt-20">
        <div className="flex flex-col gap-6 p-5 rounded-3xl bg-abu-abu/25  xl:w-1/2">
          <h1 className="font-semibold text-[32px] text-center">{`${
            user.firstName
          } ${user.lastName ?? ""}`}</h1>
          <Image
            src={user.foto || "/images/profile.png"}
            width={320}
            height={320}
            alt="Foto Profil"
            className="rounded-full border-5 border-coklat mx-auto object-cover w-[320px] h-[320px]"
          />
          <div className="md:flex md:flex-col md:items-center md:gap-2">
            <h2 className="font-semibold text-[20px]  text-center">Kalori</h2>
            <div className=" w-full md:w-[520px] h-[120px] lg:w-[560px] xl:w-full bg-black/50 rounded-3xl"></div>
          </div>
        </div>
        <div className="rounded-3xl bg-abu-abu/25 xl:w-1/2 pb-[40px]">
          <div className="flex flex-col p-4 mt-3 gap-5">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[20px] font-semibold">Informasi Pribadi</h1>
              <button
                className="text-coklat font-semibold text-[16px] hover:underline cursor-pointer"
                onClick={onEdit}
              >
                Edit
              </button>
            </div>
            <div className="w-full max-w-full flex gap-4">
              <div className="w-1/2">
                <h2 className="font-semibold text-[15px] text-abu mb-1">
                  Nama Depan
                </h2>
                <div className=" bg-black/50 rounded-2xl max-w-full py-2 px-3 text-sm">
                  {user.firstName}
                </div>
              </div>
              <div className="w-1/2">
                <h2 className="font-semibold text-[15px] text-abu mb-1">
                  Nama Belakang
                </h2>
                <div className=" bg-black/50 rounded-2xl max-w-full py-2 px-3 text-sm">
                  {user.lastName ?? "-"}
                </div>
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-full">
                <h2 className="font-semibold text-[15px] text-abu mb-1">
                  Tanggal Lahir
                </h2>
                <div className="flex gap-3">
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3 text-sm">
                    {day}
                  </div>
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3 text-sm">
                    {month}
                  </div>
                  <div className="w-full bg-black/50 rounded-2xl py-2 px-3 text-sm">
                    {year}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[15px] text-abu mb-1">Email</h2>
              <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">
                {user.email}
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-semibold text-[15px] text-abu mb-1">
                Nama Pengguna
              </h2>
              <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">
                {user.username}
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="w-full">
                <h2 className="font-semibold text-[15px] text-abu mb-1">
                  Jenis Kelamin
                </h2>
                <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">
                  {user.gender === "p"
                    ? "Perempuan"
                    : user.gender === "l"
                    ? "Laki-Laki"
                    : "-"}
                </div>
              </div>
              <div className="w-full flex gap-3">
                <div className="w-1/2">
                  <h2 className="font-semibold text-[15px] text-abu mb-1">
                    Berat
                  </h2>
                  <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">
                    {user.weight ? `${user.weight} Kg` : "-"}
                  </div>
                </div>
                <div className="w-1/2">
                  <h2 className="font-semibold text-[15px] text-abu mb-1">
                    Tinggi
                  </h2>
                  <div className="bg-black/50 rounded-2xl w-full py-2 px-3 text-sm">
                    {user.height ? `${user.height} Cm` : "-"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

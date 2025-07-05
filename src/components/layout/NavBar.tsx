import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="flex fixed w-full justify-around items-center py-5">
        <nav>
          <Link href={`/`} className="text-2xl font-semibold">
            GymBro
          </Link>
        </nav>
        <nav>
          <ul className="flex gap-5 font-bold">
            <li>
              <Link href={"/"}>Beranda</Link>
            </li>
            <li>
              <Link href={"/rute"}>Jalan</Link>
            </li>
            <li>
              <Link href={"/kalkulator"}>Kalkulator</Link>
            </li>
            <li>
              <Link href={"/pengaturan"}>Pengaturan</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

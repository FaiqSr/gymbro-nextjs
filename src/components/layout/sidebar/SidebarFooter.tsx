"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

export default function SidebarFooter() {
  const pathname = usePathname();
  const isProfileActive = pathname.startsWith("/profile");

  return (
    <div className="flex flex-col gap-3 items-center py-6 border-t border-slate-700/50">
      <Link
        href="/login"
        className="flex flex-col items-center gap-2 w-full py-3 px-2 rounded-lg text-gray-400 hover:bg-red-600/20 hover:text-red-400 transition-all duration-300 group"
      >
        <AiOutlineLogout
          size={24}
          className="group-hover:scale-110 transition-transform"
        />
        <span className="text-xs font-semibold">Keluar</span>
      </Link>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import SidebarNavLink from "./SidebarNavLink";
import { NavItem } from "@/constant/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface SidebarNavProps {
  items: NavItem[];
}

export default function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={`w-full ${poppins.className}`}>
      <ul className="flex flex-col gap-2 text-lg">
        {items.map((item) => (
          <li key={item.href}>
            <SidebarNavLink
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={pathname.startsWith(item.href)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

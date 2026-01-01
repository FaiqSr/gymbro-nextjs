"use client";

import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import SidebarNavLink from "./SidebarNavLink";
import { NavItem } from "@/constant/sidebar";
import { containerVariants, itemVariants } from "@/lib/animations/variants";

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
    <motion.nav
      className={`w-full ${poppins.className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.ul className="flex flex-col gap-2 text-lg">
        {items.map((item) => (
          <motion.li key={item.href} variants={itemVariants}>
            <SidebarNavLink
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={pathname.startsWith(item.href)}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

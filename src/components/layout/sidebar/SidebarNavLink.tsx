import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { hoverScale } from "@/lib/animations/variants";

interface SidebarNavLinkProps {
  href: string;
  icon: IconType;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function SidebarNavLink({
  href,
  icon: Icon,
  label,
  isActive,
}: SidebarNavLinkProps) {
  const baseClasses =
    "flex items-center gap-4 w-full p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white";
  const activeClasses = isActive
    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold shadow-lg shadow-red-500/30"
    : "text-gray-400";

  return (
    <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={`${baseClasses} ${activeClasses}`}>
        <Icon
          size={24}
          className={isActive ? "text-white" : "group-hover:text-red-400"}
        />
        <span className="font-medium">{label}</span>
        {isActive && (
          <motion.div
            className="ml-auto w-1 h-6 bg-white rounded-full"
            layoutId="activeIndicator"
            transition={{ type: "spring", stiffness: 380, damping: 40 }}
          ></motion.div>
        )}
      </Link>
    </motion.div>
  );
}

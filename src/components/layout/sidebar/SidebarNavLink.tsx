import Link from "next/link";
import { IconType } from "react-icons";

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
    <Link href={href} className={`${baseClasses} ${activeClasses}`}>
      <Icon
        size={24}
        className={isActive ? "text-white" : "group-hover:text-red-400"}
      />
      <span className="font-medium">{label}</span>
      {isActive && (
        <div className="ml-auto w-1 h-6 bg-white rounded-full"></div>
      )}
    </Link>
  );
}

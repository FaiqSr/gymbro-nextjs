import Link from "next/link";
import Image from "next/image";

interface SidebarHeaderProps {
  logo: string;
}

export default function SidebarHeader({ logo }: SidebarHeaderProps) {
  return (
    <div className="py-4 mb-8">
      <Link
        href="/"
        className="flex justify-center hover:opacity-80 transition-opacity duration-200 group"
      >
        <div className="relative">
          <Image
            src={logo}
            width={140}
            height={200}
            alt="GymBro Logo"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
    </div>
  );
}

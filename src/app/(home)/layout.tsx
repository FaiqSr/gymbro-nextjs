// import NavBar from "@/components/layout/NavBar";
import { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ui/ThemeToogle";
import MessageButton from "@/components/ui/MessageButton";
import SideBar from "@/components/layout/SideBar";
import NavBar from "@/components/layout/NavBar";
import ThemesProvider from "@/components/providers/ThemesProvider";

export const metadata: Metadata = {
  title: "GymBro",
  description: "Website untuk membantu anda tetap bugar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth transition-colors" suppressHydrationWarning>
      <body className="bg-slate-50">
        <ThemesProvider>
          {/* <NavBar /> */}
          <ThemeToggle />
          <MessageButton />
          <main className="flex w-full">
            <SideBar />
            {children}
          </main>
        </ThemesProvider>
      </body>
    </html>
  );
}

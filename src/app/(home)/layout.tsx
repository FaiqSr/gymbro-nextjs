import NavBar from "@/components/layout/NavBar";
import { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ui/ThemeToogle";

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
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NavBar />
          <ThemeToggle />
          <main className="py-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

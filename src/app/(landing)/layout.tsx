import { Metadata } from "next";
import "./global.css"
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "GymBro",
  description: "Website untuk membantu anda tetap bugar",
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    title: "GymBro",
    description: "Website untuk membantu anda tetap bugar",
    url: "https://gymbro-nextjs.vercel.app/",
    siteName: "GymBro",
    images: [
      {
        url: "/images/icon.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="relative min-h-screen min-w-screen">
            {children}
        </div>
      </body>
    </html>
  );
}

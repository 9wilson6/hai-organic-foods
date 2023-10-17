import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | Hai Organic Foods",
    template: "%s | Hai Organic Foods",
  },
  description:
    "#1 Source of 100% Organic Food. We guarantee healthy eating from our products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FDEFF3]`}>
        <Navbar />
        {/* <div className="relative">
          <Header />
        </div> */}
        {children}
      </body>
    </html>
  );
}

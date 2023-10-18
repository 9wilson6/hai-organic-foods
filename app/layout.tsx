import Navbar from "@/components/layout/navbar";
import Provider from "@/providers/sessionProvider";
import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Container from "@/components/Container";

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
      <body className={`${inter.className} overflow-hidden`}>
        <Provider>
          <Container>
            <Navbar />
          </Container>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}

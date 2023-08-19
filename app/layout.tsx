import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import Footer from "@/components/shared/Footer";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vinca | Home",
  description: "Welcome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

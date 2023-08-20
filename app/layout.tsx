import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

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
      <body
        className={cn(baiJamjuree.className, "bg-light text-dark antialiased")}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

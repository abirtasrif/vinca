import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/libs/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinca | Home",
  description: "A beauty parlour and spa website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={cn(
          inter.className,
          'bg-light/10 text-dark antialiased'
        )}>
      <Header />{children}
      <Footer />
      </body>
    </html>
  );
}

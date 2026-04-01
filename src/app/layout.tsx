import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tasks Management",
  description: "Dashboard for managing tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* navbar */}
        <Navbar />
        {/* main content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

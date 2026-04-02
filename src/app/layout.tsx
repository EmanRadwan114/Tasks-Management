import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body
        className="min-h-full flex flex-col md:flex-row"
        suppressHydrationWarning
      >
        {/* navbar */}
        <Navbar />
        {/* main content */}
        <main className="flex-1 md:ps-60">{children}</main>
      </body>
    </html>
  );
}

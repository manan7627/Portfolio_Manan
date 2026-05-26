import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CommandPalette from "@/components/CommandPalette";
import FloatingResumeButton from "@/components/FloatingResumeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manan Sharma | Full-Stack Developer",
  description: "World-class portfolio of Manan Sharma, Freelance Full-Stack Developer and AI Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="global-ambient-mesh" />
        <CommandPalette />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FloatingResumeButton />
      </body>
    </html>
  );
}

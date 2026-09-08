import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const metrimLetter = localFont({
  src: "../assets/fonts/MetrimLetter-Regular.otf",
  variable: "--font-metrim",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serpentize",
  description: "MOVEMENT WITH INTENTION",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${metrimLetter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-montserrat">{children}</body>
    </html>
  );
}

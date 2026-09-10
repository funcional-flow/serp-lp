import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import ReactLenis from "lenis/react";

const metrimLetter = localFont({
  src: "../assets/fonts/MetrimLetter-Regular.otf",
  variable: "--font-metrim",
});

const actium = localFont({
  src: "../assets/fonts/ActiumW00-Regular.otf",
  variable: "--font-actium",
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
      lang="pt-BR"
      className={`${montserrat.variable} ${metrimLetter.variable} ${actium.variable} h-full antialiased`}
    >
      <ReactLenis root>
        <body className="font-actium tracking-wide flex min-h-full flex-col scroll-smooth">
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}

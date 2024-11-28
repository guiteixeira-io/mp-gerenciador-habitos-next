import type { Metadata } from "next";
import "./globals.css";
import { Dosis, Inter } from "next/font/google";
import Image from "next/image";


const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Meta Diaria - Gerenciador de habitos",
  description: "Depois fica mais facil, o dificil é começar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${inter.variable} flex item-center flex-col mt-10 bg-neutral-900 text-center`}>
        <img src="/images/logo.svg" width={200} height={200} alt="logo"></img>
        {children}
      </body>
    </html>
  );
}

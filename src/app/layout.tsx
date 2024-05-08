import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neurofascinanate",
  description: "Pagina web oficial de Neurofascinante",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className} >

      <div className="relative">
        <Navbar/>
        <div className="mt-32">{children}</div>
      </div>

      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neurofascinanate",
  description: "Pagina web oficial de Neurofascinante",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className=" mb-36">
          <Navbar/>
        </div>
        <div className=" h-fit">
          {children} 
        </div>
        
        <Footer/>
      </body>
    </html>
  );
}


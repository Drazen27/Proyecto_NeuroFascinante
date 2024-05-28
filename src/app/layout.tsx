import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";


const inter = Inter({ subsets: ["latin"] });
      

export const metadata: Metadata = {
  title: "Neurofascinanate",
  description: "Pagina web oficial de Neurofascinante",
  icons:"https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/icons%2FlogoV1%2Fneuro_1.2-color_transparencia.svg?alt=media&token=44e43e2c-bc9c-48f2-883f-6d3640b49b6b"
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="mb-36">
          <Navbar/>
        </div>
        <div className=" ">
          {children} 
        </div>
        <Footer/>
      </body>
    </html>
  );
}


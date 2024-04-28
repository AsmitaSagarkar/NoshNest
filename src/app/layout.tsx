import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_component/nav";


export const metadata: Metadata = {
  title: "Nosh Nest",
  description: "Food Delivery App",
};


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
      
        
        {children}
        
      </body>
    </html>
  );
}

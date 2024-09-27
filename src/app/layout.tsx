import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MenuLateral from "@/components/Menu/menuLateral";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sales Scope",
  description: "Project made by Joao Pedro do Carmo Ribeiro and it's part of GWBR Technologies properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuLateral/>
        {children}
      </body>
    </html>
  );
}

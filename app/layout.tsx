import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/shared/sections/header/Header.component";
import FooterComponent from "@/shared/sections/footer/Footer.component";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code & Care",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" href="./Loop%20Academy.ico"/>
      <title>Helloo</title>
    </Head>
      <body className={inter.className}>
        <HeaderComponent />
        {children}
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}

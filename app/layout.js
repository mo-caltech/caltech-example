import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from 'next/head';
import SEO from "@/components/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CalTech Racing",
  description: "Formula SAE Team | CalTech Racing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <SEO />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
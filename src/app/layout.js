import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header/Header";
import Head from "next/head";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arnisekai",
  description: "Tempat Menonton Anime Donghua Bahasa Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <div >
          <Header/>
        </div>

        <div className="bg-gray-900">
          {children}
          <Analytics />;
        </div>
        <div><Footer  /></div>
        
      </body>
    </html>
  );
}

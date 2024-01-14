import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arnisekai",
  description: "Tempat Menonton Anime Donghua Bahasa Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
          <Analytics />
          <Footer />
      </body>
    </html>
  );
}

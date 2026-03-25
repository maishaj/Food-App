import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
     default:"Yatun Khaijan",
     template:"%s | Yatun Khaijan"
  },
  description: "Best FastFood shop in Noakhali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="px-5 py-2 flex items-center justify-between gap-5 bg-stone-800">
          <Link href="/">
            <Image src="/logo.png" alt="logo img" width={80} height={80}></Image>
          </Link>
          <div className="space-x-5">
             <Link className="btn" href="/foods">Foods</Link>
             <Link className="btn" href="/reviews">Reviews</Link>
          </div>
        </header>
        <main className="px-5 py-8">
          <CartProvider>
            {children}
          </CartProvider>
        </main>
      </body>
    </html>
  );
}

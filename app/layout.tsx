import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/LandingPage/NavBar";
import Footer from "@/components/LandingPage/Footer";
import CartProviders from "@/components/ShoppingCart/CartProviders";
import { CartModel } from "@/components/ShoppingCart/Cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothing Store",
  description: "Fashion Ecommerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Outfit my-4 mx-12">
        <CartProviders>
          <NavBar />
          {children}
          <CartModel />
          <Footer />
        </CartProviders>
      </body>
    </html>
  );
}

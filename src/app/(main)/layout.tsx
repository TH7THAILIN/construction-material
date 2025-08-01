import "./globals.css";
import { NextAuthProvider } from "../components/AuthProvider";
import { CartProvider } from "../context/CartContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <CartProvider>
        {/* You can add a Navbar component here */}
        {children}
      </CartProvider>
    </NextAuthProvider>
  );
}

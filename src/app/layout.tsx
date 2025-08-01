import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./components/AuthProvider";
import { ReduxProvider } from "./redux/provider";
import { CartModalProvider } from "./context/CartSidebarModalContext";
import { PreviewSliderProvider } from "./context/PreviewSliderContext";
import { ModalProvider } from "./context/QuickViewModalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebarModal from "./components/Common/CartSidebarModal";
import QuickViewModal from "./components/Common/QuickViewModal";
import PreviewSlider from "./components/Common/PreviewSlider";
import ScrollToTop from "./components/Common/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construction Material Shop",
  description: "Your one-stop shop for construction materials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ReduxProvider>
            <CartModalProvider>
              <PreviewSliderProvider>
                <ModalProvider>
                  <Header />
                  <main className="min-h-screen">
                    {children}
                  </main>
                  <Footer />
                  
                  {/* Modals */}
                  <CartSidebarModal />
                  <QuickViewModal />
                  <PreviewSlider />
                  <ScrollToTop />
                </ModalProvider>
              </PreviewSliderProvider>
            </CartModalProvider>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
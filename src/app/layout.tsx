import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/layout/AuthProvider";
import { ReduxProvider } from "@/store/redux/provider";
import { CartModalProvider } from "@/hooks/context/CartSidebarModalContext";
import { PreviewSliderProvider } from "@/hooks/context/PreviewSliderContext";
import { ModalProvider } from "@/hooks/context/QuickViewModalContext";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import CartSidebarModal from "@/ui/Common/CartSidebarModal";
import QuickViewModal from "@/ui/Common/QuickViewModal";
import PreviewSlider from "@/ui/Common/PreviewSlider";
import ScrollToTop from "@/ui/Common/ScrollToTop";

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
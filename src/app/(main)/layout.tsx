import { NextAuthProvider } from "@/components/layout/AuthProvider";
import { ReduxProvider } from "@/store/redux/provider";
import { CartModalProvider } from "@/hooks/context/CartSidebarModalContext";
import { PreviewSliderProvider } from "@/hooks/context/PreviewSliderContext";
import { ModalProvider } from "@/hooks/context/QuickViewModalContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartSidebarModal from "@/components/ui/Common/CartSidebarModal";
import QuickViewModal from "@/components/ui/Common/QuickViewModal";
import PreviewSlider from "@/components/ui/Common/PreviewSlider";
import ScrollToTop from "@/components/ui/Common/ScrollToTop";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}

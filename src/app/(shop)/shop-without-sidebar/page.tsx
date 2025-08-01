import ShopWithoutSidebar from "@/components/features/ShopWithoutSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Without Sidebar | Construction Material Shop",
  description: "Browse our construction materials and tools in a clean, minimal layout",
};

export default function ShopWithoutSidebarPage() {
  return <ShopWithoutSidebar />;
}

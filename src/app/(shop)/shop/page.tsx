import ShopWithSidebar from "@/features/ShopWithSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Construction Material Shop",
  description: "Browse our construction materials and tools",
};

export default function ShopPage() {
  return <ShopWithSidebar />;
}

import ShopWithSidebar from "@/components/features/ShopWithSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop With Sidebar | Construction Material Shop",
  description: "Browse our construction materials and tools with convenient sidebar filtering",
};

export default function ShopWithSidebarPage() {
  return <ShopWithSidebar />;
}

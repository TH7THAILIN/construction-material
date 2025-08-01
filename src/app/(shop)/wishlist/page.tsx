import { Wishlist } from "@/components/features/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist | Construction Material Shop",
  description: "Your favorite construction materials and tools",
};

export default function WishlistPage() {
  return <Wishlist />;
}

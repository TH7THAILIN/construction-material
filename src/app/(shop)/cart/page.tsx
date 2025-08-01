import Cart from "@/features/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Construction Material Shop",
  description: "Review your selected items",
};

export default function CartPage() {
  return <Cart />;
}

import Checkout from "@/features/Checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Construction Material Shop",
  description: "Complete your purchase",
};

export default function CheckoutPage() {
  return <Checkout />;
}

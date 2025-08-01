import Home from "@/features/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Material Shop | Home",
  description: "Your one-stop shop for construction materials",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

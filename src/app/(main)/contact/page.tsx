import Contact from "@/components/features/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Construction Material Shop",
  description: "Get in touch with us for your construction material needs",
};

export default function ContactPage() {
  return <Contact />;
}

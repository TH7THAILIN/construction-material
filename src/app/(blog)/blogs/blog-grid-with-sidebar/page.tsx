import BlogGridWithSidebar from "@/components/features/Blog/BlogGridWithSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grid With Sidebar | Construction Material Shop",
  description: "Latest news and tips about construction materials with sidebar",
};

export default function BlogGridWithSidebarPage() {
  return <BlogGridWithSidebar />;
}

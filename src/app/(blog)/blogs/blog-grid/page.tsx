import BlogGrid from "@/components/features/Blog/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grid | Construction Material Shop",
  description: "Latest news and tips about construction materials",
};

export default function BlogGridPage() {
  return <BlogGrid />;
}

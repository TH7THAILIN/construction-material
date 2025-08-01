import React from "react";
import BlogDetailsWithSidebar from "@/components/features/BlogDetailsWithSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details with Sidebar Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Details with Sidebar Page for NextCommerce Template",
  // other metadata
};

const BlogDetailsWithSidebarPage = () => {
  return (
    <>
      <BlogDetailsWithSidebar />
    </>
  );
};

export default BlogDetailsWithSidebarPage;

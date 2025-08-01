import React from "react";
import BlogDetails from "@/components/features/BlogDetails";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Blog Details Page for NextCommerce Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <BlogDetails />
    </>
  );
};

export default BlogDetailsPage;

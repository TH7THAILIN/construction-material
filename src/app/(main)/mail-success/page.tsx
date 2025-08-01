import React from "react";
import MailSuccess from "@/components/features/MailSuccess";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mail Success Page | NextCommerce Nextjs E-commerce template",
  description: "This is Mail Success Page for NextCommerce Template",
  // other metadata
};

const MailSuccessPage = () => {
  return (
    <>
      <MailSuccess />
    </>
  );
};

export default MailSuccessPage;

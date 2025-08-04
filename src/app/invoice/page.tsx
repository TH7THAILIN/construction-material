"use client";
import { useSearchParams } from "next/navigation";
import React, { useRef } from "react";

const InvoicePage = () => {
  const searchParams = useSearchParams();
  const invoiceRef = useRef<HTMLDivElement>(null);

  const name = searchParams.get("name") || "N/A";
  const email = searchParams.get("email") || "N/A";
  const address = searchParams.get("address") || "N/A";
  const note = searchParams.get("note") || "None";

  const handleDownload = () => {
    if (invoiceRef.current) {
      const htmlContent = invoiceRef.current.outerHTML;
      const blob = new Blob([htmlContent], { type: "text/html" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "invoice.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 mt-[300px]">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div ref={invoiceRef}>
          {/* Header */}
          <div className="border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold text-blue-700">Invoice</h1>
            <p className="text-sm text-gray-500">Generated on {new Date().toLocaleDateString()}</p>
          </div>

          {/* Client Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <p className="font-semibold text-gray-700">Customer Name</p>
              <p>{name}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <p>{email}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Address</p>
              <p>{address}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Note</p>
              <p>{note}</p>
            </div>
          </div>

          {/* Summary Table (example items) */}
          <table className="w-full text-left border-t border-b border-gray-200 my-6">
            <thead>
              <tr className="text-sm text-gray-700">
                <th className="py-2">Product</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t text-sm">
                <td className="py-2">iPhone 14 Plus</td>
                <td className="py-2">1</td>
                <td className="py-2">$899.00</td>
              </tr>
              <tr className="border-t text-sm">
                <td className="py-2">Asus RT Router</td>
                <td className="py-2">1</td>
                <td className="py-2">$129.00</td>
              </tr>
              <tr className="border-t text-sm">
                <td className="py-2">Havit HV-G69 Gamepad</td>
                <td className="py-2">1</td>
                <td className="py-2">$29.00</td>
              </tr>
              <tr className="border-t text-sm font-semibold">
                <td className="py-2">Shipping</td>
                <td className="py-2">–</td>
                <td className="py-2">$15.00</td>
              </tr>
              <tr className="border-t text-base font-bold text-blue-700">
                <td className="py-2">Total</td>
                <td className="py-2"></td>
                <td className="py-2">$1072.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Download Button */}
        <div className="text-right">
          <button
            onClick={handleDownload}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-black font-medium px-6 py-2 rounded-md transition"
          >
            ⬇ Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;

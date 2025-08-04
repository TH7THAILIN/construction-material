"use client";
import React from "react";
import Breadcrumb from "@/ui/Common/Breadcrumb";
import Login from "./Login";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Coupon from "./Coupon";
import Billing from "./Billing";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const note = (document.getElementById("notes") as HTMLTextAreaElement)?.value || "";

    const params = new URLSearchParams({
      name: "John Doe",
      email: "john@example.com",
      address: "Phnom Penh, Cambodia",
      note: note,
    });

    router.push(`/invoice?${params.toString()}`);
  };

  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
              {/* Left Side */}
              <div className="lg:max-w-[670px] w-full">
                <Login />
                <Billing />
                <Shipping />

                {/* Other Notes */}
                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5 mt-7.5">
                  <div>
                    <label htmlFor="notes" className="block mb-2.5">
                      Other Notes (optional)
                    </label>
                    <textarea
                      name="notes"
                      id="notes"
                      rows={5}
                      placeholder="Notes about your order, e.g. special delivery instructions"
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="max-w-[455px] w-full">
                <div className="bg-white shadow-1 rounded-[10px]">
                  <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                    <h3 className="font-medium text-xl text-dark">Your Order</h3>
                  </div>

                  <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <h4 className="font-medium text-dark">Product</h4>
                      <h4 className="font-medium text-dark text-right">Subtotal</h4>
                    </div>

                    {/* Static example products */}
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <p className="text-dark">iPhone 14 Plus , 6/128GB</p>
                      <p className="text-dark text-right">$899.00</p>
                    </div>
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <p className="text-dark">Asus RT Dual Band Router</p>
                      <p className="text-dark text-right">$129.00</p>
                    </div>
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <p className="text-dark">Havit HV-G69 USB Gamepad</p>
                      <p className="text-dark text-right">$29.00</p>
                    </div>
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <p className="text-dark">Shipping Fee</p>
                      <p className="text-dark text-right">$15.00</p>
                    </div>

                    <div className="flex items-center justify-between pt-5">
                      <p className="font-medium text-lg text-dark">Total</p>
                      <p className="font-medium text-lg text-dark text-right">
                        $1072.00
                      </p>
                    </div>
                  </div>
                </div>

                <Coupon />
                <ShippingMethod />
                <PaymentMethod />

              <button
                type="submit"
                className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
              >
                Process to Checkout
              </button>

              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;

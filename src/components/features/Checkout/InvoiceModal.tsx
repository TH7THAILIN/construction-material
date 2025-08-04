import React from "react";

interface CartItem {
  id: number;
  title: string;
  quantity: number;
  discountedPrice: number;
}

interface InvoiceProps {
  cartItems: CartItem[];
  totalPrice: number;
  onClose: () => void;
}

const InvoiceModal: React.FC<InvoiceProps> = ({ cartItems, totalPrice, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[600px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          aria-label="Close Invoice"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6">Invoice</h2>

        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between border-b pb-2">
              <span>{item.title} x {item.quantity}</span>
              <span>${(item.discountedPrice * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6 font-bold text-lg border-t pt-4">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;

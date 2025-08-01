"use client";
import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  disabled = false,
  className = "",
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        onClick={handleDecrease}
        aria-label="Decrease quantity"
        className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-gray-2 text-dark ease-out duration-200 hover:text-blue disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={disabled || quantity <= min}
      >
        <svg
          className="fill-current"
          width="16"
          height="2"
          viewBox="0 0 16 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-8.548e-08 0.977778C-3.82707e-08 0.437766 0.437766 3.82707e-08 0.977778 8.548e-08L15.0222 1.31328e-06C15.5622 1.36049e-06 16 0.437767 16 0.977779C16 1.51779 15.5622 1.95556 15.0222 1.95556L0.977778 1.95556C0.437766 1.95556 -1.32689e-07 1.51779 -8.548e-08 0.977778Z"
            fill=""
          />
        </svg>
      </button>

      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        disabled={disabled}
        className="flex items-center justify-center w-20 h-10 rounded-[5px] border border-gray-4 bg-white font-medium text-dark text-center disabled:opacity-50 disabled:cursor-not-allowed"
      />

      <button
        onClick={handleIncrease}
        aria-label="Increase quantity"
        className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-gray-2 text-dark ease-out duration-200 hover:text-blue disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={disabled || quantity >= max}
      >
        <svg
          className="fill-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.08889 0C8.6289 2.36047e-08 9.06667 0.437766 9.06667 0.977778L9.06667 15.0222C9.06667 15.5622 8.6289 16 8.08889 16C7.54888 16 7.11111 15.5622 7.11111 15.0222L7.11111 0.977778C7.11111 0.437766 7.54888 -2.36047e-08 8.08889 0Z"
            fill=""
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7.91111C4.72093e-08 7.3711 0.437766 6.93333 0.977778 6.93333L15.0222 6.93333C15.5622 6.93333 16 7.3711 16 7.91111C16 8.45112 15.5622 8.88889 15.0222 8.88889L0.977778 8.88889C0.437766 8.88889 -4.72093e-08 8.45112 0 7.91111Z"
            fill=""
          />
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;

"use client";
import React from "react";

interface PriceDisplayProps {
  price: number;
  discountedPrice?: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
  direction?: "horizontal" | "vertical";
  showDiscount?: boolean;
  className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  discountedPrice,
  currency = "$",
  size = "md",
  direction = "horizontal",
  showDiscount = true,
  className = "",
}) => {
  const hasDiscount = discountedPrice && discountedPrice < price;
  const currentPrice = hasDiscount ? discountedPrice : price;
  const originalPrice = hasDiscount ? price : undefined;
  
  const discountPercentage = hasDiscount 
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  const sizeClasses = {
    sm: {
      current: "text-lg font-semibold",
      original: "text-sm",
      discount: "text-xs",
    },
    md: {
      current: "text-xl xl:text-heading-4 font-semibold",
      original: "text-lg xl:text-2xl",
      discount: "text-sm",
    },
    lg: {
      current: "text-2xl xl:text-heading-3 font-bold",
      original: "text-xl xl:text-heading-5",
      discount: "text-base",
    },
  };

  const layoutClasses = direction === "vertical" 
    ? "flex flex-col items-start gap-1" 
    : "flex items-center gap-2";

  return (
    <div className={`${layoutClasses} ${className}`}>
      {/* Current Price */}
      <span className={`${sizeClasses[size].current} text-dark`}>
        {currency}{currentPrice.toFixed(2)}
      </span>

      {/* Original Price (if there's a discount) */}
      {hasDiscount && originalPrice && (
        <span className={`${sizeClasses[size].original} font-medium text-dark-4 line-through`}>
          {currency}{originalPrice.toFixed(2)}
        </span>
      )}

      {/* Discount Badge */}
      {hasDiscount && showDiscount && discountPercentage > 0 && (
        <span className={`${sizeClasses[size].discount} inline-block font-medium text-white py-1 px-2 bg-red-500 rounded`}>
          -{discountPercentage}%
        </span>
      )}
    </div>
  );
};

export default PriceDisplay;

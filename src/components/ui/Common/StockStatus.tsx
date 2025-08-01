"use client";
import React from "react";

interface StockStatusProps {
  inStock?: boolean;
  stockCount?: number;
  lowStockThreshold?: number;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

const StockStatus: React.FC<StockStatusProps> = ({
  inStock = true,
  stockCount,
  lowStockThreshold = 5,
  size = "md",
  showIcon = true,
  className = "",
}) => {
  const isLowStock = stockCount !== undefined && stockCount <= lowStockThreshold && stockCount > 0;
  const isOutOfStock = stockCount !== undefined ? stockCount === 0 : !inStock;

  const getStatus = () => {
    if (isOutOfStock) return { text: "Out of Stock", color: "text-red-500", bgColor: "bg-red-50" };
    if (isLowStock) return { text: `Low Stock (${stockCount} left)`, color: "text-orange-500", bgColor: "bg-orange-50" };
    return { text: stockCount ? `In Stock (${stockCount} available)` : "In Stock", color: "text-green-500", bgColor: "bg-green-50" };
  };

  const status = getStatus();

  const sizeClasses = {
    sm: "text-sm py-1 px-2",
    md: "text-base py-1.5 px-3",
    lg: "text-lg py-2 px-4",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className={`inline-flex items-center gap-2 ${sizeClasses[size]} ${status.bgColor} rounded-full ${className}`}>
      {showIcon && (
        <div className={`${iconSizeClasses[size]}`}>
          {isOutOfStock ? (
            <svg
              className={`${status.color} fill-current`}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z"
                fill=""
              />
            </svg>
          ) : isLowStock ? (
            <svg
              className={`${status.color} fill-current`}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25706 3.09882C9.02167 1.73952 10.9788 1.73952 11.7434 3.09882L17.3237 13.0194C18.0736 14.3526 17.1102 15.9999 15.5805 15.9999H4.4199C2.89025 15.9999 1.92682 14.3526 2.67675 13.0194L8.25706 3.09882ZM11.0001 6C11.0001 5.44772 10.5524 5 10.0001 5C9.44784 5 9.00012 5.44772 9.00012 6V10C9.00012 10.5523 9.44784 11 10.0001 11C10.5524 11 11.0001 10.5523 11.0001 10V6ZM10.0001 14C10.5524 14 11.0001 13.5523 11.0001 13C11.0001 12.4477 10.5524 12 10.0001 12C9.44784 12 9.00012 12.4477 9.00012 13C9.00012 13.5523 9.44784 14 10.0001 14Z"
                fill=""
              />
            </svg>
          ) : (
            <svg
              className={`${status.color} fill-current`}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
                fill=""
              />
            </svg>
          )}
        </div>
      )}
      <span className={`font-medium ${status.color}`}>{status.text}</span>
    </div>
  );
};

export default StockStatus;

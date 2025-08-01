"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/redux/store";
import { addItemToCart } from "@/store/redux/features/cart-slice";
import { addItemToWishlist } from "@/store/redux/features/wishlist-slice";
import { Product } from "@/types/product";

interface ProductActionsProps {
  product: Product;
  quantity?: number;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  direction?: "horizontal" | "vertical";
  showWishlist?: boolean;
  className?: string;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  product,
  quantity = 1,
  onAddToCart,
  onAddToWishlist,
  disabled = false,
  size = "md",
  direction = "horizontal",
  showWishlist = true,
  className = "",
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...product,
        quantity,
      })
    );
    onAddToCart?.();
  };

  const handleAddToWishlist = () => {
    dispatch(addItemToWishlist({ ...product, quantity: 1 }));
    onAddToWishlist?.();
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const layoutClasses = direction === "vertical" 
    ? "flex flex-col gap-3 w-full" 
    : "flex flex-wrap items-center gap-4";

  const buttonBaseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-md ease-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]}`;

  return (
    <div className={`${layoutClasses} ${className}`}>
      {/* Add to Cart Button */}
      <button
        disabled={disabled || quantity === 0}
        onClick={handleAddToCart}
        className={`${buttonBaseClasses} text-white bg-blue hover:bg-blue-dark ${
          direction === "vertical" ? "w-full" : ""
        }`}
      >
        <svg
          className="fill-current w-5 h-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.33333 3.33333C2.8731 3.33333 2.5 2.96024 2.5 2.5C2.5 2.03976 2.8731 1.66667 3.33333 1.66667H4.16667C4.62691 1.66667 5 2.03976 5 2.5V3.33333H16.6667C17.1269 3.33333 17.5 3.7064 17.5 4.16667C17.5 4.62691 17.1269 5 16.6667 5H15V15C15 15.9205 14.2538 16.6667 13.3333 16.6667H6.66667C5.74619 16.6667 5 15.9205 5 15V5H3.33333C2.8731 5 2.5 4.62691 2.5 4.16667C2.5 3.7064 2.8731 3.33333 3.33333 3.33333ZM6.66667 5V15H13.3333V5H6.66667Z"
            fill=""
          />
        </svg>
        Add to Cart
      </button>

      {/* Add to Wishlist Button */}
      {showWishlist && (
        <button
          disabled={disabled}
          onClick={handleAddToWishlist}
          className={`${buttonBaseClasses} text-white bg-dark hover:bg-opacity-95 ${
            direction === "vertical" ? "w-full" : ""
          }`}
        >
          <svg
            className="fill-current w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.68698 3.68688C3.30449 4.31882 2.29169 5.82191 2.29169 7.6143C2.29169 9.44546 3.04103 10.8569 4.11526 12.0665C5.00062 13.0635 6.07238 13.8897 7.11763 14.6956C7.36588 14.8869 7.61265 15.0772 7.85506 15.2683C8.29342 15.6139 8.68445 15.9172 9.06136 16.1374C9.43847 16.3578 9.74202 16.4584 10 16.4584C10.258 16.4584 10.5616 16.3578 10.9387 16.1374C11.3156 15.9172 11.7066 15.6139 12.145 15.2683C12.3874 15.0772 12.6342 14.8869 12.8824 14.6956C13.9277 13.8897 14.9994 13.0635 15.8848 12.0665C16.959 10.8569 17.7084 9.44546 17.7084 7.6143C17.7084 5.82191 16.6955 4.31882 15.3131 3.68688C13.97 3.07295 12.1653 3.23553 10.4503 5.01733C10.3325 5.13974 10.1699 5.20891 10 5.20891C9.83012 5.20891 9.66754 5.13974 9.54972 5.01733C7.83474 3.23553 6.03008 3.07295 4.68698 3.68688ZM10 3.71573C8.07331 1.99192 5.91582 1.75077 4.16732 2.55002C2.32061 3.39415 1.04169 5.35424 1.04169 7.6143C1.04169 9.83557 1.9671 11.5301 3.18062 12.8966C4.15241 13.9908 5.34187 14.9067 6.39237 15.7155C6.63051 15.8989 6.8615 16.0767 7.0812 16.2499C7.50807 16.5864 7.96631 16.9453 8.43071 17.2166C8.8949 17.4879 9.42469 17.7084 10 17.7084C10.5754 17.7084 11.1051 17.4879 11.5693 17.2166C12.0337 16.9453 12.492 16.5864 12.9188 16.2499C13.1385 16.0767 13.3695 15.8989 13.6077 15.7155C14.6582 14.9067 15.8476 13.9908 16.8194 12.8966C18.0329 11.5301 18.9584 9.83557 18.9584 7.6143C18.9584 5.35424 17.6794 3.39415 15.8327 2.55002C14.0842 1.75077 11.9267 1.99192 10 3.71573Z"
              fill=""
            />
          </svg>
          Add to Wishlist
        </button>
      )}
    </div>
  );
};

export default ProductActions;

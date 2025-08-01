import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/redux/features/cart-slice";
import { Product } from "@/types/product";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      discountedPrice: product.discountedPrice,
      image: product.image,
      quantity: 1,
      category: product.category
    }));
    toast.success("Product added to cart!");
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-3 bg-white transition-all duration-300 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.discount && (
          <div className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">
            -{product.discount}%
          </div>
        )}
        {/* Quick Action Buttons */}
        <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-blue-500 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.885.837-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z"/>
            </svg>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-blue-500 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <Link 
            href={`/products/${product.id}`}
            className="font-medium text-dark transition-colors hover:text-blue-500"
          >
            {product.title}
          </Link>
        </div>
        
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill={i < (product.rating || 4) ? "#FFA500" : "#E5E7EB"}
            >
              <path d="M6 0l1.545 3.13L11 3.635 8.5 6.07l.59 3.44L6 7.885 2.91 9.51l.59-3.44L1 3.635l3.455-.505L6 0z"/>
            </svg>
          ))}
          <span className="ml-1 text-xs text-gray-500">({product.reviews || 24})</span>
        </div>

        {/* Price */}
        <div className="mb-3 flex items-center gap-2">
          <span className="font-semibold text-lg text-dark">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full rounded bg-blue-500 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

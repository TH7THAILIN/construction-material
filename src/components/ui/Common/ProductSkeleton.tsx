import React from "react";
import Skeleton from "./Skeleton";

interface ProductSkeletonProps {
  variant?: "grid" | "list";
  count?: number;
}

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({
  variant = "grid",
  count = 8,
}) => {
  if (variant === "list") {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 bg-white rounded-lg border border-gray-3"
          >
            {/* Product Image */}
            <Skeleton
              variant="rectangular"
              width="120px"
              height="120px"
              className="flex-shrink-0"
            />
            
            {/* Product Details */}
            <div className="flex-1 space-y-3">
              {/* Product Title */}
              <Skeleton variant="text" width="80%" height="20px" />
              
              {/* Product Description */}
              <Skeleton variant="text" lines={2} height="16px" />
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <Skeleton variant="rectangular" width="80px" height="16px" />
                <Skeleton variant="text" width="60px" height="16px" />
              </div>
              
              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Skeleton variant="text" width="80px" height="20px" />
                  <Skeleton variant="text" width="60px" height="16px" />
                </div>
                <Skeleton variant="rectangular" width="120px" height="40px" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Grid variant
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-3 overflow-hidden"
        >
          {/* Product Image */}
          <Skeleton
            variant="rectangular"
            width="100%"
            height="200px"
            className="mb-4"
          />
          
          {/* Product Details */}
          <div className="p-4 space-y-3">
            {/* Product Title */}
            <Skeleton variant="text" width="100%" height="18px" />
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <Skeleton variant="rectangular" width="80px" height="14px" />
              <Skeleton variant="text" width="40px" height="14px" />
            </div>
            
            {/* Price */}
            <div className="space-y-1">
              <Skeleton variant="text" width="70px" height="20px" />
              <Skeleton variant="text" width="50px" height="16px" />
            </div>
            
            {/* Add to Cart Button */}
            <Skeleton variant="rectangular" width="100%" height="40px" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;

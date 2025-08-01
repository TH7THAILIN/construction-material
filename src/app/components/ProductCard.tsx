'use client';

import Image from 'next/image';
import { useCart } from '../context/CartContext';

// Define the product type to be used as props
interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();

    return (
        <div>
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={192}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={192}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Add to Cart
            </button>
        </div>
    );
};
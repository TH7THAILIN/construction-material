'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of a product
interface Product {
    id: string;
    name: string;
    price: number;
    // Add other product properties as needed
}

// Define the shape of the context state
interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    itemCount: number;
}

// Create the context with a default undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart(prevCart => [...prevCart, product]);
    };
    
    const itemCount = cart.length;

    return (
        <CartContext.Provider value={{ cart, addToCart, itemCount }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook for easy access to the context
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
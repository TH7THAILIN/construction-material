'use client';

import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with your public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CartPage = () => {
    const { cart } = useCart();

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // Call your backend to create the checkout session
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ products: cart }),
        });

        const session = await response.json();

        // Redirect to Stripe Checkout
        const result = await stripe?.redirectToCheckout({
            sessionId: session.id,
        });

        if (result?.error) {
            // Handle any errors that occur during the redirect
            alert(result.error.message);
        }
    };

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b py-2">
                            <span>{item.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="mt-4 text-right font-bold">
                        Total: ${totalPrice.toFixed(2)}
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
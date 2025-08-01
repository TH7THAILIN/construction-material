import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { products } = await req.json(); // Expect an array of products in the request body

    if (!products || !Array.isArray(products)) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    // Define a type that matches your Prisma Product model + cart quantity
    type CartProduct = {
      id: string;
      name: string;
      description?: string;
      price: number;
      imageUrl?: string;
      quantity: number; // Added for cart functionality
    };

    // Create line items for the Stripe Checkout session from the products in the cart
    const lineItems = products.map((product: CartProduct) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          description: product.description,
          // Add product images if available
          ...(product.imageUrl && { images: [product.imageUrl] }),
        },
        unit_amount: Math.round(product.price * 100), // Price in cents
      },
      quantity: product.quantity, // Use actual quantity from cart
    }));

    // Define the base URL for success and cancel URLs
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Create a new Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });

    // Return the session ID to the client
    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

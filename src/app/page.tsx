import { prisma } from '@/lib/prisma';
import Image from 'next/image';

// Define a type for our product for type safety
interface Product {
    id: string;
    name: string;
    description: string | null;
    price: number;
    imageUrl: string | null;
}

// Create a reusable Product Card component
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={192}
            className="w-full h-full object-cover rounded-md"
            style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
            priority
          />
        ) : (
          <span className="text-gray-500">No Image</span>
        )}
      </div>
      <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description || "No description available."}</p>
      <p className="text-lg font-semibold text-blue-600 mt-4">${product.price.toFixed(2)}</p>
    </div>
  );
}

// Make the Home page an async function to use await for data fetching
export default async function Home() {
  // Fetch products directly from the database
  const products = await prisma.product.findMany();

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10">Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found. Please add some products to the database.
        </p>
      )}
    </main>
  );
}
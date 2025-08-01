export type Product = {
  id: number;
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  discount?: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

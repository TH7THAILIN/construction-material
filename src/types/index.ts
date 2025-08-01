// Barrel export for all types
export * from './blogItem';
export * from './category';
export * from './Menu';
export * from './product';
export * from './testimonial';

// Define additional common types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

export interface SearchParams {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

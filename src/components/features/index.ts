// Export all main feature page components (components with their own index.tsx)
export { default as Auth } from './Auth';
export { default as BlogDetails } from './BlogDetails';
export { default as BlogDetailsWithSidebar } from './BlogDetailsWithSidebar';
export { default as BlogGrid } from './BlogGrid';
export { default as BlogGridWithSidebar } from './BlogGridWithSidebar';
export { default as Cart } from './Cart';
export { default as Checkout } from './Checkout';
export { default as Contact } from './Contact';
export { default as Error } from './Error';
export { default as Home } from './Home';
export { default as MailSuccess } from './MailSuccess';
export { default as MyAccount } from './MyAccount';
export { default as Orders } from './Orders';
export { default as ShopDetails } from './ShopDetails';
export { default as ShopWithSidebar } from './ShopWithSidebar';
export { default as ShopWithoutSidebar } from './ShopWithoutSidebar';
export { default as Wishlist } from './Wishlist';

// Export Shop and Blog as namespaces for their subcomponents
export * as Shop from './Shop';
export * as Blog from './Blog';

/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
export const productsStoreView = {
  getError: ({ products }) => products.error,
  getProducts: ({ products }) => products.products,
  getProductsByStatus: ({ products }, status) => products.products.filter(product => product.active === status),
  getProduct: ({ products }) => products.product,
}

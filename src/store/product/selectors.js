const getProducts = (state) => state.products.allProducts;
const getSuccessMessage = (state) => state.products.successMessage;

export const productSelectors = {
  getProducts,
  getSuccessMessage,
};

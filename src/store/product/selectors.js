const getProducts = (state) => state.products.products;
const getProduct = (state) => state.products.product;
const getSuccessMessage = (state) => state.products.successMessage;
const getErrorMessage = (state) => state.products.errorMessage;

export const productSelectors = {
  getProducts,
  getProduct,
  getSuccessMessage,
  getErrorMessage,
};

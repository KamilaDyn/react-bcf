const getProducts = (state) => state.products.products;
const getSuccessMessage = (state) => state.products.successMessage;
const getErrorMessage = (state) => state.products.errorMessage;

export const productSelectors = {
  getProducts,
  getSuccessMessage,
  getErrorMessage,
};

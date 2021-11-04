const getProducts = (state) => state.products.products;
const getSuccessMessage = (state) => state.products.successMessage;

export const productSelectors = {
  getProducts,
  getSuccessMessage,
};

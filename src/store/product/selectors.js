const getProducts = (state) => state.products.products;
const getSuccessMessage = (state) => state.products.successMessage;
const getErrorMessage = (state) => state.products.errorMessage;
const getSingleProduct = (state) => state.products.editProduct;

export const productSelectors = {
  getProducts,
  getSuccessMessage,
  getErrorMessage,
  getSingleProduct,
};

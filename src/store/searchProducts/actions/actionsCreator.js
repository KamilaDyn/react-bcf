import axios from 'axios';
import { Types } from './actionsType';

const searchProducts = (type) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8000/products?type=${type}`)
      .then((response) => {
        dispatch(getProductsSuccess(response.data));
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
const getProductsSuccess = (data) => {
  return { type: Types.SEARCH_PRODUCTS, payload: data };
};

const searchProductsByCategory = (category) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8000/products?category=${category}`)
      .then((response) => {
        dispatch(getProductCategorySuccess(response.data));
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
const getProductCategorySuccess = (data) => {
  return { type: Types.SEARCH_PRODUCTS_BY_CATEGORY, payload: data };
};

export const searchProductsActions = {
  searchProducts,
  searchProductsByCategory,
};

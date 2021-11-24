import axios from "axios";
import { Types } from "./actionsType";

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

export const searchProductsActions = {
  searchProducts,
};

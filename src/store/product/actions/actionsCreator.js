import { Types } from "./actionsType";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  formatError,
  getProduct,
} from "../services";

const getAllProducts = () => {
  return async (dispatch) => {
    await getProducts()
      .then((response) => {
        dispatch(getProductsSuccess(response.data));
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};

const getProductsSuccess = (data) => {
  return { type: Types.GET_PRODUCTS, payload: data };
};
const addNewProduct = (product) => {
  return async (dispatch) => {
    await addProduct(product)
      .then((response) => {
        dispatch(addNewProductSuccess(response.data));
      })
      .catch((error) => {
        console.warn(error.response.statusText);
        const errorMessage = formatError(error.response.statusText);
        dispatch(errorRequest(errorMessage));
      });
  };
};

const addNewProductSuccess = (data) => {
  return { type: Types.ADD_NEW_PRODUCT, payload: data };
};
const deleteOneProduct = (productId) => {
  return async (dispatch) => {
    await deleteProduct(productId)
      .then((response) => {
        dispatch(deleteProductSuccess(productId));
      })
      .catch((error) => {
        console.warn(error.response.statusText);
        const errorMessage = formatError(error.response.statusText);
        dispatch(errorRequest(errorMessage));
      });
  };
};

const deleteProductSuccess = (id) => {
  return { type: Types.DELETE_PRODUCT, payload: id };
};
const getSingleProduct = (id) => {
  return async (dispatch) => {
    return await getProduct(id)
      .then((response) => dispatch(getProductSuccess(response.data)))
      .catch((error) => {
        console.warn(error.response.statusText);
        const errorMessage = formatError(error.response.statusText);
        dispatch(errorRequest(errorMessage));
      });
  };
};

const getProductSuccess = (item) => {
  return { type: Types.GET_SINGLE_PRODUCT, payload: item };
};
const editOneProduct = (item) => {
  return async (dispatch) => {
    await editProduct(item)
      .then((response) => {
        dispatch(editProductSuccess(response.data));
      })
      .catch((error) => {
        console.warn(error.response.statusText);
        const errorMessage = formatError(error.response.statusText);
        dispatch(errorRequest(errorMessage));
      });
  };
};

const editProductSuccess = (item) => {
  return { type: Types.EDIT_PRODUCT, payload: item };
};

const errorRequest = (message) => {
  return {
    type: Types.ERROR_REQUEST,
    payload: message,
  };
};

export const productActions = {
  getAllProducts,
  addNewProduct,
  deleteOneProduct,
  editOneProduct,
  getSingleProduct,
};

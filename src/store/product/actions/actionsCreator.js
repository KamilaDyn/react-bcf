import { Types } from "./actionsType";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "../services";

export const getAllProducts = () => {
  return async (dispatch) => {
    await getProducts()
      .then((response) => {
        dispatch(getProductsSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

const getProductsSuccess = (data) => {
  return { type: Types.GET_PRODUCTS, payload: data };
};

export const addNewProduct = (product) => {
  return async (dispatch) => {
    await addProduct(product)
      .then((response) => {
        dispatch(addNewProductSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const addNewProductSuccess = (data) => {
  return { type: Types.ADD_NEW_PRODUCT, payload: data };
};

export const deleteOneProduct = (productId) => {
  return async (dispatch) => {
    await deleteProduct(productId)
      .then((response) => {
        console.log(response);
        dispatch(deleteProductSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const deleteProductSuccess = (id) => {
  return { type: Types.DELETE_PRODUCT, payload: id };
};

export const editOneProduct = (item) => {
  return async (dispatch) => {
    await editProduct(item)
      .then((response) => {
        console.log(response.data);
        dispatch(editProductSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.res);
      });
  };
};

const editProductSuccess = (item) => {
  return { type: Types.EDIT_PRODUCT, payload: item };
};

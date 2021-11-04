import { Types } from "./actionsType";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
} from "../services";

const getAllProducts = () => {
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
const setInitialProductValues = (data) => {
  return { type: Types.INITIAL_PRODUCT_VALUES, payload: data };
};

const addNewProduct = (product) => {
  return async (dispatch) => {
    await addProduct(product)
      .then((response) => {
        dispatch(addNewProductSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
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

const getSingleProduct = (id) => {
  return async (dispatch) => {
    await getProduct(id)
      .then((response) => {
        dispatch(getProductSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
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
        console.log(error);
      });
  };
};

const editProductSuccess = (item) => {
  return { type: Types.EDIT_PRODUCT, payload: item };
};

export const productActions = {
  getAllProducts,
  setInitialProductValues,
  addNewProduct,
  deleteOneProduct,
  getSingleProduct,
  editOneProduct,
};

import { Types } from "./actions";

const initialState = {
  products: [],
  errorMessage: "",
  successMessage: "",
};

export const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        successMessage: "",
      };
    case Types.INITIAL_PRODUCT_VALUES:
      return {
        ...state,
        products: payload,
        successMessage: "",
        errorMessage: "",
      };
    case Types.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: payload,
        successMessage: "Nowy produkt został dodany",
        errorMessage: "",
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (products) => products.id !== payload.id
        ),
        errorMessage: "",
        successMessage: "Produkt został usunięty",
      };
    case Types.GET_SINGLE_PRODUCT:
      return {
        ...state,
        products: payload,
        errorMessage: "",
        successMessage: "",
      };
    case Types.EDIT_PRODUCT:
      return {
        ...state,
        products: (state.products[payload.id] = payload.id),
        successMessage: "Product został edytowany",
        errorMessage: "",
      };
    case Types.ERROR_REQUEST:
      return {
        ...state,
        successMessage: "",
        errorMessage: payload,
      };

    default:
      return state;
  }
};

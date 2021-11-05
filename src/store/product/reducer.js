import { Types } from "./actions";

const initialState = {
  products: [],
  product: {},
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
        product: {},
      };
    case Types.INITIAL_PRODUCT_VALUES:
      return {
        ...state,
        product: payload,
        successMessage: "",
        errorMessage: "",
      };
    case Types.ADD_NEW_PRODUCT:
      return {
        ...state,
        product: payload,
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
        product: payload,
      };
    case Types.EDIT_PRODUCT:
      return {
        ...state,
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

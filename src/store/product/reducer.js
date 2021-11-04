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
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (products) => products.id !== payload.id
        ),
        successMessage: "Produkt został usunięty",
      };
    case Types.GET_SINGLE_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case Types.EDIT_PRODUCT:
      return {
        ...state,
        products: (state.products[payload.id] = payload),
        successMessage: "Product został edytowany",
      };

    default:
      return state;
  }
};

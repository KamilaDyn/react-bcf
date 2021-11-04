import { Types } from "./actions";

const initialState = {
  allProducts: [],
  errorMessage: "",
  successMessage: "",
};

export const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
        successMessage: "",
      };
    case Types.ADD_NEW_PRODUCT:
      return {
        ...state,
        allProducts: payload,
        successMessage: "Nowy produkt został dodany",
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts.filter(
          (allProducts) => allProducts.id !== payload.id
        ),
        successMessage: "Product został usunięty",
      };
    case Types.EDIT_PRODUCT:
      return {
        ...state,
        allProducts: (state.allProducts[payload.id] = payload),
        successMessage: "Product został edytowany",
      };

    default:
      return state;
  }
};

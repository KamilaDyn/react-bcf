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
      };
    case Types.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
        successMessage: "Nowy produkt został dodany",
        errorMessage: "",
      };
    case Types.DELETE_PRODUCT:
      console.log(payload);
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
        errorMessage: "",
        successMessage: "Produkt został usunięty",
      };
    case Types.EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload.id ? payload : product
        ),
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
      console.warn(`Nie mamy akcji typu ${type}`);
      return state;
  }
};

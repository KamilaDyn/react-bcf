import { Types } from "./actions";

const initialState = {
  products: [],
  errorMessage: "",
  successMessage: "",
  editProduct: {},
};

export const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        editProduct: {},
      };
    case Types.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
        successMessage: "Nowy produkt został dodany",
        errorMessage: "",
        editProduct: {},
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
        errorMessage: "",
        successMessage: "Produkt został usunięty",
        editProduct: {},
      };
    case Types.GET_SINGLE_PRODUCT:
      return {
        ...state,
        editProduct: payload,
        errorMessage: "",
        successMessage: "",
      };
    case Types.EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload.id ? payload : product
        ),
        successMessage: "Product został edytowany",
        errorMessage: "",
        editProduct: payload,
      };
    case Types.ERROR_REQUEST:
      return {
        ...state,
        successMessage: "",
        errorMessage: payload,
        editProduct: {},
      };

    default:
      console.warn(`Nie mamy akcji typu ${type}`);
      return state;
  }
};

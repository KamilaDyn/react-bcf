import { Types } from "./actions";

export const ProductsTypeReducer = (productsType = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SEARCH_PRODUCTS:
      return payload;
    default:
      console.warn(`Nie mamy akcji typu ${type}`);
      return productsType;
  }
};

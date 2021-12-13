import { Types } from './actions';

export const ProductsTypeReducer = (productsType = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SEARCH_PRODUCTS:
      return payload;
    case Types.SEARCH_PRODUCTS_BY_CATEGORY:
      return payload;
    default:
      return productsType;
  }
};

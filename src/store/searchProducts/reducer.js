import { Types } from './actions';

export const ProductsTypeReducer = (productsType = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SEARCH_PRODUCTS:
      return payload;
    case Types.SEARCH_PRODUCTS_BY_CATEGORY:
      return payload;
    case Types.SORT_TYPES_BY_LOWER_PRICE:
      return payload;
    default:
      return productsType;
  }
};

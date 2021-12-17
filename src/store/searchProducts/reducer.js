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
    case Types.ORDER_PRODUCTS_ASC:
      const orderAsc = payload.sort((a, b) => {
        return a.price - b.price;
      });
      return orderAsc;
    case Types.ORDER_PRODUCTS_DESC:
      const orderDesc = payload.sort((a, b) => {
        return b.price - a.price;
      });
      return orderDesc;
    default:
      return productsType;
  }
};

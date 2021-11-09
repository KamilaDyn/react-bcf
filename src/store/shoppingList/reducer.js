import { Types } from "./actions";

export const ShoppingListReducer = (shoppingList = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SHOPPING_LIST:
      return shoppingList;
    case Types.ADD_PRODUCT_TO_LIST:
      return [...shoppingList, payload];
    case Types.INCREMENT_PRODUCT_IN_LIST:
      return shoppingList.map((item) =>
        item.id === payload.id ? payload : item
      );
    case Types.DECREMENT_PRODUCTS_IN_LIST:
      return shoppingList.map((item) =>
        item.id === payload.id ? payload : item
      );
    case Types.DELETE_PRODUCT_FROM_LIST:
      return shoppingList.filter((product) => product.id !== payload);
    default:
      return shoppingList;
  }
};

import { Types } from "./actions";

const initialState = {
  shoppingList: [],
  cardOpen: false,
};

export const ShoppingListReducer = (baskedState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SHOPPING_LIST:
      return { ...baskedState, shoppingList: baskedState.shoppingList };
    case Types.ADD_PRODUCT_TO_LIST:
      return {
        ...baskedState,
        shoppingList: [...baskedState.shoppingList, payload],
      };
    case Types.INCREMENT_PRODUCT_IN_LIST:
      return {
        ...baskedState,
        shoppingList: baskedState.shoppingList.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case Types.DECREMENT_PRODUCTS_IN_LIST:
      return {
        ...baskedState,
        shoppingList: baskedState.shoppingList.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case Types.DELETE_PRODUCT_FROM_LIST:
      return {
        ...baskedState,
        shoppingList: baskedState.shoppingList.filter(
          (product) => product.id !== payload
        ),
      };
    case Types.TOGGLE_SHOPPING_CARD:
      return { ...baskedState, cardOpen: !baskedState.cardOpen };
    default:
      return baskedState;
  }
};

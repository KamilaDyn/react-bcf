import { Types } from "./actionsType";

const addNewProductToList = (item) => {
  return { type: Types.ADD_PRODUCT_TO_LIST, payload: item };
};

const incrementProductInList = (item) => {
  return { type: Types.INCREMENT_PRODUCT_IN_LIST, payload: item };
};

const decrementProductInList = (item) => {
  return { type: Types.DECREMENT_PRODUCTS_IN_LIST, payload: item };
};
const deleteProductFromList = (id) => {
  return { type: Types.DELETE_PRODUCT_FROM_LIST, payload: id };
};
const toggleShoppingCard = () => {
  return { type: Types.TOGGLE_SHOPPING_CARD };
};

export const shoppingListActions = {
  addNewProductToList,
  incrementProductInList,
  decrementProductInList,
  deleteProductFromList,
  toggleShoppingCard,
};

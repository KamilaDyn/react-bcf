import { Types } from './actionsType';

const currentShoppingList = () => {
  return { type: Types.SHOPPING_LIST };
};

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

const finalShoppingPrice = (item) => {
  return { type: Types.FINAL_SHOPPING_PRICE, payload: item };
};
const reducePriceWihVoucher = (item) => {
  return {
    type: Types.REDUCE_PRICE_WITH_VOUCHER,
    payload: item,
  };
};

const raisePriceByDeliveryPrice = (price, deliveryType) => {
  return {
    type: Types.REDUCE_PRICE_WITH_DELIVERY_TYPE,
    payload: { price, deliveryType },
  };
};
const cleanBasket = (state) => {
  return {
    type: Types.CLEAN_BASKET,
    payload: state,
  };
};

export const shoppingListActions = {
  addNewProductToList,
  incrementProductInList,
  decrementProductInList,
  deleteProductFromList,
  toggleShoppingCard,
  finalShoppingPrice,
  currentShoppingList,
  reducePriceWihVoucher,
  raisePriceByDeliveryPrice,
  cleanBasket,
};

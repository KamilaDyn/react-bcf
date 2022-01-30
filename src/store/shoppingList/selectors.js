const getShoppingList = (state) => state.shoppingList.shoppingList;
const getCardOpen = (state) => state.shoppingList.cardOpen;
const finalPrice = (state) => state.shoppingList.finalPrice;
const isVoucherUsed = (state) => state.shoppingList.isVoucherUsed;
const deliveryType = (state) => state.shoppingList.deliveryType;

export const shoppingSelectors = {
  getShoppingList,
  getCardOpen,
  finalPrice,
  isVoucherUsed,
  deliveryType,
};

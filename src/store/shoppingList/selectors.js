const getShoppingList = (state) => state.shoppingList.shoppingList;
const getCardOpen = (state) => state.shoppingList.cardOpen;

export const shoppingSelectors = {
  getShoppingList,
  getCardOpen,
};

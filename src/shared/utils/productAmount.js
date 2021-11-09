import { useSelector } from "react-redux";
import { selectors } from "store";
export const useAmountOfProduct = () => {
  const shoppingList = useSelector(selectors.shoppingList.getShoppingList);

  const countItemsInBasket = () => {
    if (shoppingList.length > 0) {
      const item = shoppingList.filter((item) => item.count > 0);
      return item.map((i) => i.count).reduce((a, b) => a + b, 0);
    } else {
      return "0";
    }
  };
  return countItemsInBasket;
};
import { useContext } from "react";
import { ProductContext } from "../../../context";

export const useShoppingCardData = () => {
  const productContext = useContext(ProductContext);
  const { shoppingList, open, handleDrawer, quantity } = productContext;

  const handleDelete = (id) => {
    productContext.dispatch({ id, type: "REMOVE" });
  };

  const calculatePrice = () => {
    if (shoppingList.length > 0) {
      const item = shoppingList.filter((item) => item.price > 0);
      return item
        .map((i) => i.price)
        .reduce((a, b) => a + b, 0)
        .toFixed(2);
    }
  };
  return {
    handleDelete,
    shoppingList,
    open,
    handleDrawer,
    quantity,
    calculatePrice,
  };
};

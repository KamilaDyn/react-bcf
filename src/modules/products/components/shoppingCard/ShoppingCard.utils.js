import { useContext } from "react";
import { ProductContext } from "../../../context";

export const useShoppingCardData = () => {
  const productContext = useContext(ProductContext);
  const { shoppingList, open, handleDrawer, quantity } = productContext;

  const handleDelete = (id) => {
    productContext.dispatch({ id, type: "REMOVE" });
  };

  return {
    handleDelete,
    shoppingList,
    open,
    handleDrawer,
    quantity,
  };
};

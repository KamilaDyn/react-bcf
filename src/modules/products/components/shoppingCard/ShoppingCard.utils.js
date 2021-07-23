import { useContext } from "react";
import { ProductContext } from "../index";

export const ShoppingCardUtils = () => {
  const productContext = useContext(ProductContext);
  const { shoppingList, open, handleDrawer } = productContext;

  const handleDelete = (id) => {
    productContext.dispatch({ id, type: "REMOVE" });
  };

  return {
    handleDelete,
    shoppingList,
    open,
    handleDrawer,
  };
};

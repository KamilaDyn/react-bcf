import { useProductContext } from "../../../context";

export const useShoppingCardData = () => {
  const { productContext } = useProductContext();
  const { shoppingList, openShoppingCard, quantity, setOpenShoppingCard } =
    productContext;

  const handleDelete = (id) => {
    productContext.dispatch({ id, type: "REMOVE" });
  };
  const handleDrawer = () => {
    setOpenShoppingCard(false);
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
    openShoppingCard,
    setOpenShoppingCard,
    handleDrawer,
    quantity,
    calculatePrice,
  };
};

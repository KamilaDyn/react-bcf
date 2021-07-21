const ShoppingListReducer = (shoppingList, action) => {
  switch (action.type) {
    case "ADD":
      return [...shoppingList, action.productItem];
    case "REMOVE":
      return shoppingList.filter((product) => product.id !== action.id);
    case "INCREMENT":
      return;
    case "DECREMENT":
      return;
    default:
      throw new Error("Ooop, something went wrong...");
  }
};

export default ShoppingListReducer;

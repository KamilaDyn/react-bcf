import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "store";

export const useShoppingCardData = () => {
  const shoppingList = useSelector(selectors.shoppingList.getShoppingList);
  const products = useSelector(selectors.products.getProducts);
  const dispatch = useDispatch();
  const {
    incrementProductInList,
    decrementProductInList,
    deleteProductFromList,
  } = actions.shoppingList;

  const handleDelete = (id) => {
    dispatch(deleteProductFromList(id));
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
  const increment = (product) => {
    const currentProduct = [...shoppingList];
    const prodPrice = products.find((item) => {
      return item.id === product.id;
    });
    const findProduct = currentProduct.find((item) => item.id === product.id);
    findProduct.count = findProduct.count + 1;
    findProduct.price = findProduct.price + prodPrice.price;
    dispatch(incrementProductInList(currentProduct));
  };
  const decrement = (product) => {
    const currentProduct = [...shoppingList];
    const prodPrice = products.find((item) => {
      return item.id === product.id;
    });
    const findProduct = currentProduct.find((item) => item.id === product.id);
    findProduct.count = findProduct.count - 1;
    findProduct.price = findProduct.price - prodPrice.price;
    dispatch(decrementProductInList(currentProduct));
  };

  return {
    handleDelete,
    calculatePrice,
    shoppingList,
    increment,
    decrement,
  };
};

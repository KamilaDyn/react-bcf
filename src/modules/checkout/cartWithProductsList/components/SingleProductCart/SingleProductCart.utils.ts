import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectors, actions } from 'store';

export const useSingleCart = () => {
  const shoppingList = useSelector(selectors.shoppingList.getShoppingList);
  const products = useSelector(selectors.products.getProducts);
  const dispatch = useDispatch();
  const {
    incrementProductInList,
    decrementProductInList,
    deleteProductFromList,
  } = actions.shoppingList;

  console.log(shoppingList);

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

  const deleteItem = (id) => {
    dispatch(deleteProductFromList(id));
  };
  return { shoppingList, increment, decrement, deleteItem };
};

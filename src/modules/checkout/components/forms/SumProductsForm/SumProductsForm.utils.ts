import { useSelector } from 'react-redux';
import { selectors } from 'store';

export const useSumProducts = () => {
  const products = useSelector(selectors.shoppingList.getShoppingList);
  return { products };
};

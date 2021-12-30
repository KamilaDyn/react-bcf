import { useSelector } from 'react-redux';
import { selectors } from 'store';

export const useProductTypeList = () => {
  const isCardOpen = useSelector(selectors.shoppingList.getCardOpen);

  return isCardOpen;
};

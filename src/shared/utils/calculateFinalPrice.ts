import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from 'store';

export const useCalculatePrice = () => {
  const isVoucherUsed = useSelector(selectors.shoppingList.isVoucherUsed);
  const { finalShoppingPrice } = actions.shoppingList;
  const dispatch = useDispatch();

  const calculatePrice = (products) => {
    if (products && products.length > 0) {
      const item = products
        .filter((item) => item.price > 0)
        .map((i) => i.price)
        .reduce((a, b) => a + b, 0)
        .toFixed(2);
      if (isVoucherUsed) {
        const reducePrice = item - 150;
        dispatch(finalShoppingPrice(reducePrice));
      } else {
        dispatch(finalShoppingPrice(item));
      }
    }
  };
  return {
    calculatePrice,
  };
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from 'store';

export const useProductTypeList = (type) => {
  const foundProducts = useSelector(
    selectors.searchProducts.getSearchedProducts
  );
  const isCardOpen = useSelector(selectors.shoppingList.getCardOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.searchProducts.searchProducts(type));
    }, 200);
  }, []);
  return { foundProducts, isCardOpen };
};

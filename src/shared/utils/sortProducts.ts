import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SelectChangeEvent } from '@mui/material';
import { selectors, actions } from 'store';

export const useOrderProducts = (type) => {
  const [sortType, setSortType] = useState('relevant');
  const products = useSelector(selectors.searchProducts.getSearchedProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.searchProducts.searchProducts(type));
    sortArray(sortType);
  }, []);
  const sortArray = (order) => {
    switch (order) {
      case 'relevant':
        return dispatch(actions.searchProducts.searchProducts(type));
      case 'asc':
        const ascSorted = [...products].sort((a, b) => a.price - b.price);
        return dispatch(actions.searchProducts.orderProductsAsc(ascSorted));
      case 'desc':
        const orderDesc = [...products].sort((a, b) => b.price - a.price);
        return dispatch(actions.searchProducts.orderProductsDesc(orderDesc));
      default:
        return dispatch(actions.searchProducts.searchProducts(type));
    }
  };
  const handleChange = async (event: SelectChangeEvent) => {
    setSortType(event.target.value);
  };
  return {
    handleChange,
    sortArray,
    products,
    sortType,
  };
};

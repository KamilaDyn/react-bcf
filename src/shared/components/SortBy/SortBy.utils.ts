import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'store';

export const useSortBy = () => {
  const [sortBy, setSortBy] = useState('');
  const filteredProducts = useSelector(
    selectors.searchProducts.getSearchedProducts
  );

  const sortByHightPrice = filteredProducts.sort((a, b) => {
    return b.price - a.price;
  });
  const sortByLowPrice = filteredProducts.sort((a, b) => {
    return a.price - b.price;
  });

  const sortProductsByValue = (value: string) => {
    switch (value) {
      case 'asc':
        return sortByLowPrice;
      case 'desc':
        return sortByHightPrice;
      default:
        return filteredProducts;
    }
  };

  return {
    sortBy,
    setSortBy,
    sortProductsByValue,
  };
};

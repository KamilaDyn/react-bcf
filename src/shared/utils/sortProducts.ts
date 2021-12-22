import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material';
import { selectors } from 'store';

export const useOrderProducts = () => {
  const [foundProducts, setFoundProducts] = React.useState<any[]>([]);
  const [sortType, setSortType] = React.useState('relevant');
  const products = useSelector(selectors.searchProducts.getSearchedProducts);

  useEffect(() => {
    setTimeout(() => {
      sortArray(sortType);
    }, 1000);
  }, [sortType]);
  const handleChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value);
  };
  const sortArray = (type) => {
    console.log('type', type);
    switch (type) {
      case 'relevant':
        return setFoundProducts(products);
      case 'asc':
        const ascSorted = [...products].sort((a, b) => a.price - b.price);
        console.log('asc', ascSorted);
        return setFoundProducts(ascSorted);
      case 'desc':
        const orderDesc = [...products].sort((a, b) => {
          return b.price - a.price;
        });
        console.log('desc', orderDesc);
        return setFoundProducts(orderDesc);
      default:
        return setFoundProducts(products);
    }
  };

  return {
    handleChange,
    foundProducts,
    sortType,
  };
};

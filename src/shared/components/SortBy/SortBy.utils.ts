import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material';
import { selectors } from 'store';

export const useSortBy = () => {
  const [sortBy, setSortBy] = useState('');
  const filteredProducts = useSelector(
    selectors.searchProducts.getSearchedProducts
  );
  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  return {
    sortBy,
    setSortBy,
    filteredProducts,
    handleChange,
  };
};

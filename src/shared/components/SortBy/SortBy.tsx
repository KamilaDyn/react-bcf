import React, { FC } from 'react';
import { Box, FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from 'store';
import { useSortBy } from './SortBy.utils';
interface ISort {
  type: string;
}

const SortBy: FC<ISort> = ({ type }) => {
  const { handleChange, sortBy, filteredProducts } = useSortBy();
  const dispatch = useDispatch();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={sortBy}
          onChange={handleChange}
        >
          <MenuItem
            value="relevant"
            onClick={() =>
              dispatch(actions.searchProducts.searchProducts(type))
            }
          >
            Trafność: największa
          </MenuItem>
          <MenuItem
            value="asc"
            onClick={() => {
              dispatch(
                actions.searchProducts.orderProductsAsc(filteredProducts)
              );
            }}
          >
            Cena: najmniejsza
          </MenuItem>
          <MenuItem
            value="desc"
            onClick={() => {
              dispatch(
                actions.searchProducts.orderProductsDesc(filteredProducts)
              );
            }}
          >
            Cena: największa
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;

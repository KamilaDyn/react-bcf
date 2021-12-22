import React, { FC } from 'react';
import { Box, FormControl, Select, MenuItem } from '@mui/material';
import { useOrderProducts } from 'shared';
import { string } from 'yup';

interface ISort {
  type: string;
}

const SortBy: FC<ISort> = ({ type }) => {
  const { handleChange, sortType } = useOrderProducts();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={sortType}
          onChange={handleChange}
        >
          <MenuItem value="relevant">Trafność: największa</MenuItem>
          <MenuItem value="asc">Cena: najmniejsza</MenuItem>
          <MenuItem value="desc">Cena: największa</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;

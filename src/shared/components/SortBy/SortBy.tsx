import React, { FC } from 'react';
import { Box, FormControl, Select, MenuItem } from '@mui/material';
import { useOrderProducts } from 'shared';

interface ISort {
  type: string;
}

const SortBy: FC<ISort> = ({ type }) => {
  const { handleChange, sortType, sortArray } = useOrderProducts(type);
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
          <MenuItem value="asc" onClick={() => sortArray('asc')}>
            Cena: najmniejsza
          </MenuItem>
          <MenuItem value="desc" onClick={() => sortArray('desc')}>
            Cena: największa
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;

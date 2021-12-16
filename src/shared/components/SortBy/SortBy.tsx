import React, { FC } from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useSortBy } from './SortBy.utils';

interface ISortby {
  type: string;
}

const SortBy: FC<ISortby> = () => {
  const { setSortBy, sortBy, sortProductsByValue } = useSortBy();
  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };
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
            onClick={() => sortProductsByValue('relevant')}
          >
            Trafność: największa
          </MenuItem>
          <MenuItem
            value="asc"
            onClick={() => {
              sortProductsByValue('asc');
            }}
          >
            Cena: najmniejsza
          </MenuItem>
          <MenuItem
            value="desc"
            onClick={() => {
              sortProductsByValue('desc');
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

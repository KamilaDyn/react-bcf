import React from 'react';
import { Box } from '@mui/material';
import { SearchCard, ProductsTypeList } from '../../components';

const SearchProducts = (props) => {
  return (
    <Box p={5}>
      <SearchCard type={props.match.params.type} />
      <ProductsTypeList type={props.match.params.type} />
    </Box>
  );
};

export default SearchProducts;

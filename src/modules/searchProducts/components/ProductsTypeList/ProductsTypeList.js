import React from 'react';
import { Box, Grid } from '@mui/material';
import { ProductCard } from 'shared/components';
import { useProductTypeList } from './ProductsTypeList.utils.js';

const ProductTypeList = ({ type }) => {
  const { foundProducts, isCardOpen } = useProductTypeList(type);
  return (
    <Box>
      <Grid container spacing={4}>
        {foundProducts.length &&
          foundProducts.map(({ id, title, image, category, price }) => (
            <Grid
              item
              xs={12}
              sm={isCardOpen ? 12 : 6}
              md={isCardOpen ? 6 : 4}
              lg={isCardOpen ? 4 : 3}
              key={id}
            >
              <ProductCard
                id={id}
                title={title}
                image={image}
                category={category}
                price={price}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ProductTypeList;

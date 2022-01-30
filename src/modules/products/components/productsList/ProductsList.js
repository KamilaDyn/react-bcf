import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { selectors } from 'store';
import { ProductCard } from 'shared/components';
import { useProductList } from './ProductsList.utils';

const ProductsList = () => {
  const allProducts = useProductList();
  const isCardOpen = useSelector(selectors.shoppingList.getCardOpen);
  return (
    <Grid container spacing={4}>
      {allProducts &&
        allProducts.length &&
        allProducts.map(({ id, title, image, category, price }) => (
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
  );
};

export default ProductsList;

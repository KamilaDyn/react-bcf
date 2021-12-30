import React, { FC } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { CheckoutSteps } from '../../../shared';
import { SingleProductCart, Sidebar } from '../../components';

const CartWithProductsList: FC = () => {
  return (
    <Box>
      <CheckoutSteps />
      <Grid container marginY={10}>
        <Grid item xs={12} md={8}>
          <SingleProductCart />
        </Grid>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartWithProductsList;

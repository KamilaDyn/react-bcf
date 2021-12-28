import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { CheckoutSteps, AddressFormik, Sidebar } from '../../components';

const Checkout: FC = () => {
  return (
    <Grid container spacing={5} p={3} display="flex" justifyContent="center">
      <Grid container item xs={8} md={7}>
        <Grid item xs={12}>
          <CheckoutSteps />
        </Grid>
        <Grid item xs={12}>
          <AddressFormik />
        </Grid>
      </Grid>
      <Grid item xs={4} md={3} mt={10}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default Checkout;

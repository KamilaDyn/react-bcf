import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { CheckoutSteps, AddressForm, Sidebar } from '../../components';

const Checkout: FC = () => {
  return (
    <Grid container spacing={3} p={3}>
      <Grid container item xs={8}>
        <Grid item xs={12}>
          <CheckoutSteps />
        </Grid>
        <Grid item xs={12}>
          <AddressForm />
        </Grid>
      </Grid>
      <Grid item xs={4} mt={10}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default Checkout;

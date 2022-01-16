import { FC } from 'react';
import { Grid } from '@mui/material';
import { CheckoutSteps, Sidebar, CheckoutFormik } from '../../components';
import { useCheckoutForm } from './Checkout.utils';

const Checkout: FC = () => {
  const { activeStep, setActiveStep } = useCheckoutForm();
  return (
    <Grid container item xs={8} md={12} padding={15}>
      <Grid item xs={6}>
        <CheckoutSteps activeStep={activeStep} setActiveStep={setActiveStep} />
      </Grid>
      <Grid item xs={12}>
        <CheckoutFormik activeStep={activeStep} setActiveStep={setActiveStep} />
      </Grid>
    </Grid>
  );
};

export default Checkout;

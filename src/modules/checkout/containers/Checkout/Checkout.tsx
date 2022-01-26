import { FC } from 'react';
import { Grid } from '@mui/material';
import { CheckoutSteps, Sidebar, CheckoutFormik } from '../../components';
import { useCheckoutForm } from './Checkout.utils';

const Checkout: FC = () => {
  const { activeStep, setActiveStep } = useCheckoutForm();
  return (
    <Grid container spacing={5} p={3} display="flex" justifyContent="center">
      <Grid container item xs={8} md={7}>
        <Grid item xs={12}>
          <CheckoutSteps
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckoutFormik
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Grid>
      </Grid>
      <Grid item xs={4} md={3} mt={10}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default Checkout;

import React, { FC } from 'react';
import { Container } from '@mui/material';
import { CheckoutSteps } from '../../components';

const Checkout: FC = () => {
  return (
    <Container>
      <CheckoutSteps />
    </Container>
  );
};

export default Checkout;

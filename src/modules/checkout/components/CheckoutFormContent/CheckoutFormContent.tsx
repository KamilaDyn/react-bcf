import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { Form } from 'formik';
import { StyledButton } from '../shared';
import { AddressForm } from '../forms';

interface Props {
  activeStep: number;
  setActiveStep: (setActiveStep: number) => void;
  isLastStep: boolean;
}

function renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <div>Karty i produkty</div>;
    case 1:
      return <AddressForm />;
    case 2:
      return <div>Payment form</div>;
    case 3:
      return <div>Podsumowanie (submit)</div>;
    default:
      return <div>not found</div>;
  }
}

const CheckoutFormContent: FC<Props> = ({
  activeStep,
  setActiveStep,
  isLastStep,
}) => {
  return (
    <Form>
      {renderStepContent(activeStep)}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {activeStep !== 0 && (
            <StyledButton
              onClick={() => {
                setActiveStep(activeStep - 1);
              }}
              transparent
            >
              Wróć
            </StyledButton>
          )}
        </Grid>
        <Grid item xs={6}>
          <StyledButton type="submit">
            {isLastStep ? 'Potwierdź' : 'Dalej'}
          </StyledButton>
        </Grid>
      </Grid>
    </Form>
  );
};

export default CheckoutFormContent;

import { FC } from 'react';
import { Grid } from '@mui/material';
import { Form } from 'formik';
import { StyledButton, SetProps } from '../shared';
import { AddressForm, SumProductsForm } from '../forms';

function renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <SumProductsForm />;
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

const CheckoutFormContent: FC<SetProps> = ({
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

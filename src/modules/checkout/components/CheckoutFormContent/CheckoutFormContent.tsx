import { FC } from 'react';
import { Grid } from '@mui/material';
import { Form, useFormikContext } from 'formik';
import { AddressForm, PaymentForm } from '../forms';
import { StyledButton } from '../shared';

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
      return <PaymentForm />;
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
  const { isValid } = useFormikContext();
  return (
    <Form>
      {renderStepContent(activeStep)}

      <Grid container spacing={3}>
        <Grid item xs={6}>
          {activeStep !== 0 && (
            <StyledButton
              onClick={() => setActiveStep(activeStep - 1)}
              transparent
            >
              Wróć
            </StyledButton>
          )}
        </Grid>
        <Grid item xs={6}>
          <StyledButton type="submit" disabled={!isValid}>
            {isLastStep ? 'Potwierdź' : 'Dalej'}
          </StyledButton>
        </Grid>
      </Grid>
    </Form>
  );
};

export default CheckoutFormContent;

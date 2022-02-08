import { FC } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
} from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { StyledCard, PropsTypes } from '../../shared';
import { Sidebar } from '../../Sidebar';
import { usePaymentForm, fields } from './PaymentForm.utils';

const PaymentForm: FC<PropsTypes> = ({ activeStep }) => {
  const { chosenPayment, handleChange } = usePaymentForm();
  return (
    <>
      <Grid
        container
        spacing={5}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginY={10}
      >
        <Grid item xs={12} md={8}>
          <StyledCard>
            <FormControl component="fieldset">
              <FormLabel component="legend">Wybierz sposób płatnosci</FormLabel>
              <RadioGroup
                aria-label="payment"
                name="paymentType"
                value={chosenPayment}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="debitCard"
                  control={<Radio />}
                  label="Zapłać kartą"
                />
                {chosenPayment === 'debitCard' && (
                  <Grid
                    container
                    spacing={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    {fields.map(({ id, label, type, name }) => (
                      <Grid item xs={6}>
                        <Field
                          key={id}
                          fullWidth
                          component={TextField}
                          name={name}
                          type={type}
                          label={label}
                          variant="outlined"
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
                <FormControlLabel
                  value="blik"
                  control={<Radio />}
                  label="Zapłać blinkiem"
                />
                {chosenPayment === 'blik' && (
                  <Field
                    fullWidth
                    component={TextField}
                    name="blik"
                    type="text"
                    label="Kod blik"
                    variant="outlined"
                  />
                )}
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label="Zapłać przy odbiorze"
                />
              </RadioGroup>
            </FormControl>
          </StyledCard>
        </Grid>
        <Grid item xs={10} md={4}>
          <Sidebar activeStep={activeStep} />
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentForm;

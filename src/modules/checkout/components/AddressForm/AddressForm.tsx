import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { Field, Form } from 'formik';
import { TextField } from 'formik-mui';
import { StyledButton, StyledCard } from '../../atoms';
import { addressFormDetails, useAddressForm } from './AddressFrom.utils';

type IForm = {
  name: string;
  label: string;
  type: string;
  id: number;
  value?: string;
};

const AddressForm: FC = () => {
  const { billingFormDetails, handleSubmit } = useAddressForm();

  return (
    <Form onSubmit={handleSubmit}>
      <StyledCard>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {addressFormDetails.map(({ name, type, label, id }: IForm) => (
            <Grid item xs={6} key={id}>
              <Field
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
      </StyledCard>
      <StyledCard>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography mb={5}>Adres do rozliczenia</Typography>
            <label>
              <Field type="checkbox" name="checkbox" />
              Taki sam jak adres wysyłki
            </label>
          </Grid>
          {billingFormDetails.map(({ name, type, label, id, value }: IForm) => (
            <Grid item xs={6} key={id}>
              <Field
                fullWidth
                component={TextField}
                name={name}
                type={type}
                label={label}
                variant="outlined"
                value={value}
              />
            </Grid>
          ))}
        </Grid>
      </StyledCard>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <StyledButton transparent>Wróć do karty</StyledButton>
        </Grid>
        <Grid item xs={6}>
          <StyledButton type="submit">Przejdź do zapłaty</StyledButton>
        </Grid>
      </Grid>
    </Form>
  );
};

export default AddressForm;

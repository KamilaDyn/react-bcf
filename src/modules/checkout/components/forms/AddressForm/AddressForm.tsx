import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { StyledCard } from '../../shared';
import { addressFormDetails, useAddressForm } from './AddressForm.utils';

const AddressForm: FC = () => {
  const { billingFormDetails } = useAddressForm();

  return (
    <>
      <StyledCard>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {addressFormDetails.map(({ name, type, label, id }) => (
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
          {billingFormDetails.map(({ name, type, label, id, value }) => (
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
    </>
  );
};

export default AddressForm;

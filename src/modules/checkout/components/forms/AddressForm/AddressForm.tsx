import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { StyledCard, PropsTypes } from '../../shared';
import { addressFormDetails, useAddressForm } from './AddressForm.utils';
import { Sidebar } from '../../Sidebar';

const AddressForm: FC<PropsTypes> = ({ activeStep }) => {
  const { billingFormDetails } = useAddressForm();

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
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
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
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
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
        </Grid>
        <Grid item xs={10} md={4}>
          <Sidebar activeStep={activeStep} />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;

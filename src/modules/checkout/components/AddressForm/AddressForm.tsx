import React, { FC } from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-mui';
import {
  addressFormDetails,
  billingFormDetails,
  SignupSchema,
} from './AddressFrom.utils';
import { StyledCard, StyledButton } from './AddressForm.style';

type IForm = {
  name: string;
  label: string;
  type: string;
  id: number;
};

const AddressForm: FC = () => {
  const onSubmit = () => {
    console.log('ok');
  };
  console.log(addressFormDetails);
  return (
    <Formik
      initialValues={{ name: 'jared' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={SignupSchema}
    >
      {(props) => (
        <Form onSubmit={onSubmit}>
          <StyledCard>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
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
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography mb={5}>Adres do rozliczenia</Typography>
                <label>
                  <Field type="checkbox" name="checked" value="theSame" />
                  Taki sam jak adres wysyłki
                </label>
              </Grid>
              {billingFormDetails.map(({ name, type, label, id }: IForm) => (
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
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <StyledButton back>Wróć do karty</StyledButton>
            </Grid>
            <Grid item xs={6}>
              <StyledButton type="submit">Przejdź do zapłaty</StyledButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AddressForm;

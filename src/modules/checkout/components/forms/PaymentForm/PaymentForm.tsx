import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { StyledCard } from '../../shared';

const PaymentForm: FC = () => {
  return (
    <>
      <StyledCard>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography mb={5}>Dane karty</Typography>
          </Grid>
          <Grid item xs={6}>
            <Field
              fullWidth
              component={TextField}
              name="card"
              type="text"
              label="card"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </StyledCard>
    </>
  );
};

export default PaymentForm;

import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Box } from '@mui/material';
import { StyledButton } from '../../atoms';
const VoucherFormik: FC = () => {
  return (
    <Formik
      initialValues={{ voucher: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form>
        <Field
          fullWidth
          component={TextField}
          name="voucher"
          type="text"
          label="Voucher"
          variant="outlined"
        />
        <Box>
          <StyledButton transparent>Wykorzystaj Voucher</StyledButton>
        </Box>
      </Form>
    </Formik>
  );
};

export default VoucherFormik;

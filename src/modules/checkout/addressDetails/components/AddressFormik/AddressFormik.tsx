import { FC } from 'react';
import { Formik } from 'formik';
import { AddressForm } from '../AddressForm';
import { SignupSchema, initialValues } from './AddressFormik.utils';

const AddressFormik: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={SignupSchema}
    >
      <AddressForm />
    </Formik>
  );
};

export default AddressFormik;

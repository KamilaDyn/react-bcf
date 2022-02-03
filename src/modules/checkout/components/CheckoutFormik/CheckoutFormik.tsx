import { FC } from 'react';
import { Formik } from 'formik';
import { BaseStepProps } from '../shared/types';
import { CheckoutFormContent } from '../CheckoutFormContent';
import { useCheckoutFormik } from './CheckoutFormik.utils';

const CheckoutFormik: FC<BaseStepProps> = ({ activeStep, setActiveStep }) => {
  const { handleSubmit, isLastStep, currentValidationSchema, initialValues } =
    useCheckoutFormik(activeStep, setActiveStep);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={currentValidationSchema}
    >
      <CheckoutFormContent
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        isLastStep={isLastStep}
      />
    </Formik>
  );
};

export default CheckoutFormik;

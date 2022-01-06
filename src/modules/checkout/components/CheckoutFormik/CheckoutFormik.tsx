import React, { FC } from 'react';
import { Formik } from 'formik';
import { CheckoutFormContent } from '../CheckoutFormContent';
import { steps } from '../shared';
import { SignupSchema, initialValues } from './CheckoutFormik.utils';

interface Props {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
}

const CheckoutFormik: FC<Props> = ({ activeStep, setActiveStep, children }) => {
  const isLastStep = activeStep === Object.keys(steps).length - 1;
  const currentValidationSchema = SignupSchema[activeStep];
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const submitForm = async (values, actions) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
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

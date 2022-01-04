import { useState } from 'react';
export const useCheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  return { activeStep, setActiveStep };
};

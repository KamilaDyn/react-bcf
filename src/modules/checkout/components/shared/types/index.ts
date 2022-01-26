export interface BaseStepProps {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
}

export interface SetProps extends BaseStepProps {
  isLastStep: boolean;
}

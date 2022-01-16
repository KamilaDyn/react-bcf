export interface BaseStepProps {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
}

export interface SetProps extends BaseStepProps {
  isLastStep: boolean;
}

export interface ProductsTypes {
  name: string;
  img: string;
  id: number;
  itemPrice: number;
  count: number;
  price: number;
}

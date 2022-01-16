import { FC } from 'react';
import {
  Stack,
  Stepper,
  Step,
  StepLabel,
  StepIconProps,
  Typography,
} from '@mui/material';
import { steps } from '../shared';
import { Connector, StepContainer } from './CheckoutSteps.style';
function StepText(props: StepIconProps) {
  const { active, completed, className } = props;

  const text: { [index: string]: React.ReactElement } = {
    1: <Typography>1.Karta</Typography>,
    2: <Typography>2.Szczegóły</Typography>,
    3: <Typography>3.Płatność</Typography>,
    4: <Typography>4.Podsumowanie</Typography>,
  };

  return (
    <StepContainer ownerState={{ completed, active }} className={className}>
      {text[String(props.icon)]}
    </StepContainer>
  );
}

interface Props {
  setActiveStep: (index: number) => void;
  activeStep: number;
}

const CheckoutSteps: FC<Props> = ({ setActiveStep, activeStep }) => {
  return (
    <Stack sx={{ width: '80%' }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
      >
        {Object.values(steps).map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepText} />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default CheckoutSteps;

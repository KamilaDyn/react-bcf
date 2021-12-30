import { FC } from 'react';
import {
  Stack,
  Stepper,
  Step,
  StepLabel,
  StepIconProps,
  Typography,
} from '@mui/material';
import { Connector, StepContainer } from './CheckoutSteps.style';
import { steps } from './CheckoutSteps.utils';

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

const CheckoutSteps: FC = () => {
  Object.values(steps).map((label) => console.log(label));
  return (
    <Stack sx={{ width: '80%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={0} connector={<Connector />}>
        {Object.values(steps).map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepText} />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default CheckoutSteps;

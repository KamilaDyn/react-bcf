import * as React from 'react';
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
    1: <Typography>Karta</Typography>,
    2: <Typography>Szczegóły</Typography>,
    3: <Typography>Płatność</Typography>,
    4: <Typography>Podsumowanie</Typography>,
  };

  return (
    <StepContainer ownerState={{ completed, active }} className={className}>
      {text[String(props.icon)]}
    </StepContainer>
  );
}

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: '80%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={0} connector={<Connector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepText} />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

import { FC } from 'react';
import { Box, Card, Typography, Divider } from '@mui/material';
import { StyledCard } from './Sidebar.style';
import { AdditionalInfoForm } from '../AdditionalInfoForm';

const Sidebar: FC = () => {
  return (
    <StyledCard>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Total:</Typography>
        <Typography variant="h3" color="secondary">
          7000
        </Typography>
      </Box>
      <Divider />
      <AdditionalInfoForm />
    </StyledCard>
  );
};

export default Sidebar;

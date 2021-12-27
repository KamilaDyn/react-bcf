import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { StyledCard } from '../../atoms';

const Sidebar: FC = () => {
  return (
    <StyledCard>
      <Box>
        <Typography>Subtotal:</Typography>
        <Typography variant="h6">cena</Typography>
      </Box>
    </StyledCard>
  );
};

export default Sidebar;

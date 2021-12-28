import { styled, Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: theme.spacing(2, 0),
}));

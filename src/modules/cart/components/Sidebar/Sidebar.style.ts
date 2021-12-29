import { styled, Card } from '@mui/material';
import { theme } from 'theme';

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(6),
}));

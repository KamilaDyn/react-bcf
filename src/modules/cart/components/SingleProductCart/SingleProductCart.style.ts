import { Card, styled, IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  right: 20,
  top: 10,
});

export const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  position: 'relative',
}));

import { Button, Card, styled } from '@mui/material';

type buttonBack = {
  back?: boolean;
};

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(10, 0),
}));

export const StyledButton = styled(Button)<buttonBack>(({ theme, back }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: '100%',
  margin: theme.spacing(6, 0),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
  ...(back && {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
  }),
}));
